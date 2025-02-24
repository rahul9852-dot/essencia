'use client';
import React, { useEffect, useState, useRef } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import Image from 'next/image';

interface SlideContent {
  title: string;
  subtitle: string;
  media: string;
  type: 'image' | 'video';
  duration?: number; // in milliseconds
}

const slideContents: SlideContent[] = [
  {
    title: 'Essancia Fashion Picks',
    subtitle:
      'Discover our latest summer collection for your perfect seasonal.',
    media: '/videos/summer-fashion.mp4',
    type: 'video',
  },
  {
    title: 'Must-Have Winter Outfits',
    subtitle: 'Curated essentials to elevate your winter wardrobe beautifully.',
    media: '/images/bannerImage.webp',
    type: 'image',
    duration: 3000, // 3 seconds for images
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mediaContainerRef = useRef<HTMLDivElement>(null);

  const updateProgress = (duration: number): void => {
    startTimeRef.current = Date.now();

    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);

      if (newProgress >= 100) {
        startTimeRef.current = Date.now();
        setProgress(0);
        setCurrentSlide(prev => (prev + 1) % slideContents.length);
      }
    }, 16);
  };

  useEffect(() => {
    const slide = slideContents[currentSlide];
    setProgress(0); // Reset progress when slide changes
    startTimeRef.current = Date.now(); // Reset start time

    if (slide.type === 'video' && videoRef.current) {
      const duration = videoRef.current.duration * 1000;
      updateProgress(duration);
    } else {
      updateProgress(slide.duration || 5000);
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [currentSlide]);

  useEffect(() => {
    const updateDimensions = () => {
      if (mediaContainerRef.current) {
        const { width, height } =
          mediaContainerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Initial update
    updateDimensions();

    // Update on resize
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleSlideChange = (index: number) => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    setProgress(0);
    startTimeRef.current = Date.now();
    setCurrentSlide(index);
  };

  return (
    <div
      ref={mediaContainerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Media Slides */}
      {slideContents.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'video' ? (
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className={`
                  absolute w-full h-full object-cover
                  ${dimensions.width > dimensions.height ? 'object-contain md:object-cover' : 'object-cover'}
                `}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100vh',
                }}
                onLoadedMetadata={() => {
                  if (index === currentSlide && videoRef.current) {
                    updateProgress(videoRef.current.duration * 1000);
                  }
                }}
              >
                <source src={slide.media} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={slide.media}
                alt={slide.title}
                fill
                priority
                sizes="100vw"
                className={`
                  absolute w-full h-full
                  ${dimensions.width > dimensions.height ? 'object-contain md:object-cover' : 'object-cover'}
                `}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100vh',
                }}
              />
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        </div>
      ))}

      {/* Content and Navigation */}
      <div
        className="relative z-10 h-full flex flex-col justify-between 
        px-4 sm:px-8 md:px-16 lg:px-20"
      >
        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div
            className="pt-20 sm:pt-24 md:pt-32 lg:pt-48 
            w-full max-w-[90%] sm:max-w-[80%] md:max-w-2xl"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl 
              text-white font-light mb-4 sm:mb-6 md:mb-8 
              leading-tight sm:leading-tight md:leading-tight
              opacity-0 animate-fadeIn"
            >
              {slideContents[currentSlide].title}
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-white/90 
              max-w-xl opacity-0 animate-fadeInDelay"
            >
              {slideContents[currentSlide].subtitle}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="pb-8 sm:pb-16 md:pb-24 lg:pb-32 w-full">
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 
            max-w-4xl mx-auto sm:mx-0"
          >
            {slideContents.map((slide, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 sm:gap-4 group cursor-pointer"
                onClick={() => handleSlideChange(index)}
              >
                <h3
                  className={`
                  text-base sm:text-lg  md:text-xl transition-all duration-300
                  sm:text-left
                  ${
                    currentSlide === index
                      ? 'text-white'
                      : 'text-white/60 group-hover:text-white'
                  }`}
                >
                  {slide.title}
                </h3>
                <ProgressBar
                  isActive={currentSlide === index}
                  progress={currentSlide === index ? progress : 0}
                  onClick={() => handleSlideChange(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
