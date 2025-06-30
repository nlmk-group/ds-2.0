# InputMaskCorrect

## Версия компонента:  3.0

`InputMaskCorrect` — это обёртка над внешним компонентом [`react-input-mask`](https://github.com/sanniassin/react-input-mask), предназначенная для ввода данных по заданной маске (например, телефон, дата, номер карты и т.д.). Компонент позволяет легко интегрировать маску ввода в ваши формы, обеспечивая корректный ввод данных пользователем.

## Базовый пример использования

```jsx
import React from 'react';
import { InputMaskCorrect } from '@components/InputMaskCorrect';

export const Example = () => (
  <InputMaskCorrect mask="+7 (999) 999-99-99">
    {() => <input type="text" placeholder="Телефон" />}
  </InputMaskCorrect>
);
```

---

## Таблица Props

| Название    | Тип                                      | Описание                                                                 | По умолчанию |
|-------------|------------------------------------------|--------------------------------------------------------------------------|--------------|
| `mask`      | `string`                                 | Маска для ввода (например, `+7 (999) 999-99-99`)                        | —            |
| `children`  | `() => JSX.Element`                      | Функция-рендер, возвращающая элемент input (или другой)                  | —            |
| ...другие   | Все остальные props из `react-input-mask` | Любые другие props, поддерживаемые [`react-input-mask`](https://github.com/sanniassin/react-input-mask#props) | —            |

> **Примечание:** Все props, кроме `children`, полностью соответствуют оригинальному компоненту `react-input-mask`.

---

## Другие варианты использования

**Маска для даты:**

```jsx
<InputMaskCorrect mask="99.99.9999">
  {() => <input type="text" placeholder="ДД.ММ.ГГГГ" />}
</InputMaskCorrect>
```

**Маска для номера карты:**

```jsx
<InputMaskCorrect mask="9999 9999 9999 9999">
  {() => <input type="text" placeholder="Номер карты" />}
</InputMaskCorrect>
```

---

## Стилизация

Компонент не содержит собственных стилей и не ограничивает стилизацию вложенного элемента. Для стилизации используйте стандартные CSS-классы или inline-стили на вашем input-элементе:

```jsx
<InputMaskCorrect mask="+7 (999) 999-99-99">
  {() => <input className="my-input" style={{ color: 'red' }} />}
</InputMaskCorrect>
```

---

## Дополнительная информация

- В качестве дочернего элемента обязательно должна быть функция, возвращающая JSX-элемент (обычно `<input />`).
- Все дополнительные props будут проброшены во внутренний компонент `react-input-mask`.
- Для получения полного списка поддерживаемых props смотрите [документацию react-input-mask](https://github.com/sanniassin/react-input-mask#props).

---

## Используемые внешние компоненты

- [`react-input-mask`](https://github.com/sanniassin/react-input-mask)

---
