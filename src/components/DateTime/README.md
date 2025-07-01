# Компонент DateTime

## Версия компонента 3.0

Компонент `DateTime` предназначен для отображения актуальных даты и времени на русском языке. Он автоматически обновляет время каждую минуту и форматирует дату в виде `ДД.ММ.ГГГГ, День недели` и время в формате `ЧЧ:ММ`. Компонент не принимает props и может быть использован в любом месте приложения для информирования пользователя о текущих дате и времени.

---

## Использование

```jsx
import DateTime from '@components/DateTime';

const App = () => (
  <div>
    <h1>Добро пожаловать!</h1>
    <DateTime />
  </div>
);

export default App;
```

## Props

| Prop  | Type | Default | Description |
|-------|------|---------|-------------|
| —     | —    | —       | Компонент не принимает props |

## Стилизация

Компонент использует модульные SCSS-стили и предоставляет CSS-классы для кастомизации:

- `.date-wrapper` — для блока с датой
- `.time-wrapper` — для блока с временем

### Data-атрибуты

Для удобной кастомизации компонент также предоставляет следующие data-атрибуты:

```css
[data-ui-datetime] { /* Контейнер компонента DateTime */ }
[data-ui-datetime-date] { /* Блок с датой */ }
[data-ui-datetime-time] { /* Блок со временем */ }
```

### Пример переопределения стилей через CSS-классы

```css
.date-wrapper {
  color: #333a45;
  margin-right: 12px;
}

.time-wrapper {
  color: #009688;
  font-weight: bold;
}
```

### Пример кастомизации через data-атрибуты

```css
[data-ui-datetime-date] {
  color: #1976d2;
}
[data-ui-datetime-time] {
  color: #d32f2f;
  font-weight: 600;
}
```

### Пример кастомизации через inline-стили

```jsx
<div style={{ background: '#fffbe6', padding: '16px' }}>
  <DateTime />
</div>
```

## Другие варианты использования

Поскольку DateTime не принимает props, его вариации использования касаются лишь его встраивания в различные компоненты, оформление и позиционирование.

#### Пример использования в шапке сайта

```jsx
import DateTime from '@components/DateTime';

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>My App</span>
    <DateTime />
  </header>
);

export default Header;
```

#### Использование как отдельного информационного блока

```jsx
<div style={{ padding: 12, background: '#f4f4f4', borderRadius: 6 }}>
  <DateTime />
</div>
```

## Дополнительная информация

- Компонент использует компонент `Typography` из вашей библиотеки, передавая в него разные варианты (`Body2-Medium` для даты, `Heading4` для времени).
- Автообновление времени происходит каждую минуту с помощью `setInterval`.
- Формат даты соответствует российскому стандарту, а день недели автоматически выводится с заглавной буквы.
