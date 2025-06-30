# Компонент Portal

## Версия компонента 3.0

Компонент **Portal** используется для рендеринга дочерних элементов (children) в DOM-узел, который находится вне иерархии DOM-дерева родительского компонента. Это полезно для модальных окон, всплывающих подсказок и других элементов, которые должны отображаться поверх основного контента.

---

## Базовый пример использования

```jsx
import Portal from '@nlmk/ds-2.0/src/components/Portal';

const node = document.getElementById('portal-root');

const App = () => (
  <Portal node={node}>
    <div>Контент, который будет отрисован вне основного DOM-дерева</div>
  </Portal>
);

export default App;
```

---

## Props

| Prop     | Type                         | Default | Description                                                        |
|----------|------------------------------|---------|--------------------------------------------------------------------|
| children | ReactNode                    | -       | Элементы, которые будут отрисованы внутри портала                  |
| node     | Element \| DocumentFragment  | -       | DOM-узел, в который будет отрисован портал                         |

---

## Другие варианты использования

### Использование с модальным окном

```jsx
import Portal from '@nlmk/ds-2.0/src/components/Portal';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ open, children }) => (
  open ? (
    <Portal node={modalRoot}>
      <div className="modal">{children}</div>
    </Portal>
  ) : null
);

export default Modal;
```

---

## Стилизация

Компонент Portal не добавляет собственных стилей и не оборачивает children в дополнительный контейнер. Для стилизации используйте CSS-классы на передаваемых дочерних элементах.

---

## Дополнительная информация

- Компонент Portal является оберткой над [`ReactDOM.createPortal`](https://react.dev/reference/react-dom/createPortal).
- Для корректной работы убедитесь, что DOM-узел (node) существует в момент рендера.
- Если не передан prop `node`, компонент вернет `null` и ничего не отрисует.

---

### Внешние зависимости
- ReactDOM (ReactDOM.createPortal)
