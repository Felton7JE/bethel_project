import { CHURCH_BRANCHES, CHURCH_INFO, buildWhatsAppUrl } from '../data/churchData';

export function BranchesSection() {
  return (
    <section id="filiais" className="border-t border-[#E2DDD4] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Header Column */}
          <div className="lg:col-span-4">
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#787670] tabular-nums">
              02 — Sede & Filiais
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-[2.35rem] leading-[1.12] tracking-[-0.015em] font-normal text-[#16181A]">
              Outros lugares com a <em className="italic text-[#154F77]">Igreja Bethel</em>.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.68] text-[#585A5D]">
              Para além da igreja sede em Matacuane, a Missão Bethel Internacional possui
              congregações e filiais implantadas em diferentes zonas da cidade da Beira e da
              província de Sofala.
            </p>
          </div>

          {/* Right Typographic Architectural Directory (Zero Photos Required) */}
          <div className="lg:col-span-8">
            <div className="border-t border-[#16181A] divide-y divide-[#E2DDD4] border-b border-b-[#E2DDD4]">
              {CHURCH_BRANCHES.map((branch) => {
                const branchInquiryUrl = branch.isHeadquarters
                  ? CHURCH_INFO.googleMapsUrl
                  : buildWhatsAppUrl(
                      `Olá, a paz! Gostaria de pedir a localização exata e os horários dos cultos da filial da Igreja Missão Bethel em ${branch.name}.`
                    );

                return (
                  <article
                    key={branch.id}
                    className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                  >
                    <div className="sm:col-span-4">
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-serif text-2xl text-[#16181A] font-normal">
                          {branch.name}
                        </h3>
                        {branch.isHeadquarters && (
                          <span className="text-[10.5px] uppercase tracking-[0.09em] px-2 py-0.5 bg-[#154F77] text-[#FAF8F5] rounded-[2px] font-medium">
                            Sede
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-[12px] text-[#787670]">{branch.zone}</p>
                    </div>

                    <div className="sm:col-span-5">
                      <p className="text-[14.5px] leading-[1.65] text-[#585A5D]">
                        {branch.detail}
                      </p>
                    </div>

                    <div className="sm:col-span-3 sm:text-right pt-1 sm:pt-0">
                      <a
                        href={branchInquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-link text-[13px] font-medium text-[#154F77]"
                      >
                        <span>
                          {branch.isHeadquarters ? 'Ver no mapa' : 'Pedir localização'}
                        </span>
                        <span aria-hidden="true">{branch.isHeadquarters ? '↗' : '→'}</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
