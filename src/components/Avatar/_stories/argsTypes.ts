import { AvatarShape, AvatarSize } from '../enums';

export const argsTypes = {
  size: {
    description: 'Размер аватара',
    table: {
      defaultValue: {
        summary: AvatarSize.m
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(AvatarSize),
    control: { type: 'select' }
  },
  shape: {
    description: 'Форма аватара',
    table: {
      defaultValue: {
        summary: AvatarShape.circle
      },
      type: {
        summary: 'string'
      }
    },
    options: Object.values(AvatarShape),
    control: { type: 'select' }
  },
  imageSrc: {
    description: 'URL-адрес изображения пользователя',
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
  userName: {
    description: 'Имя пользователя (необходимо для формирования его инициалов)',
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
  userSurname: {
    description: 'Фамилия пользователя (необходимо для формирования его инициалов)',
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
  online: {
    description: 'Индикатор онлайн статуса. ',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  numberIndicator: {
    description: 'Индикатор количества',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'number'
      }
    },
    control: { type: 'number' }
  },
  badgeIconName: {
    description: 'Компонент иконки, которая будет внутри баджа',
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
  badgeSpecialIcon: {
    description: 'Опциональный флаг, для отображения специальных иконок',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  }
};
