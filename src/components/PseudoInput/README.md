# PseudoInput Component

## Версия компонента v3.1

PseudoInput компонент используется для отображения текста с меткой в стиле input без возможности редактирования.

## Использование

```jsx
import { PseudoInput } from '@nlmk/ds-2.0';

<PseudoInput label="Метка" size="m">
  Содержимое PseudoInput
</PseudoInput>;
```

## Props

| Prop          | Type                  | Default                   | Description                     |
| ------------- | --------------------- | ------------------------- | ------------------------------- |
| label         | JSX.Element \| string | -                         | Текст или элемент для метки     |
| children      | ReactNode             | -                         | Содержимое PseudoInput          |
| size          | 'm' \| 's' \| 'xs'    | 'm'                       | Размер компонента               |
| labelColor    | customInputColors     | customInputColors.default | Цвет метки                      |
| className     | string                | -                         | Дополнительный CSS класс        |
| style         | CSSProperties         | -                         | Инлайн стили для компонента     |
| suffix        | Reactnode             | -                         | Суффикс в конце PseudoInput     |
| fullWidth     | boolean               | -                         | Флаг, добавляющий ширину в 100% |
| badgeChildren | string                | -                         | Содержимое бейджа               |
| color         | EBadgeColors          | 'brand'                   | Цвет бейджа (пропс от Badge)    |
| variant       | variantsMapping       | 'solid'                   | Вариант бейджа (пропс от Badge) |

### Пропсы Badge

Компонент поддерживает следующие пропсы от компонента Badge:

- `color` - цвет бейджа (все доступные цвета из EBadgeColors)
- `variant` - вариант отображения бейджа ('solid' | 'outline')

Пример использования с бейджем:

```jsx
<PseudoInput label="Статус" badgeChildren="Активен" color="success" variant="outline">
  Содержимое
</PseudoInput>
```

## Примечания

- Компонент имитирует внешний вид input, но не является редактируемым.
- Размер 'm' соответствует стандартному размеру, 's' - компактному, 'xs' - маленькому.
- Цвет метки может быть изменен для отображения различных состояний (например, ошибка, предупреждение).

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.root`: Базовый класс компонента
- `.compact`: Класс для компактного размера
- `.label`: Класс для метки
- `.text`: Класс для основного текста

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер псевдо-инпута */
[data-ui-pseudo-input] {
  /* Ваши стили */
}

/* Лейбл (заголовок) внутри псевдо-инпута */
[data-ui-pseudo-input-label] {
  /* Ваши стили */
}

/* Вложенное содержимое внутри псевдо-инпута */
[data-ui-pseudo-input-children] {
  /* Ваши стили */
}
/* Бедж в конце псевдо-инпута */
[data-ui-pseudo-input-badge] {
  /* Ваши стили */
}
/* Суффикс в конце псевдо-инпута */
[data-ui-pseudo-input-suffix] {
  /* Ваши стили */
}
```

### 3. Inline стили

Можно передать объект стилей через проп `style`:

```jsx
<PseudoInput label="Метка" size="m" style={{ width: '100%' }}>
  Контент
</PseudoInput>
```
