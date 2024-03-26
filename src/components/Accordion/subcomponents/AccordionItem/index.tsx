import React, { useState } from 'react';

import { iconsMapping } from '@components/Accordion/enums';
import Typography from '@components/Typography';
import clsx from 'clsx';

import { IAccordionItemProps, TAccordionItem } from './types';

import styles from './AccordionItem.module.scss';

import {
  TYPOGRAPHY_CONTENT_VARIANTS,
  TYPOGRAPHY_TITLE_VARIANTS
} from './constants';

import {
  IconChevronArrowUpOutlined16,
  IconCloseOutlined16
} from '@components/Icon/IconsDirectory';

const AccordionItem: React.FC<IAccordionItemProps> = ({
  id,
  title,
  size,
  variant,
  startIcon,
  endIcon,
  isExpanded,
  onExpand,
  disabled,
  children,
  className,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconProps = {
    htmlColor: 'var(--ac-accordeon-default-default-icon)'
  }

  const expandIcons = {
    [iconsMapping.plus]: (
      <div className={clsx(
        styles['icon-helper'],
        isExpanded ? styles['icon-cross'] : styles['icon-plus']
      )}>
        <IconCloseOutlined16 {...iconProps} />
      </div>
    ),
    [iconsMapping.arrow]: (
      <div className={clsx(
        styles['icon-helper'],
        isExpanded ? styles['icon-down'] : styles['icon-up']
      )}>
        <IconChevronArrowUpOutlined16 {...iconProps} />
      </div>
    )
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (id: TAccordionItem['id']): void => {
    if (disabled) {
      return;
    }
    onExpand(id);
  };

  return (
    <div
      className={clsx(
        styles.accordionItem,
        styles[size],
        styles[variant],
        {
          [styles.disabled]: disabled,
          [styles.hovered]: isHovered
        },
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className={styles.header} onClick={() => handleClick(id)}>
        <div>
          {startIcon && (
            <div data-testid="ACCORDION_LEFT_ICON">
              {expandIcons[startIcon]}
            </div>
          )}
        </div>
        <Typography variant={TYPOGRAPHY_TITLE_VARIANTS[size]}>{title}</Typography>
        <div>
          {endIcon && (
            <div data-testid="ACCORDION_RIGHT_ICON">
              {expandIcons[endIcon]}
            </div>
          )}
        </div>
      </div>
      <div className={clsx(styles.expandable, isExpanded && styles.expanded)}>
        <Typography
          variant={TYPOGRAPHY_CONTENT_VARIANTS[size]}
          className={clsx(
            styles['content-basic'],
            isExpanded && styles.content
          )}
        >
          {children}
        </Typography>
      </div>
    </div>
  );
};

export default AccordionItem;
