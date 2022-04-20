export default {
  border: {
    radius: {
      medium: '0.8rem',
      large: '3.2rem'
    }
  },
  font: {
    family: 'Source Sans Pro, sans-serif',
    weight: {
      regular: 400,
      semiBold: 600,
      bold: 700
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
    lightModeBg: '#E8E7E3',
    white: '#FFFFFF',
    black: '#252627',

    textGray: '#d9d9d9',
    lighterGray: '#DEDAF0',
    lightGray: '#EBEEF2',
    mediumGray: '#E8E7E3',
    darkGray: '#757678;',

    redError: '#E25C5C',

    lighterBlue: '#D2CCFE',
    lightBlue: '#A599FE',
    mediumBlue: '#7966FD',
    darkBlue: '#4C33FD',
    primary: '#1E00FC',

    lightPink: '#F6C1DA',
    mediumPink: '#EA78AE',
    secondary: '#DF3083'
  },
  containers: {
    mobile: '36rem', //360px
    desktop: '112rem' //1120px
  }
} as const
