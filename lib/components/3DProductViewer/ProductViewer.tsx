'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ProductViewerProps {
  productType: 'tshirt' | 'hoodie' | 'sweatshirt';
  color: string;
  logo?: string;
  customText?: string;
  textColor?: string;
}

const ProductViewer: React.FC<ProductViewerProps> = ({
  productType,
  color,
  logo,
  customText,
  textColor,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = sceneRef.current;
    scene.background = new THREE.Color(0xffffff);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 3);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 1.5;
    controls.minPolarAngle = Math.PI / 3;
    controls.enableZoom = true;
    controls.maxDistance = 5;
    controls.minDistance = 1.5;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 2);
    scene.add(directionalLight);

    // Load initial model
    const loader = new GLTFLoader();
    loader.load(`/models/${productType}Model.glb`, gltf => {
      const model = gltf.scene;
      model.scale.setScalar(0.06);
      model.position.set(0, -0.3, 0);
      model.rotation.set(0, Math.PI, 0);

      // Apply material
      model.traverse(child => {
        if (child instanceof THREE.Mesh) {
          console.log(`Mesh name: ${child.name}`);
          const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            metalness: 0.2,
            roughness: 0.6,
            side: THREE.DoubleSide,
          });
          child.material = material;
          material.needsUpdate = true;
        }
      });

      modelRef.current = model;
      scene.add(model);

      // Center camera on model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      const fov = camera.fov * (Math.PI / 180);
      const cameraDistance =
        Math.max(size.x / camera.aspect, size.y) / (2 * Math.tan(fov / 2));
      camera.position.set(0, center.y - 0.15, cameraDistance * 1.2);
      camera.lookAt(center);
      controls.target.set(0, center.y - 0.15, 0);
      controls.update();
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []); // Empty dependency array for initial setup

  // Update model color
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse(child => {
        if (child instanceof THREE.Mesh) {
          (child.material as THREE.MeshStandardMaterial).color.set(color);
          (child.material as THREE.MeshStandardMaterial).needsUpdate = true;
        }
      });
    }
  }, [color]);

  // Update model type
  useEffect(() => {
    if (!sceneRef.current || !modelRef.current) return;

    const loader = new GLTFLoader();
    loader.load(`/models/${productType}Model.glb`, gltf => {
      sceneRef.current.remove(modelRef.current!);
      const newModel = gltf.scene;
      newModel.scale.setScalar(0.06);
      newModel.position.set(0, -0.3, 0);
      newModel.rotation.set(0, Math.PI, 0);

      newModel.traverse(child => {
        if (child instanceof THREE.Mesh) {
          const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            metalness: 0.2,
            roughness: 0.6,
            side: THREE.DoubleSide,
          });
          child.material = material;
          material.needsUpdate = true;
        }
      });

      modelRef.current = newModel;
      sceneRef.current.add(newModel);
    });
  }, [productType]);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg bg-white"
    />
  );
};

export default ProductViewer;
