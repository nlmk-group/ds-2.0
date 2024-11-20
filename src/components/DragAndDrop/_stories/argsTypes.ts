import { dragNDropBtnLabel, dragNDropDescription, dragNDropTitle } from '../constants';
import { EDnDFileType, EDnDSizes, EDnDStatusColor } from '../enums';

export const argsTypes = {
  className: {
    description: 'В компонент можно передать альтернативные стили',
    control: { type: 'string' }
  },
  children: {
    description: 'DragAndDrop может иметь собвственный контекст.',
    control: { type: 'ReactNode' }
  },
  title: {
    description:
      'Заголовок компонента. Если пустая строка, то заголовок отображаться не будет. Так же можно передать компонент типа ReactNode.',
    table: {
      defaultValue: {
        summary: dragNDropTitle
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  description: {
    description:
      'Описание компонента. Если пустая строка, то описание отображаться не будет. Можно передать компонент типа ReactNode.',
    table: {
      defaultValue: {
        summary: dragNDropDescription
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  btnLabel: {
    description: 'Название кнопки. Если пустая строка, то кнопка отображаться не будет.',
    table: {
      defaultValue: {
        summary: dragNDropBtnLabel
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'text' }
  },
  fileType: {
    description: 'Необязательное свойство. Тип расширения загружаемого файла.',
    table: {
      defaultValue: {
        summary: EDnDFileType.image
      },
      type: {
        summary: Object.values(EDnDFileType).join(' | ')
      }
    },
    options: Object.values(EDnDFileType),
    control: { type: 'select' }
  },
  statusColor: {
    description: 'Необязательное свойство. Цвета заливки компонента.',
    table: {
      defaultValue: {
        summary: EDnDStatusColor.default
      },
      type: {
        summary: Object.values(EDnDStatusColor).join(' | ')
      }
    },
    options: Object.values(EDnDStatusColor),
    control: { type: 'select' }
  },
  size: {
    description: 'Необязательное свойство. Размер компонента.',
    table: {
      defaultValue: {
        summary: EDnDSizes.l
      },
      type: {
        summary: Object.values(EDnDSizes).join(' | ')
      }
    },
    options: Object.values(EDnDSizes),
    control: { type: 'select' }
  },
  withIcon: {
    description: 'Необязательное свойство. Отображать ли иконку.',
    table: {
      defaultValue: {
        summary: true
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  customIcon: {
    description: 'Необязательное свойство. Кастомная иконка.',
    control: { type: 'ReactNode' }
  },
  multiple: {
    description: 'Необязательное свойство. Можно ли компоненту загружать более одного файла за раз.',
    table: {
      defaultValue: {
        summary: true
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  loading: {
    description: 'Необязательное свойство. Показать статус процесса загрузки файла.',
    table: {
      defaultValue: {
        summary: true
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  percentUpload: {
    description: 'Необязательное свойство. Показать процент процесса загрузки файла.',
    table: {
      defaultValue: {
        summary: 0
      },
      type: {
        summary: 'number'
      }
    },
    control: { type: 'number' }
  },
  smallText: {
    description: 'Необязательное свойство. Показать DragAndDrop только малого размера с текстом.',
    table: {
      defaultValue: {
        summary: true
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  smallIcon: {
    description: 'Необязательное свойство. Показать DragAndDrop только малого размера с иконкой.',
    table: {
      defaultValue: {
        summary: true
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  disabled: {
    description: 'Необязательное свойство. Условие блокировки доступа к элементам компонента.',
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: 'boolean'
      }
    },
    control: { type: 'boolean' }
  },
  accept: {
    description:
      'Необязательное свойство. Можно указать какие типы файлов принимать. Если ввести символ "*", компонент будет принимать файлы любого типа.',
    control: { type: 'text' }
  },
  onUpload: {
    description: 'Функция callback для работы с DragAndDrop.'
  },
  cancelUpload: {
    description:
      'Необязательная функция. Функция отмены загрузки файлов. Будет активна только в момент загрузки файлов (loading = true).'
  }
};

export default argsTypes;
