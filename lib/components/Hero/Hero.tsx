import React, { useEffect, useState, useRef } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

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
    duration: 3000, // 5 seconds for images
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressInterval = useRef<NodeJS.Timeout>();
  const startTimeRef = useRef<number>(Date.now());

  const updateProgress = (duration: number) => {
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

  const handleSlideChange = (index: number) => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    setProgress(0);
    startTimeRef.current = Date.now();
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slideContents.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'video' ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover"
              onLoadedMetadata={() => {
                if (index === currentSlide && videoRef.current) {
                  updateProgress(videoRef.current.duration * 1000);
                }
              }}
            >
              <source src={slide.media} type="video/mp4" />
            </video>
          ) : (
            <img
              src={slide.media}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content and Navigation */}
      <div className="relative z-10 h-full flex flex-col justify-center px-16 md:px-20">
        {/* <div className="pt-48 md:pt-48">
          <h1 className="md:text-8xl text-wrap max-w-2xl text-white font-light mb-8">
            {slideContents[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
            {slideContents[currentSlide].subtitle}
          </p>
        </div> */}

        <div className="absolute bottom-32 left-0 right-0 px-4 md:px-20">
          <div className="flex gap-8">
            {slideContents.map((slide, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3
                  className={`text-xl cursor-pointer transition-all duration-300 ${
                    currentSlide === index
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                  onClick={() => handleSlideChange(index)}
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
