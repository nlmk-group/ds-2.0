import React, { FC } from 'react'
import { clsx } from 'clsx';
import { Breadcrumb } from './types';
import styles from './Breadcrumbs.module.scss';
import { Icon } from '..';
import { targetMapping } from './enums';

const LinkComponent: FC<Breadcrumb> = ({
  label,
  href,
  active,
  target = targetMapping._parent
}): JSX.Element => {
  return (
    <a
      data-testid='LINK_HREF'
      href={href}
      target={target as targetMapping}
      rel="noreferrer"
      className={clsx(styles['custom-link'], active && styles['active-link'])}
      id='linkWidth'
      title={label}
    >
      <span
        id={`linkText_${label.replace(/\s/g, '')}`}
        className={styles['link-text']}
      >
        {label}
      </span>
      <div className={styles['link-separator']}>
        <Icon
          name="IconChevronRight24"
          containerSize={16}
          htmlColor={'var(--text-grey-600)'}
        />
      </div>
    </a>
  );
}

export default LinkComponent;