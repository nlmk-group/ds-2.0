import React, { FC, useContext, useRef } from 'react';

import { ClickAwayListener, Typography } from '@components/index';

import { IDropdownLegendProps } from './types';

import styles from './DropdownLegend.module.scss';

import { LegendContext } from '../../context';
import { ILegendColor } from '../../types';
import LegendView from '../LegendView';
import { DEFAULT_LABEL } from './constants';

const DropdownLegend: FC<IDropdownLegendProps> = ({ divRef, setIsOpen }) => {
  const { color, withPortal, onColorChange, colorList, menuLabel, menuStyle } = useContext(LegendContext);
  // Получение размеров и позиции элемента, к которому привязан divRef
  const rect = divRef?.current?.getBoundingClientRect();
  // Определение стиля списка, учитывая, используется ли portal
  const listStyle = withPortal
    ? { ...menuStyle, minWidth: rect?.width, top: rect?.bottom || 0, left: rect?.left || 0 }
    : menuStyle;
  // Ref на выпадающее меню
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Обработчик клика вне выпадающего меню, закрывающий его
  const handleClickAway = () => setIsOpen(false);

  // Исключить из обработчика клика вне выпадающего меню для DOM элементов divRef и menuRef
  const excludeRef = divRef && menuRef ? [divRef, menuRef] : menuRef;

  // Обработчик изменения цвета, если цвет изменен, закрывать выпадающее меню
  const onColorChangeHandler = (val: ILegendColor) => {
    setIsOpen(false);
    onColorChange?.(val);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway} excludeRef={excludeRef}>
      <div ref={menuRef} className={styles.menu} style={listStyle}>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          {menuLabel ?? DEFAULT_LABEL}
        </Typography>
        <div className={styles.list}>
          {colorList?.map(elem => (
            <LegendView
              onColorChange={onColorChangeHandler}
              color={elem}
              key={elem.default}
              isWithoutLabel
              isSelectable
              isActive={elem.default === color.default}
            />
          ))}
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default DropdownLegend;
