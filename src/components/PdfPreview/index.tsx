import React, { FC, useEffect, useMemo, useState } from 'react';

import Spinner from '@components/Spinner';
import Typography from '@components/Typography';
import clsx from 'clsx';

import { TPdfPreviewProps } from './types';

import styles from './PdfPreview.module.scss';

/**
 * Компонент для предварительного просмотра PDF файлов
 * @component
 * @param {TPdfPreviewProps} props - Свойства компонента
 * @param {BlobPart | null} props.data - Данные PDF файла в формате blob
 * @param {boolean} [props.loading] - Флаг состояния загрузки
 * @param {CSSProperties} [props.style] - Дополнительные CSS стили
 * @param {string} [props.errorMessage] - Сообщение об ошибке при неудачной загрузке
 * @param {string} [props.emptyMessage] - Текст для отображения, когда файл не выбран
 * @returns {JSX.Element} Компонент предпросмотра PDF
 */

const PdfPreview: FC<TPdfPreviewProps> = ({
  data,
  loading,
  style,
  errorMessage,
  emptyMessage = 'Выберите PDF файл для просмотра'
}) => {
  const [pdfError, setPdfError] = useState<string | null>(null);

  const src = useMemo(() => {
    if (!data) return undefined;

    try {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      if (blob.type !== 'application/pdf') {
        throw new Error('Неверный формат файла');
      }

      return url;
    } catch (error) {
      setPdfError(error instanceof Error ? error.message : 'Ошибка обработки файла');
      return undefined;
    }
  }, [data]);

  useEffect(() => {
    return () => {
      if (src) {
        URL.revokeObjectURL(src);
      }
    };
  }, [src]);
  if (loading) {
    return (
      <div
        className={clsx(styles['pdf-viewer'], styles['pdf-viewer--loading'])}
        style={style}
        data-testid="PDF_PREVIEW"
        data-ui-pdf
      >
        <Spinner />
      </div>
    );
  }

  if (pdfError && errorMessage) {
    return (
      <div
        className={clsx(styles['pdf-viewer'], styles['pdf-viewer--error'])}
        style={style}
        data-testid="PDF_PREVIEW"
        data-ui-pdf
      >
        <Typography color="var(--spectrum-red-50)" variant="Body1-Bold">
          {pdfError || errorMessage}
        </Typography>
      </div>
    );
  }

  if (!data) {
    return (
      <div
        className={clsx(styles['pdf-viewer'], styles['pdf-viewer--empty'])}
        style={style}
        data-testid="PDF_PREVIEW"
        data-ui-pdf
      >
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          {emptyMessage}
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles['pdf-viewer']} style={style} data-testid="PDF_PREVIEW" data-ui-pdf>
      <embed src={src} type="application/pdf" width="100%" height="100%" />
    </div>
  );
};

export default PdfPreview;
