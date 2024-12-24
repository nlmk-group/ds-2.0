import React, { FC, MouseEventHandler, useContext, useRef, useState } from 'react';

import clsx from 'clsx';

import styles from '../../Legend.module.scss';

import { LegendContext } from '../../context';
import { COMPONENT_NAME } from './constants';
import { Menu } from './Menu';

export const LegendCustomEditColor: FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { color, isDisabled } = useContext(LegendContext);
  const [isOpen, setIsOpen] = useState(false);

  const onClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(prev => !prev);
  };

  // Стили компонента
  const className = clsx(styles['color-container-edit'], COMPONENT_NAME);

  return (
    <div style={{ position: 'relative' }}>
      {color.editColor?.({
        ref: divRef,
        color,
        isDisabled,
        onClick,
        isOpen,
        className
      }) ?? null}
      {isOpen ? <Menu divRef={divRef} setIsOpen={setIsOpen} /> : null}
    </div>
  );
};
