import { ESidebarOrientationMapping, ESidebarPositionMapping, ESidebarVariantMapping } from '../enums';

export const argsTypes = {
  orientation: {
    description: `Расположение сайдбара – <b>${Object.values(ESidebarOrientationMapping).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: ESidebarOrientationMapping.vertical
      },
      type: {
        summary: 'string'
      }
    },
    options: [ESidebarOrientationMapping.vertical, ESidebarOrientationMapping.horizontal],
    control: { type: 'select' }
  },
  variant: {
    description: `Тип сайдбара – <b>${Object.values(ESidebarVariantMapping).join(' | ')}</b>.`,
    table: {
      defaultValue: {
        summary: ESidebarVariantMapping.default
      },
      type: {
        summary: 'string'
      }
    },
    options: [ESidebarVariantMapping.default, ESidebarVariantMapping.burger],
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
  },
  defaultMenuOpen: {
    description: 'Флаг начального состояния меню (развернуто/свернуто)',
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

  overlay: {
    description: 'Флаг отображения оверлея при открытом подменю',
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

export const menuItemArgsTypes = {
  position: {
    description: `Расположение элемента меню – <b>${Object.values(ESidebarPositionMapping).join(' | ')}</b>.`,
    table: {
      type: {
        summary: 'string'
      }
    },
    options: Object.values(ESidebarPositionMapping),
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
