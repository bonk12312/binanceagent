import React from 'react';
import { Twitter } from 'lucide-react';
import MainLanding from './components/MainLanding';
import Hero from './components/Hero';
import AgentDescription from './components/AgentDescription';
import ActivityLog from './components/ActivityLog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import TerminalInterface from './components/TerminalInterface';

function App() {
  // Navigation state: 'landing', 'terminal', 'content'
  const [currentPage, setCurrentPage] = React.useState<'landing' | 'terminal' | 'content'>('landing');

  // Landing Page
  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen text-white overflow-x-hidden" style={{ background: '#000000' }}>
        <BackgroundAnimation />
        
        {/* Persistent Twitter Logo */}
        <div className="fixed top-6 right-6 z-50">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 text-xl font-mono">(</span>
            <a 
              href="https://x.com/binanceagentbnb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link text-gray-400 hover:text-yellow-400 transition-colors duration-300 bg-black bg-opacity-50 backdrop-blur-sm p-3 rounded-full border border-gray-700 hover:border-yellow-400"
              aria-label="Follow Binance Agent on Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <span className="text-yellow-400 text-xl font-mono">)</span>
          </div>
        </div>
        
        <div className="relative z-10">
          <MainLanding onNavigate={setCurrentPage} />
        </div>
      </div>
    );
  }

  // Content Pages
  if (currentPage === 'content') {
    return (
      <div className="min-h-screen text-white overflow-x-hidden" style={{ background: '#000000' }}>
        <BackgroundAnimation />
        
        {/* Back to Terminal Button */}
        <div className="fixed top-6 left-6 z-50">
          <button
            onClick={() => setCurrentPage('landing')}
            className="interactive-button bg-yellow-400 text-black px-6 py-3 rounded-lg font-mono font-bold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            &lt; BACK TO HOME
          </button>
        </div>
        
        {/* Persistent Twitter Logo */}
        <div className="fixed top-6 right-6 z-50">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 text-xl font-mono">(</span>
            <a 
              href="https://x.com/binanceagentbnb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link text-gray-400 hover:text-yellow-400 transition-colors duration-300 bg-black bg-opacity-50 backdrop-blur-sm p-3 rounded-full border border-gray-700 hover:border-yellow-400"
              aria-label="Follow Binance Agent on Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <span className="text-yellow-400 text-xl font-mono">)</span>
          </div>
        </div>
        
        <div className="relative z-10">
          <Hero />
          <AgentDescription />
          <ActivityLog />
          <FAQ />
          <Footer />
        </div>
      </div>
    );
  }

  // Terminal Interface (Main Page)
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: '#000000' }}>
      <BackgroundAnimation />
      
      {/* View Content Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setCurrentPage('landing')}
          className="interactive-button border-2 border-yellow-400 text-yellow-400 bg-black bg-opacity-80 backdrop-blur-sm px-6 py-3 rounded-lg font-mono font-bold hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300 shadow-lg"
        >
          &lt; BACK TO HOME
        </button>
      </div>
      
      {/* Persistent Twitter Logo */}
      <div className="fixed top-6 right-6 z-50">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 text-xl font-mono">(</span>
          <a 
            href="https://x.com/binanceagentbnb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link text-gray-400 hover:text-yellow-400 transition-colors duration-300 bg-black bg-opacity-50 backdrop-blur-sm p-3 rounded-full border border-gray-700 hover:border-yellow-400"
            aria-label="Follow Binance Agent on Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <span className="text-yellow-400 text-xl font-mono">)</span>
        </div>
      </div>
      
      <div className="relative z-10">
        <TerminalInterface />
      </div>
    </div>
  );
}

export default App;