import { orientationMapping, variantMapping } from '../enums';
import { positionMapping } from '../enums';

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
  currentPath: {
    description: 'Текущий путь',
    control: { type: 'text' }
  }
};

export const menuItemArgsTypes = {
  position: {
    description: `Расположение элемента меню – <b>${Object.values(positionMapping).join(' | ')}</b>.`,
    table: {
      type: {
        summary: 'string'
      }
    },
    options: Object.values(positionMapping),
    control: { type: 'select' }
  },
  label: {
    description: 'Текст элемента меню',
    control: { type: 'text' }
  },
  icon: {
    description: 'Иконка элемента меню'
  },
  path: {
    description: 'Путь элемента меню',
    control: { type: 'text' }
  },
  disabled: {
    description: 'Флаг отключения элемента меню',
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

export const submenuItemArgsTypes = {
  label: {
    description: 'Текст элемента подменю',
    control: { type: 'text' }
  },
  image: {
    description: 'Изображение элемента подменю',
    control: { type: 'text' }
  },
  depth: {
    description: 'Глубина вложенности элемента подменю',
    table: {
      defaultValue: {
        summary: '1'
      },
      type: {
        summary: 'number'
      }
    },
    control: { type: 'number' }
  },
  path: {
    description: 'Путь элемента подменю',
    control: { type: 'text' }
  },
  disabled: {
    description: 'Флаг отключения элемента подменю',
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
