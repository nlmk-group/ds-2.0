export interface IImageItem {
  id?: string | number;
  previewSrc: string;
  fullSrc: string;
  previewTitle?: string;
  title?: string;
  description?: string;
  downloadName?: string;
  downloadHandler?: (item: IImageItem) => void;
  alt?: string;
}

export interface IImagePreviewProps {
  items: IImageItem[];
  className?: string;
  previewImgSize?: number;
  checkedMap?: Record<string, boolean>;
  handleCheckbox?: ({ item, checked }: { item: IImageItem; checked: boolean }) => void;
}
