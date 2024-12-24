# Компонент Legend

## Версия компонента 3.0

Компонент Legend используется для настройки цветов в таблицах/графике, и их отображение списком.

```jsx
import { useState } from 'react';
import { Legend } from '@nlmk/ds-2.0';
const color = { default: 'var(--spectrum-red-20)', hover: 'var(--spectrum-red-30)', active: 'var(--spectrum-red-10)' };
const colorList = [
  { default: 'var(--spectrum-red-20)', hover: 'var(--spectrum-red-30)', active: 'var(--spectrum-red-10)' },
  { default: 'var(--spectrum-green-20)', hover: 'var(--spectrum-green-30)', active: 'var(--spectrum-green-10)' },
  { default: 'var(--spectrum-orange-20)', hover: 'var(--spectrum-orange-30)', active: 'var(--spectrum-orange-10)' }
];
const App = () => {
  const [currentColor, setCurrentColor] = useState(color);
  const onChange = val => {
    setCurrentColor(val);
  };
  return <Legend color={currentColor} type="EDIT" colorList={colorList} onColorChange={onChange} />;
};
```

## Props

| Prop              | Type                        | Default          | Description                                  |
| ----------------- | --------------------------- | ---------------- | -------------------------------------------- |
| color             | ILegendColor                | -                | Текущий цвет компонента                      |
| colorList         | ILegendColor[]              | -                | Набор цветов для выбора                      |
| type              | ELegendType                 | ELegendType.VIEW | Тип отображения                              |
| label             | string                      | ''               | Подпись компонента                           |
| onColorChange     | (val: ILegendColor) => void | -                | Событие изменения цвета                      |
| tooltipText       | string                      | ''               | Текст подсказки при наведении                |
| isDisabled        | boolean                     | -                | Заблокировать изменение цвета                |
| withPortal        | boolean                     | -                | Использоваться createPortal для отображения  |
| portalContainerId | string                      | -                | ID Контейнера для использования createPortal |
| menuStyle         | CSSProperties               | -                | Стили для Dropdown Menu                      |
| menuLabel         | string                      | -                | Подпись для Dropdown Menu                    |

## Тип отображения Legend

- `ELegendType.VIEW`
- `ELegendType.EDIT`

## Примечания

- Для отображения своего компонета вместо цвета в интерфейсе ILegendColor присутствуют поля viewColor и editColor.
- Props viewColor и editColor описаны ILegendViewComponentProps и ILegendEditComponentProps соответственно.
- При \`withPortal={true}\` меню будет отрендерено в портале, что может быть полезно при проблемах с z-index.

## Стилизация

Компонент использует CSS-модули для стилизации. Вот основные классы, которые используются:

- `.legend-view`: Основной контейнер для Legend с типом VIEW.
- `.legend-view-color`: Контейнер отображающий цвет.
- `.legend-edit`: Основной контейнер для Legend с типом EDIT.
- `.legend-edit-color`: Контейнер отображающий цвет с переключателем.

Если нужно изменить поведение компонента, на события, то лучше использоваться viewColor и editColor.
