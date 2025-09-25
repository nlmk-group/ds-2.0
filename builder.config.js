/**
 * Builder.io конфигурация для дизайн-системы ds-2.0
 * Настройки для компонентного маппинга Figma to Code
 */

export default {
  componentsPath: './src/components',

  typescript: true,

  tsConfigPath: './tsconfig.json',

  pathAliases: {
    '@components': './src/components',
    '@root': './src'
  },

  exportSettings: {
    format: 'esm',
    includeTypes: true,
    importStyle: 'named'
  },

  components: {
    Button: {
      path: './src/components/Button/index.tsx',
      exportName: 'Button',
      description: 'Компонент кнопки с различными вариантами стилей и размеров',
      category: 'Form Controls'
    },

    Input: {
      path: './src/components/Input/index.tsx',
      exportName: 'Input',
      description: 'Компонент поля ввода с различными размерами, цветами и состояниями',
      category: 'Form Controls'
    },

    Header: {
      path: './src/components/Header/index.tsx',
      exportName: 'Header',
      description: 'Компонент заголовка страницы с кнопками управления и навигацией',
      category: 'Layout'
    },

    Sidebar: {
      path: './src/components/Sidebar/index.tsx',
      exportName: 'Sidebar',
      description: 'Компонент бокового меню с навигацией и пользовательским контролем',
      category: 'Navigation'
    },

    Icon: {
      path: './src/components/Icon/index.tsx',
      exportName: 'Icon',
      description: 'Компонент иконки с поддержкой различных размеров и цветов',
      category: 'Media'
    }
  },

  codeGeneration: {
    prettier: true,

    prettierConfig: {
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'es5'
    },

    includeComments: true,

    componentNaming: 'PascalCase'
  },

  figma: {
    autoDetectComponents: true,
    preserveMetadata: true,
    supportedProperties: [
      'variant',
      'size',
      'color',
      'disabled',
      'text',
      'value',
      'placeholder',
      'label',
      'helperText',
      'required',
      'multiline',
      'name',
      'title',
      'showBack',
      'showFavorite',
      'isFavorite',
      'showNotification',
      'notificationAmount',
      'showMessage',
      'showVideo',
      'showPrint',
      'showDate',
      'orientation',
      'currentPath',
      'systemName',
      'userName',
      'userSurname',
      'isLoggedIn',
      'allowFavorites',
      'defaultMenuOpen',
      'overlay',
      'isShowUserControl',
      'iconButton',
      'startIcon',
      'endIcon',
      'icon',
      'containerSize',
      'htmlColor',
      'visible',
      'opacity'
    ]
  }
};
