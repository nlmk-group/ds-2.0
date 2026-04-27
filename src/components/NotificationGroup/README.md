# NotificationGroup Component

## Версия компонента v1.0

Компонент `NotificationGroup` — группа больших карточек уведомлений с двумя видами:

- **Свёрнутая «колода карт»** — виден только первый ребёнок в полный размер, под ним 0-2 пустышки-среза, имитирующие стопку карточек.
- **Раскрытый стек** — все карточки видны, расположены вертикально с отступом `16px`.

Переключение между видами осуществляется круглой брендовой кнопкой-тумблером в правом нижнем углу. Поддерживает controlled и uncontrolled режимы.

## Использование

```jsx
import { NotificationCard, NotificationGroup } from '@nlmk/ds-2.0';

<NotificationGroup>
  <NotificationCard title="Уведомление 1" body="..." timestamp="сегодня, 14:13" unread />
  <NotificationCard title="Уведомление 2" body="..." timestamp="сегодня, 12:00" unread />
  <NotificationCard title="Уведомление 3" body="..." timestamp="вчера, 18:30" />
</NotificationGroup>;
```

## Controlled режим

```jsx
const [open, setOpen] = useState(false);

<NotificationGroup open={open} onOpenChange={setOpen}>
  <NotificationCard {...props1} />
  <NotificationCard {...props2} />
  <NotificationCard {...props3} />
</NotificationGroup>;
```

## Использование в Drawer

```jsx
import { Box, Button, Drawer, NotificationCard, NotificationGroup, Typography } from '@nlmk/ds-2.0';

<Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" width="820px">
  <Box flexDirection="column" gap={32} p="32px 48px">
    <Typography variant="Heading2">Уведомления</Typography>
    <NotificationGroup>
      <NotificationCard title="Планирование графика отпусков" body="..." timestamp="сегодня, 14:13" unread />
      <NotificationCard title="Новая задача" body="..." timestamp="сегодня, 12:00" unread />
      <NotificationCard title="Напоминание" body="..." timestamp="вчера, 18:30" />
    </NotificationGroup>
  </Box>
</Drawer>;
```

## Props

| Prop         | Type                    | Default | Description                                        |
| ------------ | ----------------------- | ------- | -------------------------------------------------- |
| children     | ReactNode               | -       | Карточки уведомлений (обычно `NotificationCard`)   |
| defaultOpen  | boolean                 | false   | Стартовое состояние раскрытия (uncontrolled режим) |
| open         | boolean                 | -       | Состояние раскрытия (controlled режим)             |
| onOpenChange | (open: boolean) => void | -       | Коллбек при смене состояния раскрытия              |
| className    | string                  | -       | Дополнительный CSS класс                           |
| style        | CSSProperties           | -       | Inline стили                                       |

## Поведение

- `React.Children.toArray` используется для подсчёта и слайсинга детей — автоматически отфильтровывает `null`/`false`/`undefined`, корректно работая с условным рендерингом.
- Количество peek-слоёв зависит от числа детей:
  - **1 ребёнок** — 0 peek-слоёв, тумблер не отображается
  - **2 ребёнка** — 1 peek-слой
  - **3+ детей** — 2 peek-слоя
- В раскрытом виде peek-слои скрываются, все дети рендерятся стеком.
- Кнопка-тумблер меняет иконку между `ChevronDown` (свернуто) и `ChevronUp` (раскрыто).
- Пустой `children` → компонент не рендерится (`null`).

## Стилизация

### Data-атрибуты

```css
[data-ui-notification-group] {
  /* стили группы */
}
```

### CSS классы

- `.group` — основной контейнер
- `.stack` / `.stack-open` / `.stack-close` — контейнер детей в разных состояниях
- `.front` — слот для первой карточки в свёрнутом виде
- `.peek` / `.peek-1` / `.peek-2` — пустышки-срезы колоды
- `.toggle-wrapper` — обёртка кнопки-тумблера

## Peek-слои (колода карт)

В свёрнутом виде под первой карточкой рендерятся пустышки-срезы:

- **Первый peek**: ширина `calc(100% - 16px)`, `z-index: 2`
- **Второй peek**: ширина `calc(100% - 32px)`, `z-index: 1`

Каждый peek — прямоугольник `32px` высотой с тенью и скруглением, наложенный с отрицательным отступом сверху `-24px`, что создаёт эффект выглядывающих снизу карточек.
