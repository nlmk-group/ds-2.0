import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Splitter.module.scss';

import { ISplitterProps } from './types';
import { ESplitterOrientation } from './enums';
import { useSplitter, useSplitterResize } from './hooks';


const Splitter: FC<ISplitterProps> = (props) => {
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
    (height) => {
      setDidUserResize(true);
      setTopHeight(height);
    },
    orientation
  );

  const shouldAnimate = !isDragging;

  const handleElement =
    isShowBottomComponent && (
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

      <div
        className={styles.bottomPane}
        ref={bottomPaneRef}
        style={bottomSizeStyle}
        data-ui-splitter-bottom-pane
      >
        {bottomComponent}
      </div>
    </div>
  );
};

export default Splitter;
