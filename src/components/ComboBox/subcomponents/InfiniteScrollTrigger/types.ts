export interface IInfiniteScrollTriggerProps {
  isVirtualize: boolean;
  isLoading: boolean;
  infinityLoadingOptions?: {
    isStopLoading: boolean;
    nextData: () => void;
    offset: number;
  };
}
