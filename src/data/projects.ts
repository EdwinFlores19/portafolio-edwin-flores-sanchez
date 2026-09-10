export interface Project {
  id: string;
  title: string;
  category: 'Flagship' | 'Social ERP' | 'SAP & AI' | 'Fullstack' | 'Data Science' | 'E-Commerce';
  tagline: string;
  awardBadge?: string;
  description: string;
  features: string[];
  image?: string;
  logo?: string;
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  isPrivateCode?: boolean;
  privateCodeBadge?: string;
  techStack: string[];
  metrics?: { label: string; value: string }[];
  featured: boolean;
}

// RIA is the Grand Capstone Winner (Spotlight)
export const flagshipProject: Project = {
  id: "ria-project",
  title: "RIA: Reactive Intelligent Agent",
  category: "Flagship",
  tagline: "Serious Gaming para Educación en Inteligencia Artificial",
  awardBadge: "🏆 1er Lugar — Concurso Capstone USIL 2025",
  description: "Simulador lúdico y formativo desarrollado para democratizar el aprendizaje de Inteligencia Artificial en niños y jóvenes. El sistema implementa una arquitectura de agentes reactivos autónomos con algoritmos de aprendizaje supervisado, capaz de razonar y tomar decisiones adaptativas en tiempo real en función de datasets dinámicos provistos por el usuario.",
  features: [
    "Arquitectura de Agentes Autónomos Reactivos con toma de decisiones estocásticas y guiadas en <16ms.",
    "Entrenamiento pedagógico de modelos supervisados mediante dinámicas interactivas de Serious Gaming.",
    "Diseño modular que desacopla la capa de lógica del simulador respecto al motor gráfico 2D en Unity.",
    "Galardonado con el 1er lugar entre proyectos de titulación e ingeniería por excelencia técnica e innovación."
  ],
  image: "/assets/ria.jpg",
  demoUrl: "https://edwinflores19.github.io/PORTAFOLIO-EDWIN-FLORES-2025-2/#ria-project",
  videoUrl: "https://edwinflores19.github.io/PORTAFOLIO-EDWIN-FLORES-2025-2/URL_VIDEO",
  techStack: ["Unity 2D", "C#", "Python", "Reactive AI Agents", "Supervised Learning", "Game Engine Architecture"],
  metrics: [
    { label: "Puesto Concurso", value: "1er Lugar" },
    { label: "Tiempo de Respuesta", value: "< 16ms" },
    { label: "Impacto Pedagógico", value: "100% Lúdico" }
  ],
  featured: true
};

