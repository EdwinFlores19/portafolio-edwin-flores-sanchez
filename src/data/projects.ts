export interface Project {
  id: string;
  title: string;
  category: 'Flagship' | 'Social ERP' | 'SAP & AI' | 'Data Science' | 'Engineering';
  tagline: string;
  awardBadge?: string;
  description: string;
  features: string[];
  image?: string;
  logo?: string;
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  techStack: string[];
  metrics?: { label: string; value: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "ria-project",
    title: "RIA: Reactive Intelligent Agent",
    category: "Flagship",
    tagline: "Serious Gaming para Educación en Inteligencia Artificial",
    awardBadge: "🏆 1er Lugar — Concurso Capstone USIL 2025",
    description: "Simulador lúdico y formativo desarrollado para democratizar el aprendizaje de Inteligencia Artificial en niños y jóvenes. El sistema implementa una arquitectura de agentes reactivos autónomos con algoritmos de aprendizaje supervisado, capaz de razonar y tomar decisiones adaptativas en tiempo real en función de datasets dinámicos provistos por el usuario.",
    features: [
      "Arquitectura de Agentes Autónomos Reactivos con toma de decisiones estocásticas y guiadas.",
      "Entrenamiento pedagógico de modelos supervisados mediante dinámicas de Serious Gaming.",
      "Diseño modular que desacopla la capa de lógica del simulador respecto al motor gráfico 2D.",
      "Galardonado con el 1er lugar entre proyectos de titulación e ingeniería por excelencia técnica e innovación."
    ],
    image: "/assets/ria.jpg",
    demoUrl: "https://edwinflores19.github.io/PORTAFOLIO-EDWIN-FLORES-2025-2/#ria-project",
    videoUrl: "https://edwinflores19.github.io/PORTAFOLIO-EDWIN-FLORES-2025-2/URL_VIDEO",
    techStack: ["Unity 2D", "C#", "Python", "Reactive AI Agents", "Supervised Learning", "Game Engine Architecture"],
    metrics: [
      { label: "Puesto Concurso", value: "1er Lugar" },
      { label: "Tiempo de Respuesta Agente", value: "< 16ms" },
      { label: "Impacto Pedagógico", value: "100% Lúdico" }
    ],
    featured: true
  },
  {
    id: "capesync",
    title: "CapeSync — Plataforma de Gestión de Voluntariado & ERP",
    category: "Social ERP",
    tagline: "Capellanía Universidad San Ignacio de Loyola",
    awardBadge: "❤️ Impacto Social Real en Aldea Westfalia",
    description: "Plataforma integral web progresiva (PWA offline-first) diseñada y construida para la gestión operativa y logística de la red solidaria de la Capellanía USIL. Integra un portal público para voluntarios con emisión de carnet digital por QR, control de convocatorias, portal de coordinadores y un módulo ERP para control de inventario de donaciones físicas y presupuesto de campo.",
    features: [
      "Carnet Digital con QR dinámico para verificación y acreditación de horas de servicio.",
      "Módulo ERP integral: control de inventario de donaciones (ropa, alimentos, libros) y fondos.",
      "Capacidades Offline-First con sincronización en segundo plano para zonas sin cobertura móvil (Santa Eulalia).",
      "Portal administrativo para coordinadores de brigadas con tableros de métricas en tiempo real."
    ],
    image: "/assets/voluntariado.jpg",
    logo: "/assets/vamos-logo.jpg",
    demoUrl: "https://capellania-usil-voluntariado-2026.vercel.app/",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA Service Workers", "ERP Logic", "Vercel"],
    metrics: [
      { label: "Voluntarios Beneficiados", value: "+300" },
      { label: "Horas de Servicio Registradas", value: "+1,200 hrs" },
      { label: "Transparencia de Donaciones", value: "100%" }
    ],
    featured: true
  },
  {
    id: "sap-ai-pipeline",
    title: "Enterprise AI Pipeline & Agentes Autónomos para SAP",
    category: "SAP & AI",
    tagline: "Automatización de Upgrades y Carga Masiva para Clínica Internacional",
    awardBadge: "⚡ Reducción del 80% de Tiempos",
    description: "Conjunto de aceleradores técnicos y agentes inteligentes construidos en Python para automatizar el ciclo completo de migración de datos hacia SAP S/4HANA Private Edition. Sustituyó la extracción manual de legados y validaciones artesanales mediante pipelines de limpieza automática, mapeo a Migration Cockpit y agentes que operan SAP GUI y SAP Fiori de forma desatendida.",
    features: [
      "Pipeline ETL inteligente en Python con validación anticipada contra reglas de customizing SAP.",
      "Agentes de IA autónomos que ejecutan transacciones de carga, recolectan evidencias y generan actas funcionales.",
      "Gestión de cutovers masivos con mock loads automatizados y balance de saldos origen-destino.",
      "Arquitectura diseñada bajo principios Clean Core para garantizar cero impacto en el núcleo ERP."
    ],
    techStack: ["Python", "SAP S/4HANA", "SAP Migration Cockpit", "SAP GUI Scripting", "Clean Core", "Fiori UI5"],
    metrics: [
      { label: "Reducción de Tiempo", value: "80%" },
      { label: "Registros Procesados", value: "+2.5 Millones" },
      { label: "Tasa de Rechazo Residual", value: "< 0.3%" }
    ],
    featured: true
  },
  {
    id: "house-prices-streamlit",
    title: "Análisis Estadístico & Predictivo de Viviendas",
    category: "Data Science",
    tagline: "Dashboard interactivo con Python & Machine Learning",
    description: "Aplicación interactiva de análisis exploratorio de datos (EDA) y modelado predictivo de precios inmobiliarios. Cuenta con gráficos interactivos, correlaciones multidimensionales y estimación de precios con modelos de regresión.",
    features: [
      "Visualización interactiva con Seaborn y Matplotlib dentro de Streamlit.",
      "Detección de outliers y normalización de distribuciones sesgadas.",
      "Previsión de valor comercial basada en características físicas del inmueble."
    ],
    githubUrl: "https://github.com/EdwinFlores19/Analisis-Estadistico-House-Prices-Streamlit",
    techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Seaborn", "Scikit-Learn"],
    metrics: [
      { label: "Variables Analizadas", value: "+79" },
      { label: "Interactividad", value: "Tiempo Real" }
    ],
    featured: false
  },
  {
    id: "billar-physics-engine",
    title: "Simulador de Billar 2D con Motor de Físicas",
    category: "Engineering",
    tagline: "Cálculo de colisiones elásticas en tiempo real",
    description: "Simulador de juego de billar desarrollado en Python con Pygame. Incorpora un motor de física 2D que modela con fidelidad la elasticidad de los choques, fricción de la tela y transmisión de momento vectorial.",
    features: [
      "Detección y resolución precisa de colisiones círculo-círculo y círculo-segmento.",
      "Simulación de fuerza, ángulo de taco y desaceleración por rozamiento cinético.",
      "Renderizado visual a 60 FPS con feedback táctil y trayectorias predictivas."
    ],
    githubUrl: "https://github.com/EdwinFlores19/billar-python-20072025",
    techStack: ["Python", "Pygame", "Vector Physics", "Algorithms"],
    metrics: [
      { label: "Precisión Física", value: "Vector 2D" },
      { label: "FPS Estables", value: "60 FPS" }
    ],
    featured: false
  },
  {
    id: "portafolio-v2-astro",
    title: "Portafolio Personal High-Performance v2",
    category: "Engineering",
    tagline: "Arquitectura web ultrarrápida con Astro & Tailwind",
    description: "Versión previa de portafolio profesional diseñada para obtener calificaciones perfectas en Lighthouse (100 Performance, 100 Accesibilidad, 100 SEO), sirviendo como base para este nuevo sistema.",
    features: [
      "Arquitectura de componentes estáticos con hidratación parcial.",
      "Diseño responsivo optimizado para navegación móvil y desktop.",
      "Configuración CI/CD automatizada para despliegue en GitHub Pages."
    ],
    githubUrl: "https://github.com/EdwinFlores19/Portafolio-Edwin-Flores-2025",
    demoUrl: "https://edwinflores19.github.io/Portafolio-Edwin-Flores-2025/",
    techStack: ["Astro", "React", "Tailwind CSS", "TypeScript"],
    metrics: [
      { label: "Lighthouse Performance", value: "100/100" },
      { label: "First Contentful Paint", value: "0.4s" }
    ],
    featured: false
  }
];
