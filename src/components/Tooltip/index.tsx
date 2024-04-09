import React, { FC } from 'react';

import { ITooltipProps } from './types';
import clsx from 'clsx';
import { Tooltip as ReactTooltip, TooltipRefProps  } from 'react-tooltip'

import styles from './Tooltip.module.scss';
import { generateUUID } from '@components/declaration';
import { ETooltipBehaviorType, ETooltipPlacementType } from './enums';
import { Typography } from '..';

const Tooltip: FC<ITooltipProps> = ({
  title,
  description,
  className,
  children,
  behavior = ETooltipBehaviorType.hover,
  placement = ETooltipPlacementType.top,
  render,
  clickable = false
}) => {
  const tooltipRef = React.useRef<TooltipRefProps >(null);

  const handleFocus = () => {
    behavior === ETooltipBehaviorType.focus && tooltipRef.current?.open()
  };

  const handleBlur = () => {
    behavior === ETooltipBehaviorType.focus && tooltipRef.current?.close()
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

  return (
    <div className={clsx(styles.tooltip, className)}>
      <div
        className={styles['tooltip-target']}
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-tooltip-id={tooltipId}
      >
        {children}
      </div>
      <ReactTooltip
        ref={tooltipRef}
        id={tooltipId}
        openOnClick ={behavior === ETooltipBehaviorType.click}
        place={placement}
        className={styles['tooltip-wrapper']}
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
