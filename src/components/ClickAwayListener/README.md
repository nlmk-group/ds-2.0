# Компонент ClickAwayListener

## Версия компонента 3.0

## Описание

ClickAwayListener — вспомогательный компонент для отслеживания кликов или тапов вне границ своего DOM-элемента. Полезен для закрытия модалок, выпадающих списков, popover'ов и других элементов при взаимодействии вне их области. Поддерживает исключение внешних элементов, которые не должны вызывать событие `onClickAway`.

## Использование

```jsx
import React, { useRef } from 'react';
import ClickAwayListener from '@nlmk/ds-2.0';

const Example = () => {
  const ref = useRef(null);
  const handleClickAway = () => {
    console.log('Clicked outside!');
  };
  return (
    <ClickAwayListener
      onClickAway={handleClickAway}
      excludeRef={ref}
      eventType="mouseup"
      className="custom-listener"
      style={{ padding: 16 }}
    >
      <div ref={ref}>Контент, клик вне которого вызовет onClickAway</div>
    </ClickAwayListener>
  );
};
export default Example;
```

## Props

| Prop         | Type                                                                 | Default     | Description                                                                                       |
| ------------ | -------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| children     | React.ReactNode                                                      | –           | Дочерние элементы компонента                                                                      |
| className    | string                                                               | –           | Дополнительный CSS-класс для корневого элемента                                                   |
| style        | React.CSSProperties                                                  | –           | Inline-стили для корневого элемента                                                               |
| onClickAway  | () => void                                                           | – (обязательный) | Callback вызывается при клике вне компонента и исключённых элементов                              |
| excludeRef   | React.RefObject<HTMLElement> \| React.RefObject<HTMLElement>[]      | –           | Ref или массив refs элементов, клики по которым не приводят к срабатыванию onClickAway            |
| eventType    | 'mouseup' \| 'mousedown' \| 'click' \| 'touchend'                  | 'mouseup'   | Тип события, на которое реагирует компонент                                                       |

## Варианты eventType

- `mouseup` (по умолчанию)
- `mousedown`
- `click`
- `touchend`

## Примеры использования

### 1. Базовое использование

```jsx
<ClickAwayListener onClickAway={() => alert('Вне компонента!')}>
  <div>Контент</div>
</ClickAwayListener>
```

### 2. С исключаемым ref

```jsx
const ref = useRef(null);

<ClickAwayListener onClickAway={handleClickAway} excludeRef={ref}>
  <div>Контент</div>
  <button ref={ref}>Кнопка, клик по которой НЕ вызовет onClickAway</button>
</ClickAwayListener>;
```

### 3. С массивом исключаемых refs и другим типом события

```jsx
const ref1 = useRef(null);
const ref2 = useRef(null);

<ClickAwayListener onClickAway={handleClickAway} excludeRef={[ref1, ref2]} eventType="click">
  <div>Контент</div>
  <div ref={ref1}></div>
  <div ref={ref2}></div>
</ClickAwayListener>;
```

## Кастомизация

Компонент не имеет собственной визуальной оболочки, но вы можете кастомизировать корневой контейнер через стандартные средства.

### CSS-классы

- `.click-away-listener` — основной класс (передаётся через prop className).

### Data-атрибуты

Для удобной стилизации компонент использует следующий data-атрибут:

```css
[data-ui-click-away-listener] {
  /* Ваши стили */
}
```

Если вы добавляете собственный класс через `className`, используйте его для настройки внешнего вида.

## Важные замечания

- Обязательно передайте `onClickAway` — без него компонент не имеет смысла.
- Если требуется исключить несколько внешних элементов — используйте массив `refs` в `excludeRef`.
- Не забудьте назначить рефы (например, через `useRef`) на элементы, клики по которым не должны приводить к срабатыванию.
