import React, { cloneElement, FC, ReactElement, useCallback, useMemo, useState } from 'react';

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
      {cloneElement(firstElement as ReactElement)}
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
              {otherElementsArray.map((item: ReactElement, index: number) => {
                const itemProps = item.props as any;
                return (
                  <ListItem key={index} className={clsx(styles.option)} data-ui-crumbs-list-item>
                    {cloneElement(item, {
                      children: cloneElement(itemProps.children, {
                        className: clsx(styles.link, itemProps.children.props.className)
                      } as any),
                      isLast: false,
                      showSeparator: false
                    } as any)}
                  </ListItem>
                );
              })}
            </List>
          </ClickAwayListener>
        )}
      </div>
      {cloneElement(lastElement as ReactElement, { isLast: true, showSeparator: false } as any)}
    </>
  );
};

export default ShortenBreadcrumbs;
