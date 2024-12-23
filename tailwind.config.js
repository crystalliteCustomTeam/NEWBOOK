/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: 'true',
			padding: '0.5rem'
		},
		screens: {
			'xs': {
				'max': '576px'
			},
			'sm': '576px',
			'md': '768px',
			'lg': '992px',
			'xl': '1200px',
			'2xl': '1400px',
			'3xl': '1600px'
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
				mono: ["var(--font-mono)", ...fontFamily.mono],
				"manrope": ["var(--font-manrope)", ...fontFamily.mono]
			},
			colors: {
				black: '#0F172A',
				navy: '#4A4A68',
				pink: '#F32FA4',
				purple: "#C245BB",
				blue: "#626EE6"
			},
			backgroundImage: {
				gradient: 'linear-gradient(90deg, #F32FA4 0%, #626EE6 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}