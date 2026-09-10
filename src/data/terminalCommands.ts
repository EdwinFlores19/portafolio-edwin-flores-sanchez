export interface CommandResponse {
  output: string;
  isHtml?: boolean;
}

export const terminalCommands: Record<string, string | CommandResponse> = {
  help: `Comandos disponibles en EdwinOS v2.6.0 (Entorno Ejecutivo):
  • whoami          - Perfil ejecutivo y filosofía profesional
  • sap             - Especialización en SAP S/4HANA & Metodología Clean Core
  • ai              - Agentes Autónomos, Claude, Gemini, ChatGPT y Pipelines ETL
  • projects        - Proyecto RIA (1er Lugar Capstone USIL), CapeSync y Repositorios
  • experience      - Trayectoria en SEIDOR Consulting (+17 proyectos corporativos)
  • certs           - Certificaciones oficiales SAP Learning, Google Cloud y Anthropic
  • cleancore       - Filosofía de arquitectura desacoplada y reducción de TCO
  • hire            - Caso de negocio y propuesta de valor para directores/reclutadores
  • contact         - Canales de contacto directo, teléfono y WhatsApp corporativo
  • joke            - Humor corporativo inteligente sobre SAP, IA y consultoría
  • coffee          - Protocolo de compilación de energía para Go-Lives
  • abap            - Vistazo a la coexistencia entre código legado y Clean Core
  • matrix          - Protocolo Enterprise Matrix (Píldora Azul vs. Píldora Roja)
  • dance           - Cómo la disciplina artística potencia el trabajo bajo presión
  • clear           - Limpiar la pantalla de la consola`,

  whoami: `══════════════════════════════════════════════════════════════════════
EDWIN JUNIOR FLORES SANCHEZ
══════════════════════════════════════════════════════════════════════
Rol: Consultor Funcional SAP S/4HANA & Ingeniero de Sistemas de Información
Empresa Actual: SEIDOR Consulting
Alma Mater: Universidad San Ignacio de Loyola (USIL) — Tercio Superior
Mención de Honor: Emprendimiento e Innovación Tecnológica
Ubicación: Lima, Perú (UTC-5) | Disponibilidad: Presencial, Híbrido o Remoto Global

Propósito Profesional:
"No solo configuro módulos ERP; diseño ecosistemas digitales de alto rendimiento
donde la robustez de SAP S/4HANA se potencia con la autonomía y velocidad de la
Inteligencia Artificial."`,

  sap: `══════════════════════════════════════════════════════════════════════
ESPECIALIZACIÓN EN ARQUITECTURA & MÓDULOS SAP S/4HANA
══════════════════════════════════════════════════════════════════════
• SAP MM (Gestión de Materiales):
  Especialista en flujo Procure-to-Pay, aprovisionamiento estratégico, maestros
  de materiales, servicios, valoración de inventarios y contratos marco.
• SAP PS (Project System):
  Estructuración PEP/WBS, redes de grafos, control presupuestal y cálculo de costos.
• SAP FI/CO (Finanzas & Controlling):
  General Ledger, Cuentas por Pagar (AP), Cuentas por Cobrar (AR), Activos Fijos (AA),
  centros de costo, centros de beneficio y validaciones BC Sets.
• Metodología Clean Core:
  Estrategia de extensibilidad desacoplada; reducción drástica de deuda técnica
  y preparación para upgrades automáticos sin impacto en el negocio.
• Tipos de Proyectos Ejecutados:
  - Migraciones Selectivas Bluefield (herramientas SNP)
  - Implementaciones Greenfield (SAP S/4HANA Public & Private Cloud)
  - Rollouts corporativos y Upgrades de versión
• Herramientas Especializadas:
  SAP Central Business Configuration (CBC), SAP Cloud ALM, Fiori Launchpad, Panaya,
  SAP Migration Cockpit (LTMC/MC) y Eclipse ADT.`,

  ai: `══════════════════════════════════════════════════════════════════════
INGENIERÍA DE INTELIGENCIA ARTIFICIAL & AGENTES AUTÓNOMOS
══════════════════════════════════════════════════════════════════════
• Agentes Autónomos para Procesos ERP:
  Desarrollo de bots y scripts en Python que operan interfaces SAP GUI y Fiori
  con tolerancia a fallos, procesamiento semántico y validación de datos.
• Caso de Éxito Cuantificable (Clínica Internacional & SEIDOR):
  Reducción del 80% en los tiempos de ciclo en la migración masiva de catálogos
  de compras y cuentas contables hacia S/4HANA Cloud.
• Anthropic Claude:
  Diseño de flujos avanzados de Prompt Engineering, Tool Calling y protocolos
  Model Context Protocol (MCP) para análisis de documentación y código.
• Google Gemini:
  Aprovechamiento de ventanas de contexto masivo y procesamiento multimodal de
  manuales de especificación técnica y funcional (CEDA).
• OpenAI ChatGPT:
  Workflows estructurados con Function Calling y pipelines de testing funcional.
• SAP Joule:
  Capacitador y promotor de la IA generativa nativa de SAP en escenarios de compras,
  almacenes y analítica financiera.`,

  projects: `══════════════════════════════════════════════════════════════════════
PROYECTOS DESTACADOS & REPOSITORIOS (PORTAFOLIO SELECCIONADO)
══════════════════════════════════════════════════════════════════════
1. 🏆 RIA (Reactive Intelligent Agent) [1er Lugar Concurso Capstone USIL 2025]
   Simulador de Serious Gaming de IA con agentes autónomos reactivos (<16ms) en
   Unity 2D y Python. Distinción máxima por el jurado evaluador de titulación.

2. CapeSync — Plataforma ERP de Voluntariado [Capellanía USIL & Aldea Westfalia]
   PWA offline-first con carnet digital QR, trazabilidad de donaciones y gestión.
   Demo activa: https://capellania-usil-voluntariado-2026.vercel.app/

3. Suite ETL de Migración con IA [🔒 Código Privado / SEIDOR Consulting]
   Pipeline automatizado para Clínica Internacional con 80% de reducción de tiempos.

4. SportMatch Connect [TypeScript]
   Plataforma comunitaria de emparejamiento deportivo en tiempo real.
   GitHub: https://github.com/jojiz29/sportmatch-connect

5. Puka Power E-Commerce Web [TypeScript]
   Plataforma de comercio electrónico con catálogo dinámico y checkout interactivo.
   GitHub: https://github.com/EdwinFlores19/puka-power-pagweb-ecommerce

6. Migración de MYPES con ETL de IA [ProyectoFinalDIAE Grupo 2]
   Transformación digital e integración analítica para microempresas peruanas.
   GitHub: https://github.com/danieliriartehub/ProyectoFinalDIAE-Grupo2

7. MVP PrediRent 2025 — Predicción Inteligente de Rentas [JavaScript]
   Conexión inteligente entre arrendadores e inquilinos con modelo predictivo de tasación.
   GitHub: https://github.com/EdwinFlores19/MVP-PREDIRENT-2025`,

  experience: `══════════════════════════════════════════════════════════════════════
TRAYECTORIA PROFESIONAL & CLIENTES CORPORATIVOS
══════════════════════════════════════════════════════════════════════
• SEIDOR Consulting (Feb. 2024 – Actualidad)
  Consultor Funcional SAP S/4HANA & Automatización con IA
  Proyectos ejecutados con éxito:
  - Minería & Industria Pesada: Compañía Minera Antamina, Minsur (Bluefield),
    Stracon, Minera Zafranal, Sierra Metals, Zinsa.
  - Sector Salud & Servicios: Clínica Internacional (Reducción 80% ETL).
  - Mercados de Capitales: NUAM Exchange (Integración de Bolsas de Santiago, Lima y Colombia).
  - Agroindustria & Consumo: Ecosac Agrícola, Ecuajugos, Industrias San Miguel, R束kys.
  - Logística & Sector Público: Talma Servicios Aeroportuarios, Ambipar, Osinergmin.

• UNJFSC (Ene. 2022 – Mar. 2022)
  Practicante de Sistemas — Optimización de bases de datos relacionales SQL Server
  y módulos de reportería en Java / .NET.`,

  certs: `══════════════════════════════════════════════════════════════════════
BÓVEDA DE CERTIFICACIONES & RECONOCIMIENTOS OFICIALES
══════════════════════════════════════════════════════════════════════
1. SAP: Implementing Financial Accounting in SAP S/4HANA Cloud (Learning Journey)
2. SAP: Implementing SAP S/4HANA Cloud Public Edition (Learning Journey)
3. Anthropic: Claude & Enterprise Prompt Engineering
4. Google: Google Cloud Skills Boost — Cloud Infrastructure & Generative AI
5. USIL: Grado de Bachiller en Ingeniería de Sistemas de Información (Tercio Superior)
6. USIL: 1er Lugar Concurso Capstone de Titulación (Julio 2025)`,

  cleancore: `══════════════════════════════════════════════════════════════════════
💎 FILOSOFÍA CLEAN CORE — SAP S/4HANA
══════════════════════════════════════════════════════════════════════
"El mejor código Z es aquel que vive desacoplado en SAP BTP o servicios externos,
manteniendo el Core del ERP limpio, seguro y actualizable."

Beneficios tangibles que aporto a la organización:
1. Upgrades Continuos Sin Fricción: Actualizaciones de versión sin presupuestos
   millonarios para corregir programas estándar modificados.
2. Agilidad de Innovación: Facilidad para conectar Agentes de IA y pipelines modernos
   mediante APIs OData y eventos sin comprometer la estabilidad transaccional.
3. Menor TCO (Costo Total de Propiedad): Deuda técnica controlada desde el día uno.`,

  hire: `══════════════════════════════════════════════════════════════════════
CASO DE NEGOCIO: ¿POR QUÉ CONTRATAR A EDWIN FLORES?
══════════════════════════════════════════════════════════════════════
1. Fusión Estratégica (2 en 1):
   Combino la visión de negocio de un Consultor Funcional SAP (MM, PS, FICO) con la
   capacidad técnica de un Ingeniero de Sistemas (Python, Agentes IA, SQL).
   -> Ahorro directo: No necesitas contratar un consultor y un programador por separado.

2. Resultados Medibles con Alto Impacto:
   Historial demostrado reduciendo tiempos operativos hasta en un 80% en proyectos
   corporativos de alta criticidad (Clínica Internacional, SEIDOR).

3. Rigor Académico & Excelencia Comprobada:
   Graduado en el Tercio Superior de la USIL y Ganador del 1er Lugar en el Concurso
   Capstone de Titulación 2025 frente a jurados internacionales.

4. Habilidades Blandas & Liderazgo de Equipos:
   Capacitador oficial de usuarios clave, oratoria fluida, proactividad y adaptación
   inmediata bajo escenarios de alta presión (Go-Lives y cierres contables).

¿Interesado en agendar una entrevista ejecutiva?
-> WhatsApp Directo: (+51) 910 193 590
-> Correo Electrónico: ejuniorfloress@gmail.com`,

  joke: `══════════════════════════════════════════════════════════════════════
[ENTERPRISE HUMOR // SAP & AI EDITION]
══════════════════════════════════════════════════════════════════════
• ¿Por qué los Directores de Tecnología duermen tranquilos con Clean Core?
  Porque saben que durante el próximo Upgrade a S/4HANA no habrá 200 tablas Z
  rotas llamándolos un domingo a las 3:00 AM. ¡Clean Core es paz mental!

• Un desarrollador novato le pregunta a un Consultor Senior:
  — "¿Y si modificamos directo la tabla estándar en producción para apurar el Go-Live?"
  El Consultor responde con calma:
  — "Prefiero documentar 80 especificaciones funcionales que explicarle al auditor
     externo por qué desapareció el inventario valorizado."

• La diferencia entre un script tradicional y un Agente de IA en SAP GUI:
  El script tradicional colapsa si Fiori cambia un botón de lugar por 2 píxeles.
  El Agente de IA se adapta semánticamente, procesa el lote de compras y te envía
  un resumen ejecutivo por WhatsApp antes del café matutino.`,

  broma: `══════════════════════════════════════════════════════════════════════
[ENTERPRISE HUMOR // SAP & AI EDITION]
══════════════════════════════════════════════════════════════════════
• ¿Por qué un consultor SAP nunca juega a las escondidas?
  Porque con SNP Bluefield y Landscape Transformation, ¡ninguna inconsistencia
  queda oculta por mucho tiempo!

• Definición de 'Automatización con IA' según Edwin Flores:
  "No es reemplazar al consultor; es darle un pipeline en Python para que termine
  en 15 minutos lo que antes costaba 3 días de dolorosas hojas de cálculo manuales."`,

  coffee: `══════════════════════════════════════════════════════════════════════
[☕ PROTOCOLO EJECUTIVO DE CAFÉ CORPORATIVO]
══════════════════════════════════════════════════════════════════════
Estado del servicio: HTTP 200 OK — Infusión de grano arábica completada.

Combustible corporativo certificado para:
✓ Cierres de mes contables sin desviaciones presupuestarias
✓ Migraciones de datos masivas sin downtime operativo
✓ Despliegue de Agentes Autónomos con Model Context Protocol (MCP)
✓ Sesiones de arquitectura estratégica con stakeholders`,

  abap: `══════════════════════════════════════════════════════════════════════
[💻 ABAP & ENTERPRISE CODE COEXISTENCE]
══════════════════════════════════════════════════════════════════════
SELECT SINGLE * 
  FROM t_consultores 
  INTO @DATA(ls_edwin) 
  WHERE nombre = 'EDWIN FLORES' 
    AND clean_core_ready = 'X'.

IF sy-subrc = 0.
  WRITE: / 'Diagnóstico: Consultor que comprende la lógica transaccional de ABAP,'.
  WRITE: / 'pero construye el futuro desacoplado con Python, REST APIs y Agentes IA.'.
ENDIF.`,

  matrix: `══════════════════════════════════════════════════════════════════════
[🕶️ PROTOCOLO ENTERPRISE MATRIX]
══════════════════════════════════════════════════════════════════════
"La píldora azul: Sigues cargando manualmente plantillas Excel de 50,000 filas
 y cruzando los dedos en cada Go-Live.

 La píldora roja: Trabajas con Edwin Flores y despliegas un pipeline de IA
 autónomo que valida, limpia y migra tus datos con 80% menos tiempo."

La elección es tuya.
[ESTATUS: SISTEMA LISTO PARA SU SIGUIENTE DESAFÍO CORPORATIVO]`,

  dance: `══════════════════════════════════════════════════════════════════════
[🎭 CULTURA, DISCIPLINA & ARTE ESCÉNICO]
══════════════════════════════════════════════════════════════════════
¿Cómo complementa la danza folclórica (Elenco USIL) la consultoría SAP?
1. Sincronización Milimétrica: En el escenario, si un bailarín pierde el compás,
   la coreografía falla. En un Go-Live de ERP, la sincronía entre áreas es igual de crítica.
2. Resistencia y Serenidad: Presentarse ante teatros llenos forja el temple necesario
   para liderar comités de crisis y decisiones técnicas bajo alta presión.
3. Identidad y Orgullo: Pasión por las raíces culturales peruanas y la excelencia colectiva.`,

  salary: `══════════════════════════════════════════════════════════════════════
[💼 RETORNO DE INVERSIÓN (ROI) DE LA CONTRATACIÓN]
══════════════════════════════════════════════════════════════════════
La propuesta económica de Edwin Flores está fundamentada en valor tangible:
• Ahorro de cientos de horas hombre mediante automatización y agentes de IA.
• Mitigación de riesgos de parada operativa en migraciones selectivas.
• Versatilidad funcional (MM, PS, FICO) + técnica (Python, Clean Core, APIs).

¿Deseas evaluar una propuesta a la medida de tu organización?
-> Escribe 'contact' o conversa directamente por WhatsApp: (+51) 910 193 590`,

  salario: `══════════════════════════════════════════════════════════════════════
[💼 RETORNO DE INVERSIÓN (ROI) DE LA CONTRATACIÓN]
══════════════════════════════════════════════════════════════════════
La propuesta económica de Edwin Flores está fundamentada en valor tangible:
• Ahorro de cientos de horas hombre mediante automatización y agentes de IA.
• Mitigación de riesgos de parada operativa en migraciones selectivas.
• Versatilidad funcional (MM, PS, FICO) + técnica (Python, Clean Core, APIs).

¿Deseas evaluar una propuesta a la medida de tu organización?
-> Escribe 'contact' o conversa directamente por WhatsApp: (+51) 910 193 590`,

  contact: `══════════════════════════════════════════════════════════════════════
CANALES DE CONTACTO DIRECTO & REUNIONES EJECUTIVAS
══════════════════════════════════════════════════════════════════════
• Teléfono / WhatsApp: (+51) 910 193 590
  Enlace directo: https://wa.me/51910193590
• Correo Electrónico: ejuniorfloress@gmail.com
• LinkedIn: https://www.linkedin.com/in/edwin-junior-flores-sanchez
• GitHub: https://github.com/EdwinFlores19
• Ubicación: Lima, Perú (UTC-5) | Disponibilidad para viajes y proyectos globales`
};
