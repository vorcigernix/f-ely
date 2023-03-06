const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				tuatara: {
					50: '#F5F5F5',
					100: '#EBEBEB',
					200: '#CECECE',
					300: '#B0B1B1',
					400: '#757676',
					500: '#3A3B3B',
					600: '#343535',
					700: '#232323',
					800: '#1A1B1B',
					900: '#111212'
				},

				swan: {
					50: '#FCFBFC',
					100: '#F8F8F8',
					200: '#EFEDEE',
					300: '#E5E1E3',
					400: '#D1CBCE',
					500: '#BDB5B9',
					600: '#AAA3A7',
					700: '#716D6F',
					800: '#555153',
					900: '#393638'
				},

				hurricane: {
					50: '#F9F9F9',
					100: '#F3F2F2',
					200: '#E2DFDF',
					300: '#D0CCCB',
					400: '#ADA5A4',
					500: '#8A7F7D',
					600: '#7C7271',
					700: '#534C4B',
					800: '#3E3938',
					900: '#292626'
				},

				lavblue: {
					50: '#F9F8FC',
					100: '#F3F1F9',
					200: '#E0DDF1',
					300: '#CDC8E8',
					400: '#A89FD6',
					500: '#8276C5',
					600: '#756AB1',
					700: '#4E4776',
					800: '#3B3559',
					900: '#27233B'
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
