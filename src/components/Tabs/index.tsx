import React, { FC, isValidElement, useEffect, useRef, useState } from 'react';

import Button from '@components/Button';
import Icon from '@components/Icon';
import { IconChevronArrowLeftOutlined24, IconChevronArrowRightOutlined24 } from '@components/Icon/IconsDirectory';
import { TIconProps } from '@components/Icon/types';
import Tooltip from '@components/Tooltip';
import { ITooltipProps } from '@components/Tooltip/types';
import clsx from 'clsx';

import { ETabsIndicatorPosition, ETabsOrientation, ETabsTabPosition } from './enums';
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
  maxTabWidth,
  indicatorPosition
}) => {
  const isVertical = orientation === ETabsOrientation.vertical;
  const hasFixedWidth = isVertical && typeof maxTabWidth === 'number';

  const resolvedIndicatorPosition = indicatorPosition || getDefaultIndicatorPosition(orientation, tabPosition);
  const isTopIndicator = resolvedIndicatorPosition === ETabsIndicatorPosition.top;

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabsWrapperRef = useRef<HTMLDivElement>(null);
  const [isScrolledLeft, setIsScrolledLeft] = useState(true);
  const [isScrolledRight, setIsScrolledRight] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

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

  const updateScrollState = () => {
    const container = tabsContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScrollLeft = scrollWidth - clientWidth;

    setIsOverflowing(scrollWidth > clientWidth);
    setIsScrolledLeft(scrollLeft <= 0);
    setIsScrolledRight(scrollLeft >= maxScrollLeft - 1);
  };

  useEffect(() => {
    if (isVertical) return;

    updateScrollState();

    const container = tabsContainerRef.current;
    const wrapper = tabsWrapperRef.current;
    if (!container || !wrapper) return;

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(container);
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, [isVertical, children]);

  // Горизонтальный скролл включается автоматически при переполнении,
  // либо принудительно через prop scrollable (для обратной совместимости).
  const showHorizontalScroll = !isVertical && (isOverflowing || scrollable === true);

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
          [styles.scrollable]: !isVertical,
          [styles['scrollable--vertical']]: isVertical && scrollable
        })}
        onScroll={!isVertical ? updateScrollState : undefined}
        ref={!isVertical ? tabsContainerRef : undefined}
        data-ui-tabs
      >
        <div
          ref={!isVertical ? tabsWrapperRef : undefined}
          className={clsx(
            styles['tabs-wrapper'],
            {
              [styles['tabs-wrapper__scrollable']]: !isVertical,
              [styles['tabs-wrapper--vertical']]: isVertical,
              [styles['tabs-wrapper--vertical-fixed']]: hasFixedWidth,
              [styles['tabs-wrapper--top']]: isTopIndicator
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
