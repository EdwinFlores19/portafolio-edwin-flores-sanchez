export interface Certification {
  id: string;
  title: string;
  issuer: 'SAP' | 'Google' | 'Anthropic' | 'USIL' | 'Otros';
  issuerLogoType: 'sap' | 'google' | 'claude' | 'usil';
  category: 'Enterprise ERP' | 'Artificial Intelligence' | 'Cloud & Systems' | 'Academic';
  issueDate: string;
  description: string;
  credentialUrl?: string;
  badgeCode?: string;
  skillsAcquired: string[];
  featured: boolean;
}

export const certifications: Certification[] = [
  {
    id: "sap-fi-s4hana-cloud",
    title: "Implementing Financial Accounting in SAP S/4HANA Cloud",
    issuer: "SAP",
    issuerLogoType: "sap",
    category: "Enterprise ERP",
    issueDate: "2025",
    description: "Ruta oficial de formación en SAP Learning Journey para la implementación de Contabilidad Financiera en SAP S/4HANA Cloud Public Edition: Parametrización de libro mayor (GL), cuentas por pagar (AP), cuentas por cobrar (AR), activos fijos (AA) y arquitectura de procesos contables estándar.",
    credentialUrl: "https://learning.sap.com/learning-journeys/implementing-financial-accounting-in-sap-s4hana-cloud",
    badgeCode: "SAP-S4H-FI-CLOUD",
    skillsAcquired: ["General Ledger (GL)", "Accounts Payable (AP)", "Accounts Receivable (AR)", "Asset Accounting", "Financial Closing"],
    featured: true
  },
  {
    id: "sap-s4hana-public-edition",
    title: "Implementing SAP S/4HANA Cloud Public Edition",
    issuer: "SAP",
    issuerLogoType: "sap",
    category: "Enterprise ERP",
    issueDate: "2025",
    description: "Dominio de la metodología SAP Activate para implementaciones Greenfield en Cloud Public Edition, configuración centralizada con SAP Central Business Configuration (CBC), gestión del ciclo de vida con SAP Cloud ALM y adopción de mejores prácticas estándar.",
    credentialUrl: "https://learning.sap.com/learning-journeys/implementing-sap-s-4hana-cloud-public-edition",
    badgeCode: "SAP-S4H-PUB-ED",
    skillsAcquired: ["SAP Activate", "SAP CBC", "SAP Cloud ALM", "Clean Core Extensibility", "Best Practices Baseline"],
    featured: true
  },
  {
    id: "anthropic-claude-agentic",
    title: "Claude & Prompt Engineering for Enterprise Systems",
    issuer: "Anthropic",
    issuerLogoType: "claude",
    category: "Artificial Intelligence",
    issueDate: "2025",
    description: "Certificación y especialización práctica en el diseño de agentes conversacionales y estructuración de flujos con Claude 3.5 / 3.7 Sonnet, Tool Use (MCPs), reasoning adaptativo y generación de código funcional para automatizaciones de procesos de negocio.",
    badgeCode: "ANTHROPIC-CLAUDE-AGENTS",
    skillsAcquired: ["Model Context Protocol (MCP)", "Prompt Engineering", "Autonomous Workflows", "Claude Code API"],
    featured: true
  },
  {
    id: "google-skills-cloud-ai",
    title: "Google Skills — Cloud & Generative AI Architecture",
    issuer: "Google",
    issuerLogoType: "google",
    category: "Cloud & Systems",
    issueDate: "2025",
    description: "Insignia oficial obtenida en Google Skills Boost enfocada en fundamentos de computación en la nube, infraestructura elástica, modelos multimodales Gemini y despliegue de soluciones inteligentes en Google Cloud Platform.",
    badgeCode: "GOOGLE-SKILLS-GENAI",
    skillsAcquired: ["Google Cloud Platform", "Gemini API", "Cloud Architecture", "Vector Embeddings"],
    featured: true
  },
  {
    id: "usil-systems-engineering",
    title: "Grado de Bachiller en Ingeniería de Sistemas de Información",
    issuer: "USIL",
    issuerLogoType: "usil",
    category: "Academic",
    issueDate: "2021 – 2026",
    description: "Graduado con distinción en el Tercio Superior de la Facultad de Ingeniería de la Universidad San Ignacio de Loyola. Mención especial en Emprendimiento e Innovación Tecnológica y Ganador del 1er Lugar en Concurso Capstone.",
    badgeCode: "USIL-TERCIO-SUPERIOR",
    skillsAcquired: ["Arquitectura de Software", "Gestión de Proyectos TI", "Modelado de Negocio", "Innovación Tecnológica"],
    featured: true
  }
];
