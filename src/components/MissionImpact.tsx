import { MISSION_INITIATIVES } from '../data/churchData';

export function MissionImpact() {
  const [featured, ...secondary] = MISSION_INITIATIVES;

  return (
    <section id="missao" className="border-t border-[#E2DDD4] bg-[#F2EFE9]/65 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pb-12 border-b border-[#E2DDD4]">
          <div className="lg:col-span-4">
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#787670] tabular-nums">
              05 — Missão, Eventos & Ação Social
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-[2.35rem] leading-[1.12] tracking-[-0.015em] font-normal text-[#16181A]">
              Servir a cidade com <em className="italic">obras vivas</em>.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-end">
            <p className="text-[15.5px] leading-[1.7] text-[#585A5D] max-w-2xl">
              Na Beira e em localidades de Sofala como Mafambisse, a nossa missão estende-se para
              além das quatro paredes do templo — capacitando pastores locais, cuidando da infância
              vulnerável e socorrendo famílias em momentos críticos.
            </p>
          </div>
        </div>

        {/* Featured Editorial Spread: Joias da África & Ação Comunitária */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {secondary.map((item) => (
            <article key={item.title} className="flex flex-col">
              {item.image && (
                <figure className="m-0 mb-5">
                  <div className="overflow-hidden rounded-[2px] bg-[#E5E0D6] ring-1 ring-[#16181A]/8">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover object-center"
                    />
                  </div>
                  {item.imageCaption && (
                    <figcaption className="mt-2.5 text-[12px] text-[#787670]">
                      {item.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}

              <p className="text-[11.5px] uppercase tracking-[0.1em] text-[#154F77] font-medium">
                {item.tag} &nbsp;·&nbsp; <span className="text-[#787670]">{item.location}</span>
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[#16181A] font-normal">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.68] text-[#585A5D]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Conference Highlight Row (Text-Focused Editorial Strip) */}
        {featured && (
          <div className="mt-12 pt-10 border-t border-[#E2DDD4] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
            <div className="lg:col-span-4">
              <span className="text-[11.5px] uppercase tracking-[0.1em] text-[#154F77] font-medium">
                {featured.tag}
              </span>
              <h3 className="mt-1.5 font-serif text-2xl text-[#16181A] font-normal">
                {featured.title}
              </h3>
              <p className="mt-1 text-[13px] text-[#787670]">{featured.location}</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[15px] leading-[1.7] text-[#585A5D] max-w-2xl">
                {featured.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
