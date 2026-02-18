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
                      downloadName?: string;
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
  previewImgWidth: {
    description: 'Фиксированная ширина миниатюры в пикселях. Также влияет на построение grid-сетки.',
    table: {
      defaultValue: { summary: '140' },
      type: { summary: 'number' }
    },
    control: { type: 'number', min: 1, step: 1 }
  }
};

export const argTypes = argsTypes;
