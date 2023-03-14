import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };
    colors: {
      gray2: Interpolation<
        ThemedStyledProps<
          Omit<
            DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
            'ref'
          > & {
            ref?:
              | ((instance: HTMLSpanElement | null) => void)
              | RefObject<HTMLSpanElement>
              | null
              | undefined;
          },
          DefaultTheme
        >
      >;
      primary: {
        default: string;
        focus: string;
        negative: string;
      };
      secondary: {
        default: string;
        hover: string;
      };
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
    backgroundColors: {
      backgroundTypeBug: string;
      backgroundTypeDark: string;
      backgroundTypeDragon: string;
      backgroundTypeElectric: string;
      backgroundTypeFairy: string;
      backgroundTypeFighting: string;
      backgroundTypeFire: string;
      backgroundTypeFlying: string;
      backgroundTypeGhost: string;
      backgroundTypeGrass: string;
      backgroundTypeGround: string;
      backgroundTypeIce: string;
      backgroundTypeNormal: string;
      backgroundTypePoison: string;
      backgroundTypePshycic: string;
      backgroundTypeRock: string;
      backgroundTypeSteel: string;
      backgroundTypeWater: string;
    };
  }
}
