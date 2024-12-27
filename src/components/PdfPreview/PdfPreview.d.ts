import { CSSProperties, FC } from 'react';

export type TPdfPreviewProps = {
  /**
   * Данные для отображения в формате blob
   */
  data: BlobPart | null;

  /**
   * Состояние загрузки
   */
  loading?: boolean;

  /**
   * Дополнительные стили
   */
  style?: CSSProperties;

  /**
   * Сообщение об ошибке отображения
   */
  errorMessage?: string;

  /**
   * Текст для отображения, когда файл не выбран
   * @default 'Выберите PDF файл для просмотра'
   */
  emptyMessage?: string;
};

declare const PdfPreview: FC<TPdfPreviewProps>;

export default PdfPreview;
