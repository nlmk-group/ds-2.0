import React, { FC, useEffect, useRef } from 'react';

import { EClickAwayEvent, IClickAwayListenerProps } from '@components/ClickAwayListener/types';


/**
 * Компонент, который отслеживает клики вне своего DOM-элемента и дочерних элементов.
 * Вызывает callback `onClickAway` при клике снаружи, исключая элементы, указанные в `excludeRef`.
 *
 * @param {Object} props - Пропсы компонента
 * @param {React.ReactNode} props.children - Дочерние элементы компонента
 * @param {string} [props.className] - Дополнительные CSS-классы для корневого элемента
 * @param {React.CSSProperties} [props.style] - Инлайн-стили для корневого элемента
 * @param {() => void} props.onClickAway - Callback, вызываемый при клике вне компонента и исключённых элементов
 * @param {React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[]} [props.excludeRef] - Ref или массив refs элементов, клики по которым не должны вызывать onClickAway
 * @param {TClickAwayEvent} [props.eventType="mouseup"] - Тип события для отслеживания (по умолчанию: "mouseup")
 *
 * @returns {React.ReactElement} React-элемент
 *
 * @example
 * // Базовое использование
 * const ref = useRef(null);
 *
 * <ClickAwayListener
 *   onClickAway={() => console.log('Clicked away!')}
 *   excludeRef={ref}
 * >
 *   <div>Содержимое</div>
 * </ClickAwayListener>
 *
 * @example
 * // С массивом исключаемых элементов и кастомным событием
 * const ref1 = useRef(null);
 * const ref2 = useRef(null);
 *
 * <ClickAwayListener
 *   onClickAway={() => console.log('Clicked away!')}
 *   excludeRef={[ref1, ref2]}
 *   eventType="click"
 * >
 *   <div>Содержимое</div>
 * </ClickAwayListener>
 *
 * @example
 * // Со стилями и классом
 * <ClickAwayListener
 *   onClickAway={handleClose}
 *   className="my-listener"
 *   style={{ padding: 16 }}
 * >
 *   <div>Контент с кастомными стилями</div>
 * </ClickAwayListener>
 */
const ClickAwayListener: FC<IClickAwayListenerProps> = ({
  children,
  className,
  style,
  onClickAway,
  excludeRef,
  eventType = EClickAwayEvent.mouseup
}) => {
  const node = useRef<HTMLDivElement | null>(null);

  const handleEvent = (e: MouseEvent | TouchEvent) => {
    const excludeRefs = Array.isArray(excludeRef) ? excludeRef : [excludeRef];
    if (
      node.current?.contains(e.target as Node) ||
      excludeRefs.some((ref) => ref?.current?.contains(e.target as Node))
    ) {
      // Внутри элемента или исключенного элемента, игнорируем
      return;
    }
    // Клик снаружи элемента
    onClickAway();
  };

  useEffect(() => {
    document.addEventListener(eventType, handleEvent);

    return () => {
      document.removeEventListener(eventType, handleEvent);
    };
  }, [handleEvent, excludeRef, eventType]);

  return (
    <div ref={node} className={className} style={style}>
      {children}
    </div>
  );
};

export default ClickAwayListener;
