# Header

## Версия компонента 3.0

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

<Header title="Заголовок страницы" showBack onBackClick={() => console.log('Назад')} />;
```

### Header с хлебными крошками и иконками

```jsx
import { Breadcrumbs, ButtonFavorite, ButtonPrint, Header } from '@nlmk/ds-2.0';

<Header
  title="Заголовок страницы"
  showBack
  showNotification
  showFavorite
  onBackClick={() => console.log('Назад')}
  onNotificationClick={() => console.log('Открыть уведомления')}
  onFavoriteClick={() => console.log('Добавить в избранное')}
  breadcrumbs={
    <Breadcrumbs>
      <Breadcrumbs.Crumb>Главная</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb>Раздел</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb>Страница</Breadcrumbs.Crumb>
    </Breadcrumbs>
  }
/>;
```

## 📌 **Props**

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `-` | Заголовок страницы |
| `showBack` | `boolean` | `false` | Отображать кнопку "Назад" |
| `onBackClick` | `MouseEventHandler<HTMLButtonElement>` | `-` | Обработчик клика по кнопке "Назад" |
| `showFavorite` | `boolean` | `false` | Отображать кнопку "Избранное" |
| `onFavoriteClick` | `MouseEventHandler<HTMLButtonElement>` | `-` | Обработчик клика по кнопке "Избранное" |
| `isFavorite` | `boolean` | `false` | Отображать кнопку "Избранное" в состоянии добавлено/нет |
| `showNotification` | `boolean` | `false` | Отображать кнопку "Уведомления" |
| `onNotificationClick` | `MouseEventHandler<HTMLButtonElement>` | `-` | Обработчик клика по кнопке "Уведомления" |
| `showVideo` | `boolean` | `false` | Отображать кнопку "Видео" |
| `onVideoClick` | `MouseEventHandler<HTMLButtonElement>` | `-` | Обработчик клика по кнопке "Видео" |
| `showPrint` | `boolean` | `false` | Отображать кнопку "Печать" |
| `onPrintClick` | `MouseEventHandler<HTMLButtonElement>` | `-` | Обработчик клика по кнопке "Печать" |
| `showMessage` | `boolean` | `false` | Отображать кнопку "Сообщения" |
| `onMessageClick` | `MouseEventHandler<HTMLButtonElement>` | `-` | Обработчик клика по кнопке "Сообщения" |
| `showDate` | `boolean` | `false` | Отображать текущую дату |
| `notificationAmount` | `number` | `0` | Количество непрочитанных уведомлений |
| `breadcrumbs` | `ReactNode` | `-` | Компонент хлебных крошек |
| `children` | `ReactNode` | `-` | Дополнительный контент справа от заголовка |
| `className` | `string` | `-` | Дополнительные CSS-классы для стилизации |
| `style` | `CSSProperties` | `-` | Inline-стили для кастомизации компонента |

## Особенности поведения

- Если не передан обработчик клика для кнопки (например, `onBackClick`), то кнопка будет отображаться в состоянии `disabled`, даже если соответствующий флаг показа установлен в `true`
- Кнопки отображаются только при установке соответствующего флага `show*` в `true`
- Количество уведомлений отображается только если `notificationAmount > 0`

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
