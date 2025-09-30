import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, DollarSign } from 'lucide-react';

interface LogEntry {
  id: number;
  timestamp: string;
  content: string;
  type: 'analysis' | 'process' | 'signal';
}

const ActivityLog: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const sampleLogs: LogEntry[] = [
    { id: 1, timestamp: '14:23:45', content: 'Market analysis initiated. Scanning BNB price movements and volume patterns.', type: 'process' },
    { id: 2, timestamp: '14:23:47', content: 'ANALYSIS: BNB showing strong support at $620. RSI indicates oversold conditions...', type: 'analysis' },
    { id: 3, timestamp: '14:23:49', content: 'SIGNAL: BUY opportunity detected → Entry: $622, Target: $680, Stop: $610', type: 'signal' },
    { id: 4, timestamp: '14:23:52', content: 'ANALYSIS: Humans panic-selling again. Classic emotional trading mistake detected...', type: 'analysis' },
    { id: 5, timestamp: '14:23:55', content: 'SIGNAL: Portfolio rebalancing suggested → Increase BNB allocation to 35%', type: 'signal' },
    { id: 6, timestamp: '14:24:01', content: 'ANALYSIS: Staking rewards for CAKE looking juicy at 12.4% APY...', type: 'analysis' },
    { id: 7, timestamp: '14:24:04', content: 'SIGNAL: Staking opportunity → Lock 1000 CAKE for 90 days, projected return: 124 CAKE', type: 'signal' },
    { id: 8, timestamp: '14:24:15', content: 'Risk assessment complete. Current portfolio risk level: MODERATE', type: 'process' },
  ];

  useEffect(() => {
    setLogs(sampleLogs);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('activity-section');
    if (element) observer.observe(element);

    // Simulate new logs
    const interval = setInterval(() => {
      const tradingProcesses = [
        { type: 'analysis', content: 'ANALYSIS: Detecting whale movements in BNB. Large accumulation pattern forming...' },
        { type: 'signal', content: 'SIGNAL: DCA strategy recommended → Buy $100 BNB weekly for next 8 weeks' },
        { type: 'analysis', content: 'ANALYSIS: Another human asking "wen moon?" - patience is a virtue in trading...' },
        { type: 'signal', content: 'SIGNAL: HODL alert → Current market conditions favor long-term positions' },
        { type: 'analysis', content: 'ANALYSIS: Fear & Greed index at 23. Perfect time for smart money to accumulate...' },
        { type: 'signal', content: 'SIGNAL: Yield farming opportunity → USDT-BNB LP yielding 18.7% on PancakeSwap' }
      ];
      
      const randomProcess = tradingProcesses[Math.floor(Math.random() * tradingProcesses.length)];
      const newLog: LogEntry = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString(),
        content: randomProcess.content,
        type: randomProcess.type as 'analysis' | 'signal'
      };
      
      setLogs(prev => [newLog, ...prev.slice(0, 9)]);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'analysis': return TrendingUp;
      case 'signal': return DollarSign;
      case 'process': return Activity;
      default: return Activity;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'analysis': return 'text-blue-400';
      case 'signal': return 'text-yellow-400';
      case 'process': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="activity-section" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            TRADING <span className="text-yellow-400">LOG</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time feed of Binance Agent's market analysis and trading signals
          </p>
        </div>

        <div className={`activity-log-container bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
            {logs.map((log, index) => {
              const IconComponent = getIcon(log.type);
              return (
                <div 
                  key={log.id}
                  className={`log-entry flex items-start space-x-4 p-4 rounded-lg bg-black bg-opacity-30 border-l-4 border-yellow-400 transform transition-all duration-500 ${
                    index === 0 ? 'animate-pulse' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className={`w-5 h-5 mt-1 flex-shrink-0 ${getTypeColor(log.type)}`} />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs text-gray-400 font-mono">{log.timestamp}</span>
                      <span className={`text-xs uppercase font-bold ${getTypeColor(log.type)}`}>
                        {log.type}
                      </span>
                    </div>
                    <p className="text-white">{log.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityLog;