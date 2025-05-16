# SkeletonLoader Component

## Версия компонента v3.0

Компонент SkeletonLoader используется для отображения анимированных заглушек во время загрузки контента. Он поддерживает два типа анимации и позволяет настраивать размеры и количество элементов.

## Использование

```jsx
import React from 'react';
import { SkeletonLoader, ESkeletonAnimation } from '@nlmk/ds-2.0';

// Базовое использование
<SkeletonLoader />

// С пользовательскими параметрами
<SkeletonLoader
  width="300px"
  height="50px"
  animation={ESkeletonAnimation.pulse}
  count={3}
/>
```

## Props

| Prop      | Type                    | Default | Description                     |
| --------- | ----------------------- | ------- | ------------------------------- |
| id        | string                  | -       | Уникальный идентификатор        |
| className | string                  | -       | Дополнительный CSS класс        |
| count     | number                  | 1       | Количество элементов скелетона  |
| width     | string                  | '200px' | Ширина элемента скелетона       |
| height    | string                  | '100px' | Высота элемента скелетона       |
| animation | `${ESkeletonAnimation}` | 'wave'  | Тип анимации элемента скелетона |

## Типы анимации (ESkeletonAnimation)

- `wave`: Волновая анимация (по умолчанию)
- `pulse`: Пульсирующая анимация

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.loading-wrapper`: Базовый класс для элементов скелетона
- `.loading-wrapper_wave`: Класс для волновой анимации
- `.loading-wrapper_pulse`: Класс для пульсирующей анимации

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Inline стили

Компонент принимает параметры `width` и `height`, которые применяются как inline стили к элементам скелетона.

### 3. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер skeletonLaoder */
[data-ui-skeleton] {
  /* Ваши стили */
}

/* Отдельный элемент skeletonLaoder */
[data-ui-skeleton-item] {
  /* Ваши стили */
}
```

## Примеры использования

### Скелетон для карточки

```jsx
<SkeletonLoader width="300px" height="200px" />
```

### Скелетон для списка

```jsx
<SkeletonLoader width="100%" height="30px" count={5} />
```

### Скелетон с пульсирующей анимацией

```jsx
<SkeletonLoader animation={ESkeletonAnimation.pulse} width="200px" height="100px" />
```

## Примечание

Компонент SkeletonLoader не блокирует интерфейс и позволяет пользователям взаимодействовать с другими элементами страницы во время загрузки.
