# Dropdown

## Версия компонента v3.1

Компонент Dropdown предоставляет удобный способ создания интерактивных выпадающих меню с настраиваемыми кнопками и элементами меню.

## Использование Dropdown

### Использование Dropdown Default

```jsx
import { Dropdown, DropdownMenuItem, Typography } from '@nlmk/ds-2.0';

<Dropdown buttonChildren="Dropdown button">
  {positions.map(({ value, disabled }) => (
    <DropdownMenuItem value={value} disabled={disabled}>
      {value}
    </DropdownMenuItem>
  ))}
</Dropdown>;
```

### Использование Dropdown Custom

```jsx
import {
  Dropdown,
  DropdownMenuItem,
  IconCancelOutlined24,
  IconChevronArrowRightOutlined24,
  Typography
} from '@nlmk/ds-2.0';
<Dropdown buttonChildren="Dropdown button">
  {positionsCustom.map(({ value, disabled }) => (
    <DropdownMenuItem key={value} value={value} disabled={disabled}>
      <Box key={value} display="flex" alignItems={finalAlign} gap="8px">
        <div style={{ position: 'relative', top: '4px' }}>
          <IconCancelOutlined24 htmlColor="var(--spectrum-red-60)" />
        </div>
        <div
          style={{
            flexGrow: 1,
            width: '150px'
          }}
        >
          {value}
        </div>
        <div style={{ position: 'relative', top: '2px', marginLeft: 'auto' }}>
          <IconChevronArrowRightOutlined24 htmlColor="var(--brand-sapphire-60)" />
        </div>
      </Box>
    </DropdownMenuItem>
  ))}
</Dropdown>;
```

## Props

Компонент предоставляет интерфейс [IDropdownProps](types.ts), основанный на интерфейсе [IButtonProps](../Button/types.ts), и наследует соответствующие props от [Button](../Button/README.md).

| Prop           | Type          | Default | Description                                 |
| -------------- | ------------- | ------- | ------------------------------------------- |
| className      | string        | -       | Дополнительный класс для кнопки             |
| children       | ReactNode     | -       | Элементы, которые будут отображаться в меню |
| buttonChildren | ReactNode     | -       | Содержимое кнопки                           |
| menuStyle      | CSSProperties | -       | Кастомные стили кнопки.                     |

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.icon-rotate`: Контейнер для иконки, отвечающий за анимацию поворота
- `.icon-rotate-open`: Класс, применяемый при открытом состоянии, трансформирует иконку на 180 градусов
- `.icon-padding`: Класс для добавления верхнего отступа иконе
- `.button`: Класс для стилизации кнопки
- `&:focus`: Стили для кнопки при фокусе (смена фона и цвета текста)

Вы можете переопределить эти стили, передав собственный `className`.

### 2. Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Основной контейнер выпадающего меню */
[data-ui-dropdown-menu],
[data-ui-dropdown-menu-portal] {
  /* Ваши стили */
}

/* Кнопка, вызывающая открытие/закрытие выпадающего меню */
[data-ui-dropdown-button] {
  /* Ваши стили */
}

/* Контейнер отдельного пункта внутри меню */
[data-ui-dropdown-menu-item-container] {
  /* Ваши стили */
}
/* Отдельный пункт внутри меню */
[data-ui-dropdown-menu-item] {
  /* Ваши стили */
}

/* Иконка стрелки */
[data-ui-dropdown-chevron-icon] {
  /* Ваши стили */
}
/* Кастомный контент внутри кнопки дропдауна */
[data-ui-dropdown-button-children] {
  /* Ваши стили */
}
```

### 3. Inline стили

Можно передать объект стилей через проп `menuStyles`, принимающий значение минимальной ширины для выпадающего меню:

```jsx
<Dropdown style={{ minWidth: '200px' }}>Styled dropdown menu</Dropdown>
```
