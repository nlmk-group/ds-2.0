const argsTypes = {
  title: {
    description: 'Строка, представляющая текст, отображаемый в качестве заголовка.',
    control: { type: 'text' }
  },
  showMessage: {
    description: 'Булево значение, которое переключает отображение кнопки с сообщением',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  onMessageClick: {
    description: 'Обработчик клика по кнопке сообщений',
    action: 'message clicked'
  },
  showNotification: {
    description: 'Булево значение, которое переключает отображение кнопки с уведомлениями',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  onNotificationClick: {
    description: 'Обработчик клика по кнопке уведомлений',
    action: 'notification clicked'
  },
  showPrint: {
    description: 'Булево значение, которое переключает отображение кнопки с печатью',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  onPrintClick: {
    description: 'Обработчик клика по кнопке печати',
    action: 'print clicked'
  },
  showVideo: {
    description: 'Булево значение, которое переключает отображение кнопки с видео',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  onVideoClick: {
    description: 'Обработчик клика по кнопке видео',
    action: 'video clicked'
  },
  showFavorite: {
    description: 'Булево значение, которое переключает отображение кнопки добавления в избранное',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  onFavoriteClick: {
    description: 'Обработчик клика по кнопке избранного',
    action: 'favorite clicked'
  },
  isFavorite: {
    description: 'Флаг, указывающий, находится ли элемент в избранном',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  showBack: {
    description: 'Булево значение, которое переключает отображение кнопки назад',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  onBackClick: {
    description: 'Обработчик клика по кнопке назад',
    action: 'back clicked'
  },
  showDate: {
    description: 'Булево значение, которое переключает отображение текущей даты и времени',
    control: { type: 'boolean' },
    table: { defaultValue: { summary: 'false' } }
  },
  notificationAmount: {
    description: 'Количество непрочитанных уведомлений',
    control: { type: 'number' },
    table: { defaultValue: { summary: '0' } }
  },
  breadcrumbs: {
    description:
      'Свойство, в которое можно добавить отдельный компонент Breadcrumbs, при этом он будет отображаться как часть Header',
    control: { type: 'string' }
  },
  children: {
    description: 'Компонент, который будет вложен после title',
    control: { type: 'ReactNode' }
  }
};

export default argsTypes;
