# Colors

## Версия компонента 3.0

Компонент **Colors** предназначен для отображения таблицы токенов цветов дизайн-системы с поддержкой светлой и темной темы. Позволяет визуализировать значения цветовых токенов, их описание и переменные для обеих тем. Клик по hex-значению или имени переменной копирует его в буфер обмена. Поддерживается группировка по ключу, отображение названия токена, описания, значений для обеих тем, быстрый копипаст переменной или hex.

---

## Базовый пример использования

```jsx
import Colors from './Colors';

const lightPalette = {
  brand: {
    primary: {
      value: '#2563eb',
      description: 'Основной брендовый цвет\nИспользуется для кнопок'
    },
    secondary: {
      value: '#F59E42',
      description: 'Вторичный цвет\nДля акцентов'
    }
  }
};
const darkPalette = {
  brand: {
    primary: {
      value: '#1e40af',
      description: 'Primary color in dark'
    },
    secondary: {
      value: '#B37535',
      description: 'Secondary color in dark'
    }
  }
};
const palettes = [lightPalette, darkPalette];

<Colors
  colors={palettes}
  groupColorKey="brand"
  title="Брендовые цвета"
  subTitle="Основные фирменные цвета для использования во всех продуктах."
/>
```

---

## Props

| Prop            | Type         | Required | Description                                                                 |
|-----------------|--------------|:--------:|-----------------------------------------------------------------------------|
| colors          | any[]        |   ✅     | Массив палитр: `[lightPalette, darkPalette?]`. Каждый элемент — объект с группами цветов. |
| groupColorKey   | string       |   ✅     | Ключ группы цветов (раздел из палитры), который будет отображаться.         |
| title           | string       |   ✅     | Заголовок блока (например, "Базовые цвета").                               |
| subTitle        | string       |   ❌     | Подзаголовок или описание таблицы.                                          |

---

## Другие варианты использования

### Только светлая палитра

```jsx
<Colors
  colors={[lightPalette]}
  groupColorKey="brand"
  title="Только светлая тема"
/>
```

### Несколько групп

```jsx
const lightPalette = {
  brand: { ... },
  ui: {
    background: { value: '#fff', description: 'Фон' },
    border: { value: '#eee', description: 'Бордер' }
  }
};
const darkPalette = {
  brand: { ... },
  ui: {
    background: { value: '#111', description: 'Фон (тёмный)' },
    border: { value: '#222', description: 'Бордер (тёмный)' }
  }
};

<Colors
  colors={[lightPalette, darkPalette]}
  groupColorKey="ui"
  title="UI цвета"
/>
```

---

## Структура объекта цвета

```js
{
  value: "#2563eb",            // Строка: HEX или любой CSS-цвет
  description: "Описание..."   // Строка: Описание и/или пример использования (может быть многострочным)
}
```

### Пример структуры палитры

```jsx
const colors = [
  {
    brand: {
      'primary': { value: '#2563eb', description: '...' },
      ...
    },
    ui: {
      ...
    }
  },
  {
    brand: {
      'primary': { value: '#1e40af', description: '...' },
      ...
    }
  }
];
```

---

## Стилизация

- **CSS:** Для изменения внешнего вида используйте файл `Colors.module.scss`.
- **Классы:** Основные классы: `.colors-page-wrapper`, `.colors-table`, `.color-row`, `.cell-name`, `.cells-color`, `.cell-color`, `.color-wrapper`, `.color`, `.color-value`.
- **Медиа-классы:** `.only-desktop`, `.only-mobile` для адаптивности.
- **Копирование:** Клик по hex или имени переменной копирует значение в буфер обмена (через CopyWrapper).

---

## Дочерние компоненты

### CopyWrapper

Обертка для копирования значения в буфер обмена по клику. Показывает tooltip "Скопировано в буфер обмена".

**Props:**
- `copy: string` — значение для копирования
- `placement?: string` — позиция тултипа (по умолчанию 'top')
- `children: ReactNode` — содержимое

---

## Внешние зависимости

- **Typography** — компонент для типографики
- **Tooltip** — компонент для всплывающих подсказок
- **clsx** — для объединения CSS-классов

---

## Вспомогательные утилиты

- `flattenObject` — преобразует вложенный объект палитры в плоский объект для рендера
- `returnDarkColors` — возвращает значение цвета для темной темы по ключу
- `sortColorKeys` — сортирует ключи токенов по приоритету и алфавиту

---

## Дополнительная информация

- Если не передан `darkPalette`, колонка "Темная тема" не отображается.
- Клик по hex или имени переменной копирует значение в буфер обмена.
- Для кастомизации используйте CSS-модули.
