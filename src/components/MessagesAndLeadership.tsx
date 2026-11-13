import { useState, useEffect } from 'react';
import { CHURCH_INFO, RECENT_MESSAGES, COMMUNITY_CAROUSEL_SLIDES } from '../data/churchData';

export function MessagesAndLeadership() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showAllSermons, setShowAllSermons] = useState(false);

  const INITIAL_SERMON_COUNT = 3;
  const displayedMessages = showAllSermons
    ? RECENT_MESSAGES
    : RECENT_MESSAGES.slice(0, INITIAL_SERMON_COUNT);

  const totalSlides = COMMUNITY_CAROUSEL_SLIDES.length;

  // Auto-advance carousel smoothly every 5.5 seconds unless paused by mouse hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section id="sobre" className="border-t border-[#E2DDD4] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Part 1: History, Community & Interactive Photo Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Church Community Carousel */}
          <div className="lg:col-span-6">
            <div
              className="relative overflow-hidden rounded-[2px] bg-[#EAE6DF] ring-1 ring-[#16181A]/10 group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slides Container */}
              <div className="relative aspect-[4/5] sm:aspect-[4/4.5] w-full overflow-hidden bg-[#16181A]">
                {COMMUNITY_CAROUSEL_SLIDES.map((slide, idx) => {
                  const isActive = idx === currentSlideIndex;
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                      {/* Gradient overlay for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#16181A]/90 via-[#16181A]/20 to-transparent" />

                      {/* Top Category Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#16181A]/75 backdrop-blur-md px-3 py-1 text-[11px] uppercase tracking-wider font-semibold text-[#FAF8F5] border border-white/10">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#154F77]" />
                          {slide.category}
                        </span>
                      </div>

                      {/* Bottom Caption on Slide */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 text-[#FAF8F5]">
                        <h4 className="font-serif text-lg sm:text-xl font-normal leading-snug">
                          {slide.title}
                        </h4>
                        <p className="mt-1 text-[12.5px] leading-relaxed text-[#FAF8F5]/85 line-clamp-2">
                          {slide.caption}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="bg-[#FAF8F5] border-t border-[#E2DDD4] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11.5px] uppercase tracking-[0.1em] text-[#787670] tabular-nums font-medium">
                    {String(currentSlideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                  </span>
                  <span className="text-[#E2DDD4]">·</span>
                  <div className="flex items-center gap-1.5">
                    {COMMUNITY_CAROUSEL_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCurrentSlideIndex(i)}
                        aria-label={`Ir para a foto ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          currentSlideIndex === i ? 'w-5 bg-[#154F77]' : 'w-1.5 bg-[#D2CCC2] hover:bg-[#787670]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Foto anterior"
                    className="h-7 w-7 rounded border border-[#E2DDD4] bg-white text-[#16181A] hover:bg-[#EAE6DF] flex items-center justify-center transition-colors cursor-pointer text-xs"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Próxima foto"
                    className="h-7 w-7 rounded border border-[#E2DDD4] bg-white text-[#16181A] hover:bg-[#EAE6DF] flex items-center justify-center transition-colors cursor-pointer text-xs"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-2.5 text-[11.5px] text-[#787670] leading-relaxed">
              Registos da vida e ministérios da Missão Bethel Internacional na Beira: cultos, juventude, discipulado de crianças e pastoreio comunitário.
            </p>
          </div>

          {/* Right Column: History & The Church as a Whole */}
          <div className="lg:col-span-6">
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#787670] tabular-nums">
              06 — A Nossa Comunidade & Caminhada
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-[2.35rem] leading-[1.14] tracking-[-0.015em] font-normal text-[#16181A]">
              Uma igreja viva, unida e apaixonada por <em className="italic">Moçambique</em>.
            </h2>

            <div className="mt-5 space-y-4 text-[15.5px] leading-[1.72] text-[#585A5D]">
              <p>
                A <strong className="font-medium text-[#16181A]">Missão Bethel Internacional</strong> é muito mais do que um espaço de reuniões: é uma verdadeira comunidade espiritual de fé, amor e serviço mútuo. Desde os primeiros passos há mais de duas décadas em solo moçambicano, o nosso propósito tem sido o mesmo: ser um lugar onde cada pessoa e cada família encontra refúgio, discipulado e sentido de pertença.
              </p>
              <p>
                Com sede central na <strong className="font-medium text-[#16181A]">Cidade da Beira (Bairro de Matacuane)</strong> e presença ativa através de células familiares em vários bairros e comunidades da província, a igreja vive a sua missão através da comunhão de todas as gerações. Crianças, jovens, pais e anciãos caminham juntos na adoração a Deus e no estudo fervoroso das Escrituras.
              </p>
              <p>
                Este corpo vivo é sustentado por uma liderança partilhada e comprometida — pastores locais como o <strong className="font-medium text-[#16181A]">Pr. Lucrécio</strong> e obreiros dedicados, professores da Escola do Reino, líderes do ministério infantil, equipas de acolhimento e socorro social. Juntos, continuam a anunciar a graça transformadora de Cristo e a servir com alegria o povo moçambicano.
              </p>
            </div>

            {/* Quick Pillars of Church Life */}
            <div className="mt-7 pt-6 border-t border-[#E2DDD4] grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="block font-semibold uppercase tracking-wider text-[#16181A]">
                  Comunhão Semanal
                </span>
                <span className="text-[#787670] mt-0.5 block">
                  Cultos de Família e reuniões de oração abertas a todos.
                </span>
              </div>
              <div>
                <span className="block font-semibold uppercase tracking-wider text-[#16181A]">
                  Formação & Células
                </span>
                <span className="text-[#787670] mt-0.5 block">
                  Ensino bíblico, discipulado e pequenos grupos nos bairros.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Recent Messages Archive (Editorial Journal Index) */}
        <div id="mensagens" className="mt-20 pt-14 border-t border-[#E2DDD4]">
          <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
            <div>
              <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#787670] tabular-nums">
                07 — Palavra & Registos
              </p>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#16181A] font-normal">
                Ministrações recentes nos Cultos de Família
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-[13.5px] font-medium">
              <a
                href={CHURCH_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link text-[#154F77]"
              >
                <span>Acompanhar no Facebook</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={CHURCH_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link text-[#16181A]"
              >
                <span>Canal no YouTube</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="border-t border-[#16181A] divide-y divide-[#E2DDD4] border-b border-b-[#E2DDD4]">
            {displayedMessages.map((msg) => (
              <div
                key={`${msg.date}-${msg.title}`}
                className="py-4.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline transition-colors hover:bg-[#16181A]/[0.02]"
              >
                <span className="sm:col-span-2 text-[13px] text-[#787670] tabular-nums">
                  {msg.date}
                </span>
                <span className="sm:col-span-5 font-serif text-xl text-[#16181A]">
                  {msg.title}
                </span>
                <span className="sm:col-span-3 text-[14px] text-[#585A5D]">
                  {msg.preacher}
                </span>
                <span className="sm:col-span-2 sm:text-right text-[12px] uppercase tracking-[0.08em] text-[#787670]">
                  {msg.series}
                </span>
              </div>
            ))}
          </div>

          {/* Toggle Ver Mais / Ver Menos Button */}
          {RECENT_MESSAGES.length > INITIAL_SERMON_COUNT && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllSermons(!showAllSermons)}
                className="inline-flex items-center gap-2 rounded-[2px] border border-[#16181A]/20 bg-white px-5 py-2.5 text-[13px] font-medium text-[#16181A] hover:bg-[#EAE6DF] hover:border-[#16181A]/40 transition-all cursor-pointer shadow-sm"
              >
                <span>
                  {showAllSermons
                    ? 'Ver menos ministrações'
                    : `Ver mais ministrações (+${RECENT_MESSAGES.length - INITIAL_SERMON_COUNT})`}
                </span>
                <span aria-hidden="true" className="text-xs">
                  {showAllSermons ? '↑' : '↓'}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
