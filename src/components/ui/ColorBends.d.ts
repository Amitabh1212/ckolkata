import { CSSProperties } from 'react';

export interface ColorBendsProps {
  className?: string;
  style?: CSSProperties;
  rotation?: number;
  autoRotate?: number;
  speed?: number;
  colors?: string[];
  transparent?: boolean;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  noise?: number;
  iterations?: number;
  intensity?: number;
  bandWidth?: number;
}

declare function ColorBends(props: ColorBendsProps): JSX.Element;
export default ColorBends;
