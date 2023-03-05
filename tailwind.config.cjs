const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				teak: {
					50: '#f9f8f3',
					100: '#f1efe3',
					200: '#e2ddc6',
					300: '#d0c6a1',
					400: '#bcaa7b',
					500: '#af9764',
					600: '#a08356',
					700: '#866b48',
					800: '#6d573f',
					900: '#594835'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
