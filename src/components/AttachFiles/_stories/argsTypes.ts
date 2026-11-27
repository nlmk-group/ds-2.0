export const argsTypes = {
  children: {
    table: { type: { summary: 'ReactNode' } },
    description:
      'Свойство компонента AttachFiles, которое позволяет передавать массив компонентов File (JSX.Element[]) для отображения в контейнере',
    control: { type: 'text' }
  },
  title: {
    description: 'Заголовок секции AttachFiles — принимает ReactNode',
    control: { type: 'text' }
  }
};

export const fileArgs = {
  title: {
    description: 'Зарезервировано в типе File. Для видимого имени файла используйте label.',
    table: { type: { summary: 'string' } }
  },
  label: {
    table: { type: { summary: 'string' } },
    description: 'File. Название файла',
    control: { type: 'text' }
  },
  checked: {
    table: { type: { summary: 'boolean' } },
    description: 'File. Условие отображения чекбокса',
    control: { type: 'boolean' }
  },
  removed: {
    table: { type: { summary: 'boolean' } },
    description: 'File. Условие отображения кнопки удаления',
    control: { type: 'boolean' }
  },
  commented: {
    table: { type: { summary: 'boolean' } },
    description: 'File. Условие отображения кнопки комментирования',
    control: { type: 'boolean' }
  },
  saved: {
    table: { type: { summary: 'boolean' } },
    description: 'File. Условие отображения кнопки сохранения документа',
    control: { type: 'boolean' }
  },
  addFile: {
    table: { type: { summary: 'boolean' } },
    description: 'File. Условие отображения кнопки "Добавить файл"',
    control: { type: 'boolean' }
  },
  removedOnClick: {
    table: { type: { summary: '() => void' } },
    description: 'File. Callback, который будет вызван при нажатии на кнопку удаления',
    onClick: { action: 'clicked' }
  },
  commentedOnClick: {
    table: { type: { summary: '() => void' } },
    description: 'File. Callback, который будет вызван при нажатии на кнопку комментировать'
  },
  savedOnClick: {
    table: { type: { summary: '() => void' } },
    description: 'File. Callback, который будет вызван при нажатии на кнопку сохранения'
  },
  addFileOnClick: {
    table: { type: { summary: '() => void' } },
    description: 'File. Callback, который будет вызван при нажатии на "Добавить файл"'
  },
  description: {
    table: { type: { summary: 'string' } },
    description: 'File. Дополнительное описание',
    control: { type: 'text' }
  },
  empty: {
    table: { type: { summary: 'boolean' } },
    description: 'File. Условие, позволяющее не отображать никакой иконки слева',
    control: { type: 'boolean' }
  },
  checkedValue: {
    table: { type: { summary: 'boolean' } },
    description: 'File. Состояние checkbox слева',
    control: { type: 'boolean' }
  },
  onCheckedChange: {
    table: { type: { summary: '(event: ChangeEvent<HTMLInputElement>) => void' } },
    description: 'File. Callback, который будет вызван при изменении состояния чекбокса'
  },
  indeterminate: {
    table: { type: { summary: 'boolean' } },
    description: 'File. Свойство, позволяющее включить промежуточное состояние чекбокса'
  },
  tick: {
    table: { type: { summary: 'boolean' } },
    description: 'File. Условие отображения IconTick24 слева',
    control: { type: 'boolean' }
  }
};

export default argsTypes;
