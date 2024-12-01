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
|-----------------|---------------------------------|-------------------------------------|-------------------------------------------------------|
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

Вы можете переопределить стандартные стили, используя кастомные классы через className.
