import { CHURCH_INFO } from '../data/churchData';

export function Hero() {
  return (
    <section id="inicio" className="relative">
      {/* Top Editorial Dateline Strip */}
      <div className="border-b border-[#E2DDD4] bg-[#FAF8F5]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-[11.5px] uppercase tracking-[0.09em] text-[#585A5D]">
          <span>{CHURCH_INFO.address} — Beira</span>
          <span className="tabular-nums font-medium text-[#16181A]">
            Domingos 10h00–12h00 &nbsp;·&nbsp; Quartas 18h00–20h00
          </span>
        </div>
      </div>

      {/* Main Magazine Spread */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 pb-16 sm:pt-14 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left Column: Statement & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-[12px] uppercase tracking-[0.12em] text-[#154F77] font-medium mb-5">
                Igreja Local · Província de Sofala
              </p>

              <h1 className="font-serif text-[2.6rem] sm:text-[3.25rem] lg:text-[3.5rem] leading-[1.06] tracking-[-0.02em] font-normal text-[#16181A]">
                Uma família para <em className="italic text-[#154F77]">pertencer</em> na cidade da Beira.
              </h1>

              <p className="mt-6 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#585A5D] max-w-md">
                Somos uma comunidade cristã centrada no Evangelho de Jesus. Um lugar de porta aberta,
                ensino fiel das Escrituras, comunhão nas casas e serviço concreto às famílias de Moçambique.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#encontros"
                  className="inline-flex items-center justify-center rounded-[2px] bg-[#154F77] px-5 py-3 text-[13.5px] font-medium text-[#FAF8F5] hover:bg-[#0D3551] transition-colors"
                >
                  Horários & Como Chegar
                </a>
                <a
                  href="#celulas"
                  className="inline-flex items-center justify-center rounded-[2px] border border-[#16181A]/25 px-5 py-3 text-[13.5px] font-medium text-[#16181A] hover:border-[#16181A] transition-colors"
                >
                  Encontrar uma Célula →
                </a>
              </div>
            </div>

            <div className="hidden lg:block mt-14 pt-5 border-t border-[#E2DDD4]">
              <p className="text-[12.5px] text-[#787670] leading-relaxed">
                Em missão em Moçambique desde {CHURCH_INFO.foundedMozambiqueYear}. Cultos presenciais em Matacuane e células nos bairros da Beira.
              </p>
            </div>
          </div>

          {/* Right Column: Authentic Documentary Photograph */}
          <div className="lg:col-span-7">
            <figure className="m-0">
              <div className="overflow-hidden rounded-[2px] bg-[#EAE6DF] ring-1 ring-[#16181A]/8">
                <img
                  src="/images/culto-beira.jpg"
                  alt="Nave da Igreja Missão Bethel Internacional na Cidade da Beira durante culto"
                  className="w-full aspect-[16/10] object-cover object-center contrast-[1.02]"
                  fetchPriority="high"
                />
              </div>
              <figcaption className="mt-3 pt-2.5 border-t border-[#E2DDD4]/80 flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#787670]">
                <span>Nave da sede da Missão Bethel Internacional na Cidade da Beira.</span>
                <span className="tabular-nums">{CHURCH_INFO.coordinatesLabel}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
