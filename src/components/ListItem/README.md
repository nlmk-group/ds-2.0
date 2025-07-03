# Компонент ListItem

## Версия компонента 3.0

Компонент **ListItem** используется для отображения отдельного элемента в вертикальном списке. Обычно применяется внутри компонентов List, Select, Autocomplete, Dropdown и других, где требуется стилизованный элемент списка с поддержкой кастомизации и событий.

---

## Базовый пример использования

```jsx

const Example = () => (
  <ListItem>Пункт списка</ListItem>
);

export default Example;
```
## Другие варианты использования

### С кастомными стилями и обработчиком событий

```jsx
<ListItem className="my-list-item" onClick={() => alert('Clicked!')}>
  Кликабельный пункт
</ListItem>
```

### В составе других компонентов (например, Select или Dropdown)

```jsx
<List>
  <ListItem>Опция 1</ListItem>
  <ListItem>Опция 2</ListItem>
  <ListItem disabled>Опция 3 (disabled)</ListItem>
</List>
```
---

## Props

| Prop       | Type                          | Default | Description                                      |
|------------|-------------------------------|---------|--------------------------------------------------|
| children   | ReactNode                     | —       | Содержимое элемента списка                       |
| className  | string                        | —       | Дополнительный CSS-класс                         |
| title      | string                        | —       | Атрибут title для всплывающей подсказки          |
| ...props   | HTMLAttributes<HTMLDivElement> | —       | Любые другие props для div-контейнера            |



---

## Стилизация

Компонент использует CSS-модули для стилизации. Основной класс:

- `.item`: основной контейнер элемента списка.

Пример базовых стилей:

```css
.item {
  display: flex;
  align-items: center;
  padding: 8px 24px 8px 12px;
  min-height: 40px;
  box-sizing: border-box;
  color: var(--steel-90);
}

.item:hover {
  background-color: var(--steel-30);
}
```

Для кастомизации можно передать свой `className` и переопределить стили.

---

## Дополнительная информация

- Может использоваться совместно с внешними компонентами, например, List, Select, Autocomplete, Dropdown и др.
- Поддерживает передачу любых стандартных props для `<div>`.
