import React, { FC } from 'react';

import { Icon } from '@components/index';
import clsx from 'clsx';

import styles from '../Breadcrumbs.module.scss';

import { ICrumbProps, IInternalCrumbProps } from '../types';

const Crumb: FC<IInternalCrumbProps> = ({ isLast = false, showSeparator = true, children }) => {
  const childProps = children.props as any;
  const title = childProps.children;
  const isTitleString = typeof title === 'string';
  return (
    <div className={clsx(styles.crumb, isLast && styles.isLast, childProps.className)} data-ui-crumb>
      {React.cloneElement(children, {
        'data-testid': 'LINK_HREF',
        'className': clsx(styles.link, childProps.className),
        'data-link-width': true,
        ...(isTitleString && { title: title })
      } as any)}
      {showSeparator && (
        <div className={styles.separator} data-ui-crumb-separator data-testid="CRUMB_SEPARATOR">
          <Icon name="IconChevronArrowRightOutlined24" containerSize={16} />
        </div>
      )}
    </div>
  );
};

Crumb.displayName = 'Crumb';

const PublicCrumb: FC<ICrumbProps> = props => <Crumb {...(props as IInternalCrumbProps)} />;
PublicCrumb.displayName = 'Crumb';

export default PublicCrumb;
