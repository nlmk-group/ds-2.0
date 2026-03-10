import React, { FC } from 'react';

import clsx from 'clsx';

import { ISplitterProps } from './types';

import styles from './Splitter.module.scss';

import { ESplitterOrientation } from './enums';
import { useSplitter, useSplitterResize } from './hooks';

/**
 * Компонент Splitter разделяет экран на две части с возможностью изменения их размеров.
 *
 * @param {object} props - Свойства компонента.
 * @param {ReactNode} [props.topComponent] - Компонент для отображения в верхней/левой панели.
 * @param {ReactNode} [props.bottomComponent] - Компонент для отображения в нижней/правой панели.
 * @param {`${ESplitterOrientation}`} [props.orientation=ESplitterOrientation.horizontal] - Ориентация разделителя.
 * @returns {JSX.Element} - Компонент Splitter.
 */

const Splitter: FC<ISplitterProps> = props => {
  const {
    containerRef,
    topPaneRef,
    bottomPaneRef,
    isVertical,
    containerStyle,
    topSizeStyle,
    bottomSizeStyle,
    setTopHeight,
    setDidUserResize
  } = useSplitterResize(props);

  const {
    topComponent,
    bottomComponent,
    isShowBottomComponent = true,
    orientation = ESplitterOrientation.horizontal
  } = props;

  const { splitterRef, isDragging } = useSplitter(
    containerRef,
    height => {
      setDidUserResize(true);
      setTopHeight(height);
    },
    orientation
  );

  const shouldAnimate = !isDragging;

  const handleElement = isShowBottomComponent && (
    <div className={styles.handle} data-ui-splitter-handle>
      {[...Array(5)].map((_, index) => (
        <div key={index} className={styles.dot} />
      ))}
    </div>
  );

  return (
    <div
      className={clsx(styles.container, { [styles.vertical]: isVertical })}
      ref={containerRef}
      data-ui-splitter
      data-animate={shouldAnimate ? 'true' : 'false'}
      style={containerStyle}
    >
      <div className={styles.topPane} ref={topPaneRef} style={topSizeStyle} data-ui-splitter-top-pane>
        {topComponent}
      </div>

      <div
        className={clsx(styles.splitter, { [styles.vertical]: isVertical })}
        ref={splitterRef}
        style={{ display: isShowBottomComponent ? undefined : 'none' }}
      >
        {handleElement}
      </div>

      <div className={styles.bottomPane} ref={bottomPaneRef} style={bottomSizeStyle} data-ui-splitter-bottom-pane>
        {bottomComponent}
      </div>
    </div>
  );
};

export default Splitter;
