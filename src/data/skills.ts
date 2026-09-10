export interface SkillItem {
  name: string;
  level: number; // 1 to 100
  category: 'sap' | 'ai' | 'languages' | 'data' | 'tools' | 'methodologies';
  iconType?: string;
  highlight?: boolean;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "sap-core",
    title: "Ecosistema SAP S/4HANA & Clean Core",
    subtitle: "Especialización funcional, arquitectura de procesos e implementaciones de alto nivel",
    skills: [
      { name: "SAP MM (Gestión de Materiales)", level: 95, category: "sap", highlight: true, tag: "Especialista" },
      { name: "SAP PS (Project System - WBS / PEP)", level: 92, category: "sap", highlight: true, tag: "Capacitador" },
      { name: "SAP FI (Finanzas - GL, AP, AR, AA)", level: 88, category: "sap", highlight: true, tag: "Implementador" },
      { name: "SAP CO (Controlling - Cost & Profit Centers)", level: 86, category: "sap", highlight: true },
      { name: "Clean Core Architecture & Extensibility", level: 90, category: "sap", highlight: true, tag: "Innovación" },
      { name: "SAP Migration Cockpit (Carga Masiva)", level: 94, category: "sap", highlight: true, tag: "Líder ETL" },
      { name: "S/4HANA Cloud (Public & Private Edition)", level: 90, category: "sap", highlight: true },
      { name: "SAP Central Business Config (CBC)", level: 85, category: "sap" },
      { name: "SAP Cloud ALM & Test Management", level: 88, category: "sap" },
      { name: "SAP Fiori UI5 & Launchpad", level: 88, category: "sap" },
      { name: "Integración QM, PP & SD", level: 84, category: "sap" },
      { name: "Metodología Bluefield & SNP Tools", level: 85, category: "sap" }
    ]
  },
  {
    id: "ai-agents",
    title: "Inteligencia Artificial & Agentes Autónomos",
    subtitle: "Integración de IA Generativa, MCPs y agentes de automatización en procesos ERP",
    skills: [
      { name: "Agentes Autónomos para ERP (SAP GUI/Fiori)", level: 95, category: "ai", highlight: true, tag: "Core" },
      { name: "Anthropic Claude (Prompt Engineering & MCPs)", level: 95, category: "ai", highlight: true, tag: "Mascota AI" },
      { name: "Google Gemini (Multimodal & Enterprise APIs)", level: 90, category: "ai", highlight: true, tag: "Google Cloud" },
      { name: "OpenAI ChatGPT & Function Calling", level: 92, category: "ai", highlight: true },
      { name: "SAP Joule & RISE/GROW Integration", level: 88, category: "ai", highlight: true, tag: "SAP AI" },
      { name: "Pipelines ETL Inteligentes en Python", level: 94, category: "ai", highlight: true, tag: "-80% Tiempo" },
      { name: "Model Context Protocol (MCP)", level: 90, category: "ai", highlight: true },
      { name: "Redes Neuronales & Supervised Learning", level: 85, category: "ai" }
    ]
  },
  {
    id: "dev-languages",
    title: "Lenguajes & Desarrollo de Software",
    subtitle: "De la programación de bajo nivel a la arquitectura web moderna",
    skills: [
      { name: "Python", level: 95, category: "languages", highlight: true, tag: "Avanzado" },
      { name: "ABAP & ABAP for Cloud", level: 88, category: "languages", highlight: true, tag: "Clean Core" },
      { name: "SQL (Consultas complejas, Tuning)", level: 92, category: "languages", highlight: true },
      { name: "TypeScript / JavaScript", level: 90, category: "languages", highlight: true },
      { name: "Astro", level: 92, category: "languages", highlight: true, tag: "Performance" },
      { name: "React / Next.js", level: 86, category: "languages" },
      { name: "Tailwind CSS", level: 94, category: "languages" },
      { name: "C# / Unity", level: 85, category: "languages", tag: "RIA Game" },
      { name: "C++ & .NET", level: 80, category: "languages" }
    ]
  },
  {
    id: "databases-cloud",
    title: "Bases de Datos, Cloud & Metodologías",
    subtitle: "Infraestructura robusta, trazabilidad y metodologías ágiles",
    skills: [
      { name: "SAP HANA In-Memory DB", level: 88, category: "data", highlight: true },
      { name: "Microsoft SQL Server", level: 90, category: "data" },
      { name: "SAP Activate Framework", level: 94, category: "methodologies", highlight: true },
      { name: "Docker & Containerization", level: 85, category: "tools" },
      { name: "Git / GitHub DevOps", level: 90, category: "tools" },
      { name: "Panaya & Quality Center", level: 88, category: "tools" },
      { name: "Scrum / Kanban / Agile", level: 92, category: "methodologies" },
      { name: "Bizagi Process Modeling", level: 86, category: "tools" },
      { name: "RICEF & Especificaciones CEDA/PRADEA", level: 92, category: "methodologies" }
    ]
  }
];
