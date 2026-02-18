import { IImageItem } from '@components/ImagePreview/types';

export type IMockItem = Omit<IImageItem, 'id' | 'title' | 'description'> & {
  titlePrefix?: string;
  descriptionPrefix?: string;
};

export const makeItems = (
  base: IMockItem | IMockItem[],
  count: number
): IMockItem[] => {
  const bases = Array.isArray(base) ? base : [base];
  if (!bases.length || count <= 0) return [];

  return Array.from({ length: count }, (_, i) => {
    const b = bases[i % bases.length];
    const n = i + 1;

    const titlePrefix = b.titlePrefix ?? 'Этап';
    const descriptionPrefix = b.descriptionPrefix ?? 'Название фото';

    const { titlePrefix: _t, descriptionPrefix: _d, ...rest } = b;

    return {
      ...rest,
      id: n,
      title: `${titlePrefix} ${n}`,
      description: `${descriptionPrefix} ${n}`
    };
  });
};
