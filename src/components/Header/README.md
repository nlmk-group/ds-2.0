# Header

## Версия компонента v3.0

Компонент Header предоставляет удобный способ создания заголовков страниц с дополнительными элементами управления, такими как кнопка назад, избранное, уведомления, видео, печать, дата и хлебные крошки.

## Использование

### Header по умолчанию

```jsx
import { Header } from '@nlmk/ds-2.0';

<Header title="Заголовок страницы" />;
```

### Header с кнопкой назад

```jsx
import { Header } from '@nlmk/ds-2.0';

<Header title="Заголовок страницы" back={() => console.log('Назад')} />;
```

```jsx
import { Breadcrumbs, ButtonFavorite, ButtonPrint, Header } from '@nlmk/ds-2.0';
###  Header с хлебными крошками и иконками
<Header
  title="Заголовок страницы"
  breadcrumbs={
    <Breadcrumbs>
      <Breadcrumbs.Crumb>Главная</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb>Раздел</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb>Страница</Breadcrumbs.Crumb>
    </Breadcrumbs>
  }
>
  <ButtonFavorite onClick={() => console.log('В избранное')} />
  <ButtonPrint onClick={() => console.log('Распечатать документ')} />
</Header>;
```

## Props

| Prop                 | Type                                   | Default | Description                                |
| -------------------- | -------------------------------------- | ------- | ------------------------------------------ |
| `title`              | `string`                               | `-`     | Заголовок страницы                         |
| `back`               | `MouseEventHandler<HTMLButtonElement>` | `-`     | Кнопка назад                               |
| `favorite`           | `MouseEventHandler<HTMLButtonElement>` | `-`     | Кнопка добавления в избранное              |
| `notification`       | `MouseEventHandler<HTMLButtonElement>` | `-`     | Кнопка уведомлений                         |
| `video`              | `MouseEventHandler<HTMLButtonElement>` | `-`     | Кнопка воспроизведения видео               |
| `print`              | `MouseEventHandler<HTMLButtonElement>` | `-`     | Кнопка печати документа                    |
| `date`               | `boolean`                              | `false` | Отображение текущей даты                   |
| `notificationAmount` | `number`                               | `0`     | Количество уведомлений                     |
| `breadcrumbs`        | `ReactNode`                            | `-`     | Компонент хлебных крошек                   |
| `children`           | `ReactNode`                            | `-`     | Дополнительный контент справа от заголовка |
| `className`          | `string`                               | `-`     | Дополнительные CSS-классы для стилизации   |
| `style`              | CSSProperties                          | `-`     | Кастомные стили для компонента             |

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.wrapper` – основной контейнер компонента Header
- `.breadcrumbs-wrapper` – контейнер хлебных крошек
- `.right` – блок с иконками (уведомления, избранное, печать и т. д.)
- `.right-with-margin` – отступ справа для блока с иконками
- `.title-container` – контейнер заголовка
- `.title` – стили для текста заголовка

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

```css
/* Основной контейнер заголовка */
[data-ui-header] {
  /* Ваши стили */
}
/* Контейнер дополнительных кнопок справа */
[data-ui-header-right-block] {
  /* Ваши стили */
}
/* Кнопка добавления в избранное */
[data-ui-header-button-favorite] {
  /* Ваши стили */
}
```

### 3. Inline-стили

Можно передать объект стилей через проп `style`:

```jsx
import { Header } from '@nlmk/ds-2.0';

<Header title="Заголовок страницы" style={{ backgroundColor: '#custom-color', padding: '8px' }} />;
```
