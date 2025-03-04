import React from 'react';

import { Icon } from '@components/index';

import { IResizableGripProps } from './types';

import styles from './ResizableGrip.module.scss';

import { useSetDropdownHeight, useSetDropdownWidth } from '../../context';

const ResizableGrip = ({ minWidth, minHeight, containerRef }: IResizableGripProps) => {
  const setDropdownHeight = useSetDropdownHeight();
  const setDropdownWidth = useSetDropdownWidth();

  const handleResize = () => {
    const container = containerRef.current;
    let prevX: number | null = null;
    let prevY: number | null = null;

    const mouseMoveHandler = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      if (container) {
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        const diffX = prevX ? x - prevX : 0;
        const diffY = prevY ? y - prevY : 0;
        if (width + diffX > minWidth) {
          container.style.width = `${width + diffX}px`;
          prevX = x;
        }
        if (width + diffX < minWidth && setDropdownWidth) {
          setDropdownWidth(width + diffX);
        }
        if (height + diffY > minHeight) {
          container.style.height = `${height + diffY}px`;
          prevY = y;
        }
        if (height + diffY > minHeight && setDropdownHeight) {
          setDropdownHeight({ minHeight, optimalHeight: height + diffY });
        }
        if (!prevX) {
          prevX = x;
        }
        if (!prevY) {
          prevY = y;
        }
      }
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  return (
    <div className={styles.resizable} onMouseDown={handleResize}>
      <Icon color="primary" name="IconResizingOutlined16" />
    </div>
  );
};

export default ResizableGrip;
