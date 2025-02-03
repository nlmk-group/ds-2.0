# Компонент ImagePicture

## Версия компонента 3.0

Компонент ImagePicture отображает изображение с возможностью зумирования при наведении курсора, различными аспектными отношениями и радиусами закругления углов.

## Использование

```jsx
import React from 'react';
import ImagePicture from '@nlmk/ds-2.0';
const App = () => {
  return (
    <ImagePicture
      src="https://example.com/image.jpg"
      aspectRatio="ratio-4x3"
      radius="radius-8px"
      alt="Пример изображения"
      className="custom-image-class"
      zoom
    />
  );
};
```

## Props

| Prop            | Type                                      | Default                             | Description                               |
| --------------- | ----------------------------------------- | ----------------------------------- | ----------------------------------------- |
| src             | string                                    | -                                   | URL изображения для отображения.          |
| aspectRatio     | `${ImagePictureRatios}`                   | `ImagePictureRatios['ratio-1x1']`   | Разрешение изображения                    |
| radius          | `${ImagePictureRadius}`                   | `ImagePictureRadius['radius-none']` | Радиус закругления углов                  |
| className       | string                                    | -                                   | Дополнительный CSS-класс                  |
| zoom            | boolean                                   | true                                | Включает эффект зумирования при наведении |
| ...restImgProps | React.ImgHTMLAttributes<HTMLImageElement> | -                                   | Props элемента <img>                      |

## Варианты разрешения изображения

- `ratio-1x1`: Соотношение 1:1
- `ratio-4x3`: Соотношение 4:3
- `ratio-3x4`: Соотношение 3:4
- `ratio-16x9`: Соотношение 16:9

## Варианты border-radius

- `radius-none`: 0px
- `radius-4px`: 4px
- `radius-8px`: 8px

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS-модули для стилизации. Основные классы:

- `.image-wrapper`: Основной контейнер для изображения.
- `.ratio-1x1`, `.ratio-4x3`, `.ratio-3x4`, `.ratio-16x9`: Классы для различных аспектных отношений.
- `.radius-none`, `.radius-4px`, `.radius-8px`: Классы для различных радиусов закругления.
- `.no-content`: Класс для контейнера, когда изображение отсутствует.
- `.image`: Стили для элемента изображения.
- `.hover-icon`: Стили для иконки зумирования при наведении.
- `.hover-overlay`: Стили для наложения при наведении.
- `.empty-icon`: Стили для иконки по умолчанию, когда изображение отсутствует.

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Контейнер для изображения */
[data-ui-image-picture] {
  /* Ваши стили */
}

/* Оверлей, накладываемый на изображение */
[data-ui-image-picture-overlay] {
  /* Ваши стили */
}

/* Иконка увеличения на оверлее */
[data-ui-image-picture-overlay-zoom-icon] {
  /* Ваши стили */
}
```
