# Компонент ProgressBar

## Версия компонента 3.0

Компонент ProgressBar отображает прогресс в виде заполняемой полосы с прокруткой

## Использование

```jsx
import { ProgressBar } from '@nlmk/ds-2.0';

<ProgressBar label="Общий прогресс"></ProgressBar>;
```

## Props

| Prop       | Type   | Default | Description                         |
| ---------- | ------ | ------- | ----------------------------------- |
| percentage | number | 0       | Процент заполнения полосы прогресса |
| label      | string | -       | Метка, отображаемая внутри полосы   |
| className  | string | -       | Дополнительный CSS-класс            |

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.root`: Основной контейнер для полосы прогресса.
- `.progress`: Контейнер для самой полосы прогресса.
- `.progress-fill`: Заполненная часть полосы прогресса.
- `.progress-label`: Метка внутри полосы прогресса.
- `.progress-percentage`: Процент заполнения в виде текста.

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

```css
/* Основной контейнер прогресс-бара */
[data-ui-progress-bar] {
  /* Ваши стили */
}
/* Незаполненная полоска прогресс-бара */
[data-ui-progress] {
  /* Ваши стили */
}

/* Заполняющая часть прогресс-бара */
[data-ui-progress-bar-fill] {
  /* Ваши стили */
}
```
