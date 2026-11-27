import { EPictureNames, EPictureSizes } from '../enums';

export const argsTypes = {
  name: {
    description:
      'Имя иллюстрации. Набор изображений зависит от размера. Если изображения нет в этом размере, компонент ищет вариант no-image.',
    table: {
      type: {
        summary: Object.values(EPictureNames).join(' | ')
      }
    },
    options: Object.values(EPictureNames),
    control: { type: 'select' }
  },
  size: {
    description: 'Размеры картинки',
    table: {
      defaultValue: {
        summary: EPictureSizes.Small
      },
      type: {
        summary: Object.values(EPictureSizes).join(' | ')
      }
    },
    options: Object.values(EPictureSizes),
    control: { type: 'select' }
  }
};
