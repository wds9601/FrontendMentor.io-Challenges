module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
		// screens: {
		//  xs: '375px',
		// 	...defaultTheme.screens
		// },
		extend: {
			backgroundImage: (theme) => ({
				'top-desk': "url('/images/bg-pattern-top-desktop.svg')",
				'bot-desk': "url('./images/bg-pattern-bottom-desktop.svg')",
				'top-mobile': "url('/images/bg-pattern-top-mobile.svg')",
				'bot-mobile': "url('./images/bg-pattern-bottom-mobile.svg')"
			})
		}
	},
  variants: {
    extend: {},
  },
  plugins: [],
}
