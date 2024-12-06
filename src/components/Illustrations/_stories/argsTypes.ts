import { ILLUSTRATION_PICTURES } from '../constants';
import { EPictureNames, EPictureSizes } from '../enums';

export const argsTypes = {
  name: {
    description: 'Название картинки',
    table: {
      defaultValue: {
        summary: EPictureNames.Error404
      },
      type: {
        summary: Object.values(EPictureNames).join(' | ')
      }
    },
    options: Object.keys(ILLUSTRATION_PICTURES[EPictureSizes.Medium]),
    control: { type: 'select' }
  },
  size: {
    description: 'Размеры картинки',
    table: {
      defaultValue: {
        summary: EPictureSizes.Medium
      },
      type: {
        summary: Object.values(EPictureSizes).join(' | ')
      }
    },
    options: Object.values(EPictureSizes),
    control: { type: 'select' }
  }
};