import React, { FC, MouseEventHandler, useContext, useRef, useState } from 'react';

import Icon from '@components/Icon';
import clsx from 'clsx';

import styles from '../../Legend.module.scss';

import { LegendContext } from '../../context';
import { COMPONENT_NAME } from './constants';
import { Menu } from './Menu';
import { getBackgroundColor } from './utils';

export const LegendEditColor: FC = () => {
  const { color, isDisabled } = useContext(LegendContext);
  const divRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
    setIsHover(true);
  };

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setIsHover(false);
  };

  const onClick: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  // Стили компонента
  const className = clsx(
    styles['color-container-edit'],
    styles['color-transition'],
    isDisabled ? styles['color-container-edit--disabled'] : {},
    isOpen ? styles['color-container-edit--open'] : {},
    COMPONENT_NAME
  );
  const backgroundColor = getBackgroundColor(color, { isDisabled: isDisabled ?? false, isOpen, isHover });

  return (
    <div style={{ position: 'relative' }}>
      <div
        ref={divRef}
        onClick={isDisabled ? undefined : onClick}
        className={className}
        data-testid={COMPONENT_NAME}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        style={{ backgroundColor }}
      >
        <Icon
          data-ui-legend-edit-icon
          htmlColor="var(--steel-90)"
          style={isDisabled ? { opacity: '0.3' } : undefined}
          name="IconChevronArrowDownOutlined24"
        />
      </div>
      {isOpen ? <Menu divRef={divRef} setIsOpen={setIsOpen} /> : null}
    </div>
  );
};
