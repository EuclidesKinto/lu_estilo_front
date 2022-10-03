module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
      container: {
        center: true,
        padding: "1rem",
      },
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          roboto: ["Roboto", "sans-serif"],
        },
        colors:{
          'lu-estilo-color': '#475472',
        },
        backgroundImage: {
        'hero-madeira': "url('/image/fundo.jpg')",
        'hero-shirts': "url('/image/shirts.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
