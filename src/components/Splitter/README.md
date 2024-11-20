# Компонент Splitter

## Версия компонента 3.0

Компонент Splitter разделяет экран на две части: верхнюю и нижнюю панели, с возможностью изменения их размеров путем перетаскивания разделителя.

## Использование

```jsx
import { Splitter } from '@nlmk/ds-2.0';
const App = () => {
  const topContent = <div>Верхняя панель</div>;
  const bottomContent = <div>Нижняя панель</div>;
  return <Splitter topComponent={topContent} bottomComponent={bottomContent} />;
};
```

## Props

| Prop            | Type      | Default | Description                                |
| --------------- | --------- | ------- | ------------------------------------------ |
| topComponent    | ReactNode | -       | Компонент для отображения в верхней панели |
| bottomComponent | ReactNode | -       | Компонент для отображения в нижней панели  |

## Стилизация

- `.container`: Основной контейнер компонента.
- `.topPane`: Контейнер для верхней панели.
- `.bottomPane`: Контейнер для нижней панели.
- `.splitter`: Разделитель между панелями.
- `.handle`: Элемент управления разделителем.
