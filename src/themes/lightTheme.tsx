import { Theme } from './theme';

export const lightTheme: Theme = {
  colors: {
    background: {
      primary: '#FFFFFF',
      secondary: '#E3EBFF',
      thriary: '#FAFBFF',
      contrast: '#242731',
    },
    basic: {
      white: '#FFFFFF',
      primary: '#242731',
      secondary: '#575F6E',
      thriary: '#79808F',
      quanteriary: '#B9B9B9',
      strokes: '#D4D4D4',
    },
    invertion: {
      primary: '#FFFFFF',
    },
    accent: {
      primary: '#4277FF',
      secondary: '#6892FF',
      // thriary: '#F2F8FF',
    },
    notifications: {
      error: '#FF3B30',
      warning: '#FFB800',
    },
    brand: {
      linear: 'linear-gradient(#9ECBFF 0%, #6FA0FF 41%, #AF93FF 100%)',
    },
  },
};
