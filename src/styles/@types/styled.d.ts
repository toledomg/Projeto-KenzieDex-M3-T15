import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };
    colors: {
<<<<<<< HEAD
=======
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
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
      primary: {
        default: string;
        focus: string;
        negative: string;
      };
<<<<<<< HEAD
      secondary: string;
=======
      secondary: {
        default: string;
        hover: string;
      };
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
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
<<<<<<< HEAD
=======
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
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
  }
}
