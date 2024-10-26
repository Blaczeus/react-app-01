/** @type {import('tailwindcss').Config} */
const withMT = require( "@material-tailwind/react/utils/withMT" );


module.exports = withMT( {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [ require( '@tailwindcss/forms' ) ],
} );
