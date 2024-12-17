# ErrorPage Component

## Версия компонента v3.0

Компонент ErrorPage страницу ошибки с кодом ошибки, описанием и подсказкой для пользователя.

## Использование

```jsx
import React from 'react';
import ErrorPage from '@your-package/error-page';
const App = () => {
  return (
    <ErrorPage
      errorCode={404}
      description="Страница не найдена"
      hint="Проверьте URL или перейдите на главную страницу"
    />
  );
};
export default App;
```

## Props

| Prop        | Type   | Default                        | Description                          |
| ----------- | ------ | ------------------------------ | ------------------------------------ |
| errorCode   | number | -                              | Код ошибки, отображаемый на странице |
| description | string | 'Произошла ошибка'             | Описание ошибки                      |
| hint        | string | 'Попробуйте обновить страницу' | Подсказка для пользователя           |

## Стилизация

Компонент использует CSS-модули для стилизации. Вот основные классы, которые используются:

- `.text`: текстовый контейнер для управления отображением текста

## Состояния

- **403**: Состояние с ошибкой 403
- **404**: Состояние с ошибкой 404
- **Обычное**: Состояние в случае если код ошибки не 403 или 404