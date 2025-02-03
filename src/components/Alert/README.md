# Alert Component

## Версия компонента v3.1

Alert компонент используется для отображения важных сообщений пользователю. Он поддерживает различные типы сообщений, такие как успех, ошибка, предупреждение и информация.

## Использование

```jsx
import { Alert, EAlertSeverity } from '@nlmk/ds-2.0';

<Alert title="Успешно сохранено" severity={EAlertSeverity.success} close={() => console.log('Alert closed')}>
  Ваши изменения были успешно сохранены.
</Alert>;
```

## Props

| Prop      | Type           | Default                | Description                        |
| --------- | -------------- | ---------------------- | ---------------------------------- |
| title     | string         | -                      | Заголовок алерта                   |
| severity  | EAlertSeverity | EAlertSeverity.success | Тип алерта                         |
| children  | ReactNode      | -                      | Дополнительное содержимое алерта   |
| close     | () => void     | -                      | Функция для закрытия алерта        |
| action    | ReactNode      | -                      | Дополнительное действие для алерта |
| className | string         | -                      | Дополнительные CSS классы          |

## Типы Severity

- `EAlertSeverity.success`
- `EAlertSeverity.error`
- `EAlertSeverity.warning`
- `EAlertSeverity.info`

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.wrapper`: Основной контейнер
- `.content`: Контейнер для содержимого
- `.content-main`: Основное содержимое (иконка и заголовок)
- `.content-description`: Дополнительное описание
- `.action-wrapper`: Контейнер для действий и кнопки закрытия

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер Alert */
[data-ui-alert-container] {
  /* Ваши стили */
}

/* Иконка, отображающая тип сообщения */
[data-ui-alert-icon] {
  /* Ваши стили */
}

/* Заголовок сообщения Alert */
[data-ui-alert-title] {
  /* Ваши стили */
}

/* Обертка для дополнительных действий */
[data-ui-alert-actions] {
  /* Ваши стили */
}

/* Кнопка для закрытия Alert */
[data-ui-alert-close-button] {
  /* Ваши стили */
}

/* Описание или основной текст сообщения Alert */
[data-ui-alert-description] {
  /* Ваши стили */
}
```
