import React from 'react';

interface ProgressBarProps {
  isActive: boolean;
  onClick: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isActive, onClick }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 0.4;
        });
      }, 10);
    } else {
      setProgress(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  return (
    <div className="w-24 cursor-pointer group" onClick={onClick}>
      <div className="h-[2px] bg-white/20 relative">
        <div
          className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
