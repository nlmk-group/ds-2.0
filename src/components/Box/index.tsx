import React, { FC } from 'react';

import clsx from 'clsx';

import { IBox } from './types';

import styles from './Box.module.scss';

const getPadding = (p: string | number | undefined) => {
  if (p === undefined || p === null) {
    return undefined;
  }
  if (typeof p === 'number') {
    return `${p}px`;
  }
  return p;
};

/**
 * Компонент Box предоставляет гибкую систему layout и spacing.
 * Позволяет быстро создавать контейнеры с настраиваемыми отступами, размерами и flexbox свойствами.
 * @component
 * @param {Object} props - Свойства компонента Box
 * @param {ReactNode} [props.children] - Дочерние элементы для отображения внутри Box
 * @param {string|number} [props.p] - Базовый padding для всех сторон. Числа автоматически конвертируются в px
 * @param {string|number} [props.px] - Горизонтальный padding (left, right). Перезаписывает p для левой и правой стороны
 * @param {string|number} [props.py] - Вертикальный padding (top, bottom). Перезаписывает p для верхней и нижней стороны
 * @param {string|number} [props.pt] - Padding сверху. Наивысший приоритет для верхней стороны
 * @param {string|number} [props.pr] - Padding справа. Наивысший приоритет для правой стороны
 * @param {string|number} [props.pb] - Padding снизу. Наивысший приоритет для нижней стороны
 * @param {string|number} [props.pl] - Padding слева. Наивысший приоритет для левой стороны
 * @param {string|number} [props.height] - Высота контейнера
 * @param {string|number} [props.width] - Ширина контейнера
 * @param {string|number} [props.maxWidth] - Максимальная ширина контейнера
 * @param {string} [props.background] - Цвет фона контейнера
 * @param {string} [props.color='var(--steel-90)'] - Цвет текста
 * @param {string} [props.border] - CSS свойство border
 * @param {string|number} [props.borderRadius] - Радиус скругления углов
 * @param {CSSProperties['display']} [props.display='flex'] - CSS свойство display
 * @param {CSSProperties['flexDirection']} [props.flexDirection] - Направление flex контейнера
 * @param {CSSProperties['justifyContent']} [props.justifyContent] - Выравнивание по главной оси
 * @param {CSSProperties['alignItems']} [props.alignItems] - Выравнивание по поперечной оси
 * @param {CSSProperties['flexWrap']} [props.flexWrap] - Перенос flex элементов
 * @param {string|number} [props.gap='24px'] - Промежуток между дочерними элементами
 * @param {CSSProperties} [props.st] - Дополнительные inline стили (наивысший приоритет)
 * @param {string} [props.className] - Дополнительные CSS классы
 *
 * @description
 * **Система приоритетов для spacing (как в MUI):**
 * 1. `p` - базовый padding для всех сторон
 * 2. `px/py` - padding по осям (перезаписывает p)
 * 3. `pt/pr/pb/pl` - padding для конкретных сторон (наивысший приоритет)
 *
 * **Пример приоритетов:**
 * `<Box p={10} px={20} pl={30} />` → top: 10px, right: 20px, bottom: 10px, left: 30px
 *
 * @extends {DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>} Наследует все стандартные атрибуты div элемента
 * @returns {JSX.Element} Компонент Box в виде div контейнера
 */
const Box: FC<IBox> = ({
  children,
  st,
  className,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  background,
  height,
  width,
  maxWidth,
  color = 'var(--steel-90)',
  border,
  borderRadius,
  display = 'flex',
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  gap = '24px',
  ...rest
}) => {
  const basePadding = getPadding(p);
  const xPadding = getPadding(px);
  const yPadding = getPadding(py);

  const propsStyles = {
    backgroundColor: background,
    height: getPadding(height),
    color,
    width: getPadding(width),
    maxWidth: getPadding(maxWidth),
    border,
    borderRadius: getPadding(borderRadius),
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap: getPadding(gap),
    paddingTop: getPadding(pt) ?? yPadding ?? basePadding,
    paddingRight: getPadding(pr) ?? xPadding ?? basePadding,
    paddingBottom: getPadding(pb) ?? yPadding ?? basePadding,
    paddingLeft: getPadding(pl) ?? xPadding ?? basePadding,
    ...st
  };

  return (
    <div data-testid="BOX_WRAPPER" className={clsx(styles.wrapper, className)} style={propsStyles} {...rest}>
      {children}
    </div>
  );
};

export default Box;
