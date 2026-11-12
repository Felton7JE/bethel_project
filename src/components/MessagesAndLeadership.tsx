import { CHURCH_INFO, RECENT_MESSAGES } from '../data/churchData';

export function MessagesAndLeadership() {
  return (
    <section id="sobre" className="border-t border-[#E2DDD4] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Part 1: History & Pastoral Family */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <figure className="m-0">
              <div className="overflow-hidden rounded-[2px] bg-[#EAE6DF] ring-1 ring-[#16181A]/8 max-w-md">
                <img
                  src="/images/familia-pastoral.jpg"
                  alt="Pr. Flávio de Souza Andrade, Pra. Cremilde Andrade e família"
                  loading="lazy"
                  className="w-full aspect-[4/4] object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 text-[12px] text-[#787670] max-w-md">
                Pr. Flávio Andrade, Pra. Cremilde Andrade e família — dedicados ao serviço pastoral e missionário em Moçambique.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#787670] tabular-nums">
              06 — Nossa História & Liderança
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-[2.35rem] leading-[1.12] tracking-[-0.015em] font-normal text-[#16181A]">
              Mais de duas décadas de amor por <em className="italic">Moçambique</em>.
            </h2>

            <div className="mt-5 space-y-4 text-[15.5px] leading-[1.72] text-[#585A5D]">
              <p>
                A caminhada missionária do <strong className="font-medium text-[#16181A]">Pr. Flávio de Souza Andrade</strong> e
                da <strong className="font-medium text-[#16181A]">Pra. Cremilde Andrade</strong> em solo moçambicano começou em{' '}
                <span className="tabular-nums">2003</span>, servindo comunidades e igrejas em zonas rurais. Em{' '}
                <span className="tabular-nums">2005</span>, debaixo da sombra de um cajueiro em Mafambisse, nasceu uma comunidade
                viva de fé e serviço às famílias locais.
              </p>
              <p>
                Hoje, a partir da nossa sede na <strong className="font-medium text-[#16181A]">Cidade da Beira</strong> (Matacuane),
                juntamente com uma equipa dedicada de pastores e líderes locais — como o Pr. Lucas Vinho e dezenas de líderes
                de células e obreiros —, a Missão Bethel Internacional continua firme no mesmo chamado: anunciar Cristo,
                formar discípulos maduros e ser uma verdadeira família para pertencer.
              </p>
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
            {RECENT_MESSAGES.map((msg) => (
              <div
                key={`${msg.date}-${msg.title}`}
                className="py-4.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
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
        </div>
      </div>
    </section>
  );
}
