import { ImagePictureRadius, ImagePictureRatios } from '../enums';

export const argsTypes = {
  aspectRatio: {
    description: 'Пропорции изображения',
    table: {
      defaultValue: {
        summary: ImagePictureRatios['ratio-1x1']
      },
      type: {
        summary: Object.values(ImagePictureRatios).join(' | ')
      }
    },
    options: Object.values(ImagePictureRatios),
    control: { type: 'select' }
  },
  radius: {
    description: 'Варианты скругления углов',
    table: {
      defaultValue: {
        summary: ImagePictureRadius['radius-none']
      },
      type: {
        summary: Object.values(ImagePictureRadius).join(' | ')
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
