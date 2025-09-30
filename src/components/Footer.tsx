import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <div>
              <h3 className="text-2xl font-black text-white">BINANCE AGENT</h3>
              <p className="text-gray-400">AI Trading Assistant - The AI that never loses</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Binance Agent. All rights reserved. 
            <span className="text-yellow-400 ml-2">Status: TRADING READY</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;