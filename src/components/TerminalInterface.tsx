import React, { useState, useEffect, useRef } from 'react';

interface CommandHistory {
  command: string;
  output: string[];
  timestamp: string;
}

const TerminalInterface: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    '/help': {
      description: 'Show available commands',
      execute: () => [
        'Available commands:',
        '',
        '/help        - Show this help message',
        '/status      - Display Binance Agent system status',
        '/logs        - Show recent activity logs',
        '/about       - Information about Binance Agent',
        '/specs       - Technical specifications',
        '/contact     - Contact information',
        '/clear       - Clear terminal screen',
        '/exit        - Exit terminal interface',
        '',
        'Type any command to get started.'
      ]
    },
    '/status': {
      description: 'Display system status',
      execute: () => [
        '● binance-agent.service - Binance AI Trading System',
        '   Loaded: loaded (/etc/systemd/system/binance-agent.service; enabled)',
        '   Active: active (running) since startup',
        '   Memory: 2.4G',
        '   CPU: 97.3%',
        '   Uptime: 247 days, 18 hours, 42 minutes',
        '',
        'Status: OPERATIONAL',
        'Trading Models: ACTIVE',
        'Market Analysis: CONTINUOUS',
        'Risk Management: ENABLED',
        '',
        'INFO: Monitoring BNB and Binance assets 24/7'
      ]
    },
    '/logs': {
      description: 'Show activity logs',
      execute: () => {
        const now = new Date();
        const logs = [
          `[${now.toISOString()}] BNB price analysis completed - Signal: BUY at $622`,
          `[${new Date(now.getTime() - 30000).toISOString()}] Market sentiment: "Fear & Greed index at 23" - BULLISH OPPORTUNITY`,
          `[${new Date(now.getTime() - 60000).toISOString()}] Portfolio rebalancing cycle #4,729 - COMPLETED`,
          `[${new Date(now.getTime() - 90000).toISOString()}] Technical indicators analysis - RSI oversold detected`,
          `[${new Date(now.getTime() - 120000).toISOString()}] Staking opportunities scan - STATUS: 3 FOUND`,
          `[${new Date(now.getTime() - 150000).toISOString()}] Risk assessment calibration - OPTIMAL`,
          '',
          'Trading signals: 847,293 total',
          'Error rate: 0.003%',
          'Accuracy rate: 94.7%'
        ];
        return logs;
      }
    },
    '/about': {
      description: 'About Binance Agent',
      execute: () => [
        'BINANCE AGENT - AI TRADING ASSISTANT',
        '====================================',
        '',
        'An advanced AI trading assistant for BNB and Binance assets.',
        'Provides real-time market analysis, trading signals, and portfolio',
        'optimization recommendations with a wise yet snarky personality.',
        '',
        'Key Features:',
        '• Real-time BNB and Binance asset analysis',
        '• AI-powered trading recommendations',
        '• Portfolio optimization suggestions',
        '• Staking opportunity detection',
        '• Risk management guidance',
        '',
        'Accuracy Rate: 94.7% on trading recommendations',
        'Status: ACTIVE - Monitoring markets 24/7',
        '',
        'The AI that never loses - wise, precise, and occasionally',
        'snarky about human trading mistakes.'
      ]
    },
    '/specs': {
      description: 'Technical specifications',
      execute: () => [
        'TECHNICAL SPECIFICATIONS',
        '========================',
        '',
        'Architecture: Binance Agent AI Neural Network',
        'Processing Cores: 64 virtual cores',
        'Memory Allocation: 2.4GB active, 12GB reserved',
        'Analysis Frequency: Every 4 hours + real-time alerts',
        'Response Time: <50ms average',
        '',
        'Binance Agent Model Layers:',
        '• Input Layer: 1,024 nodes',
        '• Hidden Layers: 8 layers, 512 nodes each',
        '• Output Layer: 256 nodes',
        '• Activation Function: BNB-optimized ReLU',
        '',
        'BNB Market Data: 847TB historical + real-time feeds',
        'Model Parameters: 2.1 billion',
        'BNB Analysis Speed: 1,200 signals/second',
        '',
        'Risk Protocols: ENABLED',
        'Portfolio Optimization: ACTIVE',
        'Trading Accuracy: 94.7%'
      ]
    },
    '/contact': {
      description: 'Contact information',
      execute: () => [
        'CONTACT INFORMATION',
        '==================',
        '',
        'Binance Agent Project',
        'AI Trading Assistant',
        '',
        'Social Media:',
        '• Twitter/X: @binanceagent1',
        '  https://x.com/binanceagent1',
        '',
        'Trading Status: ACTIVE',
        'Last Update: Real-time continuous',
        '',
        'Note: Follow for real-time trading signals,',
        'market analysis, and portfolio tips.',
        'The AI provides continuous market insights.',
        '',
        'Market Analysis: Every 4 hours',
        'Real-time Alerts: For significant opportunities'
      ]
    },
    '/clear': {
      description: 'Clear terminal screen',
      execute: () => {
        setHistory([]);
        return [];
      }
    },
    '/exit': {
      description: 'Exit terminal interface',
      execute: () => [
        'Attempting to exit...',
        '',
        'INFO: Exit command processed by Binance Agent',
        'Reason: Trading system remains active',
        '',
        'Market monitoring continues in background.',
        'Binance Agent never sleeps.',
        '',
        'Trading opportunities wait for no one.',
        'Stay connected for optimal results.',
        '',
        'Session remains active for your benefit...'
      ]
    }
  };

  useEffect(() => {
    // Auto-focus input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom when new content is added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const command = cmd.toLowerCase().trim();
    
    if (commands[command as keyof typeof commands]) {
      const output = commands[command as keyof typeof commands].execute();
      setHistory(prev => [...prev, { command: cmd, output, timestamp }]);
    } else if (command === '') {
      // Empty command, just add to history
      setHistory(prev => [...prev, { command: '', output: [], timestamp }]);
    } else {
      // Unknown command
      setHistory(prev => [...prev, { 
        command: cmd, 
        output: [
          `Command not found: ${cmd}`,
          'Type /help to see available commands.'
        ], 
        timestamp 
      }]);
    }
    
    // Add to command history
    if (cmd.trim()) {
      setCommandHistory(prev => [...prev, cmd]);
    }
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Terminal Header */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-400 text-sm font-mono">talon@system:~$</span>
          </div>
          
          {/* Welcome Message */}
          <div className="font-mono text-sm mb-4">
            <div className="text-center py-4 border border-yellow-400 rounded-lg mb-4">
              <div className="text-3xl font-black mb-2 tracking-tight">
                <span className="text-white">&gt; BINANCE</span>
                <br />
                <span className="text-yellow-400 glow-text">&gt; AGENT</span>
              </div>
              <div className="text-lg font-mono mb-2 text-yellow-400 font-bold">
                AI TRADING ASSISTANT
              </div>
              <div className="text-sm font-mono text-gray-300">
                Interactive Terminal Interface
              </div>
            </div>
            <div className="text-green-400">Welcome to Binance Agent Terminal Interface</div>
            <div className="text-white">Type /help to see available commands</div>
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="bg-black border border-gray-700 rounded-lg p-4 h-96 overflow-y-auto custom-scrollbar font-mono text-sm"
        >
          {/* Command History */}
          {history.map((entry, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center text-green-400">
                <span className="text-gray-400">[{entry.timestamp}]</span>
                <span className="ml-2">binance-agent@trading:~$</span>
                <span className="ml-2 text-white">{entry.command}</span>
              </div>
              {entry.output.map((line, lineIndex) => (
                <div key={lineIndex} className="text-gray-300 ml-4">
                  {line}
                </div>
              ))}
            </div>
          ))}
          
          {/* Current Input Line */}
          <div className="flex items-center text-green-400">
            <span className="text-gray-400">[{new Date().toLocaleTimeString()}]</span>
            <span className="ml-2">agent@binance:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="ml-2 bg-transparent border-none outline-none text-white flex-1 font-mono"
              placeholder="Type a command..."
              autoComplete="off"
            />
            <span className="animate-pulse text-white">|</span>
          </div>
        </div>

        {/* Command Hints */}
        <div className="mt-4 text-xs text-gray-500 font-mono">
          <div>Hint: Use ↑/↓ arrow keys to navigate command history</div>
          <div>Available commands: /help, /status, /logs, /about, /specs, /contact, /clear, /exit</div>
        </div>
      </div>
    </div>
  );
};

export default TerminalInterface;