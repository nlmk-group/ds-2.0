# Input Component

## Версия компонента v3.0

Input компонент используется для создания текстовых полей ввода различных стилей и размеров. Он поддерживает однострочный и многострочный режимы, а также дополнительные элементы, такие как иконки и вспомогательный текст.

## Использование

```jsx
import { Input, customInputColors, sizesMappingInput } from '@nlmk/ds-2.0';

<Input
  label="Username"
  value={username}
  onChange={handleChange}
  size={sizesMappingInput.m}
  color={customInputColors.default}
  helperText="Enter your username"
/>
```

## Props

| Prop       | Type                                                        | Default             | Description                                       |
|------------|-------------------------------------------------------------|---------------------|---------------------------------------------------|
| id         | string                                                      | -                   | Уникальный идентификатор инпута                   |
| value      | string                                                      | -                   | Значение инпута                                   |
| disabled   | boolean                                                     | false               | Флаг отключения инпута                            |
| label      | string                                                      | -                   | Текст метки (label) инпута                        |
| pseudo     | boolean                                                     | false               | Флаг псевдо-инпута                                |
| icon       | ReactNode                                                   | -                   | Иконка инпута                                     |
| multiline  | boolean                                                     | false               | Флаг многострочного режима                        |
| resize     | boolean                                                     | false               | Флаг возможности изменения размера (для textarea) |
| helperText | ReactNode                                                   | -                   | Вспомогательный текст                             |
| size       | \`${sizesMappingInput}\`                                    | sizesMappingInput.m | Размер инпута                                     |
| reset      | boolean                                                     | false               | Флаг наличия кнопки сброса                        |
| onChange   | ChangeEventHandler<HTMLInputElement \| HTMLTextAreaElement> | -                   | Обработчик изменения значения                     |
| onReset    | () => void                                                  | -                   | Обработчик сброса значения                        |
| onBlur     | ChangeEventHandler<HTMLInputElement \| HTMLTextAreaElement> | -                   | Обработчик потери фокуса                          |
| color      | customInputColors                                           | 'default'           | Цвет инпута                                       |
| className  | string                                                      | -                   | Дополнительный CSS класс                          |
| inputRef   | Ref<HTMLInputElement \| HTMLTextAreaElement>                | -                   | Реф для доступа к DOM-элементу инпута             |
| colored    | boolean                                                     | false               | Флаг цветного фона                                |

## Размеры (sizesMappingInput)

- `m` - средний (по умолчанию)
- `s` - маленький
- `xs` - очень маленький

## Цвета (customInputColors)

- `default`, `error`, `warning`, `success`

## Стилизация

Компонент использует CSS модули для стилизации. Основные классы:

- `.input-wrapper`: Базовый класс для обертки инпута
- `.text-field`: Класс для текстового поля
- `.textarea`: Класс для многострочного текстового поля
- `.label`: Класс для метки инпута
- `.helper-text`: Класс для вспомогательного текста
- `.icon`: Класс для иконки
- `.colored`: Класс для цветного фона

Вы можете переопределить эти стили, передав собственный `className`.

## Примечание

Компонент Input расширяет стандартные атрибуты HTML-инпута и текстовой области, поэтому вы можете использовать любые дополнительные атрибуты, такие как `placeholder`, `maxLength`, `required` и т.д.
