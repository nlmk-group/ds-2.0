type TSkeletonAnimation = 'wave' | 'pulse'

export interface ISkeletonLoadingProps {
  id?: string;
  className?: string;
  count?: number;
  width?: string;
  height?: string;
  animation?: TSkeletonAnimation
}
