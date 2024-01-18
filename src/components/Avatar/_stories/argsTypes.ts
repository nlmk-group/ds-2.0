import { AvatarShape, AvatarSize } from '../enums';
import { SPECIAL_ICONS } from '../subcomponents/IconBadge/constants';

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
    description: `Имя иконки для бейджа. Если это ${SPECIAL_ICONS.join(
      ' | '
    )}, то бейдж будет отображен на специальной подложке`,
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'string' }
  }
};
