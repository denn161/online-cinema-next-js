import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */

const primary = '#E30B13'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: primary,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      yellow: {
        700: '#f5c521',
      },
      gray: {
        300: '#d9dae8',
        500: '#999aa5',
        600: '#66676e',
        800: '#242529',
        900: '#191b1f',
        950: '#181215',
      },
    },
    extend: {
      spacing: {
        0.5: '0.12rem', //3px
        layout: '2.75rem', //44px
      },
      fontSize: {
        '2lg': '1.38rem', //22px
      },
      borderRadius: {
        image: '0.5rem', //8px
        layout: '0.8rem', //14px
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '500ms',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        fade: 'fade .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
    plugin(({addComponents,theme,addUtilities})=>{
      addComponents({
        '.btn-primary':{
           backgroundColor:primary,
           color:'#fff',
           borderRadius:'0.65rem',
           transition:'background-color .3s ease-in-out',
           cursor:'pointer',
           '&:hover':{
            backgroundColor:'#ff0009'
           }
        },
        '.text-link':{
          textUnderlineOffset:4,
          color:'rgba(255,255,255,.9)',
          transition:'text-decoration-color .4s ease-in-out',
          textDecorationLine:'underline',
          textDecorationColor:'rgba(255,255,255,.23)',
          '&:hover':{
            textDecorationColor:'rgba(255,255,255,.9)'
          }
        },
        '.air-block':{
          borderRadius:theme('borderRadius.layout'),
          backgroundColor:theme('color.gray.950'),
          color:theme('color.white'),
          boxShadow:theme('boxShadow.lg')
        }
      }),
      addUtilities({
        '.text-shadow':{
          textShadow:'1px 1px rgba(0,0,0,.4)'
        },
        '.outline-border-none':{
           outline:'none',
           border:'none'
        },
        '.flex-center-between':{
           display:'flex',
           alignItems:'center',
           justifyContent:'space-between'
        },
        '.flex-center-col':{
          display:'flex',
          alignItems:'center',
          flexDirection:'column'
       },
       '.flex-start-col':{
        display:'flex',
        alignItems:'flex-start',
        flexDirection:'column'
     },
        '.image-like-bg':{
          objectPosition:'center',
          objectFit:'cover',
          pointerEvents:'none'
  
        }
      })
    })
  ],
}
