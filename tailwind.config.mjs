/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				patrick: ['"Patrick Hand"', 'cursive']
			},
			backgroundImage: {
				'main-bg-gradient': 'linear-gradient(to bottom, #374151, #111827)'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
