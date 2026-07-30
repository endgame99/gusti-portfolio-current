import { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  MessageCircle, 
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';
import { ProjectDetailPageProps, getLabel, getCustomWhatsAppLink } from './SharedTypes';

export function FabilDetail({ work, lang, detail, onBack }: ProjectDetailPageProps) {
  const [videoPlaying, setVideoPlaying] = useState<boolean>(true);
  const [videoMuted, setVideoMuted] = useState<boolean>(true);

  // Auto-scroll to top when project loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [work.id]);

  return (
    <div id={`project-detail-${work.id}`} className="w-full min-h-screen bg-white dark:bg-[#121212] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 pb-20 relative font-sans">
      
      <div className="detail-container internalPageTop pb-12 space-y-6">
        
        {/* Clean, Non-Sticky Back Link */}
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 type-label-sm tracking-wider uppercase text-neutral-400 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200 transition-all duration-300 pb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>{getLabel('back', lang)}</span>
        </button>
        
        {/* MAIN TITLE */}
        <div className="flex items-center gap-2.5 flex-wrap pt-2">
          <h1 
            className="type-display-xl font-bold text-neutral-900 dark:text-white"
            title={`${detail.client} X AI Production - ${work.label}`}
          >
            {detail.client} - {work.label}
          </h1>
        </div>

        {/* CREATOR ROW */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 pb-6 border-b border-neutral-100 dark:border-neutral-800/60">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded bg-red-600 dark:bg-red-700 flex flex-col items-center justify-center font-bold text-white leading-none shrink-0 border border-red-500 shadow-sm select-none">
              <span className="type-label-xs tracking-tighter font-extrabold">GUSTI</span>
              <span className="text-[5px] tracking-widest font-mono scale-90 mt-0.5">STUDIO</span>
            </div>

            <div>
              <h4 className="type-heading-md text-neutral-900 dark:text-neutral-100 font-bold">GUSTI. Visual Creative</h4>
              <p className="type-label-sm font-medium text-neutral-400 dark:text-neutral-500">Visual Production & Commercial Direction</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <a
              href={getCustomWhatsAppLink(work, lang)}
              target="_blank"
              referrerPolicy="no-referrer"
              className="px-4 py-1.5 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded type-label-md font-semibold transition-all duration-300 flex items-center justify-center min-h-[30px]"
            >
              <span>{lang === 'id' ? 'Kirim Pesan' : lang === 'cn' ? 'Message' : 'Message'}</span>
            </a>
          </div>
        </div>

        {/* SECTION 1: CAMPAIGN INFO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-b border-neutral-100 dark:border-neutral-800/60 type-body-md">
          <div>
            <h4 className="type-eyebrow">{getLabel('client', lang)}</h4>
            <p className="mt-1 font-medium text-neutral-800 dark:text-neutral-200">{detail.client}</p>
          </div>
          <div>
            <h4 className="type-eyebrow">{getLabel('year', lang)}</h4>
            <p className="mt-1 font-medium text-neutral-800 dark:text-neutral-200">{detail.year}</p>
          </div>
          <div className="col-span-2">
            <h4 className="type-eyebrow">{getLabel('role', lang)}</h4>
            <p className="mt-1 font-medium text-neutral-800 dark:text-neutral-200">{detail.role[lang] || detail.role['en']}</p>
          </div>
        </div>

        {/* SECTION 1B: APPLIED SPECIALTIES */}
        <div className="py-4 border-b border-neutral-100 dark:border-neutral-800/60">
          <h4 className="type-eyebrow mb-2">{getLabel('services', lang)}</h4>
          <div className="flex flex-wrap gap-1.5">
            {(detail.services[lang] || detail.services['en'] || []).map((srv, idx) => (
              <span key={idx} className="type-label-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded">
                {srv}
              </span>
            ))}
          </div>
        </div>

        {/* SECTION 2: THE STRATEGIC NARRATIVE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-neutral-100 dark:border-neutral-800/60 leading-relaxed type-body-md">
          <div className="space-y-2">
            <div className="flex items-center gap-2 type-heading-md font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
              <span className="w-1.5 h-3 bg-red-500 rounded-sm"></span>
              <span>{getLabel('overview', lang)}</span>
            </div>
            <p className="type-body-md font-normal text-neutral-500 dark:text-neutral-400">
              {detail.content[lang]?.overview || detail.content['en']?.overview}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 type-heading-md font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
              <span className="w-1.5 h-3 bg-red-500 rounded-sm"></span>
              <span>{getLabel('direction', lang)}</span>
            </div>
            <p className="type-body-md font-normal text-neutral-500 dark:text-neutral-400 italic">
              "{detail.content[lang]?.creativeDirection || detail.content['en']?.creativeDirection}"
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 type-heading-md font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
              <span className="w-1.5 h-3 bg-red-500 rounded-sm"></span>
              <span>{getLabel('scope', lang)}</span>
            </div>
            <p className="type-body-md font-normal text-neutral-500 dark:text-neutral-400">
              {detail.content[lang]?.scope || detail.content['en']?.scope}
            </p>
          </div>
        </div>

        {/* SECTION 5: LONG VERTICAL MEDIA GALLERY */}
        <div className="py-6 space-y-6">
          {detail.videoUrl ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black border border-neutral-200 dark:border-neutral-800">
              <video
                src={detail.videoUrl}
                loop
                muted={videoMuted}
                autoPlay={videoPlaying}
                className="w-full h-full object-cover"
                playsInline
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
                <button
                  onClick={() => setVideoPlaying(!videoPlaying)}
                  className="p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-xs"
                >
                  {videoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setVideoMuted(!videoMuted)}
                  className="p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-xs"
                >
                  {videoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
              <img 
                src={work.image || detail.images[0]} 
                alt={detail.client} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="space-y-6">
            {detail.mediaList && detail.mediaList.length > 0 ? (
              detail.mediaList.map((media, midx) => (
                <div key={midx} className="space-y-3">
                  <div className={`w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm bg-neutral-100 dark:bg-neutral-900 ${media.aspectRatio || 'aspect-video'}`}>
                    {media.type === 'video' ? (
                      <video src={media.url} controls muted loop playsInline className="w-full h-full object-cover" />
                    ) : (
                      <img src={media.url} alt={media.caption?.[lang] || ''} className="w-full h-full object-cover" />
                    )}
                  </div>
                  {(media.caption || media.subText) && (
                    <div className="px-2 text-center space-y-1 py-1 max-w-2xl mx-auto">
                      {media.caption && (
                        <h5 className="text-xs font-bold text-neutral-800 dark:text-neutral-200 tracking-tight uppercase">
                          {media.caption[lang] || media.caption['en']}
                        </h5>
                      )}
                      {media.subText && (
                        <p className="text-[11px] text-neutral-400 dark:text-neutral-500 leading-relaxed">
                          {media.subText[lang] || media.subText['en']}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              detail.images.map((img, idx) => (
                <div key={idx} className="w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm bg-neutral-100 dark:bg-neutral-900">
                  <img 
                    src={img} 
                    alt={`${detail.client} Asset ${idx + 1}`} 
                    className="w-full object-cover" 
                    loading="lazy"
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* SECTION 6: CREDITS ROLL */}
        {detail.credits && detail.credits.length > 0 && (
          <div className="py-8 border-t border-b border-neutral-100 dark:border-neutral-800/60 bg-[#F5F6F8]/50 dark:bg-[#161616]/30 px-6 rounded-2xl space-y-5">
            <h4 className="type-eyebrow text-center">
              —— {lang === 'id' ? 'KREDIT TIM PRODUKSI' : lang === 'cn' ? '项目制作群' : 'PRODUCTION CREDITS'} ——
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 type-label-sm">
              {detail.credits.map((credit, cidx) => (
                <div key={cidx} className="flex flex-col gap-0.5">
                  <span className="text-neutral-400 dark:text-neutral-500 font-medium">
                    {credit.role[lang] || credit.role['en']}
                  </span>
                  <span className="text-neutral-800 dark:text-neutral-200 font-extrabold">
                    {credit.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 7: HIGH-CONVERTING B2B CTA */}
        <div className="pt-10 pb-4 text-center">
          <div className="bg-[#1A1A1A] dark:bg-[#1A1A1A] text-white p-8 md:p-10 rounded-[28px] border border-neutral-800/80 shadow-2xl relative overflow-hidden flex flex-col items-center">
            
            <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-red-600/10 blur-[60px]" />
            <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-red-500/10 blur-[60px]" />

            <div className="relative z-10 space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-1.5 bg-red-600/10 text-[#FF5134] px-3 py-1 rounded-full type-label-xs font-extrabold tracking-widest uppercase border border-red-500/20 shadow-xs mb-1">
                <span>⚡</span>
                <span>{lang === 'id' ? 'KONSULTASI GRATIS' : lang === 'cn' ? '免费视觉咨询' : 'FREE DIRECT SCOPING'}</span>
              </div>
              
              <h3 className="type-display-lg text-white uppercase">
                {getLabel('interest', lang)}
              </h3>
              
              <p className="type-body-sm text-neutral-400">
                {lang === 'id' 
                  ? 'Gusti siap merancang visual produk fisik / aset komersial beralur tinggi yang disesuaikan khusus untuk target pasar Anda. Hubungi kami sekarang demi mendapatkan estimasi produksi.'
                  : lang === 'cn'
                  ? 'Gusti 准备好为您的产品研发、商业详情页提供高端视觉支持，定制高度吸引眼球的商业素材。现在联系我们以获取方案估算。'
                  : 'Gusti is ready to curate and produce premium high-converting visual assets tailor-made for your target market. Contact us directly to draft a production quotation.'}
              </p>

              <div className="pt-4 flex justify-center">
                <a
                  href={getCustomWhatsAppLink(work, lang)}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="px-6 md:px-8 py-3.5 bg-[#ff5134] hover:bg-[#e0452a] text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{getLabel('chat_gusti', lang)}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
