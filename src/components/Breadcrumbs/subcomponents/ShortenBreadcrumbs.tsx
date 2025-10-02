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
        className={clsx(styles.options, showItems && styles.show)}
        onClick={toggleShowItems}
        data-ui-crumbs-hidden-options-button
        data-testid="HIDDEN_OPTIONS_BUTTON"
      >
        <span>...</span>
        <div className={styles.separator}>
          <Icon name="IconChevronArrowRightOutlined24" containerSize={16} />
        </div>
        {showItems && (
          <ClickAwayListener onClickAway={toggleShowItems}>
            <List className={styles.list} data-ui-crumbs-list data-testid="HIDDEN_OPTIONS_LIST">
              {otherElementsArray.map((item: ReactElement, index: number) => (
                <ListItem key={index} className={clsx(styles.option)} data-ui-crumbs-list-item>
                  {React.cloneElement(item, {
                    children: React.cloneElement(item.props.children, {
                      className: clsx(styles.link, item.props.children.props.className)
                    }),
                    isLast: false,
                    showSeparator: false
                  })}
                </ListItem>
              ))}
            </List>
          </ClickAwayListener>
        )}
      </div>
      {React.cloneElement(lastElement as ReactElement, { isLast: true, showSeparator: false })}
    </>
  );
};

export default ShortenBreadcrumbs;
