/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00f3ff',
        'cyber-purple': '#bc13fe',
        'cyber-blue': '#3b82f6',
        'cyber-indigo': '#6366f1',
        'sap-gold': '#F0AB00',
        'sap-amber': '#fbbf24',
        'matrix-green': '#10b981',
        'claude-coral': '#d97706',
        'gemini-blue': '#4285f4',
        'chatgpt-teal': '#10a37f',
        'deep-obsidian': '#05070e',
        'deep-navy': '#090d1a',
        'deep-card': 'rgba(10, 16, 30, 0.72)',
        'glass-border': 'rgba(255, 255, 255, 0.12)',
        'glass-border-cyan': 'rgba(0, 243, 255, 0.3)',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 25px rgba(0, 243, 255, 0.35)',
        'neon-purple': '0 0 25px rgba(188, 19, 254, 0.35)',
        'neon-gold': '0 0 25px rgba(240, 171, 0, 0.35)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'border-flow': 'borderFlow 4s linear infinite',
        'badge-pulse': 'badgePulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        badgePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
