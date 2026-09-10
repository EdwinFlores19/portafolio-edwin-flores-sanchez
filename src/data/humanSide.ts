export interface HumanSideItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Impacto Social' | 'Arte & Disciplina' | 'Mentoría' | 'Comunicación';
  description: string;
  highlights: string[];
  image?: string;
  quote?: string;
}

export const humanSideItems: HumanSideItem[] = [
  {
    id: "voluntariado-cape",
    title: "Voluntariado CAPE & CapeSync",
    subtitle: "Servicio activo en Aldea Infantil Westfalia Kinderdorf",
    category: "Impacto Social",
    description: "Liderazgo comunitario y acompañamiento formativo en Santa Eulalia junto a la Capellanía USIL. Además de las jornadas de voluntariado presencial con niños en situación de vulnerabilidad, diseñé y construí la plataforma tecnológica CapeSync para optimizar el control de inscripciones, carnets digitales e inventarios de donaciones.",
    highlights: [
      "Acompañamiento pedagógico y emocional en talleres recreativos.",
      "Desarrollo de la plataforma CapeSync (PWA Offline-first).",
      "Transformar la empatía y los valores cristianos en soluciones concretas."
    ],
    image: "/assets/voluntariado.jpg",
    quote: "La empatía y la vocación de servicio son la base para liderar equipos humanos excepcionales."
  },
  {
    id: "elenco-danzas-usil",
    title: "Elenco de Danzas USIL",
    subtitle: "El arte que complementa y potencia la ingeniería",
    category: "Arte & Disciplina",
    description: "Miembro activo del elenco oficial de danzas folclóricas de la USIL. La danza exige una sincronización milimétrica, memoria espacial y un trabajo en equipo riguroso, cualidades que traslado directamente a la arquitectura de proyectos de alta presión.",
    highlights: [
      "Disciplina escénica, coordinación y ritmo bajo estrés.",
      "Trabajo armónico en equipo donde cada movimiento individual impacta en el colectivo.",
      "Orgullo por la identidad y difusión del patrimonio cultural peruano."
    ],
    image: "/assets/danza.jpg",
    quote: "La rigurosidad del código se perfecciona con la sensibilidad y coordinación del arte."
  },
  {
    id: "mentoria-capacitacion",
    title: "Liderazgo & Mentoría SAP",
    subtitle: "Multiplicando el conocimiento en el ecosistema empresarial",
    category: "Mentoría",
    description: "Capacitador oficial de usuarios clave en proyectos mineros (STRACON, Antamina) e instructor de trainees en consultoría. Enseñar conceptos complejos como estructuras PEP/WBS, Clean Core y parametrizaciones de MM con un enfoque claro y pedagógico.",
    highlights: [
      "Capacitación de usuarios clave para adopción sin fricción en S/4HANA Private Edition.",
      "Mentoría técnica a nuevos talentos en navegación SAP GUI, Fiori y migración.",
      "Facilitador de talleres de IA y adopción de SAP Joule."
    ],
    quote: "El verdadero dominio de un sistema se demuestra en la capacidad de hacerlo comprensible para los demás."
  }
];
