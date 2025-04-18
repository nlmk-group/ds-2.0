# Компонент Tabs

## Версия компонента 3.1

Функциональный компонент Tabs который предоставляет вкладки с возможностью прокрутки и включает в себя дополнительный компонент Tab

## Использование

```jsx
import React from 'react';
import Tabs from '@your-package/tabs';
const App = () => {
  return (
    <Tabs className="custom-tabs" scrollable={true}>
      <Tabs.Tab title="Вкладка 1" />
      <Tabs.Tab title="Вкладка 2" />
      <Tabs.Tab title="Вкладка 3" />
      {/* Добавьте дополнительные вкладки здесь */}
    </Tabs>
  );
};
export default App;
```

## Props

| Prop       | Type                         | Default | Description                     |
| ---------- | ---------------------------- | ------- | ------------------------------- |
| children   | JSX.Element \| JSX.Element[] | -       | Дочерние элементы (вкладки).    |
| className  | string                       | -       | Дополнительный CSS-класс.       |
| scrollable | boolean                      | -       | Включает возможность прокрутки. |

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS-модули для стилизации. Основные классы:

- `.tabs-container`: Основной контейнер вкладок.
- `.tabs-wrapper`: Обертка для вкладок.
- `.scroll-arrow-left`: Кнопка для прокрутки вкладок влево.
- `.scroll-arrow-right`: Кнопка для прокрутки вкладок вправо.
- `.scrollable`: Класс для прокручиваемых вкладок.

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер для всех вкладок */
[data-ui-tabs] {
  /* Ваши стили */
}

/* Основной контейнер вкладки */
[data-ui-tab] {
  /* Ваши стили */
}

/* Лейбл вкладки (текст) */
[data-ui-tab-label] {
  /* Ваши стили */
}

/* Контейнер для иконки внутри вкладки */
[data-ui-tab-icon] {
  /* Ваши стили */
}

/* Контейнер для Tooltip внутри вкладки */
[data-ui-tab-tooltip] {
  /* Ваши стили */
}

/* Контейнер для бейджа/значка внутри вкладки */
[data-ui-tab-badge] {
  /* Ваши стили */
}

/* Кнопка прокрутки вкладок влево */
[data-ui-tabs-button-scroll-left] {
  /* Ваши стили */
}

/* Кнопка прокрутки вкладок вправо */
[data-ui-tabs-button-scroll-right] {
  /* Ваши стили */
}
```
