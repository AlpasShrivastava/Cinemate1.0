module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkmode:'class',
    theme: {
      extend: {
        screens:{
          'other': {'min': '340px', 'max': '1200px'},
        },
      },
    },
    plugins: [],
  }