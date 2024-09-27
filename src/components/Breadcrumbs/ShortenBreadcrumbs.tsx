import React, { FC, useMemo, useState, useCallback } from 'react';

import { clsx } from 'clsx';

import { IBreadcrumbProps } from './types';

import styles from './Breadcrumbs.module.scss';

import { ClickAwayListener, Icon, List, ListItem } from '@components/index';
import { targetMapping } from './enums';
import LinkComponent from './LinkComponent';

const ShortenBreadcrumbs: FC<{ crumbs: IBreadcrumbProps[] }> = ({ crumbs }): JSX.Element => {
  const [showItems, setShowItems] = useState<boolean>(false);

  const toggleShowItems = useCallback(() => setShowItems(prev => !prev), []);

  const { firstElement, lastElement, otherElementsArray } = useMemo(() => ({
    firstElement: crumbs[0],
    lastElement: crumbs[crumbs.length - 1],
    otherElementsArray: crumbs.slice(1, -1)
  }), [crumbs]);

  return (
    <>
      <LinkComponent {...firstElement} />
      <div
        data-testid="HIDDEN_OPTIONS_BUTTON"
        className={clsx(styles.options, showItems && styles.show)}
        onClick={toggleShowItems}
      >
        <span>...</span>
        <div className={styles.separator}>
          <Icon name="IconChevronArrowRightOutlined24" containerSize={16} />
        </div>
        {showItems && (
          <ClickAwayListener onClickAway={toggleShowItems}>
            <List data-testid="HIDDEN_OPTIONS_LIST" className={styles.list}>
              {otherElementsArray.map((item: IBreadcrumbProps, index: number) => (
                <ListItem key={index} onClick={() => window.open(item.href, item.target || targetMapping._parent)}
                  className={clsx(styles.option)}>
                  <LinkComponent {...item} />
                </ListItem>
              ))}
            </List>
          </ClickAwayListener>
        )}
      </div>
      <LinkComponent {...lastElement} isLast />
    </>
  );
};

export default ShortenBreadcrumbs;
