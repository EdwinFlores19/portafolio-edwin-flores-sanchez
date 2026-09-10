export interface ClientProject {
  client: string;
  industry: 'Salud' | 'Minería' | 'Financiero' | 'Consumo Masivo' | 'Aviación' | 'Agroindustria' | 'Servicios' | 'Sector Público' | 'Tecnología';
  period: string;
  role: string;
  impactHighlight?: string;
  description: string[];
  modules: string[];
  techStack: string[];
}

export interface CompanyExperience {
  company: string;
  roleTitle: string;
  period: string;
  location: string;
  summary: string;
  isCurrent: boolean;
  projects: ClientProject[];
}

export const experiences: CompanyExperience[] = [
  {
    company: "SEIDOR Consulting",
    roleTitle: "Consultor Funcional SAP S/4HANA & Automatización con IA",
    period: "Feb. 2024 – Actualidad",
    location: "Lima, Perú",
    summary: "Liderazgo funcional y técnico en más de 17 proyectos corporativos de gran escala. Especialista en la conjunción de los módulos MM, PS, FICO y Clean Core con Inteligencia Artificial aplicada (Pipelines ETL automáticos y Agentes que operan SAP GUI/Fiori de forma autónoma).",
    isCurrent: true,
    projects: [
      {
        client: "Clínica Internacional",
        industry: "Salud",
        period: "Jul. 2026 – Actualidad",
        role: "Líder de Migración de Datos - Upgrade SAP S/4HANA",
        impactHighlight: "Reducción del 80% en tiempos de migración con Pipeline ETL en Python y Agentes Autónomos",
        description: [
          "Lideré el equipo de migración del upgrade: definición de estrategia, ejecución y control de carga de millones de registros maestros y transaccionales.",
          "Diseñé un pipeline ETL automatizado con IA en Python que reemplazó la extracción manual, automatizando la transformación a plantillas SAP y la carga vía Migration Cockpit, reduciendo en un 80% los tiempos de ciclo.",
          "Construí agentes de IA autónomos que operan SAP GUI y Fiori: ejecutan transacciones, realizan cargas masivas, capturan evidencia gráfica y generan la documentación funcional automáticamente.",
          "Control estricto de cuadres origen-destino, gobierno de rechazos, reprocesos y planificación de cutover con mock loads exhaustivos."
        ],
        modules: ["MM", "Migration Cockpit", "Clean Core", "Fiori"],
        techStack: ["Python", "IA Agents", "SAP S/4HANA", "SAP Migration Cockpit", "Fiori UI5"]
      },
      {
        client: "Ambipar",
        industry: "Servicios",
        period: "Jul. 2026 – Actualidad",
        role: "Consultor Funcional SAP PS - Roll Out SAP S/4HANA",
        impactHighlight: "Control presupuestal e integración integral de proyectos con MM y FICO",
        description: [
          "Lideré el módulo de Project System (PS) estructurando WBS (PEP), redes de actividades, hitos operativos, planificación y control presupuestal estricto.",
          "Aseguré la integración transversal PS–FI/CO/MM: imputación de costos, liquidaciones, compras por proyecto y parametrización de flujos logísticos.",
          "Gestión de requerimientos de negocio, pruebas integrales y capacitación técnica a usuarios clave."
        ],
        modules: ["PS", "FI/CO", "MM"],
        techStack: ["SAP S/4HANA", "SAP PS", "WBS Architecture", "Cross-Module Integration"]
      },
      {
        client: "Antamina",
        industry: "Minería",
        period: "May. 2026 – Jun. 2026",
        role: "Testeador Funcional - Upgrade S/4HANA, Módulo PS",
        impactHighlight: "Validación de estabilidad presupuestal bajo lineamientos Clean Core",
        description: [
          "Ejecución de pruebas funcionales y de regresión sobre el módulo PS durante el upgrade mayor de versión.",
          "Validación de integraciones cross-module bajo principios Clean Core para garantizar extensibilidad limpia.",
          "Gestión de scripts de prueba, control de incidencias y recopilación de evidencias asistida por IA."
        ],
        modules: ["PS", "Clean Core"],
        techStack: ["SAP S/4HANA", "Clean Core", "Documentación Asistida por IA", "Panaya"]
      },
      {
        client: "SEIDOR (Iniciativa Estratégica)",
        industry: "Tecnología",
        period: "Abr. 2026 – Jun. 2026",
        role: "Capacitador de AI - SAP Joule, GROW & RISE with SAP",
        impactHighlight: "Formación de consultores en IA Generativa ERP y Clean Core",
        description: [
          "Dirección de programas de formación especializada sobre GROW with SAP, RISE with SAP y la adopción de SAP Joule.",
          "Enfoque en arquitectura Clean Core y diseño de casos de uso prácticos para optimizar procesos de negocio con IA generativa."
        ],
        modules: ["SAP Joule", "BTP", "Clean Core"],
        techStack: ["SAP Joule", "GROW with SAP", "RISE with SAP", "GenAI ERP"]
      },
      {
        client: "ECOSAC",
        industry: "Agroindustria",
        period: "Jun. 2026 – Jul. 2026",
        role: "Consultor Funcional MM & PP - Upgrade y Ampliación QM",
        impactHighlight: "Diseño y validación de puntos de inspección y trazabilidad de lotes",
        description: [
          "Liderazgo de los frentes MM y PP en el marco de la ampliación de alcance hacia Quality Management (QM).",
          "Diseño y validación de las conexiones QM–MM (inspección en entradas de mercancías, gestión de lotes, liberación de stock) y QM–PP (inspección en proceso y órdenes de producción)."
        ],
        modules: ["MM", "PP", "QM"],
        techStack: ["SAP S/4HANA", "Gestión de Lotes", "Quality Inspection"]
      },
      {
        client: "Talma",
        industry: "Aviación",
        period: "May. 2026 – Jul. 2026",
        role: "Consultor Funcional MM & SD - Upgrade y Remediación",
        impactHighlight: "Remediación de simplification items desde release 1809 a versión 2026",
        description: [
          "Upgrade integral desde la release 1809 a la versión más reciente en 2026.",
          "Análisis exhaustivo de Simplification Items, remediación de discrepancias funcionales y adaptación de procesos logísticos.",
          "Pruebas de regresión rigurosas en flujos de compras críticas y logística aeroportuaria."
        ],
        modules: ["MM", "SD"],
        techStack: ["SAP S/4HANA", "Simplification Items", "Logística Crítica"]
      },
      {
        client: "Grupo ROKYS",
        industry: "Consumo Masivo",
        period: "Abr. 2026 – May. 2026",
        role: "Consultor Funcional FI & CO - Upgrade y Best Practices",
        impactHighlight: "Activación de BC Sets en landscape cross-module complejo",
        description: [
          "Implementación y validación de paquetes SAP Best Practices para Finanzas y Controlling.",
          "Activación de BC Sets para estandarización de customizing base en un landscape integrado con MM, SD, PP, QM y PM."
        ],
        modules: ["FI", "CO", "Best Practices"],
        techStack: ["SAP S/4HANA", "BC Sets", "SAP Best Practices"]
      },
      {
        client: "NUAM Exchange",
        industry: "Financiero",
        period: "Feb. 2026 – May. 2026",
        role: "Consultor FI & CO - Greenfield Public Edition",
        impactHighlight: "Integración CO-FI de alto volumen en bolsa trinacional (Perú, Chile y Colombia)",
        description: [
          "Diseño, ejecución y documentación de pruebas de Controlling (CO) para la integración bursátil de 3 países.",
          "Parametrización y pruebas de centros de costos, centros de beneficio, órdenes internas y consistencia CO-FI en volumen transaccional masivo."
        ],
        modules: ["CO", "FI", "Public Edition"],
        techStack: ["SAP S/4HANA Cloud Public", "Bolsa Trinacional", "Controlling"]
      },
      {
        client: "MINSUR",
        industry: "Minería",
        period: "Ene. 2025 – Ene. 2026",
        role: "Consultor MM - Migración Bluefield ECC a S/4HANA",
        impactHighlight: "Migración selectiva con metodología SNP y gestión de calidad en Panaya",
        description: [
          "Migración selectiva de SAP ECC a S/4HANA Private Edition utilizando metodología Bluefield y herramientas SNP.",
          "Validación de datos legados, pruebas de transacciones críticas de aprovisionamiento y rediseño de flujos logísticos.",
          "Gestión de pruebas y remediación de desarrollos Z junto al equipo técnico."
        ],
        modules: ["MM", "Bluefield", "SNP"],
        techStack: ["SNP Bluefield", "Panaya", "SAP S/4HANA Private Edition", "SAP ECC"]
      },
      {
        client: "STRACON",
        industry: "Minería",
        period: "Jun. 2025",
        role: "Capacitador Especialista SAP PS",
        impactHighlight: "Capacitación práctica y adopción de usuarios clave en gestión de proyectos",
        description: [
          "Diseño y ejecución de una capacitación inmersiva sobre el módulo PS en S/4HANA Private Edition.",
          "Talleres prácticos sobre WBS, redes, hitos y presupuestos alineados a la operación minera."
        ],
        modules: ["PS"],
        techStack: ["SAP PS", "Capacitación Corporativa"]
      },
      {
        client: "ECUAJUGOS",
        industry: "Consumo Masivo",
        period: "May. 2025",
        role: "Consultor Best Practices & Localización México",
        impactHighlight: "Activación de Best Practices S/4HANA Cloud Private Edition",
        description: [
          "Instalación y activación del paquete SAP Best Practices en Finanzas y Logística con localización fiscal mexicana.",
          "Transferencia de conocimiento funcional y estabilización del sistema."
        ],
        modules: ["FI", "MM", "EWM"],
        techStack: ["S/4HANA Cloud Private", "Localización México"]
      },
      {
        client: "SIERRA METALS & ZINSA",
        industry: "Minería",
        period: "Oct. 2024 & Feb. 2025",
        role: "Consultor Sprint Zero & Estándares",
        impactHighlight: "Definición de plantillas maestras y baseline arquitectónico",
        description: [
          "Configuración base en fase de Sprint Zero, definición de estándares funcionales y plantillas de ordenes de transporte (OT)."
        ],
        modules: ["MM", "FI", "Sprint Zero"],
        techStack: ["SAP S/4HANA", "Sprint Zero Framework"]
      },
      {
        client: "INDUSTRIAS SAN MIGUEL (ISM)",
        industry: "Consumo Masivo",
        period: "Nov. 2024 – Ene. 2025",
        role: "Consultor MM - Roll Out Regional",
        impactHighlight: "Alineación de maestro de materiales y soporte a go-live internacional",
        description: [
          "Rollout regional de SAP S/4HANA, pruebas funcionales de usuario, maestro de materiales y alineación con estándares globales corporativos."
        ],
        modules: ["MM"],
        techStack: ["SAP MM", "Rollout Regional"]
      },
      {
        client: "ZAFRANAL",
        industry: "Minería",
        period: "Feb. 2024 – Jul. 2024",
        role: "Consultor FI - Primera Implementación Public Edition en Perú",
        impactHighlight: "Pionero en la implementación de SAP S/4HANA Public Edition en Perú",
        description: [
          "Participación directa en la primera implementación de S/4HANA Public Edition a nivel nacional.",
          "Blueprint FI (GL, Bank, AP, AR, AA), configuración con SAP CBC (Central Business Configuration) y gestión con SAP Cloud ALM.",
          "Validaciones y sustituciones con lógica ABAP for Cloud bajo paradigma Clean Core."
        ],
        modules: ["FI", "SAP CBC", "Cloud ALM", "Clean Core"],
        techStack: ["SAP S/4HANA Public Edition", "SAP CBC", "Cloud ALM", "ABAP for Cloud"]
      }
    ]
  },
  {
    company: "UNIVERSIDAD NACIONAL JOSÉ FAUSTINO SÁNCHEZ CARRIÓN",
    roleTitle: "Practicante de Sistemas e Infraestructura",
    period: "Ene. 2022 – Mar. 2022",
    location: "Lima, Perú",
    summary: "Optimización de bases de datos relacionales SQL Server, ingeniería de software para portales internos y modernización de herramientas en Java, C# y .NET.",
    isCurrent: false,
    projects: [
      {
        client: "UNJFSC Intranet & Core DB",
        industry: "Sector Público",
        period: "Ene. 2022 – Mar. 2022",
        role: "Practicante de Sistemas",
        impactHighlight: "Creación del diccionario de datos de módulos core y optimización de SQL Server",
        description: [
          "Soporte y tuning a la base de datos institucional en SQL Server.",
          "Desarrollo y mejora continua del sistema de gestión de incidencias en Java, C# y Visual Basic.",
          "Elaboración del diccionario de datos integral de los módulos core institucionales."
        ],
        modules: ["Database", "Custom Dev"],
        techStack: ["SQL Server", "Java", "C#", ".NET", "Visual Basic"]
      }
    ]
  }
];
