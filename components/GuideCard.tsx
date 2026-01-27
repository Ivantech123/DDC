import React from 'react';
import { GuideSection } from '../types';
import { Flame, Brain, User, ChevronRight } from 'lucide-react';

interface GuideCardProps {
  section: GuideSection;
}

export const GuideCard: React.FC<GuideCardProps> = ({ section }) => {
  const getIcon = () => {
    switch (section.icon) {
      case 'flame': return <Flame className="w-5 h-5 text-orange-500" />;
      case 'brain': return <Brain className="w-5 h-5 text-purple-500" />;
      case 'mask': return <User className="w-5 h-5 text-blue-500" />;
      default: return <Flame className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors">
      <div className="p-5 border-b border-zinc-800/50 flex items-start gap-4">
        <div className="bg-zinc-800 p-2.5 rounded-xl shrink-0">
          {getIcon()}
        </div>
        <div>
          <h3 className="font-bold text-white text-lg leading-tight mb-1">{section.title}</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">{section.description}</p>
        </div>
      </div>
      
      <div className="divide-y divide-zinc-800/50">
        {section.items.map((item, index) => (
          <button 
            key={index}
            className="w-full text-left p-4 flex items-center justify-between group hover:bg-zinc-800/30 transition-colors active:bg-zinc-800"
            onClick={() => {
                // Placeholder for future links
                alert(`Пост "${item}" будет доступен по ссылке в канале.`);
            }}
          >
            <span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors">
              {item}
            </span>
            <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" />
          </button>
        ))}
      </div>
    </div>
  );
};