export const argsTypes = {
  data: {
    description: 'Данные для отображения в формате blob',
    table: {
      type: {
        summary: 'BlobPart | null'
      }
    },
    control: { type: 'object' }
  },
  loading: {
    description: 'Состояние загрузки',
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
  style: {
    description: 'Дополнительные стили для компонента',
    table: {
      type: {
        summary: 'CSSProperties'
      }
    },
    control: { type: 'object' }
  },
  errorMessage: {
    description: 'Сообщение об ошибке отображения',
    table: {
      defaultValue: {
        summary: 'Ошибка предпросмотра'
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  }
};
