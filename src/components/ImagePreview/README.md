# Компонент ImagePreview

## Версия компонента 1.0

Компонент ImagePreview отображает миниатюры изображений. При клике по миниатюре открывается модальное окно предпросмотра (ImagePreviewModal) с возможностью переключения между изображениями.

## Использование

```jsx
import React from 'react';
import ImagePreview from '@nlmk/ds-2.0';

const items = [
  {
    id: 1,
    previewSrc: 'https://example.com/photo_1_preview.jpg',
    fullSrc: 'https://example.com/photo_1_full.jpg',
    title: 'Фото 1',
    description: 'Описание фото 1',
    downloadName: 'photo_1.jpg',
    alt: 'Фото 1'
  },
  {
    id: 2,
    previewSrc: 'https://example.com/photo_2_preview.jpg',
    fullSrc: 'https://example.com/photo_2_full.jpg',
    title: 'Фото 2',
    description: 'Описание фото 2',
    downloadName: 'photo_2.jpg',
    alt: 'Фото 2'
  }
];

const App = () => {
  return <ImagePreview items={items} previewImgSize={160} />;
};
```
## Props

| Prop            | Type                    | Default | Description                                                                      |
|-----------------|-------------------------|---------|----------------------------------------------------------------------------------|
| items           | `IImageItem[]`          | -       | Массив изображений для отображения. Пустые/`null` элементы отфильтровываются.    |
| className       | string                  | -       | Дополнительный CSS-класс для корневого контейнера.                               |
| previewImgSize  | number                  | 140     | Фиксированная ширина и высота миниатюры в пикселях                               |
| checkedMap      | Record<string, boolean> | -       | Коллекция состояний чекбокса                                                     |
| handleCheckbox  | function                | -       | Метод для обработки состояния чекбокса. Если метод передан, отображается чекбокс |

## IImageItem

| Key             | Type     | Required | Description                                                                                                               |
|-----------------|----------|----------|---------------------------------------------------------------------------------------------------------------------------|
| id              | string   | -        | Идентификатор элемента. Если не задан, используется индекс.                                                               |
| previewSrc      | string   | +        | URL миниатюры (используется в сетке).                                                                                     |
| fullSrc         | string   | +        | URL оригинала (используется в модальном окне).                                                                            |
| title           | string   | -        | Заголовок для модального окна и/или fallback для alt.                                                                     |
| description     | string   | -        | Описание для модального окна                                                                                              |
| previewTitle    | string   | -        | Подпись для миниатюры                                                                                                     |
| downloadName    | string   | -        | Имя файла при скачивании                                                                                                  |
| downloadHandler | function | -        | Кастомный метод для скачивания изображения в оригинальном размере. Если он не передан, то загрузка идет по ссылке fullSrc |
| alt             | string   | -        | Alt-текст для <img>. Если не задан, используется title, иначе Фото N.                                                     |

## Настройка ширины миниатюр

Если задан previewImgSize:

+ миниатюры получают фиксированную ширину `(style={{ width: previewImgSize }})`,

+ grid получает gridTemplateColumns: `repeat(auto-fit, ${previewImgSize}px) и justifyContent: start`.

Если previewImgSize не задан:

+ используется дефолтная сетка из CSS.

## Стилизация

Компонент использует CSS-модули. Основные классы:

- `.wrapper`: корневой контейнер.

- `.grid`: контейнер сетки миниатюр.

- `.thumbButton`: кнопка-обёртка миниатюры.

- `.thumb`: <img> миниатюры.

- `.emptyIcon`: заглушка, когда previewSrc отсутствует.

- `.hoverIcon`: иконка зума при наведении.

- `.hoverOverlay`: затемняющий оверлей при наведении.

Можно переопределять стили, передав собственный className на корневой контейнер.

## Data-атрибуты
Для удобной кастомизации доступны data-атрибуты:

```css
/* Корневой контейнер */
[data-ui-image-preview] {
  /* ваши стили */
}

/* Сетка миниатюр */
[data-ui-image-preview-grid] {
  /* ваши стили */
}

/* Миниатюра-кнопка */
[data-ui-image-preview-thumb] {
  /* ваши стили */
}

/* Оверлей при наведении */
[data-ui-image-preview-hover-overlay] {
  /* ваши стили */
}

/* Иконка зума на ховере */
[data-ui-image-preview-hover-zoom-icon] {
  /* ваши стили */
}
```
