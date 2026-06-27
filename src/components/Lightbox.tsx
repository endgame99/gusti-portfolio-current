import React from 'react';
import { X } from 'lucide-react';
import { WorkItem } from '../types';

interface LightboxProps {
  work: WorkItem | null;
  onClose: () => void;
}

export function Lightbox({ work, onClose }: LightboxProps) {
  if (!work) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="max-w-5xl max-h-full flex flex-col relative w-full h-full justify-center items-center">
        <img 
          src={work.image} 
          alt={work.title} 
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        <div className="mt-6 text-center text-white">
          <h3 className="text-xl font-bold mb-1">{work.title}</h3>
          <p className="text-sm text-neutral-400">{work.label}</p>
        </div>
      </div>
    </div>
  );
}
