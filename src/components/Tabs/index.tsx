import React, { FC, isValidElement, useEffect, useRef, useState } from 'react';

import Button from '@components/Button';
import Icon from '@components/Icon';
import { IconChevronArrowLeftOutlined24, IconChevronArrowRightOutlined24 } from '@components/Icon/IconsDirectory';
import { TIconProps } from '@components/Icon/types';
import Tooltip from '@components/Tooltip';
import { ITooltipProps } from '@components/Tooltip/types';
import clsx from 'clsx';

import { ETabsOrientation, ETabsTabPosition } from './enums';
import { getDefaultIndicatorPosition } from './helpers';
import { ITabsProps } from './types';

import styles from './Tabs.module.scss';

import Tab from './subcomponents/Tab';
import { ITabProps } from './subcomponents/Tab/types';

/**
 * Компонент Tabs предоставляет вкладки с возможностью прокр��тки.
 * Поддерживает горизонтальную и вертикальную ориентацию.
 *
 * @param {object} props - Свойства компонента Tabs.
 * @param {JSX.Element | JSX.Element[]} props.children - Дочерние элементы (вкл��дки).
 * @param {string} [props.className] - Дополнительный CSS-класс.
 * @param {boolean} [props.scrollable] - Включает возможность прокрутки вкладо��.
 * @param {ETabsOrientation} [props.orientation] - Ориентация табов.
 * @param {ETabsTabPosition} [props.tabPosition] - Позиция панели табов (для вертикального режима).
 * @param {number} [props.maxTabWidth] - Максимальная ширина таба в вертикальном режиме (px).
 * @returns {JSX.Element} - Компонент Tabs.
 */

const Tabs: FC<ITabsProps> &
  Record<'Tab', FC<ITabProps>> &
  Record<'Tooltip', FC<ITooltipProps>> &
  Record<'Icon', FC<TIconProps>> = ({
  children,
  className,
  scrollable,
  orientation = ETabsOrientation.horizontal,
  tabPosition = ETabsTabPosition.left,
  maxTabWidth
}) => {
  const isVertical = orientation === ETabsOrientation.vertical;
  const hasFixedWidth = isVertical && typeof maxTabWidth === 'number';

  const resolvedIndicatorPosition = getDefaultIndicatorPosition(orientation, tabPosition);

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolledLeft, setIsScrolledLeft] = useState(true);
  const [isScrolledRight, setIsScrolledRight] = useState(false);

  const scrollAmount = 200;

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

  const showHorizontalScroll = scrollable && !isVertical;

  const childrenWithProps = React.Children.map(children, child => {
    if (isValidElement<ITabProps>(child) && child.type === Tab) {
      return React.cloneElement(child, {
        orientation,
        indicatorPosition: resolvedIndicatorPosition,
        fixedWidth: hasFixedWidth
      });
    }
    return child;
  });

  const containerStyle = hasFixedWidth
    ? ({ '--tabs-max-tab-width': `${maxTabWidth}px` } as React.CSSProperties)
    : undefined;

  return (
    <div
      className={clsx(
        styles['tabs-container'],
        {
          [styles['tabs-container--vertical']]: isVertical,
          [styles[`tabs-container--position-${tabPosition}`]]: isVertical
        },
        className
      )}
      style={containerStyle}
    >
      {showHorizontalScroll && !isScrolledLeft && (
        <Button
          type="button"
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
        className={clsx({
          [styles.scrollable]: showHorizontalScroll,
          [styles['scrollable--vertical']]: isVertical && scrollable
        })}
        onScroll={!isVertical ? handleScroll : undefined}
        ref={!isVertical ? tabsContainerRef : undefined}
        data-ui-tabs
      >
        <div
          className={clsx(
            styles['tabs-wrapper'],
            {
              [styles['tabs-wrapper__scrollable']]: showHorizontalScroll,
              [styles['tabs-wrapper--vertical']]: isVertical,
              [styles['tabs-wrapper--vertical-fixed']]: hasFixedWidth
            }
          )}
        >
          {childrenWithProps}
        </div>
      </div>
      {showHorizontalScroll && !isScrolledRight && (
        <Button
          type="button"
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
