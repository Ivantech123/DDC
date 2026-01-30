import React from 'react';
import { Product } from '../types';
import { getIconForCategory } from '../constants';
import { ArrowRight, Sparkles, Check, Plus, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isInCart: boolean;
  onToggleCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isInCart, onToggleCart }) => {
  const isDiscount = !!product.oldPrice;

  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-900/20 flex flex-col h-full">
      
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-0 right-0 bg-gradient-to-bl from-purple-600 to-indigo-700 text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10 shadow-md">
          {product.badge}
        </div>
      )}

      <div className="p-5 flex flex-col h-full">
        {/* Header: Icon & Title */}
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 bg-zinc-800 rounded-lg text-purple-400 shrink-0 group-hover:text-purple-300 transition-colors">
            {getIconForCategory(product.category)}
          </div>
          <h3 className="text-lg font-bold text-white leading-tight">
            {product.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 mb-6 flex-grow leading-relaxed">
          {product.description}
        </p>

        {/* Price & Action */}
        <div className="mt-auto pt-4 border-t border-zinc-800/50">
          <div className="flex justify-between items-end mb-4">
            <div>
              {isDiscount && (
                <span className="block text-xs text-zinc-500 line-through decoration-red-500/60 mb-1">
                  {product.oldPrice?.toLocaleString()} {product.currency}
                </span>
              )}
              <span className="block text-xl font-bold text-white">
                {typeof product.price === 'number' ? product.price.toLocaleString() : product.price} 
                <span className="text-sm font-normal text-zinc-500 ml-1">{product.currency}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleCart}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all active:scale-95 hover:shadow-lg ${
                isInCart 
                  ? 'bg-purple-700 text-white shadow-purple-900/30' 
                  : 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-900/20'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>В корзине</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>В корзину</span>
                </>
              )}
            </button>
            
            <a
              href={product.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all active:scale-95 border border-zinc-700"
              title="Открыть ссылку"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
