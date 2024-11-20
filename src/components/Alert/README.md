# Alert Component

## Версия компонента v3.1

Alert компонент используется для отображения важных сообщений пользователю. Он поддерживает различные типы сообщений, такие как успех, ошибка, предупреждение и информация.

## Использование

```jsx
import { Alert, EAlertSeverity } from '@nlmk/ds-2.0';

<Alert
  title="Успешно сохранено"
  severity={EAlertSeverity.success}
  close={() => console.log('Alert closed')}
>
  Ваши изменения были успешно сохранены.
</Alert>
```

## Props

| Prop      | Type           | Default                | Description                        |
|-----------|----------------|------------------------|------------------------------------|
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

Компонент использует CSS модули для стилизации. Основные классы:

- `.wrapper`: Основной контейнер
- `.content`: Контейнер для содержимого
- `.content-main`: Основное содержимое (иконка и заголовок)
- `.content-description`: Дополнительное описание
- `.action-wrapper`: Контейнер для действий и кнопки закрытия

Вы можете переопределить эти стили, передав собственный `className`.
