export enum ESkeletonAnimation {
  wave = 'wave',
  pulse = 'pulse'
}

export interface ISkeletonLoadingProps {
  id?: string;
  className?: string;
  count?: number;
  width?: string;
  height?: string;
  animation?: ESkeletonAnimation;
}
