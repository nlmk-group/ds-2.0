# NotificationCard Component

## Версия компонента v1.0

Компонент `NotificationCard` — большая карточка одного уведомления для использования внутри `Drawer`/`Dialog`. Показывает заголовок, текст, временную метку и опциональный индикатор «непрочитано». При длинном тексте автоматически показывает кнопку «Показать больше / Свернуть» (определяется через `ResizeObserver` на лету). Поддерживает controlled и uncontrolled режимы раскрытия.

## Использование

```jsx
import { NotificationCard } from '@nlmk/ds-2.0';

<NotificationCard
  title="Планирование графика отпусков"
  body="Сервис «График отпусков» Добрый день, Иванов И.И. Петров П.П. делегировал вам согласование графика отпусков на 2027."
  timestamp="сегодня, 14:13"
  unread
/>;
```

## Controlled режим

```jsx
const [expanded, setExpanded] = useState(false);

<NotificationCard
  title="Уведомление"
  body="Длинный текст..."
  timestamp="сегодня, 14:13"
  expanded={expanded}
  onExpandedChange={setExpanded}
/>;
```

## Использование в Drawer

```jsx
import { Box, Button, Drawer, NotificationCard, Typography } from '@nlmk/ds-2.0';

<Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" width="820px">
  <Box flexDirection="column" gap={32} p="32px 48px">
    <Typography variant="Heading2">Уведомление</Typography>
    <NotificationCard title="Планирование графика отпусков" body="..." timestamp="сегодня, 14:13" unread />
  </Box>
</Drawer>;
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| title | string | - | Заголовок уведомления |
| body | string | - | Текст уведомления |
| timestamp | string | - | Временная метка (например, «сегодня, 14:13») |
| unread | boolean | false | Флаг непрочитанного уведомления (показывает красную точку) |
| defaultExpanded | boolean | false | Стартовое состояние раскрытия (uncontrolled режим) |
| expanded | boolean | - | Состояние раскрытия (controlled режим) |
| onExpandedChange | (expanded: boolean) => void | - | Коллбек при смене состояния раскрытия |
| showMoreLabel | string | 'Показать больше' | Лейбл кнопки раскрытия |
| hideLabel | string | 'Свернуть' | Лейбл кнопки сворачивания |
| className | string | - | Дополнительный CSS класс |
| style | CSSProperties | - | Inline стили |

## Поведение

- В свёрнутом виде текст обрезается до 2 строк через `-webkit-line-clamp` с многоточием.
- Кнопка «Показать больше» появляется **автоматически** только если текст реально обрезается (детектится через `ResizeObserver` + сравнение `scrollHeight > clientHeight`).
- В развёрнутом виде текст показывается полностью, кнопка меняется на «Свернуть» с иконкой вверх.
- При `unread=true` слева от timestamp рендерится точка-индикатор (`--brand-sapphire-60`).

## Стилизация

### Data-атрибуты

```css
[data-ui-notification-card] {
  /* стили карточки */
}
```

### CSS классы

- `.card` — основной класс карточки
- `.header` — строка с точкой и timestamp
- `.unread-dot` — индикатор непрочитанного
- `.body` — основной контент
- `.title` — заголовок
- `.text` / `.text-expanded` — тело текста и его развёрнутое состояние
- `.toggle` — обёртка кнопки раскрытия

## Состояния

- **Обычное**: белый фон (`steel-10`), тень `0 2px 8px rgba(0, 0, 0, .25)`
- **Hover**: фон `brand-sapphire-10`, тень скрывается
