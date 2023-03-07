import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };
    colors: {
      gray2: Interpolation<ThemedStyledProps<Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & { ref?: ((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null | undefined; }, DefaultTheme>>;
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
      backgroundTypeBug: '#8BD674',
      backgroundTypeDark: '#6F6E78',
      backgroundTypeDragon: '#7383B9',
      backgroundTypeElectric: '#F2CB55',
      backgroundTypeFairy: '#EBA8C3',
      backgroundTypeFighting: '#EB4971',
      backgroundTypeFire: '#FFA756',
      backgroundTypeFlying: '#83A2E3',
      backgroundTypeGhost: '#8571BE',
      backgroundTypeGrass: '#8BBE8A',
      backgroundTypeGround: '#F78551',
      backgroundTypeIce: '#91D8DF',
      backgroundTypeNormal: '#B5B9C4',
      backgroundTypePoison: '#9F6E97',
      backgroundTypePshycic: '#FF6568',
      backgroundTypeRock: '#D4C294',
      backgroundTypeSteel: '#4C91B2',
      backgroundTypeWater: '#58ABF6',
    };
  }
  
}
