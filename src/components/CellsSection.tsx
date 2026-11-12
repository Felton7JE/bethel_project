import { useState } from 'react';
import {
  CELL_NEIGHBORHOODS,
  CHURCH_INFO,
  buildWhatsAppUrl,
} from '../data/churchData';

export function CellsSection() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const whatsappMessage = selectedArea
    ? `Olá, a paz! Desejo encontrar uma célula da Missão Bethel Internacional no bairro ${selectedArea} (Beira).`
    : 'Olá, a paz! Desejo encontrar uma célula da Missão Bethel Internacional perto do meu bairro na Beira.';

  const cellWhatsAppUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <section id="celulas" className="bg-[#F2EFE9] border-y border-[#E2DDD4] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Narrative: Specifically about Home Small Groups (Células) */}
          <div className="lg:col-span-7">
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#787670] tabular-nums">
              03 — Comunhão nas Casas · Células
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-[2.45rem] leading-[1.12] tracking-[-0.015em] font-normal text-[#16181A]">
              Deseja encontrar uma <em className="italic text-[#154F77]">célula</em> no seu bairro?
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#585A5D] max-w-xl">
              As células são os pequenos grupos da nossa igreja que se reúnem semanalmente nas
              casas de famílias em vários bairros da Beira — como Palmeiras, Matacuane, Ponta-Gêa,
              Macuti, Esturro, Manga e muitos outros. É o espaço ideal para criar amizades
              verdadeiras, estudar a Bíblia de perto e ser acompanhado em família.
            </p>

            {/* Optional Residential Neighborhood Selector */}
            <div className="mt-7">
              <p className="text-[12px] text-[#787670] mb-3">
                Indique o seu bairro na Beira (opcional) para ligarmos você à célula mais próxima da sua casa:
              </p>
              <div className="flex flex-wrap gap-2">
                {CELL_NEIGHBORHOODS.map((area) => {
                  const active = selectedArea === area;
                  return (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setSelectedArea(active ? null : area)}
                      className={`px-3.5 py-1.5 text-[13px] rounded-[2px] border transition-colors cursor-pointer ${
                        active
                          ? 'bg-[#154F77] border-[#154F77] text-[#FAF8F5] font-medium'
                          : 'bg-[#FAF8F5] border-[#D8D2C7] text-[#16181A] hover:border-[#16181A]/50'
                      }`}
                    >
                      {area}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Direct Action Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF8F5] border border-[#DFD9CE] p-7 sm:p-9 rounded-[2px]">
              <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#154F77] font-medium">
                Integração em Células
              </p>
              <p className="mt-2 font-serif text-2xl text-[#16181A]">
                Deseja encontrar uma célula? Contacte já.
              </p>
              <p className="mt-2.5 text-[14px] leading-[1.65] text-[#585A5D]">
                Fale connosco diretamente pelo WhatsApp. A equipa irá indicar a casa anfitriã, o
                dia e o líder da célula mais próxima de si
                {selectedArea ? ` (${selectedArea})` : ''}.
              </p>

              <a
                href={cellWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-[2px] bg-[#154F77] px-5 py-3.5 text-[14px] font-medium text-[#FAF8F5] hover:bg-[#0D3551] transition-colors"
              >
                <span>Contactar já no WhatsApp</span>
                <span aria-hidden="true">→</span>
              </a>

              <p className="mt-3.5 text-center text-[12px] text-[#787670] tabular-nums">
                WhatsApp · {CHURCH_INFO.phoneDisplay}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
