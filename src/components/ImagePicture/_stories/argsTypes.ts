import { ImagePictureRadius, ImagePictureRatios } from '../enums';

export const argsTypes = {
  aspectRatio: {
    description: `Пропорции изображения: ${Object.values(ImagePictureRatios).join(' | ')}`,
    table: {
      defaultValue: {
        summary: ImagePictureRatios['ratio-1x1']
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(ImagePictureRatios),
    control: { type: 'select' }
  },
  radius: {
    description: `Варианты скругления углов: ${Object.values(ImagePictureRadius).join(' | ')}`,
    table: {
      defaultValue: {
        summary: ImagePictureRadius['radius-none']
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(ImagePictureRadius),
    control: { type: 'select' }
  },
  src: {
    description: 'Адрес изображения',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'string' }
  },
  zoom: {
    description: 'Возможность увеличения изображения по клику',
    table: {
      defaultValue: {
        summary: 'true'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  }
};
