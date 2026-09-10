# 🌐 Sistema de Portafolio Profesional Futurista & Escalable
### **Edwin Junior Flores Sanchez** — Consultor Funcional SAP S/4HANA & Ingeniero de Sistemas de Información
*Construyendo el puente entre SAP Enterprise Architecture (MM · PS · FI/CO · Clean Core) y la Inteligencia Artificial (Agentes Autónomos & Pipelines ETL)*

---

## 🚀 Visión y Arquitectura del Sistema

Este portafolio ha sido diseñado y construido como una **experiencia interactiva de alto impacto tecnológico**, inspirada en una estética cyberpunk y visualizaciones HUD de grado aeroespacial / militar, garantizando **100/100 en rendimiento** (Core Web Vitals) y **mantenibilidad a largo plazo**.

### Características Destacadas:
1. **Fondo Interactivo de Red Neuronal (60 FPS)**: Canvas dinámico con partículas reactivas, detección de proximidad del cursor, deflexión física y paquetes de datos viajando a lo largo de las conexiones.
2. **Terminal Interactivo `EdwinOS v2.6.0`**: Consola interactiva para reclutadores con autocompletado de comandos, sonido cyber sintetizado vía Web Audio API y comandos rápidos (`whoami`, `sap`, `ai`, `projects`, `hire`, `contact`, `matrix`).
3. **Mascotas e Iconos de IA**: Secciones dedicadas a **Anthropic Claude (Mascota animada)**, **Google Gemini**, **OpenAI ChatGPT** y **SAP Joule**.
4. **El Puente SAP & IA**: Diagrama arquitectónico interactivo que explica la reducción del 80% en tiempos de migración mediante ETL en Python y agentes autónomos que operan SAP GUI/Fiori.
5. **Proyectos Estrella**:
   - **RIA (Reactive Intelligent Agent)**: 1er Lugar Concurso Capstone USIL 2025.
   - **CapeSync (Capellanía USIL Voluntariado)**: Sistema ERP PWA offline-first en producción ([capellania-usil-voluntariado-2026.vercel.app](https://capellania-usil-voluntariado-2026.vercel.app/)).
   - **Proyectos Open Source & Data Science**: Dashboard de precios de vivienda en Streamlit y simulador físico de billar en Pygame.
6. **Trayectoria en SEIDOR (17+ Proyectos Corporativos)**: Minería (Antamina, Minsur, Stracon, Zafranal), Salud (Clínica Internacional), Bolsa Trinacional (NUAM Exchange), etc.
7. **Bóveda de Certificaciones Oficiales**: Rutas oficiales de SAP Learning Journey (Financial Accounting & Public Edition), Google Cloud Skills y Claude.
8. **Más Allá del Código**: Danza folclórica (Elenco USIL), voluntariado en Aldea Westfalia y mentoría de talento.

---

## 🛠️ Guía de Mantenimiento y Actualización (2026 en adelante)

El sistema cuenta con una **arquitectura desacoplada basada en datos**. Nunca necesitarás tocar código HTML o CSS complejo para actualizar tu CV o añadir logros. Todo el contenido reside en archivos TypeScript fuertemente tipados dentro de `src/data/`:

```
src/data/
├── profile.ts          # Datos personales, pitch, enlaces a redes y referencias
├── experience.ts       # SEIDOR Consulting y todos los proyectos de clientes
├── projects.ts         # Proyectos destacados (RIA, CapeSync, GitHub, etc.)
├── skills.ts           # Módulos SAP, herramientas de IA, lenguajes y metodologías
├── certifications.ts   # Cursos oficiales de SAP, Google Skills y Claude
├── humanSide.ts        # Danza, voluntariado, liderazgo y pasiones
└── terminalCommands.ts # Comandos disponibles en la consola EdwinOS
```

---

### 1. ¿Cómo agregar un nuevo Proyecto de Cliente en SEIDOR?
Abre [`src/data/experience.ts`](file:///c:/Users/ejuni/OneDrive%20-%20SEIDOR%20SOLUTIONS%20S.L/Documentos/GitHub/PORTAFOLIO-EDWIN-FLORES/src/data/experience.ts) y añade un nuevo objeto dentro del array `projects` de SEIDOR:

```typescript
{
  client: "Nuevo Cliente Corporativo",
  industry: "Minería", // 'Salud' | 'Minería' | 'Financiero' | 'Consumo Masivo' | etc.
  period: "Ago. 2026 – Actualidad",
  role: "Líder de Proyecto SAP S/4HANA",
  impactHighlight: "Reducción de costos o mejora cuantificable",
  description: [
    "Descripción del entregable clave 1.",
    "Descripción del entregable clave 2."
  ],
  modules: ["MM", "Clean Core", "Fiori"],
  techStack: ["SAP S/4HANA", "Python", "SAP BTP"]
}
```
*El sistema generará automáticamente la tarjeta, las etiquetas y los filtros de industria.*

---

### 2. ¿Cómo agregar un nuevo Proyecto Destacado?
Abre [`src/data/projects.ts`](file:///c:/Users/ejuni/OneDrive%20-%20SEIDOR%20SOLUTIONS%20S.L/Documentos/GitHub/PORTAFOLIO-EDWIN-FLORES/src/data/projects.ts) y añade un nuevo objeto al array `projects`:

```typescript
{
  id: "mi-nuevo-proyecto",
  title: "Nombre del Proyecto",
  category: "SAP & AI", // 'Flagship' | 'Social ERP' | 'SAP & AI' | 'Data Science' | 'Engineering'
  tagline: "Subtítulo descriptivo de alto impacto",
  description: "Explicación clara del problema resuelto y la arquitectura técnica implementada.",
  features: [
    "Característica destacada 1",
    "Característica destacada 2"
  ],
  demoUrl: "https://demo.url",
  githubUrl: "https://github.com/EdwinFlores19/repo",
  techStack: ["Astro", "Python", "SAP S/4HANA"],
  metrics: [
    { label: "Métrica 1", value: "+99%" }
  ],
  featured: true
}
```

---

### 3. ¿Cómo agregar una nueva Certificación?
Abre [`src/data/certifications.ts`](file:///c:/Users/ejuni/OneDrive%20-%20SEIDOR%20SOLUTIONS%20S.L/Documentos/GitHub/PORTAFOLIO-EDWIN-FLORES/src/data/certifications.ts) y añade un objeto al array `certifications`:

```typescript
{
  id: "sap-nueva-cert",
  title: "Nombre de la Certificación Oficial",
  issuer: "SAP", // 'SAP' | 'Google' | 'Anthropic' | 'USIL' | 'Otros'
  issuerLogoType: "sap",
  category: "Enterprise ERP",
  issueDate: "2026",
  description: "Detalle de los conocimientos validados en la certificación.",
  credentialUrl: "https://learning.sap.com/...",
  badgeCode: "SAP-NEW-CERT-2026",
  skillsAcquired: ["Habilidad 1", "Habilidad 2"],
  featured: true
}
```

---

## 💻 Comandos del Proyecto

### 1. Iniciar servidor de desarrollo local
```bash
npm run dev
```
Abre en tu navegador: `http://localhost:4321`

### 2. Compilar versión final estática para producción
```bash
npm run build
```
Genera la carpeta `dist/` 100% optimizada para despliegue en **GitHub Pages**, **Vercel** o cualquier hosting estático.

### 3. Previsualizar la versión de producción
```bash
npm run preview
```

---

## 🌐 Despliegue Automatizado en GitHub Pages (CI/CD)

El proyecto cuenta con un flujo de integración y entrega continua (CI/CD) completamente automatizado mediante **GitHub Actions** (`.github/workflows/deploy.yml`). Cada vez que realices un `git push` a la rama `main`, tu portafolio se compilará y desplegará en segundos.

### ⚙️ Paso Único de Configuración en GitHub:
1. Ingresa a tu repositorio en GitHub: [https://github.com/EdwinFlores19/PORTAFOLIO-EDWIN-FLORES](https://github.com/EdwinFlores19/PORTAFOLIO-EDWIN-FLORES)
2. Haz clic en la pestaña **Settings** (Configuración).
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En la sección **Build and deployment**:
   - En **Source**, abre el menú desplegable y selecciona **`GitHub Actions`** (NO "Deploy from a branch").
5. ¡Listo! A partir de ese momento, cualquier push a `main` disparará el despliegue automático. Tu sitio estará disponible en:
   👉 **`https://edwinflores19.github.io/PORTAFOLIO-EDWIN-FLORES/`**

---

### 🛡️ Optimizaciones Críticas Implementadas para GitHub Pages:
- **Archivo `.nojekyll` Automático**: Evita que el motor Jekyll de GitHub omita carpetas con guion bajo (`_astro/`), asegurando que todos los archivos CSS y JS carguen al 100%.
- **Resolución Dinámica de Base Path (`getAssetUrl`)**:
  - En **Desarrollo Local** (`npm run dev`), la base es `/`.
  - En **GitHub Pages** (`CI/CD`), la base se ajusta dinámicamente a `/PORTAFOLIO-EDWIN-FLORES/`.
  - Si en el futuro conectas un **Dominio Personalizado** (ej. `edwinflores.dev`), la base vuelve automáticamente a `/` sin modificar una sola línea de código.
- **Metatags y OpenGraph Absolutos**: Generación de URLs canónicas completas y previsualización enriquecida con imagen de perfil para LinkedIn, WhatsApp y Twitter Cards.
- **Workflow Oficial de Astro**: Emplea `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3` y `actions/deploy-pages@v4` con permisos mínimos y caché de dependencias npm.

---

## 📞 Canales de Contacto Directo

- **Nombre**: Edwin Junior Flores Sanchez
- **WhatsApp**: [+51 910 193 590](https://wa.me/51910193590)
- **Correo Electrónico**: [ejuniorfloress@gmail.com](mailto:ejuniorfloress@gmail.com)
- **LinkedIn**: [linkedin.com/in/edwin-junior-flores-sanchez](https://www.linkedin.com/in/edwin-junior-flores-sanchez)
- **GitHub**: [github.com/EdwinFlores19](https://github.com/EdwinFlores19)
- **Ubicación**: Lima, Perú (UTC-5)
