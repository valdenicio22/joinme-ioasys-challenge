export default {
  border: {
    radius: {
      medium: '0.8rem',
      xlarge: '4rem'
    }
  },
  font: {
    family: 'Libre Franklin, sans-serif',
    weight: {
      regular: 400,
      semiBold: 500,
      bold: 600
    },
    sizes: {
      xsmall: '1.2rem', // 12px
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.4rem' // 24px
    }
  },
  colors: {
    primary: '#493A92',
    lightPurple: '#9C91D3',
    darkPurple: '#6B5BBE',

    lightModeBg: '#E8E7E3',

    white: '#FFFFFF',

    black: '#2C3131',

    lightGray: '#CACACA',
    mediumGray: '#CCCCCC',
    darkGray: '#757678;',

    redError: '#E25C5C',

    lighterBlue: '#D2CCFE',
    lightBlue: '#A599FE',
    mediumBlue: '#7966FD',

    lightPink: '#F6C1DA',
    mediumPink: '#EA78AE'
  },
  containers: {
    mobile: '34.8rem', //428px - 80 = 348px
    desktop: '65rem' //650px
  }
} as const
