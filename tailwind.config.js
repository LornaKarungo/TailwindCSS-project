const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    
    extend: {
      screens:{
        'widescreen':{'raw':'(min-aspec-ratio:3/2)'}, 
        'tallscreen':{'raw':'(max-aspec-ratio:13/20)'}, }
    },
    keyframes:{
      'open-menu':{
        '0%':{transform: 'scaleY(0)'},
        '80%':{transform: 'scaleY(1.2)'},
        '100%':{transform: 'scaleY(1)'},
    }
  },
  animation:{
    'open-menu':'open-menu 0.5s ease-in-out forwards'
  },
  },
  plugins: [],
}

