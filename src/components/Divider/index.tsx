import React, { FC } from 'react';
import { IDivider } from './types';
import styles from './Divider.module.scss';
import { clsx } from 'clsx';
import { orientationMapping, typeMapping } from './enums';
import HorizontalBorder from './HorizontalBorder';
import Vertical from './Vertical';

const Divider: FC<IDivider> = ({
  children,
  className,
  dashed = false,
  orientation = orientationMapping.center,
  orientationSpace = 0,
  type
}) => {

  if (type === typeMapping.vertical) {
    return (
      <Vertical className={className} dashed={dashed} />
    )
  }

  if (!children) {
    return (
      <div
        data-testid='WRAPPER'
        className={clsx(className, styles.wrapper)}
      >
        <HorizontalBorder
          isSmall={orientation === orientationMapping.left}
          dashed={dashed}
        />
      </div>
    )
  }

  return (
    <div
      data-testid='WRAPPER'
      className={clsx(className, styles.wrapper)}
    >
      <HorizontalBorder
        isSmall={orientation === orientationMapping.left}
        dashed={dashed}
        orientationSpace={orientationSpace}
      />
      <div className={styles['child-wrapper']}>
        {children}
      </div>
      <HorizontalBorder
        isSmall={orientation === orientationMapping.right}
        dashed={dashed}
        orientationSpace={orientationSpace}
      />
    </div>
  );
}

export default Divider