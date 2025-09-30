import React, { useState, useEffect } from 'react';
import { TrendingUp, DollarSign, Shield } from 'lucide-react';

const AgentDescription: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('agent-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Advanced AI that analyzes BNB and Binance assets in real-time, identifying optimal buy/sell opportunities."
    },
    {
      icon: DollarSign,
      title: "Portfolio Optimization",
      description: "Provides intelligent allocation tips and staking opportunities to maximize your returns on Binance assets."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Wise and precise trading advice with built-in risk assessment to protect your investments."
    }
  ];

  return (
    <section id="agent-section" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            THE <span className="text-yellow-400">AGENT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A revolutionary AI trading assistant designed to provide expert analysis on BNB and Binance assets. 
            Combines market intelligence with a touch of wit to guide your trading decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`interactive-card bg-gray-900 bg-opacity-50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <feature.icon className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentDescription;