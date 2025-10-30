/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    "max-w-2xl",
    "max-w-3xl",
    "max-w-6xl",
    "px-6",
    "text-center",
    "leading-relaxed",
    "inline-flex",
    "w-auto",
    "items-center",
    "justify-center",
    "sm:w-auto",
    "w-full"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#1E40AF', // blue-700
          dark: '#0F172A',    // slate-900
          light: '#3B82F6',   // blue-500
        },
        accent: {
          DEFAULT: '#3B82F6', // blue-500
          orange: '#F97316',  // orange-500
        },
        neutral: {
          bg: '#FAFAF9',      // stone-50
          card: '#FFFFFF',    // white
          text: '#1E293B',    // slate-800
          light: '#64748B',   // slate-500
          border: '#E7E5E4',  // stone-200
        },
        // Keep legacy colors for backward compatibility
        brand: {
          DEFAULT: '#2563eb',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        ink: '#0b1020',
        muted: '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        card: '0 20px 45px -25px rgba(15, 23, 42, 0.45)',
        'card-hover': '0 25px 55px -20px rgba(15, 23, 42, 0.5)',
      },
    },
  },
  plugins: [],
}
