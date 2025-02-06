import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

interface SlideContent {
  title: string;
  subtitle: string;
  media: string;
  type: 'image' | 'video';
}

const slideContents: SlideContent[] = [
  {
    title: 'Must-Have Winter Outfits',
    subtitle:
      'Presents a carefully curated collection of essential clothing pieces to elevate your winter wardrobe.',
    media: '/images/winter-fashion.jpg',
    type: 'image',
  },
  {
    title: 'Summer Fashion Picks',
    subtitle:
      'Discover our latest summer collection for your perfect seasonal wardrobe.',
    media: '/videos/summer-fashion.mp4',
    type: 'video',
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => (prev + 1) % slideContents.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Media */}
      {slideContents.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'video' ? (
            <video
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover"
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
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-20">
        <h1 className="text-6xl md:text-8xl text-white font-light mb-6">
          {slideContents[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-16">
          {slideContents[currentSlide].subtitle}
        </p>

        {/* Bottom Navigation */}
        <div className="absolute bottom-32 left-0 right-0 px-4 md:px-20">
          <div className="flex flex-col gap-8">
            {slideContents.map((slide, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3
                  className={`text-xl cursor-pointer transition-all duration-300 ${
                    currentSlide === index
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  {slide.title}
                </h3>
                <ProgressBar
                  isActive={currentSlide === index}
                  onClick={() => setCurrentSlide(index)}
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
