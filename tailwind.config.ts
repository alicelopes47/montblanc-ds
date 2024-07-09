/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
				light: '#F9F5F0',
				'lightHover': '#F6F0E8',
				'lightActive': '#EDE1CF',

				normal: '#C59E64',
				'normalHover': '#B18E5A',
				'normalActive': '#9e7e50',

				dark: '#94774b',
				'darkHover': '#765f3c',
				'darkActive': '#59472d',
        
        default: '#000000',
        disabled: '#5F5F5F',
        hightlight: '#453723',

        white: '#FFFFFF',
        bgDisabled: '#d9d9d9',
		},
    fontSize: {
      'h1': ['48px', { lineHeight: '100%' }],
      'h2': ['40px', { lineHeight: '100%' }],
      'h3': ['33px', { lineHeight: '100%' }],
      'h4': ['28px', { lineHeight: '100%' }],
      'h5': ['23px', { lineHeight: '100%' }],
      'title-1': ['19px', { lineHeight: '100%' }],
      'title-2': ['16px', { lineHeight: '100%' }],
      'body-1': ['14px', { lineHeight: '100%' }],
      'body-2': ['11px', { lineHeight: '100%' }],
    },
    borderWidth: {
      regular: '0.3px',
    },
    padding: {
      'button': '51.5px',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    fontWeight: {
      'regular': 300,
      'bold': 600,
    },
	},
	plugins: [],
}
