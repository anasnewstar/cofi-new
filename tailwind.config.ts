
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Nunito', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' },
				},
				bubble: {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'50%': { opacity: '0.5' },
					'100%': { transform: 'translateY(-100%)', opacity: '0' },
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				fadeInRight: {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				"spin-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				bounce: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				shake: {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'20%': { transform: 'rotate(8deg)' },
					'40%': { transform: 'rotate(-8deg)' },
					'60%': { transform: 'rotate(5deg)' },
					'80%': { transform: 'rotate(-5deg)' },
				},
				morph: {
					'0%, 100%': { borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%' },
					'25%': { borderRadius: '73% 27% 26% 74% / 73% 42% 58% 27%' },
					'50%': { borderRadius: '28% 72% 44% 56% / 49% 40% 60% 51%' },
					'75%': { borderRadius: '40% 60% 70% 30% / 47% 62% 38% 53%' },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				float: 'float 6s ease-in-out infinite',
				shimmer: 'shimmer 2s linear infinite',
				bubble: 'bubble 3s ease-in-out infinite',
				fadeIn: 'fadeIn 0.7s ease-out forwards',
				fadeInLeft: 'fadeInLeft 0.7s ease-out forwards',
				fadeInRight: 'fadeInRight 0.7s ease-out forwards',
				slideUp: 'slideUp 0.7s ease-out forwards',
				"spin-slow": "spin-slow 12s linear infinite",
				bounce: 'bounce 2s ease infinite',
				shake: 'shake 3.5s ease infinite',
				morph: 'morph 8s linear infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
