# Dropdown

## Версия компонента v3.2

Компонент Dropdown предоставляет удобный способ создания интерактивных выпадающих меню с настраиваемыми кнопками и элементами меню.

## Использование Dropdown

### Использование Dropdown Default

```jsx
import { Dropdown, DropdownMenuItem } from '@nlmk/ds-2.0';

<Dropdown buttonChildren="Dropdown button">
  {positions.map(({ value, disabled }) => (
    <DropdownMenuItem key={value} value={value} disabled={disabled}>
      {value}
    </DropdownMenuItem>
  ))}
</Dropdown>;
```

### Использование Dropdown с возможностями Button

```jsx
import { Dropdown, DropdownMenuItem, IconFilterOutlined24 } from '@nlmk/ds-2.0';

<Dropdown buttonChildren="Фильтр" variant="primary" startIcon={<IconFilterOutlined24 />} startBadge="3" color="primary">
  {filterOptions.map(({ value, disabled }) => (
    <DropdownMenuItem key={value} value={value} disabled={disabled}>
      {value}
    </DropdownMenuItem>
  ))}
</Dropdown>;
```

### Использование Dropdown с кастомной иконкой

```jsx
import { Dropdown, DropdownMenuItem, IconSearchOutlined24 } from '@nlmk/ds-2.0';

<Dropdown iconButton={<IconSearchOutlined24 />} variant="ghost">
  {searchOptions.map(({ value, disabled }) => (
    <DropdownMenuItem key={value} value={value} disabled={disabled}>
      {value}
    </DropdownMenuItem>
  ))}
</Dropdown>;
```

### Использование Dropdown Custom

```jsx
import { Box, Dropdown, DropdownMenuItem, IconCancelOutlined24, IconChevronArrowRightOutlined24 } from '@nlmk/ds-2.0';
<Dropdown buttonChildren="Dropdown button">
  {positionsCustom.map(({ value, disabled }) => (
    <DropdownMenuItem key={value} value={value} disabled={disabled}>
      <Box key={value} display="flex" alignItems="center" gap="8px">
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

### Dropdown-специфичные пропсы

| Prop              | Type          | Default | Description                                 |
| ----------------- | ------------- | ------- | ------------------------------------------- |
| children          | ReactNode     | -       | Элементы, которые будут отображаться в меню |
| buttonChildren    | ReactNode     | -       | Содержимое кнопки                           |
| menuStyle         | CSSProperties | -       | Кастомные стили меню                        |
| buttonStyle       | CSSProperties | -       | Кастомные стили кнопки                      |
| withPortal        | boolean       | false   | Открытие выпадающего списка в портале       |
| portalContainerId | string        | 'root'  | Контейнер для портала                       |

### Наследуемые от Button пропсы

| Prop       | Type              | Default     | Description                                            |
| ---------- | ----------------- | ----------- | ------------------------------------------------------ |
| variant    | EButtonVariant    | 'secondary' | Вариант стиля кнопки                                   |
| size       | EButtonSize       | 'm'         | Размер кнопки и меню                                   |
| color      | EButtonColor      | -           | Цвет кнопки                                            |
| disabled   | boolean           | false       | Отключает кнопку и возможность открытия меню           |
| className  | string            | -           | Дополнительный класс для кнопки                        |
| startIcon  | ReactNode         | -           | Иконка в начале кнопки                                 |
| iconButton | ReactNode         | -           | Иконка для кнопки-иконки (переопределяет шеврон)       |
| startBadge | string \| number  | -           | Бейдж в начале кнопки                                  |
| endBadge   | string \| number  | -           | Бейдж в конце кнопки                                   |
| onClick    | MouseEventHandler | -           | Обработчик клика (переопределяется внутренней логикой) |

И все остальные HTML-атрибуты кнопки: `id`, `onFocus`, `onBlur`, `aria-*`, `data-*` и т.д.

## Особенности наследования

### Логика иконок

- Если передан `iconButton` - используется он вместо стандартного шеврона
- Если `iconButton` не передан и нет `buttonChildren` - показывается шеврон как `iconButton`
- Если есть `buttonChildren` и нет кастомного `iconButton` - показывается шеврон как `endIcon`

### Приоритет стилей

- `buttonStyle` имеет приоритет над `style` из других пропсов
- `className` объединяется с внутренними классами компонента

## Стилизация

Компонент можно кастомизировать несколькими способами:

### 1. CSS-классы

Компонент использует CSS модули для стилизации. Основные классы:

- `.icon-rotate`: Контейнер для иконки, отвечающий за анимацию поворота
- `.icon-rotate-open`: Класс, применяемый при открытом состоянии, трансформирует иконку на 180 градусов
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

Можно передать объекты стилей через пропсы:

```jsx
<Dropdown menuStyle={{ minWidth: '200px' }} buttonStyle={{ fontWeight: 'bold' }}>
  Styled dropdown menu
</Dropdown>
```

## Примеры использования

### Фильтр с бейджем

```jsx
<Dropdown buttonChildren="Фильтры" startIcon={<IconFilterOutlined24 />} startBadge="5" variant="primary">
  {/* элементы меню */}
</Dropdown>
```

### Кнопка-иконка

```jsx
<Dropdown iconButton={<IconMoreVerticalOutlined24 />} variant="ghost">
  {/* элементы меню */}
</Dropdown>
```

### Кастомизация портала

```jsx
<Dropdown withPortal={true} portalContainerId="dropdown-portal" buttonChildren="В портале">
  {/* элементы меню */}
</Dropdown>
```

```

```
