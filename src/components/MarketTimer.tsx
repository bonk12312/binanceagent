import React, { useState, useEffect } from 'react';

const MarketTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextMarketClose = new Date(now);
      // Set to next market analysis cycle (every 4 hours)
      const currentHour = now.getHours();
      const nextCycle = Math.ceil((currentHour + 1) / 4) * 4;
      nextMarketClose.setHours(nextCycle, 0, 0, 0);
      
      if (nextCycle >= 24) {
        nextMarketClose.setDate(nextMarketClose.getDate() + 1);
        nextMarketClose.setHours(0, 0, 0, 0);
      }
      
      const targetTime = nextMarketClose.getTime();
      const currentTime = now.getTime();
      
      const difference = targetTime - currentTime;
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        return { hours, minutes, seconds };
      }
      
      return { hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="countdown-container bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg p-6 border border-yellow-400 border-opacity-50 font-mono">
      <h3 className="text-lg font-bold mb-4 text-yellow-400">$ ./next_analysis_cycle.sh</h3>
      <div className="flex justify-center space-x-6">
        <div className="countdown-item">
          <div className="countdown-number text-3xl font-black text-white mb-1">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="countdown-label text-yellow-400 font-semibold text-xs">HRS</div>
        </div>
        <div className="countdown-separator text-3xl font-black text-yellow-400">:</div>
        <div className="countdown-item">
          <div className="countdown-number text-3xl font-black text-white mb-1">
            {formatTime(timeLeft.minutes)}
          </div>
          <div className="countdown-label text-yellow-400 font-semibold text-xs">MIN</div>
        </div>
        <div className="countdown-separator text-3xl font-black text-yellow-400">:</div>
        <div className="countdown-item">
          <div className="countdown-number text-3xl font-black text-white mb-1">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="countdown-label text-yellow-400 font-semibold text-xs">SEC</div>
        </div>
      </div>
      <div className="mt-3 text-xs text-gray-400 text-center">
        Next market analysis: {timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? 'ANALYZING...' : 'SCHEDULED'}
      </div>
    </div>
  );
};

export default MarketTimer;