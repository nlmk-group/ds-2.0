const argsTypes = {
  title: {
    description: 'Строка, представляющая текст, отображаемый в качестве заголовка.',
    control: { type: 'text' }
  },
  hasMessage: {
    description: 'Булево значение, которое переключает отображение кнопки с сообщением',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  hasNotification: {
    description: 'Булево значение, которое переключает отображение кнопки с уведомлениями',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  hasPrint: {
    description: 'Булево значение, которое переключает отображение кнопки с печатью',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  hasVideo: {
    description: 'Булево значение, которое переключает отображение кнопки с видео',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  hasFavorite: {
    description: 'Булево значение, которое переключает отображение кнопки добавления в избранное',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  hasBack: {
    description: 'Булево значение, которое переключает отображение кнопки назад',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  hasDate: {
    description: 'Булево значение, которое переключает отображение текущей даты и времени',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  breadcrumbs: {
    description:
      'Свойство, в которое можно добавить отдельный компонент Breadcrumbs, при этом он будет отображаться как часть Header',
    control: { type: 'string' }
  },
  children: { description: 'Компонент, который будет вложен после title', control: { type: 'ReactNode' } }
};

export default argsTypes;
