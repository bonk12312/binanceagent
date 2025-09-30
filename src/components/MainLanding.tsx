import React from 'react';
import { Terminal, FileText } from 'lucide-react';

interface MainLandingProps {
  onNavigate: (page: 'terminal' | 'content') => void;
}

const MainLanding: React.FC<MainLandingProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <div className="mb-12 font-mono">
          <div className="text-4xl md:text-6xl font-black mb-6 tracking-tight font-mono">
            <span className="text-white">BINANCE</span>
            <br />
            <span className="text-yellow-400 glow-text">AGENT</span>
          </div>
          <div className="text-2xl md:text-3xl font-mono mb-4 text-yellow-400 font-bold">
            AI TRADING ASSISTANT
          </div>
          <div className="text-lg md:text-xl font-mono mb-8 text-gray-300">
            Advanced AI-powered trading insights for BNB and Binance assets
          </div>
        </div>

        {/* Project Information */}
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12">
          <p className="text-gray-300 text-lg mb-4 font-mono">
            An intelligent AI trading assistant designed specifically for the <span className="text-yellow-400 font-bold">BNB Chain ecosystem</span>. 
            Provides expert analysis on BNB and Binance assets with a wise, precise approach to trading decisions.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 font-mono">
            <span>Built for BNB Chain</span>
            <span>•</span>
            <span>94.7% Accuracy Rate</span>
            <span>•</span>
            <span>24/7 Market Monitoring</span>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <button
            onClick={() => onNavigate('terminal')}
            className="interactive-button bg-yellow-400 text-black px-8 py-4 rounded-2xl font-mono font-bold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-3"
          >
            <Terminal className="w-6 h-6" />
            <span>ENTER TERMINAL</span>
          </button>
          
          <button
            onClick={() => onNavigate('content')}
            className="interactive-button border-2 border-yellow-400 text-yellow-400 bg-black bg-opacity-80 backdrop-blur-sm px-8 py-4 rounded-2xl font-mono font-bold hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-3"
          >
            <FileText className="w-6 h-6" />
            <span>VIEW PROJECT</span>
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center font-mono">
          <p className="text-gray-500 text-sm font-mono">
            Binance Agent • AI Trading Assistant • BNB Chain Project
          </p>
          <p className="text-gray-600 text-xs font-mono mt-2">
            The AI that never loses - wise, precise, sometimes snarky
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainLanding;