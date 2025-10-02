# Компонент Splitter

## Версия компонента 3.0

Компонент Splitter разделяет экран на две части с возможностью изменения их размеров путем перетаскивания разделителя. Поддерживает горизонтальную (верхняя/нижняя панели) и вертикальную (левая/правая панели) ориентации.

## Использование

```jsx
import { Splitter } from '@nlmk/ds-2.0';

// Горизонтальная ориентация (по умолчанию)
const HorizontalApp = () => {
  const topContent = <div>Верхняя панель</div>;
  const bottomContent = <div>Нижняя панель</div>;
  return <Splitter topComponent={topContent} bottomComponent={bottomContent} />;
};

// Вертикальная ориентация
const VerticalApp = () => {
  const leftContent = <div>Левая панель</div>;
  const rightContent = <div>Правая панель</div>;
  return <Splitter topComponent={leftContent} bottomComponent={rightContent} orientation="vertical" />;
};
```

## Props

| Prop            | Type                       | Default      | Description                                      |
| --------------- | -------------------------- | ------------ | ------------------------------------------------ |
| topComponent    | ReactNode                  | -            | Компонент для отображения в верхней/левой панели |
| bottomComponent | ReactNode                  | -            | Компонент для отображения в нижней/правой панели |
| orientation     | 'horizontal' \| 'vertical' | 'horizontal' | Ориентация разделителя                           |

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS-модули для стилизации. Основные классы:

- `.container`: Основной контейнер компонента.
- `.topPane`: Контейнер для верхней панели.
- `.bottomPane`: Контейнер для нижней панели.
- `.splitter`: Разделитель между панелями.
- `.handle`: Элемент управления разделителем.

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер Splitter */
[data-ui-splitter] {
  /* Ваши стили */
}
/* Верхняя панель в Splitter */
[data-ui-splitter-top-pane] {
  /* Ваши стили */
}

/* Нижняя панель в Splitter */
[data-ui-splitter-bottom-pane] {
  /* Ваши стили */
}

/* Контейнер для разделителя между панелями */
[data-ui-splitter-handle] {
  /* Ваши стили */
}
```
