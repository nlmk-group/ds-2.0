# Snackbar

## Версия компонента v3.0

Компонент Snackbar для отображения кратковременных сообщений.

## Использование

```jsx
import Snackbar from './Snackbar';

<Snackbar
  color="green"
  variant="solid"
  close={() => console.log('Closed')}
  actionButton={() => console.log('Action clicked')}
  actionText="Отменить"
  autoHideDuration={5000}
>
  Операция успешно выполнена
</Snackbar>
```

## Props

| Название         | Тип                          | По умолчанию | Описание                                           |
|------------------|------------------------------|--------------|----------------------------------------------------|
| color            | ESnackbarColors              | 'dark'       | Цвет фона Snackbar                                 |
| variant          | keyof typeof variantsMapping | 'solid'      | Вариант отображения Snackbar                       |
| close            | () => void                   | -            | Функция закрытия Snackbar                          |
| actionButton     | () => void                   | -            | Функция, вызываемая при нажатии на кнопку действия |
| actionText       | string                       | ''           | Текст кнопки действия                              |
| children         | ReactNode                    | -            | Содержимое Snackbar                                |
| autoHideDuration | number                       | 0            | Время автоматического скрытия в миллисекундах      |
| className        | string                       | -            | Дополнительный CSS класс                           |
| style            | CSSProperties                | -            | Inline стили для компонента                        |

## Доступные цвета (ESnackbarColors)

- dark
- green
- red
- orange
- grey
- white
- light-green
- pink

## Варианты отображения (variantsMapping)

- solid
- outline

## Примечания

- Если `autoHideDuration` установлен в 0 или не указан, Snackbar не будет автоматически скрываться.
- Если `close` не указан, кнопка закрытия не будет отображаться.
- Если `actionButton` не указан, кнопка действия не будет отображаться.
