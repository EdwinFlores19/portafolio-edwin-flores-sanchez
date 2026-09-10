export interface Reference {
  name: string;
  role: string;
  company: string;
  phone: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  detail: string;
  badge?: string;
}

export interface ProfileData {
  name: string;
  fullName: string;
  title: string;
  subtitle: string;
  pitch: string;
  status: string;
  availability: 'Available' | 'Consulting' | 'Immediate';
  location: string;
  timezone: string;
  email: string;
  phone: string;
  whatsappLink: string;
  linkedin: string;
  github: string;
  stats: {
    projectsCount: string;
    yearsExperience: string;
    timeReductionMetric: string;
    satisfactionRate: string;
  };
  education: Education[];
  references: Reference[];
}

export const profile: ProfileData = {
  name: "Edwin Flores",
  fullName: "Edwin Junior Flores Sanchez",
  title: "Consultor Funcional SAP S/4HANA & Ingeniero de Sistemas",
  subtitle: "Construyendo el puente entre SAP Enterprise Architecture e Inteligencia Artificial",
  pitch: "Consultor Funcional SAP S/4HANA e Ingeniero de Sistemas de Información con trayectoria en más de 20 proyectos empresariales (Greenfield, Bluefield, Rollouts, Upgrades y Clean Core). Especialista en MM, FICO, PS y SD, con liderazgo comprobado en la integración de Agentes de IA y Pipelines ETL en Python que redujeron en un 80% los tiempos de migración de datos corporativos.",
  status: "🟢 Sistema Operativo — Disponible para Consultoría SAP & Proyectos de Innovación con IA",
  availability: "Available",
  location: "Lima, Perú",
  timezone: "PET (UTC-5)",
  email: "ejuniorfloress@gmail.com",
  phone: "(+51) 910 193 590",
  whatsappLink: "https://wa.me/51910193590?text=Hola%20Edwin,%20revis%C3%A9%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.",
  linkedin: "https://www.linkedin.com/in/edwin-junior-flores-sanchez",
  github: "https://github.com/EdwinFlores19",
  stats: {
    projectsCount: "+20 Proyectos",
    yearsExperience: "+2 Años",
    timeReductionMetric: "80% Reducción con IA",
    satisfactionRate: "100% Clean Core"
  },
  education: [
    {
      degree: "Ingeniería de Sistemas de Información",
      institution: "Universidad San Ignacio de Loyola (USIL)",
      period: "2021 – 2026",
      detail: "Estudios culminados en Tercio Superior. Formación integral en arquitectura empresarial, desarrollo de software y gestión estratégica.",
      badge: "🎓 Tercio Superior"
    },
    {
      degree: "Mención en Emprendimiento e Innovación Tecnológica",
      institution: "Universidad San Ignacio de Loyola (USIL)",
      period: "2024 – 2026",
      detail: "Enfoque en desarrollo de productos tecnológicos de alto impacto, serious games y validación ágil.",
      badge: "🚀 Innovación"
    },
    {
      degree: "Inglés Avanzado",
      institution: "Asociación Cultural Peruano Británica / PUCP",
      period: "Mar. 2026 – Actualidad",
      detail: "Dominio fluido para colaboración e interlocución técnica en entornos multiculturales y equipos globales.",
      badge: "🌐 Global Ready"
    }
  ],
  references: [
    {
      name: "Roger Vargas",
      role: "Gerente de Proyectos",
      company: "Seidor Consulting",
      phone: "(+51) 938 726 177"
    }
  ]
};
