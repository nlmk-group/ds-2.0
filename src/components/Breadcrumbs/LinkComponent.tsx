import React, { FC } from 'react';

import { Icon, Typography } from '@components/index';
import { clsx } from 'clsx';

import { ILinkComponentProps } from './types';

import styles from './Breadcrumbs.module.scss';

import { targetMapping } from './enums';

const LinkComponent: FC<ILinkComponentProps> = ({
  label,
  href,
  active,
  target = targetMapping._parent,
  isLast = false
}): JSX.Element => (
  <a
    data-testid="LINK_HREF"
    href={href}
    target={target as targetMapping}
    rel="noreferrer"
    className={clsx(styles.link, active && styles['link-active'])}
    id="linkWidth"
    title={label}
  >
    <div id="linkText">
      <Typography variant="Body1-Medium" className={styles.text}>
        {label}
      </Typography>
    </div>
    {!isLast && (
      <div className={styles.separator}>
        <Icon name="IconChevronArrowRightOutlined24" containerSize={16} />
      </div>
    )}
  </a>
);

export default LinkComponent;
