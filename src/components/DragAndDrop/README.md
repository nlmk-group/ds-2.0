# Компонент DragAndDrop

## Версия компонента 3.1

Компонент Drag&Drop предоставляет функциональность перетаскивания и загрузки файлов с возможностью настройки и выгрузки.

## Использование

```jsx
import React from 'react';
import DragAndDrop from '@nlmk/ds-2.0';
const App = () => {
  const handleUpload = files => {
     // Обработка загруженных файлов
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
| ------------- | -------------------- | --------- | ---------------------------------------- |
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

- `EDnDFileType.file`
- `EDnDFileType.image`
- `EDnDFileType.video`

## Статусы

- `EDnDStatusColor.default`
- `EDnDStatusColor.info`
- `EDnDStatusColor.error`

## Размеры Title

- `EDnDTitleSizeHelper.l`
- `EDnDTitleSizeHelper.m`
- `EDnDTitleSizeHelper.s`

## Размеры Description

- `EDnDDescriptionSizeHelper.l`
- `EDnDDescriptionSizeHelper.m`
- `EDnDDescriptionSizeHelper.s`

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.form-file-upload`: Основной контейнер для формы загрузки файлов.
- `.input-file-upload`: Скрытый элемент ввода файлов.
- `.label-file-upload`: Основной контейнер для dragNDrop и загрузки.
- `.label-loading`: Стили для состояния загрузки.
- `.label-default`: Стили для стандартного статуса.
- `.label-info`: Стили для информационного статуса.
- `.label-error`: Стили для статуса ошибки.
- `.drag-file-element`: Элемент для управления состоянием перетаскивания.
- `.disabled`: Стили для отключенного состояния.

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер для области перетаскивания файлов */
[data-ui-dnd-default] {
  /* Ваши стили */
}

/* Элемент, представляющий файл, который перетаскивается */
[data-ui-dnd-drag-file-element] {
  /* Ваши стили */
}

/* Иконка внутри области перетаскивания */
[data-ui-dnd-icon] {
  /* Ваши стили */
}

/* Заголовок для области перетаскивания */
[data-ui-dnd-title] {
  /* Ваши стили */
}

/* Описание внутри области перетаскивания */
[data-ui-dnd-description] {
  /* Ваши стили */
}

/* Кнопка внутри области Drag&Drop */
[data-ui-dnd-button] {
  /* Ваши стили */
}

/* Иконка Drag&Drop при включенном SmallIcon */
[data-ui-dnd-small-icon] {
  /* Ваши стили */
}

/* Иконка для процесса загрузки файлов */
[data-ui-dnd-upload-icon] {
  /* Ваши стили */
}

/* Анимация спиннера внутри иконки загрузки */
[data-ui-dnd-upload-icon-spinner] {
  /* Ваши стили */
}

/* Процент загрузки, отображаемый внутри иконки спиннера */
[data-ui-dnd-upload-icon-percent] {
  /* Ваши стили */
}

/* Текст Drag&Drop при включенном SmallText */
[data-ui-dnd-small-text] {
  /* Ваши стили */
}

/* Заголовок для SmallText */
[data-ui-dnd-small-text-title] {
  /* Ваши стили */
}

/* Кнопка SmallText */
[data-ui-dnd-small-text-button] {
  /* Ваши стили */
}
```
