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
    darkerPurple: '#493A92',
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
    darkBlue: '#4C33FD',
    primary: '#1A00D0',

    lightPink: '#F6C1DA',
    mediumPink: '#EA78AE'
  },
  containers: {
    mobile: '36rem', //360px
    desktop: '66rem' //660px
  }
} as const
