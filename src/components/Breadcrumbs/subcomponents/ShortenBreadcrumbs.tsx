import React, { FC, ReactElement, useCallback, useMemo, useState } from 'react';

import { ClickAwayListener, Icon, List, ListItem } from '@components/index';
import clsx from 'clsx';

import styles from '../Breadcrumbs.module.scss';

import { IShortenBreadcrumbsProps } from '../types';

const ShortenBreadcrumbs: FC<IShortenBreadcrumbsProps> = ({ crumbs }) => {
  const [showItems, setShowItems] = useState<boolean>(false);

  const toggleShowItems = useCallback(() => setShowItems(prev => !prev), []);

  const { firstElement, lastElement, otherElementsArray } = useMemo(() => {
    const [firstElement, ...rest] = crumbs;
    const lastElement = rest[rest.length - 1];

    return {
      firstElement: firstElement as ReactElement,
      lastElement: lastElement as ReactElement,
      otherElementsArray: rest as ReactElement[]
    };
  }, [crumbs]);

  return (
    <>
      {React.cloneElement(firstElement as ReactElement)}
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
              {otherElementsArray.map((item: ReactElement, index: number) => (
                <ListItem key={index} className={clsx(styles.option)}>
                  {React.cloneElement(item, {
                    children: React.cloneElement(item.props.children, {
                      className: clsx(styles.link, item.props.children.props.className)
                    }),
                    isLast: true
                  })}
                </ListItem>
              ))}
            </List>
          </ClickAwayListener>
        )}
      </div>
      {React.cloneElement(lastElement as ReactElement, { isLast: true })}
    </>
  );
};

export default ShortenBreadcrumbs;
