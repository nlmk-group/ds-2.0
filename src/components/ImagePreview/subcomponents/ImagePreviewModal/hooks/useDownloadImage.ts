import { useCallback } from 'react';

type Args = {
  href?: string;
  downloadName?: string;
};

/**
 * Хук useDownloadImage возвращает обработчик скачивания изображения через временную ссылку <a>.
 * Использует target="_blank" и rel="noopener noreferrer" и подставляет downloadName при наличии.
 *
 * @param {object} args - Параметры хука.
 * @param {string} args.href - URL файла для скачивания.
 * @param {string} [args.downloadName] - Имя файла для атрибута download.
 *
 * @returns {() => void} download - Функция, инициирующая скачивание.
 */

export const useDownloadImage = ({ href, downloadName }: Args) => {
  return useCallback(() => {
    if (!href) return;
    const a = document.createElement('a');
    a.href = href;
    a.download = downloadName ?? '';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, [href, downloadName]);
};
