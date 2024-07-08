/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
      disabled: {
        'bg': '#D6D6D6',
        'text': '#5F5F5F',
      },
			primary: {
				light: '#F9F5F0',
				'light-hover': '#F6F0E8',
				'light-active': '#EDE1CF',
				normal: '#C59E64',
				'normal-hover': '#B18E5A',
				'normal-active': '#9e7e50',
				dark: '#94774b',
				'dark-hover': '#765f3c',
				'dark-active': '#59472d',
				darker: '#453723',
			},
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
      regular: '0.3px'
    }, 
    padding: {
      'button': '8.5px 51.5px',
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
