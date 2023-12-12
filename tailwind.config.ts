/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {

        primary: "#4A6CF7",
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'Blueviolet': '#6556FF',
        'semiblueviolet': 'rgba(101, 86, 255, 0.15)',
        'midnightblue': '#222C44',
        'kellygreen': "#43C639",
        "charcoal": "#2D2F30",
        'cornflowerblue': "#699BF7",
        'paleblue': '#D5EFFA',
        'ultramarine': '#1A21BC',
        'slategray': '#57595F',
        'lightkblue': '#F6FAFF',
        'grey500': '#ECECEC',
        'red': '#B40000',
        'gold': '#FFB900',
        'darkgray': 'rgba(54, 54, 54, 0.75)',
        'darkbrown': '#352E2E',
        'lightgray': '#A3A7AD',
        'gunmetalgray': '#363636',
        'gray-blue': 'rgba(105, 120, 131, 0.16)',
        'dark-red': 'rgba(44, 9, 11, 0.8)',

        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },

      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.webp')",
        'bg-img-2': "url('/img-2.webp')",
        'feature-bg': "url('/feature-bg.png')",
        'contact-bg': "url('/contact-us-hero-cover@2x-1.png')",
        'pattern': "url('/pattern.webp')",
        'pattern-2': "url('/Homepage.webp')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
