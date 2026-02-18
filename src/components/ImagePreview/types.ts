export interface IImageItem {
  id?: string | number;
  previewSrc: string;
  fullSrc: string;
  title?: string;
  description?: string;
  downloadName?: string;
  alt?: string;
}

export interface IImagePreviewProps {
  items: IImageItem[];
  className?: string;
  previewImgWidth?: number;
}
