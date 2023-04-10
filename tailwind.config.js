const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      fourth: 'Cookie'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
      },
     
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/photop.png')",
        services: "url('./assets/services.png')",
        whitebackground: "url('./assets/white2.jpg')"
      },
    },
  },
  plugins: [],
};
