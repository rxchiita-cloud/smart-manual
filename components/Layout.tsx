
import React, { useState } from 'react';
import { MANUAL_DATA } from '../constants';
import { ManualSection, ManualPage } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePageId: string;
  onSelectPage: (pageId: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePageId, onSelectPage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-72 bg-white border-r border-slate-200 z-30 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0
      `}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-slate-100">
            <h1 className="text-xl font-bold text-blue-700 flex items-center">
              <span className="mr-2">📏</span>
              <span>OKProCon マニュアル</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Ver 3.1</p>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            {MANUAL_DATA.map((section: ManualSection) => (
              <div key={section.id} className="mb-8">
                <div className="flex items-center text-slate-400 font-bold text-xs mb-3 px-2 uppercase tracking-widest">
                  <span className="mr-2">{section.icon}</span>
                  {section.title}
                </div>
                <div className="space-y-1">
                  {section.pages.map((page: ManualPage) => (
                    <button
                      key={page.id}
                      onClick={() => {
                        onSelectPage(page.id);
                        setIsSidebarOpen(false);
                      }}
                      className={`
                        w-full text-left px-3 py-3 rounded-lg text-sm font-medium transition-colors
                        ${activePageId === page.id 
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                          : 'text-slate-600 hover:bg-slate-50'}
                      `}
                    >
                      {page.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          
          <div className="p-4 bg-slate-50 border-t border-slate-100">
            <div className="flex items-center text-xs text-slate-400">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              オンライン
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden relative">
        {/* Top Header */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 flex items-center px-4 sm:px-8 justify-between">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-2">
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded font-bold">やさしい日本語</span>
            <span className="text-slate-300">|</span>
            <button className="text-xs text-slate-500 hover:text-blue-600 transition-colors">English</button>
            <button className="text-xs text-slate-500 hover:text-blue-600 transition-colors">Português</button>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          <div className="max-w-3xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
