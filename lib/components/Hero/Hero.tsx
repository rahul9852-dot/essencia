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
    title: 'Essancia Fashion Picks',
    subtitle:
      'Discover our latest summer collection for your perfect seasonal wardrobe.',
    media: '/videos/summer-fashion.mp4',

    type: 'video',
  },
  {
    title: 'Must-Have Winter Outfits',
    subtitle: 'Curated essentials to elevate your winter wardrobe beautifully.',
    media: '/images/bannerImage.webp',
    type: 'image',
  },
];
const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [, setIsTransitioning] = React.useState(false);
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
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}
      <div className="relative z-10 h-full flex flex-col justify-center px-16 md:px-20">
        <div className="pt-48 md:pt-48">
          <h1 className="md:text-8xl text-wrap max-w-2xl text-white font-light mb-8">
            {slideContents[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 ">
            {slideContents[currentSlide].subtitle}
          </p>
        </div>
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
