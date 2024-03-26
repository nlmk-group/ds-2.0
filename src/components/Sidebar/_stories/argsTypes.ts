import { orientationMapping, variantMapping, submenuVersionMapping } from '../enums';

export const argsTypes = {
  orientation: {
    description: `Расположение сайдбара – <b>${Object.values(orientationMapping).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: orientationMapping.vertical
      },
      type: {
        summary: 'string'
      }
    },
    options: [orientationMapping.vertical, orientationMapping.horizontal],
    control: { type: 'select' }
  },
  variant: {
    description: `Тип сайдбара – <b>${Object.values(variantMapping).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: variantMapping.default
      },
      type: {
        summary: 'string'
      }
    },
    options: [variantMapping.default, variantMapping.burger],
    control: { type: 'select' }
  },
  submenuVersion: {
    description: `Версия сабменю – <b>${Object.values(submenuVersionMapping).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: submenuVersionMapping.version1
      },
      type: {
        summary: 'string'
      }
    },
    options: [submenuVersionMapping.version1, submenuVersionMapping.version2, submenuVersionMapping.version3],
    control: { type: 'select' }
  },
  allowFavorites: {
    description: 'Условие доступности добавления разделов в избранное',
    table: {
      defaultValue: {
        summary: 'false'
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  systemName: {
    description: 'Название системы, отображаемое вверху слева',
    control: { type: 'text' }
  },
  userName: {
    description: 'Имя пользователя',
    control: { type: 'text' }
  },
  userSurname: {
    description: 'Фамилия пользователя',
    control: { type: 'text' }
  },
  isLoggedIn: {
    description: 'Свойство, указывающее, залогинен ли пользователь',
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
