import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Tooltip as ReactTooltip, TooltipRefProps } from 'react-tooltip';

import { generateUUID } from '@components/declaration';
import clsx from 'clsx';

import { ITooltipProps } from './types';

import styles from './Tooltip.module.scss';

import Typography from '../Typography';
import { ETooltipBehaviorType, ETooltipPlacementType, ETooltipSizes, ETooltipType } from './enums';

export const TooltipPortal: FC<ITooltipProps> = ({ children, ...props }) => {
  return ReactDOM.createPortal(<div {...props}>{children}</div>, document.body);
};

/**
 * Компонент Tooltip предоставляет всплывающие подсказки с различными вариантами поведения и размещения.
 *
 * @param {object} props - Свойства компонента Tooltip.
 * @param {string} [props.title] - Заголовок тултипа.
 * @param {TooltipSize} [props.size=ETooltipSizes.default] - Размер тултипа.
 * @param {string} [props.description] - Описание тултипа.
 * @param {string} [props.className] - Дополнительный CSS-класс для контейнера тултипа.
 * @param {React.ReactNode} props.children - Контент, вокруг которого будет отображаться тултип.
 * @param {TooltipBehaviorType} [props.behavior=ETooltipBehaviorType.hover] - Поведение тултипа (наведение, клик, фокус).
 * @param {TooltipPlacementType} [props.placement=ETooltipPlacementType.top] - Размещение тултипа относительно элемента.
 * @param {() => React.ReactNode} [props.render] - Кастомный рендер функции для содержимого тултипа.
 * @param {boolean} [props.clickable=false] - Определяет, является ли тултип кликабельным.
 * @param {string} [props.popupClassName] - Дополнительный CSS-класс для всплывающего окна тултипа.
 * @returns {JSX.Element} - Компонент Tooltip.
 */

const Tooltip: FC<ITooltipProps> = ({
  title,
  type = ETooltipType.default,
  size = ETooltipSizes.normal,
  description,
  className,
  children,
  behavior = ETooltipBehaviorType.hover,
  placement = ETooltipPlacementType.top,
  render,
  clickable = false,
  popupClassName,
  isOpen,
  delayShow = 150,
  delayHide = 150,
  float = false
}) => {
  const tooltipRef = React.useRef<TooltipRefProps>(null);

  const handleFocus = () => {
    behavior === ETooltipBehaviorType.focus && tooltipRef.current?.open();
  };

  const handleBlur = () => {
    behavior === ETooltipBehaviorType.focus && tooltipRef.current?.close();
  };

  const handleClick = () => {
    if (behavior === ETooltipBehaviorType.click && tooltipRef?.current?.isOpen) {
      tooltipRef.current?.close();
    }
  };

  const renderTitle = (title: string): JSX.Element => {
    return (
      <Typography
        className={styles['tooltip-title']}
        variant={size === ETooltipSizes.normal ? 'Body2-Medium' : 'Caption-Medium'}
      >
        {title}
      </Typography>
    );
  };

  const renderDescription = (description: string): JSX.Element => {
    return (
      <Typography
        className={styles['tooltip-description']}
        variant={size === ETooltipSizes.normal ? 'Body2-Medium' : 'Caption-Medium'}
      >
        {description}
      </Typography>
    );
  };

  const tooltipId = generateUUID();

  const hasContent = title || description || render;

  if (!hasContent) {
    return <>{children}</>;
  }

  return (
    <div className={clsx(styles.tooltip, className)}>
      <div
        className={styles['tooltip-target']}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
        data-tooltip-id={tooltipId}
      >
        {children}
      </div>
      <TooltipPortal>
        <ReactTooltip
          ref={tooltipRef}
          id={tooltipId}
          openOnClick={behavior === ETooltipBehaviorType.click}
          place={placement}
          className={clsx(
            styles['tooltip'],
            styles['tooltip-wrapper'],
            type === ETooltipType.inverse && styles['tooltip-wrapper-inverse'],
            popupClassName
          )}
          classNameArrow={styles['arrow-styling']}
          clickable={clickable}
          isOpen={isOpen}
          delayShow={delayShow}
          delayHide={delayHide}
          float={float}
        >
          {title && renderTitle(title)}
          {description && renderDescription(description)}
          {render && (
            <div
              className={clsx(
                styles['tooltip-wrapper'],
                type === ETooltipType.inverse && styles['tooltip-render-inverse']
              )}
            >
              {render}
            </div>
          )}
        </ReactTooltip>
      </TooltipPortal>
    </div>
  );
};

export default Tooltip;
