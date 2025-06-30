# Компонент List

## Версия компонента 3.0

Компонент **List** используется для отображения вертикального списка элементов с возможностью прокрутки. Обычно применяется в выпадающих меню, автокомплитах, селектах и других интерфейсах, где требуется компактно показать список опций или данных.

---

## Базовый пример использования

```jsx
import List from '@nlmk/ds-2.0';

const Example = () => (
  <List style={{ maxHeight: 200 }}>
    <div>Элемент 1</div>
    <div>Элемент 2</div>
    <div>Элемент 3</div>
  </List>
);

export default Example;
```

---

## Props

| Prop      | Type                        | Default | Description                                 |
|-----------|-----------------------------|---------|---------------------------------------------|
| children  | ReactNode                   | -       | Содержимое списка (элементы списка)         |
| className | string                      | -       | Дополнительный CSS-класс                    |
| ...props  | HTMLAttributes<HTMLDivElement> | -    | Любые другие props для div-контейнера       |

---

## Другие варианты использования

### С прокруткой и кастомными стилями

```jsx
<List className="my-list" style={{ maxHeight: 300 }}>
  {items.map(item => (
    <div key={item.id}>{item.label}</div>
  ))}
</List>
```

### В составе других компонентов

Компонент List часто используется внутри выпадающих списков, автокомплитов и селектов для отображения опций.

---

## Стилизация

Компонент использует CSS-модули для стилизации. Основной класс:

- `.list`: основной контейнер списка.

Пример базовых стилей:

```css
.list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  border-radius: 8px;
  background: var(--steel-10);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
  z-index: 20;
  overflow: hidden;
}
```

Для кастомизации можно передать свой `className` и переопределить стили.

---

## Дополнительная информация

Компонент [`Scrollbar`](../Scrollbar) используется внутри List для обеспечения кроссбраузерной и стилизованной прокрутки содержимого списка. Он автоматически добавляет вертикальную прокрутку при необходимости и позволяет кастомизировать внешний вид полос прокрутки.

### Основные props Scrollbar

| Prop       | Type        | Default         | Description                                                                 |
|------------|-------------|----------------|-----------------------------------------------------------------------------|
| children   | ReactNode   | —              | Контент, который будет отображаться внутри скролл-контейнера                |
| className  | string      | —              | Дополнительный CSS-класс для корневого элемента                             |
| style      | CSSProperties | —            | Inline-стили для корневого элемента                                         |
| overflowX  | 'visible' \| 'hidden' \| 'scroll' \| 'auto' | 'hidden' | Управляет горизонтальной прокруткой                                         |
| overflowY  | 'visible' \| 'hidden' \| 'scroll' \| 'auto' | 'auto'   | Управляет вертикальной прокруткой                                           |
| overflow   | 'visible' \| 'hidden' \| 'scroll' \| 'auto' | 'auto'   | Управляет общей прокруткой (перезаписывает overflowX/overflowY, если задан) |

### Пример использования Scrollbar внутри List

```jsx
<List style={{ maxHeight: 200 }}>
  {/* Scrollbar применяется автоматически внутри List */}
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</List>
```

Если требуется использовать Scrollbar отдельно:

```jsx
import Scrollbar from '@nlmk/ds-2.0';

<Scrollbar style={{ height: 200 }}>
  <div>Контент с прокруткой</div>
</Scrollbar>
```

Подробнее о Scrollbar смотрите в [README.md компонента Scrollbar](../Scrollbar/README.md).
