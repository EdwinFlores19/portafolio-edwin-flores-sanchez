export interface CommandResponse {
  output: string;
  isHtml?: boolean;
}

export const terminalCommands: Record<string, string | CommandResponse> = {
  help: `Comandos disponibles en EdwinOS v2.6.0:
  • whoami          - ¿Quién es Edwin Flores?
  • sap             - Especialización en SAP S/4HANA & Clean Core
  • ai              - Agentes Autónomos, Claude, Gemini, ChatGPT y pipelines ETL
  • projects        - Proyecto RIA (1er Lugar Capstone), CapeSync y Open Source
  • experience      - Trayectoria en Seidor Consulting y +15 proyectos
  • certs           - Certificaciones oficiales SAP, Google Skills y Claude
  • contact         - Datos de contacto directo y WhatsApp
  • hire            - Propuesta de valor ejecutiva para reclutadores
  • matrix          - Activar protocolo Matrix
  • clear           - Limpiar la consola`,

  whoami: `EDWIN JUNIOR FLORES SANCHEZ
Rol: Consultor Funcional SAP S/4HANA & Ingeniero de Sistemas de Información
Alma Mater: Universidad San Ignacio de Loyola (USIL) — Tercio Superior
Mención: Emprendimiento e Innovación Tecnológica
Ubicación: Lima, Perú (UTC-5)
Filosofía: "Construyendo el puente entre la Arquitectura Empresarial SAP y la Inteligencia Artificial."`,

  sap: `MÓDULOS & ARQUITECTURA SAP:
• SAP MM (Gestión de Materiales): Especialista en compras, valoración y aprovisionamiento.
• SAP PS (Project System): WBS/PEP, redes, planificación y control presupuestal.
• SAP FI/CO (Finanzas & Controlling): GL, AP, AR, AA, centros de costo/beneficio, BC Sets.
• Metodología Clean Core: Extensibilidad limpia, reducción de deuda técnica en S/4HANA.
• Upgrades & Migraciones: Bluefield (SNP tools), Greenfield (Public Edition) y Migration Cockpit.
• Herramientas: SAP CBC, SAP Cloud ALM, Fiori UI5, Panaya, Eclipse ADT.`,

  ai: `ECOSISTEMA DE INTELIGENCIA ARTIFICIAL & AGENTES:
• Agentes Autónomos ERP: Bots en Python que operan SAP GUI y Fiori de manera desatendida.
• Impacto Real: Reducción del 80% de tiempos de migración de datos en Clínica Internacional.
• Anthropic Claude: Especialización en Prompt Engineering, Tool Use y Model Context Protocol (MCP).
• Google Gemini: Integración de APIs multimodales y Google Cloud Skills.
• OpenAI ChatGPT: Workflows con Function Calling y asistentes contextuales.
• SAP Joule: Adopción e integración de IA generativa nativa en SAP Cloud ERP.`,

  projects: `PROYECTOS DESTACADOS:
1. RIA (Reactive Intelligent Agent) [🏆 1er Lugar Capstone USIL 2025]
   Simulador Serious Gaming de IA con agentes reactivos autónomos en Unity + Python.
2. CapeSync — Plataforma de Voluntariado & ERP [Capellanía USIL]
   PWA offline-first con carnet digital QR y ERP para Aldea Westfalia.
   Demo: https://capellania-usil-voluntariado-2026.vercel.app/
3. Pipeline ETL con IA para Upgrade S/4HANA [Clínica Internacional]
   Redujo 80% del tiempo de migración para millones de registros.
4. House Prices Dashboard [Streamlit + Scikit-Learn]
5. Simulador de Billar 2D [Pygame Physics Engine]`,

  experience: `TRAYECTORIA PROFESIONAL:
• SEIDOR Consulting (Feb 2024 – Actualidad)
  Consultor Funcional SAP S/4HANA & Automatización con IA
  Proyectos: Clínica Internacional, Ambipar, Antamina, Ecosac, Talma, Rokys, Nuam Exchange,
  Minsur, Stracon, Ecuajugos, Sierra Metals, Zinsa, Industrias San Miguel, Osinergmin, Zafranal.
• UNJFSC (Ene 2022 – Mar 2022)
  Practicante de Sistemas — Optimización SQL Server y desarrollo .NET / Java.`,

  certs: `BÓVEDA DE CERTIFICACIONES & RECONOCIMIENTOS:
1. SAP: Implementing Financial Accounting in SAP S/4HANA Cloud (Official Learning)
2. SAP: Implementing SAP S/4HANA Cloud Public Edition (Official Learning)
3. Anthropic: Claude & Enterprise Prompt Engineering
4. Google: Google Skills — Cloud & Generative AI
5. USIL: Grado de Bachiller en Ingeniería de Sistemas (Tercio Superior)
6. USIL: 1er Lugar Concurso Capstone de Titulación (Julio 2025)`,

  contact: `CANALES DE CONTACTO DIRECTO:
• Teléfono / WhatsApp: (+51) 910 193 590
• Correo Electrónico: ejuniorfloress@gmail.com
• LinkedIn: https://www.linkedin.com/in/edwin-junior-flores-sanchez
• GitHub: https://github.com/EdwinFlores19
• Ubicación: Lima, Perú`,

  hire: `¿POR QUÉ CONTRATAR A EDWIN FLORES?
1. Fusión Única: Entiende tanto el proceso de negocio empresarial (MM, PS, FICO) como la tecnología de vanguardia (Python, Agentes IA, Clean Core).
2. Impacto Cuantificable: Historial demostrado reduciendo tiempos operativos hasta en un 80% en proyectos críticos.
3. Rigor Académico & Reconocimientos: Tercio Superior y Ganador del 1er Lugar Capstone en USIL.
4. Liderazgo Comprobado: Capacitador de usuarios clave y mentor de equipos multidisciplinarios.
-> Contacta ahora: WhatsApp (+51 910 193 590) o ejuniorfloress@gmail.com`,

  matrix: `WAKE UP, RECRUITER...
The Matrix has you.
Follow the white rabbit.
Knock, knock, Neo.
[SYSTEM ACCESS GRANTED: EDWIN FLORES READY FOR DEPLOYMENT]`
};
