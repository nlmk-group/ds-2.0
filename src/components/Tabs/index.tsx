import React, { FC, useEffect, useRef, useState } from 'react';

import { TIconProps } from '@components/Icon/types';
import {
  Button,
  Icon,
  IconChevronArrowLeftOutlined24,
  IconChevronArrowRightOutlined24,
  Tooltip
} from '@components/index';
import { ITooltipProps } from '@components/Tooltip/types';
import clsx from 'clsx';

import { ITabsProps } from './types';

import styles from './Tabs.module.scss';

import Tab from './subcomponents/Tab';
import { ITabProps } from './subcomponents/Tab/types';

/**
 * Компонент Tabs предоставляет вкладки с возможностью прокрутки.
 *
 * @param {object} props - Свойства компонента Tabs.
 * @param {JSX.Element | JSX.Element[]} props.children - Дочерние элементы (вкладки).
 * @param {string} [props.className] - Дополнительный CSS-класс.
 * @param {boolean} [props.scrollable] - Включает возможность прокрутки вкладок.
 * @returns {JSX.Element} - Компонент Tabs.
 
*/

const Tabs: FC<ITabsProps> &
  Record<'Tab', FC<ITabProps>> &
  Record<'Tooltip', FC<ITooltipProps>> &
  Record<'Icon', FC<TIconProps>> = ({ children, className, scrollable }) => {
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolledLeft, setIsScrolledLeft] = useState(true);
  const [isScrolledRight, setIsScrolledRight] = useState(false);

  const scrollAmount = 200;
  // TODO: обсудить решение
  // const scrollAmount = tabsContainerRef.current?.clientWidth || 200;

  const scrollLeft = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      setIsScrolledLeft(scrollLeft <= 0);
      setIsScrolledRight(scrollLeft >= maxScrollLeft - 1);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={clsx(styles['tabs-container'], className)}>
      {scrollable && !isScrolledLeft && (
        <Button
          color="ghost"
          variant="secondary"
          size="s"
          className={styles['scroll-arrow-left']}
          onClick={scrollLeft}
          iconButton={<IconChevronArrowLeftOutlined24 />}
          data-ui-tabs-button-scroll-left
        />
      )}
      <div
        className={clsx({ [styles.scrollable]: scrollable })}
        onScroll={handleScroll}
        ref={tabsContainerRef}
        data-ui-tabs
      >
        <div className={clsx(styles['tabs-wrapper'], { [styles['tabs-wrapper__scrollable']]: scrollable })}>
          {children}
        </div>
      </div>
      {scrollable && !isScrolledRight && (
        <Button
          color="ghost"
          variant="secondary"
          size="s"
          className={styles['scroll-arrow-right']}
          onClick={scrollRight}
          iconButton={<IconChevronArrowRightOutlined24 />}
          data-ui-tabs-button-scroll-right
        />
      )}
    </div>
  );
};

Tabs.Tab = Tab;
Tabs.Tooltip = Tooltip;
Tabs.Icon = Icon;

export default Tabs;
