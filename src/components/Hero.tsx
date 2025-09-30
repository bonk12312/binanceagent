import React, { useState, useEffect } from 'react';
import MarketTimer from './MarketTimer';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCommand, setActiveCommand] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleActivityLog = () => {
    setActiveCommand(activeCommand === 'activity' ? null : 'activity');
  };

  const handleManual = () => {
    setActiveCommand(activeCommand === 'manual' ? null : 'manual');
  };

  const handleClear = () => {
    setActiveCommand(null);
  };

  const getActivityLogContent = () => {
    const logs = [
      { time: '2025-01-27 18:23:45', task: 'BNB price analysis', accuracy: '97.3%', status: 'BUY SIGNAL' },
      { time: '2025-01-27 18:24:12', task: 'Market sentiment processing', accuracy: '94.8%', status: 'BULLISH' },
      { time: '2025-01-27 18:24:33', task: 'Portfolio optimization cycle #4729', accuracy: '99.1%', status: 'REBALANCED' },
      { time: '2025-01-27 18:25:01', task: 'Technical indicator analysis', accuracy: '92.7%', status: 'OVERSOLD' },
      { time: '2025-01-27 18:25:18', task: 'Risk assessment model update', accuracy: '98.5%', status: 'LOW RISK' },
      { time: '2025-01-27 18:25:44', task: 'Binance API synchronization', accuracy: '100.0%', status: 'CONNECTED' },
      { time: '2025-01-27 18:26:02', task: 'Staking opportunity scan', accuracy: '96.2%', status: 'FOUND 3' },
      { time: '2025-01-27 18:26:29', task: 'Volume pattern analysis', accuracy: '95.4%', status: 'INCREASING' }
    ];

    return logs.map((log, index) => (
      <div key={index} className="text-white text-sm">
        <span className="text-green-400">[{log.time}]</span> {log.task} - 
        <span className="text-yellow-400"> Accuracy: {log.accuracy}</span> - 
        <span className="text-green-400"> {log.status}</span>
      </div>
    ));
  };

  const getManualContent = () => {
    return (
      <div className="text-white text-sm space-y-2">
        <div className="text-yellow-400 font-bold">BINANCE-AGENT(1)            User Commands            BINANCE-AGENT(1)</div>
        <div className="border-t border-gray-600 my-2"></div>
        <div><span className="text-green-400">NAME</span></div>
        <div className="ml-4">binance-agent - Advanced AI trading assistant for Binance assets</div>
        <div className="mt-2"><span className="text-green-400">SYNOPSIS</span></div>
        <div className="ml-4">binance-agent [OPTIONS] --mode=trading</div>
        <div className="mt-2"><span className="text-green-400">DESCRIPTION</span></div>
        <div className="ml-4">Binance Agent is an AI trading assistant for BNB and Binance assets.</div>
        <div className="ml-4">Provides real-time trading signals and portfolio optimization.</div>
        <div className="mt-2"><span className="text-green-400">OPTIONS</span></div>
        <div className="ml-4"><span className="text-yellow-400">--market</span>     Display current market analysis</div>
        <div className="ml-4"><span className="text-yellow-400">--signals</span>    Show trading signals</div>
        <div className="ml-4"><span className="text-yellow-400">--portfolio</span>  Portfolio optimization suggestions</div>
        <div className="mt-2"><span className="text-green-400">FEATURES</span></div>
        <div className="ml-4 text-green-400">Real-time BNB and Binance asset analysis</div>
        <div className="ml-4 text-green-400">AI-powered trading recommendations with 94.7% accuracy</div>
      </div>
    );
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="terminal-window bg-black border border-yellow-400 rounded-lg p-6 mb-6 text-left max-w-4xl mx-auto">
            <div className="flex items-center mb-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-gray-400 text-sm font-mono">agent@binance:~$</span>
            </div>
            <div className="font-mono text-sm space-y-4">
              {/* System Status */}
              <div className="text-green-400">$ systemctl status binance-agent</div>
              <div className="text-white">● binance-agent.service - Binance AI Trading System</div>
              <div className="text-white">   Loaded: loaded (/etc/systemd/system/binance-agent.service; enabled)</div>
              <div className="text-white">   Active: <span className="text-green-400">active (running)</span> since startup</div>
              <div className="text-yellow-400">   Status: Monitoring markets 24/7</div>
              
              {/* Separator */}
              <div className="border-t border-gray-700 my-4"></div>
              
              {/* Initialization */}
              <div className="text-green-400">$ ./initialize_binance_agent.sh</div>
              <div className="text-white">Loading trading models...</div>
              <div className="text-white">Connecting to Binance API...</div>
              <div className="text-yellow-400">INFO: Real-time market analysis enabled</div>
              <div className="text-white">Status: <span className="text-green-400">TRADING READY</span></div>
              
              {/* Separator */}
              <div className="border-t border-gray-700 my-4"></div>
              
              {/* Banner */}
              <div className="text-green-400">$ cat /etc/binance-agent/banner.txt</div>
              <div className="text-center py-4">
                <div className="text-2xl md:text-4xl font-black mb-2 tracking-tight font-mono">
                  <span className="text-white">&gt; BINANCE</span>
                  <br />
                  <span className="text-yellow-400 glow-text">&gt; AGENT</span>
                </div>
                <div className="text-lg md:text-xl font-mono mb-2 text-yellow-400 font-bold">
                  AI TRADING ASSISTANT
                </div>
                <div className="text-sm md:text-base font-mono mb-2 text-gray-300">
                  // The AI that <span className="text-yellow-400 font-bold">never loses</span>
                </div>
                <div className="text-xs md:text-sm font-mono text-gray-400">
                  /* Advanced trading insights powered by AI analysis */
                </div>
              </div>

              {/* Command Output Section */}
              {activeCommand && (
                <>
                  <div className="border-t border-gray-700 my-4"></div>
                  {activeCommand === 'activity' && (
                    <>
                      <div className="text-green-400">$ cat trading.log</div>
                      <div className="bg-gray-900 bg-opacity-50 p-4 rounded border-l-4 border-yellow-400 max-h-64 overflow-y-auto custom-scrollbar">
                        <div className="space-y-1">
                          {getActivityLogContent()}
                        </div>
                      </div>
                    </>
                  )}
                  {activeCommand === 'manual' && (
                    <>
                      <div className="text-green-400">$ man binance-agent</div>
                      <div className="bg-gray-900 bg-opacity-50 p-4 rounded border-l-4 border-yellow-400 max-h-64 overflow-y-auto custom-scrollbar">
                        {getManualContent()}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <MarketTimer />
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-6 justify-center mt-12 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button 
            onClick={handleActivityLog}
            className={`interactive-button px-6 py-3 text-sm font-mono font-bold hover:scale-105 transition-all duration-300 rounded-lg ${
              activeCommand === 'activity' 
                ? 'bg-yellow-400 text-black' 
                : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
            }`}
          >
            $ cat trading.log
          </button>
          <button 
            onClick={handleManual}
            className={`interactive-button px-6 py-3 text-sm font-mono font-bold hover:scale-105 transition-all duration-300 rounded-lg ${
              activeCommand === 'manual' 
                ? 'bg-yellow-400 text-black' 
                : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
            }`}
          >
            $ man binance-agent
          </button>
          {activeCommand && (
            <button 
              onClick={handleClear}
              className="interactive-button border-2 border-red-400 text-red-400 px-6 py-3 text-sm font-mono font-bold hover:bg-red-400 hover:text-black hover:scale-105 transition-all duration-300 rounded-lg"
            >
              $ clear
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;