# Snackbar

## Версия компонента v3.1

Компонент Snackbar для отображения кратковременных сообщений.

## Использование

```jsx
import Snackbar from './Snackbar';

<Snackbar
  color="sky"
  type="fill"
  onClose={() => console.log('Closed')}
  actionButton={() => console.log('Action clicked')}
  actionText="Отменить"
  autoHideDuration={5000}
  showCountdown
>
  Операция успешно выполнена
</Snackbar>;
```

## Props

| Название         | Тип             | По умолчанию | Описание                                                                                                                        |
|------------------|-----------------|--------------|---------------------------------------------------------------------------------------------------------------------------------|
| color            | ESnackbarColors | 'sky'        | Цвет фона Snackbar                                                                                                              |
| type             | ESnackbarType   | 'fill'       | Вариант отображения Snackbar                                                                                                    |
| onClose          | () => void      | -            | Функция закрытия Snackbar                                                                                                       |
| actionButton     | () => void      | -            | Функция, вызываемая при нажатии на кнопку действия                                                                              |
| actionText       | string          | ''           | Текст кнопки действия                                                                                                           |
| children         | ReactNode       | -            | Содержимое Snackbar                                                                                                             |
| autoHideDuration | number          | 0            | Время автоматического скрытия в миллисекундах. Если установлено в 0 или не указано, Snackbar не будет автоматически скрываться. |
| className        | string          | -            | Дополнительный CSS класс                                                                                                        |
| style            | CSSProperties   | -            | Inline стили для компонента                                                                                                     |
| showCountdown    | boolean         | false        | Отображение таймера с момента появления Snackbar                                                                                |

## Цвета (ESnackbarColors)

- `sky` (по умолчанию)
- `green`
- `red`
- `orange`
- `light-sky`
- `light-grey`
- `light-green`
- `light-red`

## Типы отображения (ESnackbarTypes)

- `fill` (по умолчанию)
- `indication`

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.snackbar`: Основной контейнер
- `.text-block`: Блок с текстом и иконкой
- `.actions`: Блок с действиями
- `.icon`: Стили для иконки
- `.timer`: Стили для таймера
- `.action`: Стили для кнопки действия
- `.close`: Стили для кнопки закрытия

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Стилизация корневого элемента */
[data-snackbar-type][data-snackbar-color] {
  /* стили */
}

/* Стилизация контента */
[data-snackbar-content] {
  /* стили */
}

/* Стилизация иконки */
[data-snackbar-icon] {
  /* стили */
}

/* Стилизация текста */
[data-snackbar-text] {
  /* стили */
}

/* Стилизация действий */
[data-snackbar-actions] {
  /* стили */
}

/* Стилизация таймера */
[data-snackbar-timer] {
  /* стили */
}
```

### 3. Inline стили

Можно передать объект стилей через проп `style`:

```jsx
<Snackbar style={{ marginBottom: '16px' }}>
  Styled snackbar
</Snackbar>
```

## Состояния

- **Обычное**: Базовое состояние с текстом
- **С иконкой**: При startIcon=true отображается иконка статуса
- **С действием**: При указании actionButton отображается кнопка действия
- **С таймером**: При showCountdown=true отображается таймер обратного отсчета
- **С автоскрытием**: При указании autoHideDuration компонент автоматически скрывается
- **С кнопкой закрытия**: При указании onClose отображается кнопка закрытия

## Примечания

- Если `autoHideDuration` установлен в 0 или не указан, Snackbar не будет автоматически скрываться.
- Если `onClose` не указан, кнопка закрытия не будет отображаться.
- Если `actionButton` не указан, кнопка действия не будет отображаться.
