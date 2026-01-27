import React from 'react';
import { Review } from '../types';
import { Quote, User, Star } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800" />
      
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-900 to-zinc-800 rounded-full flex items-center justify-center text-purple-300">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-semibold text-white text-sm">{review.author || 'Аноним'}</h4>
          <p className="text-xs text-purple-400 font-medium">{review.context}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
        ))}
      </div>

      <p className="text-zinc-300 text-sm leading-relaxed italic relative z-10">
        "{review.text}"
      </p>
    </div>
  );
};