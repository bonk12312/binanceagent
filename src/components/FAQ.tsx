import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const faqItems: FAQItem[] = [
    {
      question: "What is Binance Agent?",
      answer: "Binance Agent is an advanced AI trading assistant designed to provide expert analysis on BNB and Binance assets. It offers real-time trading signals, portfolio optimization tips, and staking opportunities with a wise yet sometimes snarky personality."
    },
    {
      question: "How accurate are the trading signals?",
      answer: "Binance Agent maintains a 94.7% accuracy rate on its trading recommendations through advanced AI analysis of market patterns, volume data, and technical indicators. However, remember that all trading involves risk."
    },
    {
      question: "What assets does it analyze?",
      answer: "The agent specializes in BNB and all major Binance assets including CAKE, USDT pairs, and popular altcoins. It also identifies staking opportunities and yield farming strategies across the Binance ecosystem."
    },
    {
      question: "Why is it sometimes snarky?",
      answer: "The agent has been programmed with personality traits that include calling out common human trading mistakes. It's designed to be wise and precise, but won't hesitate to point out when emotions are driving poor decisions."
    },
    {
      question: "How often does it update analysis?",
      answer: "Binance Agent runs continuous market analysis 24/7, with major analysis cycles every 4 hours. It processes real-time price data, volume patterns, and market sentiment to provide up-to-the-minute insights."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('faq-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq-section" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-yellow-400">FAQ</span>
          </h2>
          <p className="text-xl text-gray-300">
            Frequently asked questions about Binance Agent
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item bg-gray-900 bg-opacity-50 rounded-2xl border border-gray-700 overflow-hidden transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800 hover:bg-opacity-50 transition-colors duration-300"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-xl font-bold text-white">{item.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-6 h-6 text-yellow-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-yellow-400" />
                )}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 pt-0">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;