// Exactly 6 Featured Projects as requested by user
export const projects: Project[] = [
  {
    id: "capesync",
    title: "CapeSync — Plataforma de Voluntariado & ERP",
    category: "Social ERP",
    tagline: "Capellanía Universidad San Ignacio de Loyola (Aldea Westfalia)",
    awardBadge: "❤️ Impacto Social Real en Producción",
    description: "Plataforma integral web progresiva (PWA offline-first) desarrollada para la gestión operativa, logística y de campo de la red solidaria de la Capellanía USIL. Integra portal de voluntarios con carnet digital QR dinámico, convocatorias comunitarias, portal de coordinadores y módulo ERP para control de inventario de donaciones y presupuesto.",
    features: [
      "Carnet Digital con QR dinámico para acreditación inmediata de horas de servicio.",
      "Módulo ERP: control de inventario de donaciones físicas (ropa, alimentos) y fondos de colectas.",
      "Capacidades Offline-First con sincronización en segundo plano para zonas rurales (Santa Eulalia).",
      "Portal administrativo para coordinadores con reportería y asignación de brigadas."
    ],
    image: "/assets/voluntariado.jpg",
    logo: "/assets/vamos-logo.jpg",
    demoUrl: "https://capellania-usil-voluntariado-2026.vercel.app/",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA Offline", "ERP Inventory", "Vercel"],
    metrics: [
      { label: "Voluntarios Activos", value: "+300" },
      { label: "Horas de Servicio", value: "+1,200 hrs" },
      { label: "Transparencia Donaciones", value: "100%" }
    ],
    featured: true
  },
  {
    id: "sap-ai-pipeline",
    title: "Plantillas de Migración de Data & Suite ETL con IA",
    category: "SAP & AI",
    tagline: "Automatización de Carga Masiva y Upgrades para Clínica Internacional & SEIDOR",
    awardBadge: "⚡ Reducción del 80% de Tiempos",
    isPrivateCode: true,
    privateCodeBadge: "🔒 Código Privado / Enterprise Protected",
    description: "Conjunto corporativo de aceleradores y pipelines ETL desarrollados en Python potenciados con IA para la extracción, limpieza semántica, homologación y carga masiva de datos maestros y transaccionales hacia SAP S/4HANA Private Edition. Incorpora agentes autónomos que operan SAP GUI y Fiori de manera desatendida.",
    features: [
      "Pipeline ETL inteligente en Python con validación anticipada contra reglas de customizing SAP.",
      "Agentes de IA autónomos que ejecutan transacciones de carga, recolectan evidencias y generan actas funcionales.",
      "Gestión de cutovers masivos con mock loads automatizados y balance de saldos origen-destino.",
      "Arquitectura diseñada bajo principios Clean Core para garantizar cero impacto en el núcleo ERP."
    ],
    techStack: ["Python", "SAP S/4HANA", "SAP Migration Cockpit", "SAP GUI Scripting", "Clean Core", "Fiori UI5"],
    metrics: [
      { label: "Reducción de Tiempo", value: "80%" },
      { label: "Registros Procesados", value: "+2.5M" },
      { label: "Tasa de Rechazo", value: "< 0.3%" }
    ],
    featured: true
  },
  {
    id: "sportmatch-connect",
    title: "SportMatch Connect",
    category: "Fullstack",
    tagline: "Plataforma comunitaria para match y organización de encuentros deportivos",
    awardBadge: "⚽ Match Deportivo en Tiempo Real",
    description: "Aplicación web colaborativa y dinámica desarrollada en TypeScript para conectar deportistas, reservar espacios y organizar partidos o torneos comunitarios en tiempo real según nivel de habilidad, ubicación geográfica y disponibilidad horaria.",
    features: [
      "Sistema de emparejamiento inteligente de jugadores y equipos según nivel y deporte.",
      "Organización y confirmación de asistencia a partidos en tiempo real.",
      "Arquitectura modular orientada a servicios construida 100% en TypeScript.",
      "Interfaz intuitiva y responsiva optimizada para acceso móvil rápido en canchas deportivas."
    ],
    githubUrl: "https://github.com/jojiz29/sportmatch-connect",
    techStack: ["TypeScript", "React", "Node.js", "Tailwind CSS", "API REST", "Geolocalización"],
    metrics: [
      { label: "Modo de Juego", value: "Tiempo Real" },
      { label: "Lenguaje Core", value: "TypeScript" },
      { label: "Acceso", value: "Web & Mobile" }
    ],
    featured: true
  },
  {
    id: "puka-power-ecommerce",
    title: "Puka Power E-Commerce Web",
    category: "E-Commerce",
    tagline: "Plataforma moderna de comercio electrónico y catálogo interactivo",
    awardBadge: "🛍️ Arquitectura E-Commerce Moderna",
    description: "Tienda online moderna, interactiva y responsiva desarrollada en TypeScript. Incluye catálogo dinámico de productos, carrito de compras con persistencia, cotización de envíos, gestión fluida de estados y diseño centrado en la conversión de usuarios.",
    features: [
      "Catálogo interactivo con filtrado rápido por categorías y precios.",
      "Carrito de compras reactivo con persistencia local y checkout simplificado.",
      "Estructura fuertemente tipada con TypeScript para máxima fiabilidad y escalabilidad.",
      "Experiencia visual de alto impacto adaptada a cualquier tamaño de pantalla."
    ],
    githubUrl: "https://github.com/EdwinFlores19/puka-power-pagweb-ecommerce",
    techStack: ["TypeScript", "React", "Tailwind CSS", "State Management", "E-Commerce", "UI/UX"],
    metrics: [
      { label: "Diseño", value: "100% Responsive" },
      { label: "Tipado", value: "Strict TypeScript" },
      { label: "Carga", value: "< 1s" }
    ],
    featured: true
  },
  {
    id: "migracion-mypes-diae",
    title: "Migración de MYPES con ETL & Analítica con IA",
    category: "Data Science",
    tagline: "Transformación digital y empoderamiento de pequeñas empresas mediante IA",
    awardBadge: "📊 Empoderamiento con Datos & IA",
    description: "Solución de ingeniería de datos desarrollada para la modernización de micro y pequeñas empresas (MYPES) mediante un pipeline ETL automatizado con Inteligencia Artificial. Extrae datos desestructurados de ventas e inventarios tradicionales, los normaliza y genera tableros analíticos e insights predictivos para empoderar la toma de decisiones del negocio con su propia información.",
    features: [
      "Pipeline ETL con algoritmos de IA para estandarización y corrección de datos de ventas heterogéneos.",
      "Generación de reportes analíticos clave para gestión de flujo de caja y demanda de stock.",
      "Diseño de interfaz accesible para comerciantes y dueños de pequeños negocios.",
      "Estrategia de transformación digital orientada a democratizar el uso de la analítica avanzada."
    ],
    githubUrl: "https://github.com/danieliriartehub/ProyectoFinalDIAE-Grupo2",
    techStack: ["Python", "AI ETL Pipeline", "Data Analytics", "CSS3", "Business Intelligence", "Machine Learning"],
    metrics: [
      { label: "Enfoque", value: "Empoderamiento MYPE" },
      { label: "Motor", value: "ETL con IA" },
      { label: "Impacto", value: "Decisiones con Datos" }
    ],
    featured: true
  },
  {
    id: "mvp-predirent",
    title: "MVP PrediRent 2025 — Predicción de Rentas",
    category: "Data Science",
    tagline: "Conectando arrendadores y arrendatarios con predicción inteligente de precios",
    awardBadge: "🏠 PropTech & Predicción Inteligente",
    description: "Plataforma PropTech interactiva desarrollada en JavaScript que conecta a propietarios de inmuebles con personas que buscan alquilar. Incorpora un motor de predicción y estimación de precios de renta basado en características de la propiedad, ubicación geográfica, servicios cercanos y tendencias del mercado inmobiliario.",
    features: [
      "Algoritmo predictivo de estimación de rentas justas según metraje, ubicación y amenidades.",
      "Conexión directa y transparente entre arrendadores y potenciales inquilinos.",
      "Filtros de búsqueda avanzada y visualización ágil de inmuebles disponibles.",
      "Prototipo funcional validado para el ecosistema inmobiliario urbano."
    ],
    githubUrl: "https://github.com/EdwinFlores19/MVP-PREDIRENT-2025",
    techStack: ["JavaScript", "Node.js", "PropTech", "Predictive Analytics", "Algoritmos de Rentas", "Web App"],
    metrics: [
      { label: "Mercado", value: "Inmobiliario / PropTech" },
      { label: "Modelo", value: "Predicción de Rentas" },
      { label: "Conexión", value: "Directa & Ágil" }
    ],
    featured: true
  }
];
