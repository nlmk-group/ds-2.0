# Компонент DragAndDrop

## Версия компонента 3.1

Компонент Drag&Drop предоставляет функциональность перетаскивания и загрузки файлов с возможностью настройки и выгрузки.

## Использование

```jsx
import React from 'react';
import DragAndDrop from '@nlmk/ds-2.0';

const App = () => {
  const handleUpload = files => {
    //Обработка загруженных файлов
    console.log(files);
  };
  const handleCancelUpload = () => {
    // Обработка отмены загрузки
    console.log('Upload cancelled');
  };
  return (
    <DragAndDrop
      title="Перетащите файлы сюда"
      description="или нажмите для выбора"
      btnLabel="Выберите файлы"
      fileType="image"
      statusColor="info"
      size="l"
      multiple={true}
      loading={false}
      percentUpload={50}
      onUpload={handleUpload}
      cancelUpload={handleCancelUpload}
    />
  );
};
export default App;
```

## Props

| Prop          | Type                 | Default   | Description                              |
|---------------|----------------------|-----------|------------------------------------------|
| className     | string               | -         | Дополнительный CSS-класс                 |
| title         | string               | ReactNode | Заголовок                                |
| description   | string               | ReactNode | Описание для dragNDrop                   |
| btnLabel      | string               | -         | Текст кнопки для выбора файлов           |
| fileType      | `${EDndFileType}`    | image     | Тип загружаемых файлов                   |
| statusColor   | `${EDndStatusColor}` | default   | Цвет статуса                             |
| withIcon      | boolean              | true      | Показывать иконку в dragNDrop            |
| customIcon    | JSX.Element          | null      | Пользовательская иконка                  |
| size          | `${EDnDSizes}`       | l         | Размер dragNDrop                         |
| multiple      | boolean              | true      | Разрешить множество файлов               |
| loading       | boolean              | false     | Показать индикатор загрузки              |
| percentUpload | number               | 0         | Процент выполнения загрузки              |
| smallText     | boolean              | false     | Использовать маленький текст             |
| smallIcon     | boolean              | false     | Использовать маленькую иконку            |
| disabled      | boolean              | false     | Отключить область перетаскивания         |
| accept        | string               | -         | Допустимые MIME-типы файлов              |
| onUpload      | () => void           | -         | Функция для обработки загруженных файлов |
| cancelUpload  | () => void           | null      | Функция для отмены загрузки              |
| children      | ReactNode            | null      | Кастомный контент внутри dragNDrop       |

## Типы файлов

- ` EDnDFileType.file`
- ` EDnDFileType.image`
- ` EDnDFileType.video`

## Статусы

- ` EDnDStatusColor.default`
- ` EDnDStatusColor.info`
- ` EDnDStatusColor.error`

## Размеры Title

- ` EDnDTitleSizeHelper.l`
- ` EDnDTitleSizeHelper.m`
- ` EDnDTitleSizeHelper.s`

## Размеры Description

- ` EDnDDescriptionSizeHelper.l`
- ` EDnDDescriptionSizeHelper.m`
- ` EDnDDescriptionSizeHelper.s`

## Стилизация

Компонент использует CSS-модули для стилизации. Вот основные классы, которые используются:

- `.form-file-upload`: Основной контейнер для формы загрузки файлов.
- `.input-file-upload`: Скрытый элемент ввода файлов.
- `.label-file-upload`: Основной контейнер для dragNDrop и загрузки.
- `.label-loading`: Стили для состояния загрузки.
- `.label-default`: Стили для стандартного статуса.
- `.label-info`: Стили для информационного статуса.
- `.label-error`: Стили для статуса ошибки.
- `.drag-file-element`: Элемент для управления состоянием перетаскивания.
- `.disabled`: Стили для отключенного состояния. Чтобы применить пользовательские стили, вы можете передать свой className и переопределить необходимые стили.
