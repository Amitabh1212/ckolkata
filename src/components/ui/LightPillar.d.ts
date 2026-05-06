import { CSSProperties } from 'react';

export interface LightPillarProps {
  topColor?: string;
  bottomColor?: string;
  intensity?: number;
  rotationSpeed?: number;
  interactive?: boolean;
  className?: string;
  glowAmount?: number;
  pillarWidth?: number;
  pillarHeight?: number;
  noiseIntensity?: number;
  mixBlendMode?: CSSProperties['mixBlendMode'];
  pillarRotation?: number;
  quality?: 'low' | 'medium' | 'high';
}

declare function LightPillar(props: LightPillarProps): JSX.Element;
export default LightPillar;
