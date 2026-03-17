
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Layout } from './components/Layout';
import { StepCard } from './components/StepCard';
import { MANUAL_DATA } from './constants';
import { askAIAboutManual } from './services/geminiService';

const App: React.FC = () => {
  const [activePageId, setActivePageId] = useState('login');
  const [searchQuery, setSearchQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // ページ切り替え時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePageId]);

  const activePage = useMemo(() => {
    for (const section of MANUAL_DATA) {
      const page = section.pages.find(p => p.id === activePageId);
      if (page) return page;
    }
    return MANUAL_DATA[0].pages[0];
  }, [activePageId]);

  const handleAISearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setAiResponse(null);
    try {
      const result = await askAIAboutManual(searchQuery);
      setAiResponse(result);
      // 回答エリアへスクロール
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      setAiResponse("すみません。もういちど きいてください。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout activePageId={activePageId} onSelectPage={setActivePageId}>
      {/* ページタイトル */}
      <div className="mb-8 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
          {activePage.title}
        </h2>
        <div className="bg-blue-600 w-16 h-1.5 rounded-full mb-4"></div>
        <p className="text-xl text-slate-600 font-medium leading-relaxed">
          {activePage.content}
        </p>
      </div>

      {/* 手順リスト */}
      <div className="space-y-4">
        {activePage.steps.map((step) => (
          <StepCard key={step.number} step={step} />
        ))}
      </div>

      {/* 注意事項 */}
      {activePage.notes && activePage.notes.length > 0 && (
        <div className="mt-12 bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center text-amber-800 font-bold mb-4 text-lg">
            <svg className="w-6 h-6 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>気をつけてください（注意）</span>
          </div>
          <ul className="space-y-3">
            {activePage.notes.map((note, idx) => (
              <li key={idx} className="text-amber-900 text-lg font-bold flex items-start">
                <span className="mr-3 mt-1.5 block w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* AIサポートエリア */}
      <div className="mt-20 border-t-2 border-slate-200 pt-12 pb-20">
        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          {/* 背景の装飾 */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-3 rounded-2xl mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-black">AIに きいてください</h3>
                <p className="text-blue-100 font-medium">わからないことを 書くと、AIが おしえてくれます</p>
              </div>
            </div>

            <form onSubmit={handleAISearch} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="例：不良品の入れかた、交代のやりかた"
                className="flex-1 bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-blue-200 focus:outline-none focus:ring-4 focus:ring-white/20 text-lg font-medium"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center shadow-lg disabled:opacity-50"
              >
                {isLoading ? (
                  <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "しつもんする"
                )}
              </button>
            </form>

            {aiResponse && (
              <div 
                ref={scrollRef}
                className="mt-8 bg-white/95 text-slate-800 rounded-2xl p-6 shadow-2xl animate-fade-in"
              >
                <div className="flex items-center mb-4 text-blue-700">
                  <span className="font-black text-lg">AIの こたえ</span>
                </div>
                <div className="prose prose-blue max-w-none text-lg font-medium leading-relaxed whitespace-pre-wrap">
                  {aiResponse}
                </div>
                <button 
                  onClick={() => setAiResponse(null)}
                  className="mt-6 text-sm text-slate-400 font-bold hover:text-slate-600"
                >
                  ✕ とじる
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* フッター（ページ移動用） */}
      <footer className="mt-12 py-8 flex justify-between border-t border-slate-200">
        <div className="text-sm text-slate-400 font-medium">
          OKProCon Tablet Manual &copy; 2024
        </div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-blue-600 font-bold text-sm"
        >
          一番上にもどる ↑
        </button>
      </footer>
    </Layout>
  );
};

export default App;
