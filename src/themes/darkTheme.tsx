import { Theme } from './theme';

export const darkTheme: Theme = {
  colors: {
    background: {
      primary: '#16162A',
      secondary: '#292946',
      thriary: '#494980',
      contrast: '#EAEAFF',
    },
    basic: {
      primary: '#F3F3F3',
      secondary: '#8E8EA3',
      thriary: '#818191',
      quanteriary: '#676778',
      white: '#FFFFFF',
      strokes: '#52526B',
    },
    invertion: {
      primary: '#16162A',
    },
    accent: {
      primary: '#16162A',
      secondary: '#5872CF',
    },
    notifications: {
      error: '#EE6C6C',
      warning: '#E1A023',
    },
    brand: {
      linear: 'linear-gradient(#BEDCFF 0%, #8EB5FF 41%, #C6B3FF 100%)',
    },
  },
};
