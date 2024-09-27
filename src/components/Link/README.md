# Link Component

## Версия компонента v3.0

Link компонент используется для создания ссылок с различными стилями и размерами. Он поддерживает дополнительные элементы, такие как иконки слева и справа от текста.

## Использование

```jsx
import { Link, sizeMapping, targetMapping } from '@your-package/components';

<Link
  href="https://example.com"
  size={sizeMapping.body}
  target={targetMapping.blank}
  leftIcon={<IconComponent />}
>
  Ссылка на пример
</Link>
```

## Props

| Prop            | Type                     | Default   | Description                         |
|-----------------|--------------------------|-----------|-------------------------------------|
| children        | ReactNode                | -         | Содержимое ссылки                   |
| href            | string                   | -         | URL ссылки                          |
| preventRedirect | boolean                  | false     | Флаг предотвращения перенаправления |
| className       | string                   | -         | Дополнительный CSS класс            |
| size            | sizeMapping              | 'body'    | Размер ссылки                       |
| target          | targetMapping            | '_parent' | Целевое окно для открытия ссылки    |
| disabled        | boolean                  | false     | Флаг отключения ссылки              |
| leftIcon        | JSX.Element \| ReactNode | -         | Иконка слева от текста ссылки       |
| rightIcon       | JSX.Element \| ReactNode | -         | Иконка справа от текста ссылки      |

## Размеры (sizeMapping)

- `h1`, `h2`, `h3`, `h4`: Заголовочные размеры
- `sub1`, `sub2`, `sub3`: Подзаголовочные размеры
- `body`, `body1`, `body2`: Размеры для основного текста
- `caption`: Размер для подписей

## Целевые окна (targetMapping)

- `blank`: Открыть в новом окне
- `self`: Открыть в текущем окне
- `parent`: Открыть в родительском фрейме
- `top`: Открыть в полном окне браузера

## Стилизация

Компонент использует CSS модули для стилизации. Основные классы:

- `.wrapper`: Базовый класс для обертки ссылки
- `.disabled`: Класс для отключенного состояния
- `.icon-wrapper`: Класс для обертки иконок
- `.icon-[size]`: Классы для разных размеров иконок

Вы можете переопределить эти стили, передав собственный `className`.

## Примечание

Компонент Link расширяет стандартные атрибуты HTML-ссылки, поэтому вы можете использовать любые дополнительные атрибуты, такие как `rel`, `title` и т.д.
