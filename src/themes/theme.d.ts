export type Theme = {
  colors: {
    background: {
      primary: string;
      secondary: string;
      thriary: string;
      contrast: string;
    };
    basic: {
      primary: string;
      secondary: string;
      thriary: string;
      quanteriary: string;
      white: string;
      strokes: string;
    };
    invertion: {
      primary: string;
    };
    accent: {
      primary: string;
      secondary: string;
    };
    notifications: {
      error: string;
      warning: string;
    };
    brand: {
      linear: string;
    };
  };
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
