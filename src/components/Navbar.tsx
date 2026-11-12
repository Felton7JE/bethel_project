import { useState } from 'react';
import { CHURCH_INFO, buildWhatsAppUrl } from '../data/churchData';

const NAV_LINKS = [
  { label: 'Cultos', href: '#encontros' },
  { label: 'Filiais', href: '#filiais' },
  { label: 'Células', href: '#celulas' },
  { label: 'Cursos', href: '#formacao' },
  { label: 'Missão', href: '#missao' },
  { label: 'Sobre', href: '#sobre' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const visitWhatsApp = buildWhatsAppUrl(
    'Olá, a paz! Gostaria de planear uma visita à Missão Bethel Internacional na Beira.'
  );

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E2DDD4]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-18 items-center justify-between gap-6">
          {/* Official Brand Lockup */}
          <a
            href="#inicio"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label={CHURCH_INFO.name}
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#154F77] ring-1 ring-[#154F77]/20">
              <img
                src="/images/logo-bethel.jpg"
                alt="Selo Missão Bethel Internacional"
                className="h-full w-full object-cover"
              />
            </span>
            <div className="leading-tight">
              <span className="block text-[14.5px] font-semibold tracking-[-0.01em] text-[#16181A] group-hover:text-[#154F77] transition-colors">
                {CHURCH_INFO.name}
              </span>
              <span className="block text-[11.5px] text-[#787670] tracking-[0.02em]">
                {CHURCH_INFO.city}, {CHURCH_INFO.country}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13.5px] text-[#585A5D] hover:text-[#16181A] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={visitWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[2px] bg-[#154F77] px-4 py-2 text-[13px] font-medium text-[#FAF8F5] hover:bg-[#0D3551] transition-colors"
            >
              Planear Visita
            </a>
          </div>

          {/* Editorial Text Menu Toggle (Mobile) */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden py-1.5 px-2.5 text-[13px] font-medium tracking-[0.04em] uppercase text-[#16181A] border border-[#E2DDD4] rounded-[2px]"
            aria-expanded={menuOpen}
            aria-label="Alternar menu de navegação"
          >
            {menuOpen ? 'Fechar' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Editorial Drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E2DDD4] bg-[#FAF8F5] px-5 pt-4 pb-7">
          <nav className="flex flex-col divide-y divide-[#E2DDD4]/80" aria-label="Menu móvel">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3.5 font-serif text-xl text-[#16181A] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="font-sans text-sm text-[#787670]">→</span>
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-[#E2DDD4] flex flex-col gap-3">
            <p className="text-[12px] uppercase tracking-[0.08em] text-[#787670] tabular-nums">
              Domingo 10h–12h · Quarta 18h–20h
            </p>
            <a
              href={visitWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex justify-center items-center rounded-[2px] bg-[#154F77] px-4 py-3 text-[13.5px] font-medium text-[#FAF8F5]"
            >
              Falar no WhatsApp ({CHURCH_INFO.phoneDisplay})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
