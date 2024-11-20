import React, { FC, useRef, useState } from 'react';

import Divider from '@components/Divider';

import { ISplitterProps } from './types';

import styles from './Splitter.module.scss';

import useSplitter from './hooks';

/**
 * Компонент Splitter разделяет экран на две части с возможностью изменения их размеров.
 *
 * @param {object} props - Свойства компонента.
 * @param {ReactNode} [props.topComponent] - Компонент для отображения в верхней панели.
 * @param {ReactNode} [props.bottomComponent] - Компонент для отображения в нижней панели.
 * @returns {JSX.Element} - Компонент Splitter.
 */
const Splitter: FC<ISplitterProps> = ({ topComponent, bottomComponent }) => {
  const [topHeight, setTopHeight] = useState(48);
  const containerRef = useRef<HTMLDivElement>(null);
  const { splitterRef } = useSplitter(containerRef, setTopHeight);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.topPane} style={{ height: `${topHeight}%` }}>
        {topComponent}
      </div>
      <div className={styles.splitter} ref={splitterRef}>
        <Divider>
          <div className={styles.handle}>
            {[...Array(5)].map((_, index) => (
              <div key={index} className={styles.dot} />
            ))}
          </div>
        </Divider>
      </div>
      <div className={styles.bottomPane} style={{ height: `${100 - topHeight}%` }}>
        {bottomComponent}
      </div>
    </div>
  );
};

export default Splitter;
