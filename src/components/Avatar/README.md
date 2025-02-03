# Avatar Component

## Версия компонента v3.0

Компонент Avatar используется для отображения изображения пользователя, его инициалов, а также различных индикаторов статуса, и имеет два статус-бейджа.

## Использование

```jsx
import { Avatar, EAvatarSize } from '@nlmk/ds-2.0';

<Avatar
  size={EAvatarSize.l}
  imageSrc="https://example.com/user.jpg"
  userName="Антон"
  userSurname="Валуев"
  online={true}
  badgeIconName={<IconDoneCheckFilled32 />}
  badgeSpecialIcon={true}
  numberIndicator={5}
  className="custom-avatar-class"
/>;
```

## Props

| Prop             | Type           | Default       | Description                              |
| ---------------- | -------------- | ------------- | ---------------------------------------- |
| size             | ${EAvatarSize} | EAvatarSize.m | Размер аватара                           |
| imageSrc         | string         | -             | URL изображения пользователя             |
| userName         | string         | -             | Имя пользователя для инициалов           |
| userSurname      | string         | -             | Фамилия пользователя для инициалов       |
| online           | boolean        | -             | Индикатор онлайн статуса пользователя    |
| badgeIconName    | ReactNode      | -             | Иконка индикатора на аватаре             |
| badgeSpecialIcon | boolean        | false         | Флаг для отображения специального бейджа |
| numberIndicator  | number         | -             | Отображение числового индикатора         |
| className        | string         | -             | Дополнительные CSS классы                |

## Размеры Avatar

- `EAvatarSize.xxxl`
- `EAvatarSize.xxl`
- `EAvatarSize.xl`
- `EAvatarSize.l`
- `EAvatarSize.m`
- `EAvatarSize.s`

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.avatar`: Основной контейнер аватара
- `.image`: Стили для изображения пользователя
- `.letters`: Стили для индикации инициалов
- `.user-icon`: Стили для стандартной иконки пользователя
- `.online-indicator`: Стили для индикатора онлайн статуса
- `.badge`: Стили для иконки бейджа
- `.number-indicator`: Стили для числового индикатора

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер аватара */
[data-ui-avatar] {
  /* Ваши стили */
}

/* Оверлей для аватара размера XXXL */
[data-ui-avatar-xxxl-overlay] {
  /* Ваши стили */
}

/* Изображение внутри аватара */
[data-ui-avatar-image] {
  /* Ваши стили */
}

/* Текстовые инициалы внутри аватара */
[data-ui-avatar-letters] {
  /* Ваши стили */
}

/* Иконка внутри аватара размера XXXL */
[data-ui-avatar-icon-xxxl] {
  /* Ваши стили */
}

/* Иконка по умолчанию внутри аватара */
[data-ui-avatar-icon-default] {
  /* Ваши стили */
}

/* Индикатор статуса онлайн */
[data-ui-avatar-indicator-online] {
  /* Ваши стили */
}

/* Индикатор числа  */
[data-ui-avatar-indicator-number] {
  /* Ваши стили */
}

/* Значок, обозначающий "особый статус" */
[data-ui-avatar-badge-special] {
  /* Ваши стили */
}

/* Значок по умолчанию */
[data-ui-avatar-badge-default] {
  /* Ваши стили */
}
```
