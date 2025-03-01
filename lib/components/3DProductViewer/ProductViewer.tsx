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
  console.log('logo====>', logo);

  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  // Function to load and setup model
  const loadModel = (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    controls: OrbitControls
  ) => {
    const loader = new GLTFLoader();
    loader.load(`/models/${productType}Model.glb`, gltf => {
      // Remove existing model if any
      if (modelRef.current) {
        scene.remove(modelRef.current);
      }

      const model = gltf.scene;

      // Set scale based on product type
      let scale = 0.06;
      let yPosition = -0.3;

      switch (productType) {
        case 'hoodie':
          scale = 0.07;
          yPosition = -0.4;
          break;
        case 'sweatshirt':
          scale = 0.065;
          yPosition = -0.35;
          break;
        default: // tshirt
          scale = 0.06;
          yPosition = -0.3;
      }

      model.scale.setScalar(scale);
      model.position.set(0, yPosition, 0);
      model.rotation.set(0, Math.PI, 0);

      // Apply material
      model.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            metalness: 0.1,
            roughness: 0.8,
            side: THREE.DoubleSide,
          });
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

      // Adjust camera position based on product type
      const zOffset = productType === 'hoodie' ? 1.3 : 1.2;
      camera.position.set(0, center.y - 0.15, cameraDistance * zOffset);
      camera.lookAt(center);
      controls.target.set(0, center.y - 0.15, 0);
      controls.update();
    });
  };

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
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            metalness: 0.1,
            roughness: 0.8,
          });
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
          const material = child.material as THREE.MeshStandardMaterial;
          material.color.set(color);
          material.needsUpdate = true;
        }
      });
    }
  }, [color]);

  // Update logo texture
  useEffect(() => {
    if (!modelRef.current) {
      console.log('No model available');
      return;
    }

    // If no logo, reset to base material
    if (!logo) {
      modelRef.current.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            metalness: 0.1,
            roughness: 0.8,
            side: THREE.DoubleSide,
          });
          child.material.needsUpdate = true;
        }
      });
      return;
    }

    console.log('Starting texture load for logo:', logo);

    // Create a canvas for combined texture
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 2048;
    canvas.height = 2048;

    // Load the logo image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = logo;

    img.onload = () => {
      console.log('Logo image loaded');

      // Fill background with product color
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate logo size and position
      const logoSize = canvas.width * 0.3; // 30% of canvas size
      const x = (canvas.width - logoSize) * 0.5;
      const y = canvas.height * 0.3; // Position at 30% from top

      // Draw logo
      ctx.drawImage(img, x, y, logoSize, logoSize);

      // Add text if present
      if (customText) {
        ctx.font = 'bold 150px Arial';
        ctx.fillStyle = textColor || '#000000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(customText, canvas.width / 2, canvas.height * 0.7);
      }

      // Create and configure texture
      const texture = new THREE.CanvasTexture(canvas);
      texture.flipY = false;
      texture.needsUpdate = true;

      // Apply material to model
      modelRef.current?.traverse(child => {
        if (child instanceof THREE.Mesh) {
          // Create material with proper blending
          const material = new THREE.MeshStandardMaterial({
            map: texture,
            color: new THREE.Color('#ffffff'), // Use white to show true texture colors
            metalness: 0.1,
            roughness: 0.8,
            side: THREE.DoubleSide,
          });

          // Apply material
          child.material = material;
          material.needsUpdate = true;

          // Adjust UV mapping for better logo placement
          if (child.geometry.attributes.uv) {
            const uvs = child.geometry.attributes.uv;
            for (let i = 0; i < uvs.count; i++) {
              const u = uvs.getX(i);
              const v = uvs.getY(i);
              // Scale and center UVs
              uvs.setXY(
                i,
                u * 0.8 + 0.1, // Scale to 80% and offset by 10%
                v * 0.8 + 0.1
              );
            }
            uvs.needsUpdate = true;
          }
        }
      });
    };

    img.onerror = error => {
      console.error('Error loading logo image:', error);
    };

    return () => {
      // Cleanup
      canvas.remove();
      if (modelRef.current) {
        modelRef.current.traverse(child => {
          if (child instanceof THREE.Mesh && child.material) {
            if (child.material.map) {
              child.material.map.dispose();
            }
            child.material.dispose();
          }
        });
      }
    };
  }, [logo, color, customText, textColor]);

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
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            metalness: 0.1,
            roughness: 0.8,
          });
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
