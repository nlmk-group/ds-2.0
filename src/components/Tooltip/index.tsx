import React, { FC } from 'react';
import { Tooltip as ReactTooltip, TooltipRefProps } from 'react-tooltip';

import { generateUUID } from '@components/declaration';
import clsx from 'clsx';

import { ITooltipProps } from './types';

import styles from './Tooltip.module.scss';

import { Typography } from '..';
import { ETooltipBehaviorType, ETooltipPlacementType } from './enums';

const Tooltip: FC<ITooltipProps> = ({
  title,
  description,
  className,
  children,
  behavior = ETooltipBehaviorType.hover,
  placement = ETooltipPlacementType.top,
  render,
  clickable = false,
  popupClassName
}) => {
  const tooltipRef = React.useRef<TooltipRefProps>(null);

  const handleFocus = () => {
    behavior === ETooltipBehaviorType.focus && tooltipRef.current?.open();
  };

  const handleBlur = () => {
    behavior === ETooltipBehaviorType.focus && tooltipRef.current?.close();
  };

  const renderTitle = (title: string): JSX.Element => {
    return (
      <Typography className={styles['tooltip-title']} variant="Caption-Bold">
        {title}
      </Typography>
    );
  };

  const renderDescription = (description: string): JSX.Element => {
    return (
      <Typography className={styles['tooltip-description']} variant="Caption-Medium">
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
      <div className={styles['tooltip-target']} onFocus={handleFocus} onBlur={handleBlur} data-tooltip-id={tooltipId}>
        {children}
      </div>
      <ReactTooltip
        ref={tooltipRef}
        id={tooltipId}
        openOnClick={behavior === ETooltipBehaviorType.click}
        place={placement}
        className={clsx(styles['tooltip-wrapper'], popupClassName)}
        classNameArrow={styles['arrow-styling']}
        clickable={clickable}
      >
        {title && renderTitle(title)}
        {description && renderDescription(description)}
        {render && <>{render}</>}
      </ReactTooltip>
    </div>
  );
};

export default Tooltip;
