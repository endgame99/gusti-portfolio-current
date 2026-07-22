import { useEffect, useState } from 'react';
import { ArrowLeft, Play, X } from 'lucide-react';
import { ProjectDetailPageProps, getLabel } from './SharedTypes';

// STARMAP detail page — new clean structure. Awaiting final visual assets.

export function StarmapDetail({ work, lang, detail, onBack }: ProjectDetailPageProps) {
  const [activeTab, setActiveTab] = useState('product');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  // Auto-scroll to top when project loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [work.id]);

  // Show back-to-top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset to top when switching tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const tabs = [
    { id: 'product', label: 'Product Information' },
    { id: 'ecommerce', label: 'E-commerce Visuals' },
    { id: 'ai-influencer', label: 'AI Influencer' },
  ];

  // MISSING_DATA_REQUIRED: Real AI Influencer video files and thumbnail images needed.
  // Using existing local STARMAP cover as temporary thumbnail placeholder.
  const aiInfluencerItems = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    // MISSING_DATA_REQUIRED: Replace with actual video URL per item
    videoUrl: undefined as string | undefined,
    thumbnail: work.image || '/starmap.jpg',
  }));

  return (
    <div
      id={`project-detail-${work.id}`}
      className="w-full min-h-screen bg-white dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 relative font-sans"
    >

      {/* ── 1. Top navigation ── */}
      <div className="detail-container pt-8">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 type-label-sm tracking-wide text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-200 transition-colors duration-200"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>{getLabel('back', lang)}</span>
        </button>
      </div>

      {/* ── 2. Brand header ── */}
      <div className="detail-container pt-10 pb-8">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 shrink-0">
            <img
              src={work.image || '/starmap.jpg'}
              alt="STARMAP"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="type-display-lg text-neutral-900 dark:text-white">
              STARMAP
            </h1>
            <p className="text-sm text-neutral-400 dark:text-neutral-500 leading-tight">
              Retail Ecommerce
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. Tab navigation ── */}
      <div className="detail-container">
        <nav className="flex border-b border-neutral-200 dark:border-neutral-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-3 type-tab transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'font-medium text-neutral-900 dark:text-white'
                  : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900 dark:bg-white" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* ── Tab content ── */}
      <div className="detail-container pt-12 pb-16">

        {/* ── 4. Product Information tab ── */}
        {activeTab === 'product' && (
          <div className="flex flex-col items-center gap-8">
            {detail.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                className="w-full max-w-3xl"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
        )}

        {/* ── 5. E-commerce Visuals tab ── */}
        {activeTab === 'ecommerce' && (
          <div className="flex flex-col items-center gap-8">
            {/* MISSING_DATA_REQUIRED: Real e-commerce visual assets needed. Using existing local asset temporarily. */}
            <img
              src={work.image || '/starmap.jpg'}
              alt=""
              className="w-full max-w-3xl"
            />
          </div>
        )}

        {/* ── 6. AI Influencer tab ── */}
        {activeTab === 'ai-influencer' && (
          <div className="columns-2 md:columns-3 gap-4">
            {aiInfluencerItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveVideo(item.id)}
                className="relative w-full mb-4 break-inside-avoid group cursor-pointer block rounded-lg overflow-hidden"
              >
                <div className="aspect-[9/16] bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 group-hover:bg-black/20 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Play className="w-4 h-4 text-neutral-900 ml-0.5" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Video modal ── */}
      {activeVideo !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            {/* MISSING_DATA_REQUIRED: Real video source needed for AI Influencer content */}
            {aiInfluencerItems[activeVideo]?.videoUrl ? (
              <video
                src={aiInfluencerItems[activeVideo].videoUrl}
                controls
                playsInline
                className="w-full aspect-[9/16] bg-black object-contain"
              />
            ) : (
              <div className="aspect-[9/16] bg-neutral-900 overflow-hidden">
                <img
                  src={aiInfluencerItems[activeVideo]?.thumbnail || '/starmap.jpg'}
                  alt=""
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── 7. Back to top button ── */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-9 h-9 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
          aria-label="Back to top"
        >
          <span className="text-xs font-medium">↑</span>
        </button>
      )}
    </div>
  );
}
