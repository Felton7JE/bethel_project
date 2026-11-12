import { useState } from 'react';
import {
  CHURCH_INFO,
  VISITOR_NOTES,
  WEEKLY_GATHERINGS,
  buildWhatsAppUrl,
} from '../data/churchData';

export function Gatherings() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const receptionWhatsApp = buildWhatsAppUrl(
    'Olá, a paz! Gostaria de obter informações sobre os cultos da Missão Bethel Internacional em Matacuane.'
  );

  return (
    <section id="encontros" className="border-t border-[#E2DDD4] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Sticky Editorial Column */}
          <div className="lg:col-span-4">
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#787670] tabular-nums">
              01 — Cultos & Localização
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-[2.35rem] leading-[1.12] tracking-[-0.015em] font-normal text-[#16181A]">
              A casa está aberta <em className="italic">todas as semanas</em>.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.68] text-[#585A5D]">
              Quer more na Beira há muitos anos ou esteja a chegar agora à cidade, há um lugar à mesa para si e para a sua família.
            </p>

            {/* Concrete Address Block */}
            <div className="mt-8 pt-6 border-t border-[#E2DDD4]">
              <p className="text-[11.5px] uppercase tracking-[0.1em] text-[#787670] font-medium">
                Onde nos reunimos
              </p>
              <p className="mt-2 text-[15px] font-medium text-[#16181A]">
                {CHURCH_INFO.address}
              </p>
              <p className="mt-1 text-[13.5px] text-[#585A5D] leading-relaxed">
                {CHURCH_INFO.landmark}
              </p>

              <div className="mt-5 flex flex-col items-start gap-2.5 text-[13.5px] font-medium">
                <a
                  href={CHURCH_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-[#154F77]"
                >
                  <span>Abrir localização no Google Maps</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={receptionWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-[#16181A]"
                >
                  <span>Pedir indicações pelo WhatsApp</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Schedule & First-Time Visitor Guide */}
          <div className="lg:col-span-8">
            <div className="border-t border-[#16181A]">
              {WEEKLY_GATHERINGS.map((item) => (
                <article
                  key={item.id}
                  className="py-8 sm:py-9 border-b border-[#E2DDD4] grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6"
                >
                  <div className="sm:col-span-4">
                    <span className="block text-[12px] uppercase tracking-[0.1em] text-[#787670] font-medium">
                      {item.day}
                    </span>
                    <span className="mt-1 block font-serif text-2xl sm:text-[1.65rem] text-[#154F77] tabular-nums">
                      {item.time}
                    </span>
                  </div>

                  <div className="sm:col-span-8">
                    <h3 className="font-serif text-2xl text-[#16181A] font-normal">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-[1.68] text-[#585A5D]">
                      {item.description}
                    </p>
                    <p className="mt-3 text-[13px] text-[#787670]">
                      {item.note}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Minimalist First-Time Visitor Questions */}
            <div className="mt-12">
              <p className="text-[12px] uppercase tracking-[0.1em] text-[#787670] mb-4">
                Para quem nos visita pela primeira vez
              </p>
              <div className="divide-y divide-[#E2DDD4] border-y border-[#E2DDD4]">
                {VISITOR_NOTES.map((item, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div key={item.question}>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full py-4 flex items-center justify-between gap-4 text-left text-[15px] font-medium text-[#16181A] hover:text-[#154F77] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="font-mono text-base text-[#787670] shrink-0">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="pb-5 pr-8 text-[14.5px] leading-[1.68] text-[#585A5D]">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
