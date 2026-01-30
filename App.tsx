import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, REVIEWS, GUIDE_SECTIONS, TG_CONTACT, TG_CHANNEL } from './constants';
import { ProductCard } from './components/ProductCard';
import { ReviewCard } from './components/ReviewCard';
import { GuideCard } from './components/GuideCard';
import { Tab } from './types';
import { ShoppingBag, MessageSquareQuote, ExternalLink, Zap, BookOpen, Send, UserPlus, ShoppingCart, Crown, ArrowRight } from 'lucide-react';
import logo from './logo/photo_2024-08-01_18-15-34.jpg';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.WELCOME);
  const [cart, setCart] = useState<string[]>([]);
  const [showFullTitle, setShowFullTitle] = useState(true);

  // Toggle title animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFullTitle(prev => !prev);
    }, 4000); // Switch every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const toggleCart = (productId: string) => {
    setCart(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const pageVariants = {
    initial: { opacity: 0, y: 10, scale: 0.98, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -10, scale: 0.98, filter: 'blur(4px)' },
  };
  
  const pageTransition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
    duration: 0.3
  };

  return (
    <div className="min-h-screen pb-28 relative overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-purple-900/10 blur-[100px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[300px] h-[300px] bg-indigo-900/10 blur-[80px] -z-10 pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b border-white/5 bg-black/50">
        <div className="max-w-2xl mx-auto px-5 py-3 flex justify-between items-center h-[72px]">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-white/10 shrink-0 overflow-hidden relative group">
              <img src={logo} alt="Dirty Duck Club" className="w-full h-full object-cover" />
            </div>
            
            {/* Dynamic Title */}
            <div className="flex flex-col justify-center h-10 min-w-[120px]">
              <div className="relative h-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  {showFullTitle ? (
                    <motion.h1 
                      key="full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-0 left-0 font-bold text-white leading-none text-lg whitespace-nowrap"
                    >
                      Dirty Duck Club
                    </motion.h1>
                  ) : (
                    <motion.h1 
                      key="short"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-0 left-0 font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 leading-none text-xl tracking-wide"
                    >
                      DDC
                    </motion.h1>
                  )}
                </AnimatePresence>
              </div>
              <span className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase font-bold pl-0.5">
                EST. 2024
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Cart Icon */}
            <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-purple-600 text-[10px] font-bold text-white flex items-center justify-center rounded-full shadow-lg shadow-purple-500/50 animate-bounce">
                  {cart.length}
                </span>
              )}
            </button>

            <a 
              href={TG_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-all active:scale-95 border border-zinc-700"
            >
              <Send className="w-3 h-3" />
              Связаться
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-6">
        
        {/* Dynamic Intro */}
        <div className="mb-8 text-center space-y-2">
           <AnimatePresence mode="wait">
            {activeTab === Tab.WELCOME && (
               <motion.div 
                 key="intro-welcome"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.2 }}
               >
                  <h2 className="text-2xl font-bold text-white">
                    Салют, <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Чемпион!</span>
                  </h2>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                    Добро пожаловать в закрытый клуб.
                  </p>
               </motion.div>
            )}
            {activeTab === Tab.SHOP && (
               <motion.div 
                 key="intro-shop"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.2 }}
               >
                  <h2 className="text-2xl font-bold text-white">
                    Услуги от <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Плаща</span>
                  </h2>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                    Товары и услуги, которые работают. Без воды. Только газ.
                  </p>
               </motion.div>
            )}
            {activeTab === Tab.GUIDE && (
               <motion.div 
                 key="intro-guide"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.2 }}
               >
                  <h2 className="text-2xl font-bold text-white">
                    База <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Знаний</span>
                  </h2>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                    Салют! Начни знакомство с проектом с этих постов.
                  </p>
                  <div className="pt-4 flex justify-center">
                    <a 
                      href={TG_CHANNEL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2AABEE] text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:bg-[#229ED9] transition-all active:scale-95 hover:-translate-y-0.5"
                    >
                      <UserPlus className="w-4 h-4" />
                      Подписаться на Канал
                    </a>
                  </div>
               </motion.div>
            )}
            {activeTab === Tab.REVIEWS && (
               <motion.div 
                 key="intro-reviews"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.2 }}
               >
                  <h2 className="text-2xl font-bold text-white">
                    Отзывы <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Людей</span>
                  </h2>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                    Истории тех, кто уже изменил свою жизнь.
                  </p>
               </motion.div>
            )}
           </AnimatePresence>
        </div>

        {/* Tabs Content */}
        <div className="min-h-[60vh]">
          <AnimatePresence mode="wait">
            {/* WELCOME TAB */}
            {activeTab === Tab.WELCOME && (
              <motion.div 
                key="tab-welcome"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                className="space-y-6"
              >
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden handwritten">
                   {/* Decorative background */}
                   <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 blur-[60px] rounded-full -mr-10 -mt-10 pointer-events-none" />
                   
                   <div className="relative z-10 space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                     <p className="font-medium text-white">
                       Рад, что ты выбрал улучшать себя во всех направлениях, от стиля и финансов до этикета и телосложения.
                     </p>
                     <p>
                       Сразу скажу, что не буду разбрасываться громкими словами об успешном успехе. Не мой стиль.
                     </p>
                     <p>
                       Скажу по-простому: мой принцип — не менять, а усилять то, что у тебя есть. Не важно, каким ты пришёл сегодня, важно, как изменится твоя голова завтра.
                     </p>
                     <p>
                       И, конечно, я всегда честен. Если я увижу проблему, обязательно подскажу, как её решить. Без твоего результата моя работа бессмысленна.
                     </p>
                   </div>

                   <div className="relative z-10 mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between">
                     <div>
                       <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-1">С Уважением,</p>
                       <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-serif italic">
                         Плащ
                       </p>
                     </div>
                   <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-zinc-700 shadow-lg overflow-hidden">
                        <img src={logo} alt="Dirty Duck Club" className="w-full h-full object-cover" />
                     </div>
                   </div>
                </div>

                <button 
                  onClick={() => setActiveTab(Tab.SHOP)}
                  className="w-full py-4 bg-white text-black font-bold rounded-xl shadow-lg shadow-white/10 hover:bg-zinc-200 active:scale-95 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Перейти к услугам</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}

            {/* SHOP TAB */}
            {activeTab === Tab.SHOP && (
              <motion.div 
                key="tab-shop"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PRODUCTS.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      isInCart={cart.includes(product.id)}
                      onToggleCart={() => toggleCart(product.id)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* GUIDE TAB */}
            {activeTab === Tab.GUIDE && (
              <motion.div 
                key="tab-guide"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                className="space-y-4 pb-12"
              >
                {GUIDE_SECTIONS.map((section) => (
                  <GuideCard key={section.id} section={section} />
                ))}
                
                <div className="bg-zinc-900/50 border border-dashed border-zinc-800 rounded-xl p-6 text-center hover:bg-zinc-900/80 transition-colors">
                   <p className="text-sm text-zinc-500 mb-2">Еще больше пользы в закрепе канала</p>
                   <a href={TG_CHANNEL} className="text-purple-400 text-sm font-semibold hover:text-purple-300">Перейти в канал &rarr;</a>
                </div>
              </motion.div>
            )}

            {/* REVIEWS TAB */}
            {activeTab === Tab.REVIEWS && (
              <motion.div 
                key="tab-reviews"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                className="space-y-4"
              >
                <div className="bg-gradient-to-r from-purple-900/20 to-zinc-900 border border-purple-500/20 rounded-xl p-4 flex items-start gap-3 mb-6">
                   <div className="bg-purple-600/20 p-2 rounded-full">
                      <Zap className="w-5 h-5 text-purple-400" />
                   </div>
                   <div>
                     <h3 className="text-sm font-bold text-white">Результат гарантирован</h3>
                     <p className="text-xs text-zinc-400 mt-1">
                       Реальные отзывы парней, которые изменили свой стиль, мышление и личную жизнь.
                     </p>
                   </div>
                </div>

                <div className="grid gap-4">
                  {REVIEWS.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2 pointer-events-none">
        <div className="max-w-md mx-auto bg-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2 flex gap-1 pointer-events-auto">
          
          <button
            onClick={() => setActiveTab(Tab.WELCOME)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 rounded-xl text-[10px] font-semibold transition-all duration-300 ${
              activeTab === Tab.WELCOME 
                ? 'bg-zinc-800 text-white shadow-lg shadow-black/20 scale-105' 
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5 active:scale-95'
            }`}
          >
            <Crown className={`w-5 h-5 transition-colors ${activeTab === Tab.WELCOME ? 'text-yellow-400' : ''}`} />
            Старт
          </button>

          <button
            onClick={() => setActiveTab(Tab.SHOP)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 rounded-xl text-[10px] font-semibold transition-all duration-300 ${
              activeTab === Tab.SHOP 
                ? 'bg-zinc-800 text-white shadow-lg shadow-black/20 scale-105' 
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5 active:scale-95'
            }`}
          >
            <ShoppingBag className={`w-5 h-5 transition-colors ${activeTab === Tab.SHOP ? 'text-purple-400' : ''}`} />
            Витрина
          </button>

          <button
            onClick={() => setActiveTab(Tab.GUIDE)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 rounded-xl text-[10px] font-semibold transition-all duration-300 ${
              activeTab === Tab.GUIDE 
                ? 'bg-zinc-800 text-white shadow-lg shadow-black/20 scale-105' 
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5 active:scale-95'
            }`}
          >
            <BookOpen className={`w-5 h-5 transition-colors ${activeTab === Tab.GUIDE ? 'text-orange-400' : ''}`} />
            База
          </button>

          <button
            onClick={() => setActiveTab(Tab.REVIEWS)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 rounded-xl text-[10px] font-semibold transition-all duration-300 ${
              activeTab === Tab.REVIEWS 
                ? 'bg-zinc-800 text-white shadow-lg shadow-black/20 scale-105' 
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5 active:scale-95'
            }`}
          >
            <MessageSquareQuote className={`w-5 h-5 transition-colors ${activeTab === Tab.REVIEWS ? 'text-purple-400' : ''}`} />
            Отзывы
          </button>

        </div>
      </div>

    </div>
  );
};

export default App;
