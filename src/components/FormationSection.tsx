import { FORMATION_COURSES, buildWhatsAppUrl } from '../data/churchData';

export function FormationSection() {
  const generalCoursesWhatsApp = buildWhatsAppUrl(
    'Olá, a paz! Gostaria de saber informações sobre o calendário do Curso de Teologia e da Escola do Reino na Missão Bethel.'
  );

  return (
    <section id="formacao" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pb-12">
          <div className="lg:col-span-4">
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#787670] tabular-nums">
              04 — Ensino & Discipulado
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-[2.35rem] leading-[1.12] tracking-[-0.015em] font-normal text-[#16181A]">
              Teologia & <em className="italic">Escola do Reino</em>.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-end">
            <p className="text-[15.5px] leading-[1.7] text-[#585A5D] max-w-2xl">
              Uma fé madura constrói-se sobre raízes profundas na Palavra e num coração curado. A
              Missão Bethel oferece percursos estruturados de ensino teológico, formação de líderes
              e restauração emocional para servir a igreja local e a cidade da Beira.
            </p>
          </div>
        </div>

        {/* Academic / Editorial Syllabus List */}
        <div className="border-t border-[#16181A] divide-y divide-[#E2DDD4] border-b border-b-[#E2DDD4]">
          {FORMATION_COURSES.map((course) => {
            const courseWhatsApp = buildWhatsAppUrl(
              `Olá, a paz! Gostaria de saber informações e próximas turmas do curso "${course.title}" (${course.track}) na Missão Bethel Internacional.`
            );

            return (
              <article
                key={course.number}
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start"
              >
                {/* Course Number & Track */}
                <div className="lg:col-span-3 flex lg:flex-col items-baseline lg:items-start justify-between gap-3">
                  <span className="font-serif text-3xl text-[#154F77] tabular-nums leading-none">
                    {course.number}
                  </span>
                  <span className="text-[11.5px] uppercase tracking-[0.1em] text-[#787670] font-medium">
                    {course.track}
                  </span>
                </div>

                {/* Course Details */}
                <div className="lg:col-span-6">
                  <h3 className="font-serif text-2xl sm:text-[1.6rem] text-[#16181A] font-normal leading-snug">
                    {course.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] font-medium text-[#16181A]/85">
                    {course.subtitle}
                  </p>
                  <p className="mt-3 text-[14.5px] leading-[1.68] text-[#585A5D]">
                    {course.description}
                  </p>

                  {/* Inline Editorial Syllabus Topics */}
                  <p className="mt-4 text-[12.5px] text-[#787670]">
                    <span className="uppercase tracking-[0.08em] font-medium text-[#585A5D]">
                      Eixos:{' '}
                    </span>
                    {course.topics.join('  ·  ')}
                  </p>
                </div>

                {/* Direct Course Inquiry */}
                <div className="lg:col-span-3 lg:text-right pt-1">
                  <a
                    href={courseWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link text-[13.5px] font-medium text-[#154F77]"
                  >
                    <span>Consultar próxima turma</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer Note for Courses */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[13.5px] text-[#585A5D]">
          <span>
            As inscrições e informações sobre calendário letivo são acompanhadas pela secretaria da igreja.
          </span>
          <a
            href={generalCoursesWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#16181A] underline underline-offset-4 decoration-[#16181A]/35 hover:decoration-[#16181A]"
          >
            Falar com a secretaria de ensino no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
