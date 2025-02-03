# SlideToggle Component

## Версия компонента v3.0

Компонент SlideToggle используется для отображения развертывающегося контента с заголовком и дополнительными элементами, такими как иконки и кнопки.

## Использование

```jsx
import SlideToggle from '@nlmk/ds-2.0';

<SlideToggle title="Заголовок" isShow={true} onToggle={() => {}} toggleContainerShadow={true}>
  <p>Содержание развертывания.</p>
</SlideToggle>;
```

## Props

| Prop             | Type       | Default     | Description                             |
| ---------------- | ---------- | ----------- | --------------------------------------- |
| title            | string     | JSX.Element | Заголовок свайдера                      |
| after            | ReactNode  | -           | Элемент после заголовка                 |
| isShow           | boolean    | -           | Показан ли контент                      |
| onToggle         | () => void | -           | Функция, вызываемая при переключении    |
| className        | string     | -           | Дополнительные CSS классы               |
| size             | TSize      | 'default'   | Размер                                  |
| iconWrapperId    | string     | -           | ID обертки для иконки                   |
| titleWrapperId   | string     | -           | ID обертки для заголовка                |
| afterWrapperId   | string     | -           | ID обертки для элемента после заголовка |
| contentWrapperId | string     | -           | ID обертки для контента                 |

## Размеры SlideToggle

- `ESizeMapping.default`
- `ESizeMapping.compact`

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.slide-toggle-wrapper`: Основной контейнер свайдера
- `.title-wrapper`: Стили для обёртки заголовка
- `icon-wrapper`: Стили для обёртки иконки
- `.content-wrapper`: Стили для обёртки контента
- `action-block`: Стили для блока действия

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Заголовок компонента */
[data-ui-slide-toggle-title] {
  /* Ваши стили */
}

/* Контейнер для элементов, отображающихся после заголовка */
[data-ui-slide-toggle-action-block] {
  /* Ваши стили */
}

/* Иконка для отображения/скрытия контента */
[data-ui-slide-toggle-show-icon] {
  /* Ваши стили */
}

/* Контейнер со скрываемым/отображаемым контентом */
[data-ui-slide-toggle-content] {
  /* Ваши стили */
}
```
