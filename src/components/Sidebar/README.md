# Компонент Sidebar

Компонент Sidebar предоставляет интерфейс бокового меню с возможностью настройки элементов, ориентации и поведения

## Использование

```jsx
import React from 'react';
import Sidebar from '@your-package/sidebar';
const App = () => (
  <Sidebar
    variant="burger"
    orientation="vertical"
    isLoggedIn={true}
    systemName="My System"
    userName="John"
    userSurname="Doe"
    onOpenUser={() => console.log('Open user profile')}
    onLogout={() => console.log('Logout')}
    onLogin={() => console.log('Login')}
    onSearch={() => console.log('Search')}
    onClickLogo={() => console.log('Logo clicked')}
    currentPath="/dashboard"
  >
    <Sidebar.MenuItem label="Dashboard" icon="dashboard" path="/dashboard" />
    <Sidebar.Avatar userName="John" userSurname="Doe" />
  </Sidebar>
);
export default App;
```

## Props

| Prop            | Type                            | Default                             | Description                                           |
| --------------- | ------------------------------- | ----------------------------------- | ----------------------------------------------------- |
| orientation     | `${ESidebarOrientationMapping}` | ESidebarOrientationMapping.vertical | Ориентация бокового меню                              |
| variant         | `${ESidebarVariantMapping}`     | ESidebarVariantMapping.default      | Вариант бокового меню                                 |
| allowFavorites  | boolean                         | false                               | Разрешает ли меню избранное                           |
| isLoggedIn      | boolean                         | -                                   | Логин                                                 |
| systemName      | string                          | -                                   | Системное имя                                         |
| userName        | string                          | -                                   | Имя пользователя                                      |
| userSurname     | string                          | -                                   | Фамилия пользователя                                  |
| onOpenUser      | () => void                      | -                                   | Функция, вызываемая при открытии профиля пользователя |
| onLogout        | () => void                      | -                                   | Функция, вызываемая при выходе из аккаунта            |
| onLogin         | () => void                      | -                                   | Функция, вызываемая при входе в аккаунт               |
| onSearch        | () => void                      | -                                   | Функция, вызываемая при поиске                        |
| onClickLogo     | () => void                      | -                                   | Функция, вызываемая при клике на логотип              |
| currentPath     | string                          | -                                   | Текущий путь (URL) для определения активного элемента |
| defaultMenuOpen | boolean                         | false                               | Флаг начального состояния меню (развернуто/свернуто)  |
| overlay         | boolean                         | false                               | Флаг отображения оверлея при открытом подменю         |

## Orientation

- `ESidebarOrientationMapping.vertical`
- `ESidebarOrientationMapping.horizontal`

## Variant

- `ESidebarVariantMapping.default`
- `ESidebarVariantMapping.burger`

## Position

- `ESidebarPositionMapping.top`
- `ESidebarPositionMapping.bottom`

## Стилизация

### 1. CSS-классы

Компонент Sidebar использует CSS модули для стилизации. Основные классы:

- `.root`: Основной контейнер сайдбара.
- `.root-{orientation}`: Стилизует сайдбар в зависимости от ориентации (например, root-vertical, root-horizontal).
- `.root-{orientation}-expanded`: Стилизует сайдбар в развернутом состоянии.
- `.menu`: Меню внутри сайдбара.
- `.menu-{orientation}`: Меню в зависимости от ориентации (например, menu-vertical, menu-horizontal).
- `.scrollbar`: Прокручиваемая область меню.
- `.head`: Шапка сайдбара, обычно включает логотип и кнопку входа/выхода.
- `.top`: Верхняя секция сайдбара, где отображаются пользовательские элементы.
- `.top-expanded`: Верхняя секция в развернутом состоянии.
- `.top-left`: Левый раздел верхней секции (например, логотип).
- `.logo`: Контейнер логотипа.
- `.company`: Название системы или компании.
- `.auth`: Раздел аутентификации (кнопка входа/выхода).
- `.body`: Основная часть сайдбара (контейнер для элементов меню).
- `.body-{orientation}`: Основная часть для вертикальной или горизонтальной ориентации.
- `.topSection`: Секция с элементами в верхней части сайдбара.
- `.bottomSection`: Секция с элементами в нижней части сайдбара.
- `.rightSection`: Раздел для элементов, отображающихся справа в горизонтальной ориентации.
- `.overlay`: Оверлей, отображаемый при открытом подменю.
- `.burger`: Иконка "бургерного" меню для сайдбаров в режиме burger.
- `.burger-expanded`: Слово "бургер" в развернутой версии.
- `.search`: Контейнер для иконки поиска.
- `.clickable`: Класс, указывающий, что элемент интерактивный.

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер сайдбара */
[data-ui-sidebar] {
  /* Ваши стили */
}

/* Иконка открытия сайдбара */
[data-ui-sidebar-burger] {
  /* Ваши стили */
}

/* Кнопка сворачивания/разворачивания сайдбара */
[data-ui-sidebar-collapse-button] {
  /* Ваши стили */
}

/* Логотип сайдбара */
[data-ui-sidebar-logo] {
  /* Ваши стили */
}

/* Иконка поиска */
[data-ui-sidebar-search-icon] {
  /* Ваши стили */
}

/* Кнопка действия (войти/выйти) */
[data-ui-sidebar-action-button] {
  /* Ваши стили */
}

/* Секция верхних элементов меню */
[data-ui-sidebar-top-section] {
  /* Ваши стили */
}

/* Секция нижних элементов меню */
[data-ui-sidebar-bottom-section] {
  /* Ваши стили */
}

/* Правая панель при горизонтальной ориентации */
[data-ui-sidebar-right-section] {
  /* Ваши стили */
}

/* Оверлей сайдбара */
[data-ui-sidebar-overlay] {
  /* Ваши стили */
}

/* Подменю */
[data-ui-sidebar-submenu] {
  /* Ваши стили */
}

/* Контейнер учетной записи пользователя */
[data-ui-sidebar-user-control] {
  /* Ваши стили */
}
```
