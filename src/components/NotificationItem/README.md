# NotificationItem Component

## Версия компонента v1.0

Компонент `NotificationItem` отображает элемент списка уведомлений с текстом категории и бейджем-счётчиком. Используется для сборки hover-панели уведомлений в паре с `Header` и `ClickAwayListener`, либо как самостоятельный элемент внутри `Dialog`/`Drawer`.

## Использование

```jsx
import { NotificationItem, EBadgeColors } from '@nlmk/ds-2.0';

<NotificationItem
  label="Требуется сделать"
  count={2}
  badgeColor={EBadgeColors.error}
  active
  onClick={(value) => console.log(value)}
/>;
```

## Сборка hover-панели с Header

```jsx
import { useEffect, useRef, useState } from 'react';
import { ClickAwayListener, Header, NotificationItem, Typography } from '@nlmk/ds-2.0';

const items = [
  { label: 'Требуется сделать', count: 2, badgeColor: 'error', active: true },
  { label: 'Важно ознакомиться', count: 7, badgeColor: 'error' },
  { label: 'Для информации', count: 99, badgeColor: 'brand' }
];

export default function App() {
  const [open, setOpen] = useState(false);
  const notifButtonRef = useRef(null);

  useEffect(() => {
    const el = document.querySelector('[data-testid="HEADER_NOTIFICATION"]');
    if (el) notifButtonRef.current = el.parentElement;
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Header
        title="Страница"
        showNotification
        notificationAmount={108}
        onNotificationClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <ClickAwayListener onClickAway={() => setOpen(false)} excludeRef={notifButtonRef}>
          <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: 4, zIndex: 1100 }}>
            {items.map((item) => (
              <NotificationItem key={item.label} {...item} onClick={(v) => console.log(v)} />
            ))}
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}
```

## Props

| Prop       | Type                          | Default             | Description                                        |
| ---------- | ----------------------------- | ------------------- | -------------------------------------------------- |
| label      | string                        | -                   | Текст категории уведомлений                        |
| count      | number                        | 0                   | Количество уведомлений (бейдж скрыт при 0)         |
| badgeColor | EBadgeColors                  | EBadgeColors.error  | Цвет бейджа-счётчика                               |
| active     | boolean                       | false               | Активное состояние (визуальная подсветка)          |
| value      | string                        | label               | Уникальное значение, передаваемое в onClick        |
| onClick    | (value: string) => void       | -                   | Обработчик клика                                   |
| className  | string                        | -                   | Дополнительный CSS класс                           |
| style      | CSSProperties                 | -                   | Inline стили                                       |

## Поведение

- Клик, Enter и Space вызывают `onClick(value ?? label)`.
- Бейдж отображается только при `count > 0`, значения `> 99` форматируются как `99+`.
- Компонент доступен с клавиатуры (`role="button"`, `tabIndex=0`).

## Стилизация

### Data-атрибуты

```css
[data-ui-notification-item] {
  /* стили элемента */
}
```

### CSS классы

- `.item` — базовый класс элемента
- `.item-active` — активное состояние
- `.label` — текстовая часть

## Состояния

- **Обычное**: белый фон (`steel-10`)
- **Hover**: серый фон (`steel-30`)
- **Active**: светло-сапфировый фон (`brand-sapphire-10`)
