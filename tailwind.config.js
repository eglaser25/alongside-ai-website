/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			'vivid-blue': '#1335F2',
  			midnight: '#091017',
  			'first-shade': '#C9DFF2',
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			brand: {
  				DEFAULT: 'var(--color-brand)',
  				hover: 'var(--color-brand-hover)',
  				subtle: 'var(--color-brand-subtle)',
  				muted: 'var(--color-brand-muted)'
  			},
  			surface: {
  				primary: 'var(--color-bg-primary)',
  				subtle: 'var(--color-bg-subtle)',
  				elevated: 'var(--color-bg-elevated)',
  				inverse: 'var(--color-bg-inverse)'
  			},
  			text: {
  				primary: 'var(--color-text-primary)',
  				secondary: 'var(--color-text-secondary)',
  				tertiary: 'var(--color-text-tertiary)',
  				inverse: 'var(--color-text-inverse)',
  				brand: 'var(--color-brand)'
  			},
  			border: {
  				DEFAULT: 'var(--border)',
  				subtle: 'var(--color-border-subtle)',
  				strong: 'var(--color-border-strong)',
  			},
  			success: 'var(--color-success)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			popover: {
  				DEFAULT: 'var(--popover)',
  				foreground: 'var(--popover-foreground)'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive)',
  				foreground: 'var(--destructive-foreground)'
  			},
  			input: 'var(--input)',
  			ring: 'var(--ring)',
  			chart: {
  				'1': 'var(--chart-1)',
  				'2': 'var(--chart-2)',
  				'3': 'var(--chart-3)',
  				'4': 'var(--chart-4)',
  				'5': 'var(--chart-5)'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-sans)',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			display: [
  				'3.5rem',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.025em',
  					fontWeight: '700'
  				}
  			],
  			'display-sm': [
  				'2.5rem',
  				{
  					lineHeight: '1.15',
  					letterSpacing: '-0.025em',
  					fontWeight: '700'
  				}
  			],
  			h1: [
  				'2.5rem',
  				{
  					lineHeight: '1.2',
  					letterSpacing: '-0.02em',
  					fontWeight: '700'
  				}
  			],
  			h2: [
  				'2rem',
  				{
  					lineHeight: '1.25',
  					letterSpacing: '-0.02em',
  					fontWeight: '600'
  				}
  			],
  			h3: [
  				'1.5rem',
  				{
  					lineHeight: '1.35',
  					letterSpacing: '-0.01em',
  					fontWeight: '600'
  				}
  			],
  			h4: [
  				'1.25rem',
  				{
  					lineHeight: '1.4',
  					fontWeight: '600'
  				}
  			],
  			'body-lg': [
  				'1.125rem',
  				{
  					lineHeight: '1.7'
  				}
  			],
  			body: [
  				'1rem',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			'body-sm': [
  				'0.875rem',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			caption: [
  				'0.75rem',
  				{
  					lineHeight: '1.5',
  					fontWeight: '500'
  				}
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem'
  		},
  		boxShadow: {
  			sm: '0 1px 2px 0 rgb(0 0 0 / 0.03)',
  			DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)',
  			md: '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07)',
  			lg: '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.08)',
  			xl: '0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.08)',
  			card: '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
  			'card-hover': '0 10px 20px -5px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.06)',
  			elevated: '0 4px 12px -2px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
  			button: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  			'button-hover': '0 4px 8px -2px rgb(19 53 242 / 0.25)'
  		},
  		borderRadius: {
  			DEFAULT: '0.5rem',
  			lg: 'var(--radius)',
  			xl: 'calc(var(--radius) + 4px)',
  			'2xl': 'calc(var(--radius) + 8px)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		transitionDuration: {
  			DEFAULT: '200ms'
  		},
  		transitionTimingFunction: {
  			DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)'
  		},
  		keyframes: {
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		animation: {
  			'fade-in': 'fade-in 0.5s ease-out forwards'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
