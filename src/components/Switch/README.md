# Компонент Switch

## Версия компонента 3.1

Компонент Switch предоставляет переключатель с возможностью настройки состояния, иконок и метки.

```jsx
import React, { useState } from 'react';
import Switch from '@nlmk/ds-2.0';
const App = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event, newChecked) => {
    setChecked(newChecked);
  };
  return (
    <Switch
      color={ESwitchColors.brand}
      checked={checked}
      onChange={handleChange}
      label="Включить уведомления"
      activeIcon={<YourActiveIcon />}
      inactiveIcon={<YourInactiveIcon />}
    />
  );
};
```

## Props

| Prop         | Type          | Default             | Description                           |
| ------------ | ------------- | ------------------- | ------------------------------------- |
| className    | string        | ''                  | Дополнительный CSS-класс              |
| checked      | boolean       | false               | Состояние переключателя               |
| color        | ESwitchColors | ESwitchColors.brand | Цвет переключателя                    |
| onChange     | () => void    | -                   | Функция обработки изменения состояния |
| disabled     | boolean       | false               | Отключает переключатель               |
| label        | string        | ''                  | Метка для переключателя               |
| activeIcon   | ReactNode     | null                | Иконка для активного состояния        |
| inactiveIcon | ReactNode     | null                | Иконка для неактивного состояния      |
| style        | CSSProperties | -                   | Inline стили                          |

## Цвет переключателя

- `ESwitchColors.brand`
- `ESwitchColors.error`
- `ESwitchColors.warning`
- `ESwitchColors.success`

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS-модули для стилизации. Основные классы:

- `.wrapper`: Основной контейнер для переключателя.
- `.root`: Корневой элемент переключателя.
- `.track`: Контейнер для дорожки переключателя.
- `.track-active`: Стили для активного состояния дорожки.
- `.track-inactive`: Стили для неактивного состояния дорожки.
- `.track-active-disabled`: Стили для активного отключенного состояния дорожки.
- `.track-inactive-disabled`: Стили для неактивного отключенного состояния дорожки.
- `.touch`: Контейнер для переключаемой кнопки.
- `.active`: Стили для активного состояния кнопки.
- `.inactive`: Стили для неактивного состояния кнопки.
- `.touch-disabled`: Стили для отключенного состояния кнопки.
- `.touch-disabled-checked`: Стили для отключенного проверенного состояния кнопки.
- `.icon-wrapper`: Контейнер для иконок.
- `.icon-wrapper-disabled`: Стили для отключенного состояния иконок.
- `.focus`: Контейнер для состояния фокуса.
- `.focus-active`: Стили для активного состояния фокуса.
- `.focus-inactive`: Стили для неактивного состояния фокуса.
- `.label`: Стили для метки переключателя.
- `.label-disabled`: Стили для отключенного состояния метки.
- `.checkbox`: Стили для скрытого чекбокса.

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер переключателя */
[data-ui-switch] {
  /* Ваши стили */
}

/* Контроллер, содержащий трек и ползунок */
[data-ui-switch-controller] {
  /* Ваши стили */
}

/* Трек переключателя (фон за ползунком) */
[data-ui-switch-track] {
  /* Ваши стили */
}

/* Ползунок переключателя */
[data-ui-swtich-touch] {
  /* Ваши стили */
}

/* Индикатор фокуса переключателя */
[data-ui-switch-focus] {
  /* Ваши стили */
}

/* Текст label справа от переключателя */
[data-ui-switch-label] {
  /* Ваши стили */
}

/* Чекбокс внутри переключателя */
[data-ui-switch-input] {
  /* Ваши стили */
}
```
