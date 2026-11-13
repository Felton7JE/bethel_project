export interface GatheringItem {
  id: string;
  day: string;
  time: string;
  title: string;
  description: string;
  note: string;
}

export interface BranchItem {
  id: string;
  name: string;
  zone: string;
  role: string;
  detail: string;
  isHeadquarters?: boolean;
}

export interface CourseItem {
  number: string;
  track: 'Formação Teológica' | 'Escola do Reino';
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
}

export interface InitiativeItem {
  tag: string;
  title: string;
  location: string;
  description: string;
  image?: string;
  imageCaption?: string;
}

export interface SermonItem {
  date: string;
  title: string;
  preacher: string;
  series: string;
}

export const CHURCH_INFO = {
  name: 'Missão Bethel Internacional',
  shortName: 'Missão Bethel',
  motto: 'Uma família para pertencer',
  city: 'Beira',
  province: 'Sofala',
  country: 'Moçambique',
  address: 'Rua Pêro da Covilhã, Bairro de Matacuane',
  landmark: 'Próximo à Paróquia São João Baptista — Matacuane, Beira',
  coordinatesLabel: '19°50\'42"S · 34°51\'35"E',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=-19.8451,34.8598',
  phoneDisplay: '+258 84 897 0483',
  whatsappNumber: '258848970483',
  foundedMozambiqueYear: '2003',
  socials: {
    facebook: 'https://www.facebook.com/betheligrejadacidade',
    instagram: 'https://www.instagram.com/missaobethel/',
    youtube: 'https://www.youtube.com/@betheligrejanacidade7298',
  },
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${CHURCH_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WEEKLY_GATHERINGS: GatheringItem[] = [
  {
    id: 'domingo',
    day: 'Domingo',
    time: '10h00 — 12h00',
    title: 'Culto de Família',
    description:
      'A nossa celebração principal da semana. Reunimo-nos como igreja de todas as gerações para adorar a Deus, partilhar a comunhão da mesa e ouvir a exposição bíblica da Palavra.',
    note: 'Acolhimento de visitantes e espaço dedicado às crianças durante o culto.',
  },
  {
    id: 'quarta',
    day: 'Quarta-feira',
    time: '18h00 — 20h00',
    title: 'Culto de Quarta',
    description:
      'Um tempo de paragem a meio da semana dedicado à oração intercessória, ao ensino aprofundado das Escrituras e ao renovo espiritual da igreja.',
    note: 'Aberto a toda a comunidade — Rua Pêro da Covilhã, Matacuane.',
  },
];

export const VISITOR_NOTES = [
  {
    question: 'Como chegar à sede em Matacuane?',
    answer:
      'Estamos situados na Rua Pêro da Covilhã, no bairro de Matacuane (próximo à Paróquia São João Baptista), numa zona central e acessível de chapa, txopela ou viatura própria.',
  },
  {
    question: 'Vou pela primeira vez. O que esperar?',
    answer:
      'Não há formalidades rígidas. Venha como se sentir confortável — a nossa equipa de acolhimento estará à porta para recebê-lo, orientar a sua família e responder a qualquer dúvida.',
  },
  {
    question: 'Há acompanhamento para crianças?',
    answer:
      'Sim. No Culto de Família aos domingos (10h00–12h00), as crianças são acompanhadas num ambiente seguro, alegre e adaptado à sua idade.',
  },
];

/**
 * Filiais / Congregações físicas da Igreja Missão Bethel Internacional
 * (Templos e locais próprios de culto — distintos das células nas casas).
 */
export const CHURCH_BRANCHES: BranchItem[] = [
  {
    id: 'matacuane',
    name: 'Matacuane',
    zone: 'Posto Administrativo Central · Beira',
    role: 'Igreja Sede',
    detail: 'Rua Pêro da Covilhã (próximo à Paróquia São João Baptista). Cultos aos domingos (10h–12h) e quartas (18h–20h).',
    isHeadquarters: true,
  },
  {
    id: 'munhava',
    name: 'Munhava',
    zone: 'Posto Administrativo da Munhava · Beira',
    role: 'Filial Bethel',
    detail: 'Congregação local da Missão Bethel presente numa das zonas mais populosas e vibrantes da cidade.',
  },
  {
    id: 'praia-nova',
    name: 'Praia Nova',
    zone: 'Zona Costeira Central · Beira',
    role: 'Filial Bethel',
    detail: 'Congregação local servindo famílias e moradores junto à faixa costeira e comercial do centro da Beira.',
  },
  {
    id: 'mascarenhas',
    name: 'Mascarenhas',
    zone: 'Posto Administrativo de Manga-Loforte · Beira',
    role: 'Filial Bethel',
    detail: 'Templo local da Missão Bethel no bairro Mascarenhas, alcançando as famílias do eixo norte da cidade.',
  },
  {
    id: 'sofala-outros',
    name: 'Mafambisse & Outras Filiais',
    zone: 'Corredor do Dondo & Província de Sofala',
    role: 'Expansão & Missões',
    detail: 'Outras igrejas e congregações plantadas pela Missão Bethel na cidade e no interior da província de Sofala.',
  },
];

/**
 * Bairros residenciais da Cidade da Beira onde funcionam Células (pequenos grupos nas casas).
 */
export const CELL_NEIGHBORHOODS = [
  'Palmeiras',
  'Matacuane',
  'Ponta-Gêa',
  'Macuti',
  'Esturro / Chipangara',
  'Chaimite / Pioneiros',
  'Manga / Alto da Manga',
  'Munhava',
  'Mascarenhas',
  'Outro bairro na Beira',
] as const;

export const FORMATION_COURSES: CourseItem[] = [
  {
    number: '01',
    track: 'Formação Teológica',
    title: 'Curso de Teologia',
    subtitle: 'Preparo bíblico, doutrinário e vocacional para obreiros, líderes e membros.',
    description:
      'Nascido da convicção de que cada cristão e líder local em Moçambique merece acesso a uma formação bíblica sólida. O curso aprofunda o conhecimento sistemático das Escrituras, a sã doutrina e a prática pastoral.',
    topics: ['Interpretação Bíblica', 'Teologia Sistemática', 'História & Missão da Igreja', 'Ministério Prático'],
  },
  {
    number: '02',
    track: 'Escola do Reino',
    title: 'Fundamentos e Princípios',
    subtitle: 'Os alicerces inegociáveis da fé cristã e da cultura do Reino de Deus.',
    description:
      'O ponto de partida na Escola do Reino. Trabalha as bases da salvação, a identidade de filhos em Cristo, a renovação da mente, as disciplinas espirituais e o significado real de caminhar em família espiritual.',
    topics: ['Identidade em Cristo', 'Vida Devocional & Oração', 'Princípios do Reino', 'Vida em Comunidade'],
  },
  {
    number: '03',
    track: 'Escola do Reino',
    title: 'Líderes com Propósito',
    subtitle: 'Formação de líderes servos guiados pelos propósitos eternos de Deus.',
    description:
      'Desenvolve o carácter cristão e as competências pastorais de quem serve em células e ministérios — alinhando vida pessoal, adoração, comunhão, discipulado, serviço e missão.',
    topics: ['Carácter do Líder Servo', 'Condução de Células', 'Cuidado & Discipulado', 'Visão por Propósitos'],
  },
  {
    number: '04',
    track: 'Escola do Reino',
    title: 'Trauma (Cura das Feridas do Coração)',
    subtitle: 'Restauração emocional e espiritual à luz da Palavra de Deus.',
    description:
      'Um curso pastoral profundamente humano, pensado para a nossa realidade. Une verdades bíblicas e acolhimento seguro para ajudar pessoas a processar luto, perdas, dores familiares e feridas profundas, formando também agentes de cura na comunidade.',
    topics: ['Escuta Segura & Acolhimento', 'Superação do Luto e da Dor', 'Perdão & Reconciliação', 'Restauração Interior'],
  },
];

export const MISSION_INITIATIVES: InitiativeItem[] = [
  {
    tag: 'Capacitação de Lideranças',
    title: 'Inspire Conference Moçambique',
    location: 'Sede da Missão Bethel — Beira',
    description:
      'Conferência realizada na nossa sede na Beira para treinar, encorajar e equipar pastores e líderes de diversas regiões que plantam igrejas e servem comunidades sem acesso formal a seminários.',
    image: '/images/culto-beira.jpg',
    imageCaption: 'Plenária na nave da Missão Bethel Internacional na Cidade da Beira.',
  },
  {
    tag: 'Educação & Nutrição Infantil',
    title: 'Projeto Pré-Escolar "Joias da África"',
    location: 'Mafambisse & Sofala · AME Moçambique',
    description:
      'Iniciativa educacional e humanitária voltada para crianças em situação de vulnerabilidade, garantindo alfabetização pré-escolar, refeições diárias no combate à desnutrição, apoio básico de saúde e ensino cristão.',
    image: '/images/joias-da-africa.jpg',
    imageCaption: 'Crianças acompanhadas pelos projetos educacionais e comunitários em Sofala.',
  },
  {
    tag: 'Compaixão na Cidade',
    title: 'Natal Solidário & Resposta Humanitária',
    location: 'Bairros da Cidade da Beira',
    description:
      'A fé expressa em obras concretas: campanhas anuais como o Natal Solidário junto a idosos e famílias carenciadas da Beira, além da mobilização permanente de socorro comunitário em tempos de crise.',
    image: '/images/acao-comunitaria.jpg',
    imageCaption: 'Equipa missionária e agentes locais em ação de apoio comunitário na Beira.',
  },
];

export interface CommunitySlideItem {
  id: string;
  image: string;
  title: string;
  category: string;
  caption: string;
}

export const COMMUNITY_CAROUSEL_SLIDES: CommunitySlideItem[] = [
  {
    id: 'pr-lucrecio',
    image: '/images/pr-lucrecio-culto.jpg',
    category: 'Culto da Família',
    title: 'Ministração da Palavra & Liderança Local',
    caption: 'Pr. Lucrécio ministrando no Culto da Família: "Assumindo sua nova identidade" — mensagens bíblicas focadas no amadurecimento e renovação em Cristo.',
  },
  {
    id: 'juventude-bethel',
    image: '/images/jovens-comunhao-beira.jpg',
    category: 'Juventude & Comunhão',
    title: 'Uma Geração Viva e Unida',
    caption: 'Momentos de oração, louvor e verdadeira comunhão entre os jovens e a liderança da Missão Bethel na Cidade da Beira.',
  },
  {
    id: 'ministerio-infantil',
    image: '/images/ministerio-infantil-bethel.jpg',
    category: 'Ministério Infantil',
    title: 'Ensino Bíblico das Crianças',
    caption: 'Espaço formativo para a infância: "Deus da sabedoria a quem pede" (Tiago 1:5) — discipulando a próxima geração com amor e alegria.',
  },
  {
    id: 'cuidado-comunitario',
    image: '/images/cuidado-pastoral-comunidade.jpg',
    category: 'Acolhimento & Família',
    title: 'Cuidado Pastoral e Abraço Comunitário',
    caption: 'Uma igreja calorosa e acolhedora, onde cada família e cada criança é recebida com carinho, oração e atenção genuína.',
  },
];

export const RECENT_MESSAGES: SermonItem[] = [
  {
    date: '08 Nov 2026',
    title: 'Conquistas inéditas: Jacó, descubra o poder da renúncia',
    preacher: 'Pra. Cremilde Andrade',
    series: 'Culto de Família',
  },
  {
    date: 'Ano 2026',
    title: 'Assumindo sua nova identidade',
    preacher: 'Pr. Lucrécio',
    series: 'Culto da Família',
  },
  {
    date: '06 Set 2026',
    title: 'Vencendo as dúvidas',
    preacher: 'Pra. Cremilde Andrade',
    series: 'Culto de Família',
  },
  {
    date: '30 Ago 2026',
    title: 'Edificando a casa sobre a Rocha',
    preacher: 'Pra. Cremilde Andrade',
    series: 'Culto de Família',
  },
  {
    date: '23 Ago 2026',
    title: 'Vencendo em Jesus',
    preacher: 'Pr. Flávio Andrade',
    series: 'Culto de Família',
  },
  {
    date: '16 Ago 2026',
    title: 'Comunhão e propósito em família',
    preacher: 'Pr. Lucas Vinho',
    series: 'Culto de Família',
  },
];
