import { IImageItem } from '@components/ImagePreview/types';

export interface IImagePreviewModalProps {
  items: IImageItem[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  onClose: () => void;
}
