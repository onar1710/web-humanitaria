/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				black: '#050505',
				'dark-bg': '#0d1117',
				emerald: {
					DEFAULT: '#00b140',
					dark: '#031f14',
				},
				'neon-green': '#39ff14',
				'lime-green': '#7CFF00',
				'electric-green': '#00ff88',
				'purple-shadow': '#240038',
				'accent-green': '#00ff66',
				'accent-blue': '#005eff',
				'accent-purple': '#9b00ff',
				'accent-orange': '#ff7a00',
			},
			fontFamily: {
				sans: ['Inter', 'Poppins', 'Montserrat', 'sans-serif'],
			},
			boxShadow: {
				'neon': '0 0 20px rgba(57, 255, 20, 0.3), 0 0 40px rgba(57, 255, 20, 0.1)',
				'neon-hover': '0 0 30px rgba(57, 255, 20, 0.5), 0 0 60px rgba(57, 255, 20, 0.2)',
				'glow': '0 0 15px rgba(124, 255, 0, 0.4)',
			},
			animation: {
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
		},
	},
	plugins: [],
}
