import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };
    colors: {
      primary: {
        default: string;
        focus: string;
        negative: string;
      };
      secondary: string;
      gray6: string;
      gray5: string;
      gray4: string;
      gray3: string;
      gray1: string;
      gray1: string;
      gray0: string;
      white: string;
      feedback: {
        negative: string;
        warning: string;
        sucess: string;
        information: string;
      };
    };
  }
}
