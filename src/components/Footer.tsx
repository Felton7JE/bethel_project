import { CHURCH_INFO, buildWhatsAppUrl } from '../data/churchData';

export function Footer() {
  const prayerWhatsApp = buildWhatsAppUrl(
    'Olá, a paz! Gostaria de partilhar um pedido de oração com a equipa da Missão Bethel Internacional.'
  );

  return (
    <footer className="bg-[#0F3C5C] text-[#FAF8F5]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#FAF8F5]/15">
          {/* Brand & Motto */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#154F77] ring-1 ring-[#FAF8F5]/25">
                <img
                  src="/images/logo-bethel.jpg"
                  alt={CHURCH_INFO.name}
                  className="h-full w-full object-cover"
                />
              </span>
              <div>
                <p className="text-[15.5px] font-semibold tracking-[-0.01em] text-[#FAF8F5]">
                  {CHURCH_INFO.name}
                </p>
                <p className="text-[12.5px] text-[#FAF8F5]/70">
                  {CHURCH_INFO.city}, {CHURCH_INFO.province} — {CHURCH_INFO.country}
                </p>
              </div>
            </div>

            <p className="mt-6 font-serif text-2xl italic text-[#FAF8F5]/95 max-w-sm">
              “{CHURCH_INFO.motto}.”
            </p>

            <div className="mt-6">
              <a
                href={prayerWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[2px] border border-[#FAF8F5]/30 px-4 py-2.5 text-[13px] font-medium text-[#FAF8F5] hover:bg-[#FAF8F5] hover:text-[#0F3C5C] transition-colors"
              >
                <span>Enviar pedido de oração (WhatsApp)</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Schedule & Location */}
          <div className="md:col-span-4 space-y-5 text-[14px]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#FAF8F5]/60 font-medium">
                Horários dos Cultos
              </p>
              <p className="mt-2 text-[#FAF8F5]/90 tabular-nums">
                Domingos (Culto de Família): 10h00 — 12h00
              </p>
              <p className="mt-1 text-[#FAF8F5]/90 tabular-nums">
                Quartas-feiras (Ensino & Oração): 18h00 — 20h00
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#FAF8F5]/60 font-medium">
                Morada & Contacto
              </p>
              <p className="mt-2 text-[#FAF8F5]/90">{CHURCH_INFO.address}</p>
              <p className="mt-0.5 text-[#FAF8F5]/70 text-[13px]">
                {CHURCH_INFO.city}, {CHURCH_INFO.country}
              </p>
              <p className="mt-2 text-[#FAF8F5] font-medium tabular-nums">
                {CHURCH_INFO.phoneDisplay}
              </p>
            </div>
          </div>

          {/* Navigation & Official Socials */}
          <div className="md:col-span-3 flex flex-col justify-between gap-6 text-[14px]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#FAF8F5]/60 font-medium">
                Canais Oficiais
              </p>
              <ul className="mt-2.5 space-y-2 text-[#FAF8F5]/85">
                <li>
                  <a
                    href={CHURCH_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram (@missaobethel) ↗
                  </a>
                </li>
                <li>
                  <a
                    href={CHURCH_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Facebook (Bethel na Cidade) ↗
                  </a>
                </li>
                <li>
                  <a
                    href={CHURCH_INFO.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    YouTube ↗
                  </a>
                </li>
                <li>
                  <a
                    href={CHURCH_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Google Maps ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-7 flex flex-wrap items-center justify-between gap-4 text-[12px] text-[#FAF8F5]/60">
          <p>
            © {new Date().getFullYear()} {CHURCH_INFO.name} — Cidade da Beira, Moçambique.
          </p>
          <p>Matacuane · Rua Pêro da Covilhã</p>
        </div>
      </div>
    </footer>
  );
}
