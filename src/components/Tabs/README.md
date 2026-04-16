# Компонент Tabs

## Версия компонента 4.0

Функциональный компонент Tabs который предоставляет вкладки с возможностью прокрутки, поддерживает горизонтальную и вертикальную ориентацию, а также включает в себя дополнительный компонент Tab

## Использование

### Горизонтальные табы (по умолчанию)

```jsx
import React from 'react';
import Tabs from '@nlmk/ds-2.0';

const App = () => {
  return (
    <Tabs className="custom-tabs" scrollable={true}>
      <Tabs.Tab label="Вкладка 1" />
      <Tabs.Tab label="Вкладка 2" />
      <Tabs.Tab label="Вкладка 3" />
    </Tabs>
  );
};
export default App;
```

### Вертикальные табы

```jsx
import React, { useState } from 'react';
import { Tabs, ETabsOrientation, ETabsTabPosition } from '@nlmk/ds-2.0';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tabs orientation={ETabsOrientation.vertical} tabPosition={ETabsTabPosition.left}>
        <Tabs.Tab label="Вкладка 1" active={activeTab === 0} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Вкладка 2" active={activeTab === 1} onClick={() => setActiveTab(1)} />
        <Tabs.Tab label="Вкладка 3" active={activeTab === 2} onClick={() => setActiveTab(2)} />
      </Tabs>
      <div>Контент</div>
    </div>
  );
};
export default App;
```

## Props

### Tabs

| Prop              | Type                   | Default        | Description                                                                 |
| ----------------- | ---------------------- | -------------- | --------------------------------------------------------------------------- |
| children          | JSX.Element \| JSX.Element[] | -        | Дочерние элементы (вкладки).                                                |
| className         | string                 | -              | Дополнительный CSS-класс.                                                   |
| scrollable        | boolean                | false          | Включает возможность прокрутки.                                             |
| orientation       | ETabsOrientation       | 'horizontal'   | Ориентация табов (горизонтальная или вертикальная).                          |
| tabPosition       | ETabsTabPosition       | 'left'         | Позиция панели табов относительно контента (для вертикального режима).       |
| indicatorPosition | ETabsIndicatorPosition | auto           | Позиция активного индикатора. По умолчанию зависит от ориентации.           |
| maxTabWidth       | number                 | -              | Максимальная ширина таба в вертикальном режиме (px). Без этого пропа длинный текст переносится на новые строки. С этим пропом — обрезается ellipsis в одну строку с tooltip при наведении. |

### Tab

| Prop          | Type          | Default | Description                            |
| ------------- | ------------- | ------- | -------------------------------------- |
| label         | string        | -       | Текстовая метка вкладки.               |
| active        | boolean       | false   | Флаг активной вкладки.                 |
| children      | JSX.Element   | -       | Дочерний элемент (tooltip).            |
| hasBadge      | boolean       | false   | Отображать бейдж.                      |
| badgeChildren | string/number | -       | Содержимое бейджа.                     |
| badgeColor    | EBadgeColors  | -       | Цвет бейджа.                           |
| hasIcon       | boolean       | false   | Отображать иконку.                     |
| className     | string        | -       | Дополнительный CSS-класс.              |

## Enum-значения

### ETabsOrientation

| Значение     | Описание                              |
| ------------ | ------------------------------------- |
| horizontal   | Горизонтальное расположение (по умолчанию) |
| vertical     | Вертикальное расположение             |

### ETabsTabPosition

| Значение | Описание                     |
| -------- | ---------------------------- |
| left     | Табы слева от контента       |
| right    | Табы справа от контента      |

### ETabsIndicatorPosition

| Значение | Описание                                |
| -------- | --------------------------------------- |
| bottom   | Индикатор снизу (дефолт для horizontal) |
| left     | Индикатор слева                         |
| right    | Индикатор справа                        |

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS-модули для стилизации. Основные классы:

- `.tabs-container`: Основной контейнер вкладок.
- `.tabs-container--vertical`: Модификатор для вертикального режима.
- `.tabs-wrapper`: Обертка для вкладок.
- `.tabs-wrapper--vertical`: Модификатор обертки для вертикального режима.
- `.scroll-arrow-left`: Кнопка для прокрутки вкладок влево.
- `.scroll-arrow-right`: Кнопка для прокрутки вкладок вправо.
- `.scrollable`: Класс для прокручиваемых вкладок.
- `.tab-wrapper--vertical`: Модификатор таба для вертикального режима.

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
