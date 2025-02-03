# Компонент Tooltip

## Версия компонента 3.0

Компонент `Tooltip` предоставляет всплывающие подсказки с различными вариантами поведения и размещения.

## Использование

```jsx
import { Link, Tooltip } from '@nlmk/ds-2.0';

const App = () => {
  return (
    <Tooltip
      title="Подсказка"
      description="Это описание подсказки."
      size="default"
      behavior="hover"
      placement="top"
      className="custom-tooltip-class"
    >
      <Link preventRedirect={true} href="">
        Наведи на меня курсор
      </Link>
    </Tooltip>
  );
};
export default App;
```

## Props

| Prop           | Type                       | Default | Description                                            |
| -------------- | -------------------------- | ------- | ------------------------------------------------------ |
| title          | string                     | -       | Заголовок tooltip                                      |
| description    | string                     | -       | Описание tooltip                                       |
| size           | `${ETooltipSizes}`         | default | Размер tooltip                                         |
| type           | `${ETooltipType}`          | default | Тип tooltip                                            |
| behavior       | `${ETooltipBehaviorType}`  | hover   | Поведение tooltip                                      |
| placement      | `${ETooltipPlacementType}` | top     | Размещение tooltip относительно элемента               |
| className      | string                     | -       | Дополнительный CSS-класс для tooltip                   |
| children       | React.ReactNode            | -       | Контент, вокруг которого отображается tooltip          |
| render         | ReactNode                  | -       | Кастомный рендер для содержимого tooltip               |
| clickable      | boolean                    | false   | Определяет, является ли tooltip кликабельным           |
| popupClassName | string                     | -       | Дополнительный CSS-класс для всплывающего окна tooltip |
| isOpen         | boolean                    | -       | Флаг отображения tooltip                               |
| delayShow      | number                     | -       | Задержка появления tooltip (в миллисекундах)           |
| delayHide      | number                     | -       | Задержка исчезновения tooltip (в миллисекундах)        |
| float          | boolean                    | false   | Определяет следование за позицией курсора              |

## Поведение tooltip

- `ETooltipBehaviorType.hover`
- `ETooltipBehaviorType.click`
- `ETooltipBehaviorType.focus`

## Размеры tooltip

- `ETooltipSizes.normal`
- `ETooltipSizes.compact`

## Тип tooltip

- `ETooltipType.default`
- `ETooltipSizes.inverse`

## Расположение tooltip

- `ETooltipPlacementType.top`
- `ETooltipPlacementType.right`
- `ETooltipPlacementType.bottom`
- `ETooltipPlacementType.left`
- `ETooltipPlacementType.top-start`
- `ETooltipPlacementType.top-end`
- `ETooltipPlacementType.bottom-start`
- `ETooltipPlacementType.bottom-end`
- `ETooltipPlacementType.left-start`
- `ETooltipPlacementType.left-end`
- `ETooltipPlacementType.right-start`
- `ETooltipPlacementType.right-end`

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Стилизация Компонент использует CSS-модули для стилизации. Основные классы:

- `.tooltip`: Основной контейнер для подсказки.
- `.tooltip-target`: Контейнер для элемента, вокруг которого отображается подсказка.
- `.tooltip-wrapper`: Контейнер для всплывающего окна подсказки.
- `.tooltip-title`: Стили для заголовка подсказки.
- `.tooltip-description`: Стили для описания подсказки.
- `.arrow-styling`: Стили для стрелки подсказки.

Вы можете переопределить эти стили, передав собственный `className` и `popupClassName`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер целевого элемента тултипа */
[data-ui-tooltip] {
  /* Ваши стили */
}

/* Заголовок тултипа */
[data-ui-tooltip-title] {
  /* Ваши стили */
}

/* Описание тултипа */
[data-ui-tooltip-description] {
  /* Ваши стили */
}
```
