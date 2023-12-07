import React, { FC, useState } from 'react'
import { clsx } from 'clsx';
import styles from './Breadcrumbs.module.scss';
import { Breadcrumb } from './types';
import { ClickAwayListener, Icon, List, ListItem } from '..';
import LinkComponent from './LinkComponent';
import { targetMapping } from './enums';

const ShortenBreadcrumbs: FC<{ crumbs: Breadcrumb[] }> = ({
  crumbs
}): JSX.Element => {
  const [showItems, setShowItems] = useState<boolean>(false);
  const firstElement = crumbs.at(0) as Breadcrumb;
  const lastElement = crumbs.at(crumbs.length - 1) as Breadcrumb;
  const otherElementsArray = crumbs.slice(1, crumbs.length - 1);

  return (
    <>
      <LinkComponent
        {...firstElement}
      />
      <div
        data-testid='HIDDEN_OPTIONS_BUTTON'
        className={clsx(styles['hidden-options-wrapper'], showItems && styles['active-option-list'])}
        onClick={() => setShowItems(!showItems)}
      >
        ...
        <div className={clsx(styles['link-separator'], styles['custom-link'])}>
          <Icon
            name="IconChevronRight24"
            containerSize={16}
            htmlColor={'var(--text-grey-600)'}
          />
        </div>
        {showItems && (
          <ClickAwayListener onClickAway={() => setShowItems(!showItems)}>
            <List
              data-testid='HIDDEN_OPTIONS_LIST'
              className={styles['option-list']}
            >
              {otherElementsArray.map((item: Breadcrumb, index) => (
                <ListItem
                  key={index}
                  onClick={() => window.open(item.href, item.target || targetMapping._parent)}
                >
                  <LinkComponent
                    {...item}
                  />
                </ListItem>
              ))}
            </List>
          </ClickAwayListener>
        )}
      </div>
      <LinkComponent
        {...lastElement}
      />
    </>
  )
};

export default ShortenBreadcrumbs;