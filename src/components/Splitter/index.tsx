import React, { FC, useRef, useState } from 'react';

import clsx from 'clsx';

import { ISplitterProps } from './types';

import styles from './Splitter.module.scss';

import { ESplitterOrientation } from './enums';
import useSplitter from './hooks';

/**
 * Компонент Splitter разделяет экран на две части с возможностью изменения их размеров.
 *
 * @param {object} props - Свойства компонента.
 * @param {ReactNode} [props.topComponent] - Компонент для отображения в верхней/левой панели.
 * @param {ReactNode} [props.bottomComponent] - Компонент для отображения в нижней/правой панели.
 * @param {`${ESplitterOrientation}`} [props.orientation=ESplitterOrientation.horizontal] - Ориентация разделителя.
 * @returns {JSX.Element} - Компонент Splitter.
 */
const Splitter: FC<ISplitterProps> = ({
  topComponent,
  bottomComponent,
  orientation = ESplitterOrientation.horizontal
}) => {
  const [topHeight, setTopHeight] = useState(48);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVertical = orientation === ESplitterOrientation.vertical;
  const { splitterRef } = useSplitter(containerRef, setTopHeight, orientation);

  const sizeStyle = isVertical ? { width: `${topHeight}%` } : { height: `${topHeight}%` };

  const bottomSizeStyle = isVertical ? { width: `${100 - topHeight}%` } : { height: `${100 - topHeight}%` };

  const handleElement = (
    <div className={styles.handle} data-ui-splitter-handle>
      {[...Array(5)].map((_, index) => (
        <div key={index} className={styles.dot} />
      ))}
    </div>
  );

  return (
    <div className={clsx(styles.container, { [styles.vertical]: isVertical })} ref={containerRef} data-ui-splitter>
      <div className={styles.topPane} style={sizeStyle} data-ui-splitter-top-pane>
        {topComponent}
      </div>
      <div className={clsx(styles.splitter, { [styles.vertical]: isVertical })} ref={splitterRef}>
        {handleElement}
      </div>
      <div className={styles.bottomPane} style={bottomSizeStyle} data-ui-splitter-bottom-pane>
        {bottomComponent}
      </div>
    </div>
  );
};

export default Splitter;
