# Input Component

## Версия компонента v3.1

Input компонент используется для создания текстовых полей ввода различных стилей и размеров. Он поддерживает однострочный и многострочный режимы, а также дополнительные элементы, такие как иконки и вспомогательный текст.

## Использование

```jsx
import { customInputColors, Input, sizesMappingInput } from '@nlmk/ds-2.0';

<Input
  label="Username"
  value={username}
  onChange={handleChange}
  size={sizesMappingInput.m}
  color={customInputColors.default}
  helperText="Enter your username"
/>;
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | - | Уникальный идентификатор инпута |
| value | string | - | Значение инпута |
| disabled | boolean | false | Флаг отключения инпута |
| label | string | - | Текст метки (label) инпута |
| placeholder | string | - | Текст плейсхолдера |
| pseudo | boolean | false | Флаг псевдо-инпута |
| icon | ReactNode | - | Иконка инпута |
| multiline | boolean | false | Флаг многострочного режима |
| resize | boolean | false | Флаг возможности изменения размера (для textarea) |
| helperText | ReactNode | - | Вспомогательный текст |
| size | \`${sizesMappingInput}\` | sizesMappingInput.m | Размер инпута |
| reset | boolean | false | Флаг наличия кнопки сброса |
| onChange | ChangeEventHandler<HTMLInputElement \| HTMLTextAreaElement> | - | Обработчик изменения значения |
| onReset | () => void | - | Обработчик сброса значения |
| onBlur | ChangeEventHandler<HTMLInputElement \| HTMLTextAreaElement> | - | Обработчик потери фокуса |
| color | customInputColors | 'default' | Цвет инпута |
| className | string | - | Дополнительный CSS класс |
| inputRef | Ref<HTMLInputElement \| HTMLTextAreaElement> | - | Реф для доступа к DOM-элементу инпута |
| colored | boolean | false | Флаг цветного фона |

## Размеры (sizesMappingInput)

- `m` - стандартный (40px) (по умолчанию)
- `s` - компактный (32px)
- `xs` - экстра-компактный (28px)

## Цвета (customInputColors)

- `default` (по умолчанию)
- `error`
- `warning`
- `success`

## Особенности работы placeholder

Плейсхолдер в компоненте работает следующим образом:

1. Если нет label:
   - Плейсхолдер всегда видим, пока поле пустое
2. Если есть label:
   - Плейсхолдер скрыт, когда нет фокуса
   - Плейсхолдер появляется при фокусе, если поле пустое
3. Плейсхолдер автоматически скрывается при наличии значения в поле

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.input`: Основной контейнер
- `.textfield`: Поле ввода
- `.textarea`: Многострочное поле ввода
- `.label`: Метка поля
- `.helper`: Вспомогательный текст
- `.icon`: Иконка
- `.reset`: Кнопка сброса
- `.colored`: Модификатор для цветного фона

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Стилизация контейнера */
[data-ui-input] {
  /* стили */
}

/* Стилизация поля ввода */
[data-ui-textfield] {
  /* стили */
}

/* Стилизация метки */
[data-ui-input-label] {
  /* стили */
}

/* Стилизация вспомогательного текста */
[data-ui-input-helper-text] {
  /* стили */
}

/* Стилизация иконки сброса */
[data-ui-input-reset-icon] {
  /* стили */
}

/* Стилизация кастомной иконки */
[data-ui-input-custom-icon] {
  /* стили */
}
```

### 3. Inline стили

Можно передать объект стилей через проп `style`:

```jsx
<Input style={{ marginBottom: '16px' }} label="Styled input" />
```

Состояния

- **Обычное**: Базовое состояние поля ввода
- **Фокус**: Подсветка границы цветом brand или соответствующим статусу
- **Наведение**: Изменение цвета границы
- **Отключенное**: Серый фон и недоступность для взаимодействия
- **С ошибкой**: Красная граница и текст
- **Предупреждение**: Желтая граница и текст
- **Успех**: Зеленая граница и текст
- **Цветовая индикация**: При colored=true добавляется желтый фон

## Примечание

Компонент Input расширяет стандартные атрибуты HTML-инпута и текстовой области, поэтому поддерживает все нативные атрибуты, такие как `maxLength`, `required`, `name` и другие.
