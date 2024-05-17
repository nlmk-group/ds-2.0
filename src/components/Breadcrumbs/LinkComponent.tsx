import React, { FC } from 'react';

import { Typography } from '@components/index';
import { clsx } from 'clsx';

import { Breadcrumb } from './types';

import styles from './Breadcrumbs.module.scss';

import { Icon } from '..';
import { targetMapping } from './enums';

const LinkComponent: FC<Breadcrumb> = ({
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
    className={clsx(styles['custom-link'], active && styles['active-link'])}
    id="linkWidth"
    title={label}
  >
    <div id="linkText">
      <Typography variant="Body1-Medium" className={styles['link-text']}>
        {label}
      </Typography>
    </div>
    {!isLast && (
      <div className={styles['link-separator']}>
        <Icon name="IconChevronArrowRightOutlined24" containerSize={16} htmlColor={'var(--text-grey-600)'} />
      </div>
    )}
  </a>
);

export default LinkComponent;
