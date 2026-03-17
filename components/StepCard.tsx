
import React from 'react';
import { Step } from '../types';

interface StepCardProps {
  step: Step;
}

export const StepCard: React.FC<StepCardProps> = ({ step }) => {
  const renderMedia = () => {
    // 動画がある場合
    if (step.video) {
      return (
        <video 
          className="w-full h-auto max-h-80 object-contain bg-black rounded-b-xl"
          src={step.video}
          autoPlay 
          loop 
          muted 
          playsInline
        />
      );
    }
    
    // 画像がある場合
    if (step.image) {
      return (
        <img 
          className="w-full h-auto max-h-80 object-contain bg-slate-50 border-t border-slate-100 rounded-b-xl"
          src={step.image} 
          alt={step.title}
          loading="lazy"
        />
      );
    }

    // どちらもない場合はプレースホルダー
    return (
      <div className="bg-slate-100 h-48 w-full flex items-center justify-center border-t border-slate-100 italic text-slate-400 rounded-b-xl">
        <div className="flex flex-col items-center px-6 text-center">
          <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-medium">ここに操作画面の画像や動画が表示されます</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6 transition-all hover:shadow-md">
      <div className="flex items-start p-4 sm:p-6">
        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold text-lg shadow-sm">
          {step.number}
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
            {step.title}
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            {step.description}
          </p>
          
          {step.subSteps && (
            <ul className="mt-3 space-y-2 bg-slate-50 p-3 rounded-lg border-l-4 border-blue-400">
              {step.subSteps.map((sub, idx) => (
                <li key={idx} className="flex items-center text-slate-700 font-medium">
                  <span className="mr-2 text-blue-500">●</span>
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      {renderMedia()}
    </div>
  );
};
