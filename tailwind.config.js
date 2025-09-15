module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens:{
          'other': {'min': '340px', 'max': '1200px'},
        },
      },
    },
    plugins: [],
    darkmode:'class',
  }