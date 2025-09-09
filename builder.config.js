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
      'visible',
      'opacity'
    ]
  }
};
