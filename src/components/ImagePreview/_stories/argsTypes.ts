export const argsTypes = {
  items: {
    description:
      'Массив изображений для отображения. Пустые/null элементы отфильтровываются. previewSrc используется в сетке, fullSrc в модальном окне.',
    table: {
      defaultValue: { summary: '[]' },
      type: {
        summary: 'IImageItem[]',
        detail: `type IImageItem = {
                      id?: string | number;
                      previewSrc: string;
                      fullSrc: string;
                      title?: string;
                      description?: string;
                      previewTitle?: string;
                      downloadName?: string;
                      downloadHandler?: (value: IImageItem) => void;
                      alt?: string;
                    };`
      }
    },
    control: { type: 'object' }
  },
  className: {
    description: 'Дополнительный CSS-класс для корневого контейнера.',
    table: {
      defaultValue: { summary: 'undefined' },
      type: { summary: 'string' }
    },
    control: { type: 'string' }
  },
  previewImgSize: {
    description: 'Фиксированная ширина и высота миниатюры в пикселях',
    table: {
      defaultValue: { summary: '140' },
      type: { summary: 'number' }
    },
    control: { type: 'number', min: 1, step: 1 }
  },
  checkedMap: {
    description: 'Карта выбранных элементов (источник истины снаружи). Ключ: String(item.id ?? index).',
    table: {
      defaultValue: { summary: 'undefined' },
      type: { summary: 'Record<string, boolean>' }
    },
    control: { type: 'object' }
  },
  handleCheckbox: {
    description:
      'Единый обработчик изменения чекбокса. Вызывается с { item, checked }. Если не передан, чекбоксы не отображаются.',
    table: {
      defaultValue: { summary: 'undefined' },
      type: { summary: '({ item, checked }: { item: IImageItem; checked: boolean }) => void' },
      disable: true
    }
  }
};

export const argTypes = argsTypes;
