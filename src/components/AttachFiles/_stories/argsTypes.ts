
export const argsTypes = {
  children: {
    description: 'Свойство компонента AttachFiles, которое позволяет передавать массив компонентов File (JSX.Element[]) для отображения в контейнере',
    control: { type: 'text' }
  },
  title: {
    description: 'Свойство для отображения заголовка компонента AttachFile(JSX.Element)',
    control: { type: 'text' }
  },
  label: {
    description: 'Название файла',
    control: { type: 'text' }
  },
  checked: {
    description: 'Условие отображения чекбокса',
    control: { type: 'boolean' }
  },
  removed: {
    description: 'Условие отображения кнопки удаления',
    control: { type: 'boolean' }
  },
  commented: {
    description: 'Условие отображения кнопки комментирования',
    control: { type: 'boolean' }
  },
  saved: {
    description: 'Условие отображения кнопки сохранения документа',
    control: { type: 'boolean' }
  },
  addFile: {
    description: 'Условие отображения кнопки "Добавить файл"',
    control: { type: 'boolean' }
  },
  removedOnClick: {
    description: 'Callback, который будет вызван при нажатии на кнопку удаления',
    onClick: { action: 'clicked' }
  },
  commentedOnClick: {
    description: 'Callback, который будет вызван при нажатии на кнопку комментировать'
  },
  savedOnClick: {
    description: 'Callback, который будет вызван при нажатии на кнопку сохранения'
  },
  addFileOnClick: {
    description: 'Callback, который будет вызван при нажатии на "Добавить файл"'
  },
  description: {
    description: 'Дополнительное описание',
    control: { type: 'text' }
  },
  empty: {
    description: 'Условие, позволяющее не отображать никакой иконки слева',
    control: { type: 'boolean' }
  },
  checkedValue: {
    description: 'Состояние checkbox слева',
    control: { type: 'boolean' }
  },
  onCheckedChange: {
    description: 'Callback, который будет вызван при изменении состояния чекбокса'
  },
  indeterminate: {
    description: 'Свойство, позволяющее включить промежуточное состояние чекбокса'
  },
  longTitle: {
    description: 'Условие, позволяющее корректно отобржать длинный заголовок',
    control: { type: 'boolean' }
  },
  tick: {
    description: 'Условие отображения IconTick24 слева',
    control: { type: 'boolean' }
  }
};

export default argsTypes;