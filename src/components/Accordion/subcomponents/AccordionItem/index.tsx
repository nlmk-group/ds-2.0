import React, { useState } from 'react';

import { iconsMapping } from '@components/Accordion/enums';
import { TIcon } from '@components/Accordion/types';
import { IconChevronArrowUpOutlined24, IconCloseOutlined16 } from '@components/Icon/IconsDirectory';
import Typography from '@components/Typography';
import clsx from 'clsx';

import { IAccordionItemProps, TAccordionItem } from './types';

import styles from './AccordionItem.module.scss';

import { TYPOGRAPHY_CONTENT_VARIANTS, TYPOGRAPHY_TITLE_VARIANTS } from './constants';

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
    htmlColor: 'var(--ac-accordion-default-default-icon)'
  };

  const getExpandIcon = (icon: TIcon, testid: string) => {
    const iconsStyles = {
      plus: ['icon-cross', 'icon-plus'],
      arrow: ['icon-down', 'icon-up']
    };

    const Icon = icon === iconsMapping.plus ? IconCloseOutlined16 : IconChevronArrowUpOutlined24;

    return (
      <div
        data-testid={testid}
        className={clsx(
          styles['icon-helper'],
          isExpanded ? styles[iconsStyles[icon][0]] : styles[iconsStyles[icon][1]]
        )}
      >
        <Icon {...iconProps} />
      </div>
    );
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
        {startIcon && getExpandIcon(startIcon, 'ACCORDION_LEFT_ICON')}
        {endIcon && getExpandIcon(endIcon, 'ACCORDION_RIGHT_ICON')}
        <Typography variant={TYPOGRAPHY_TITLE_VARIANTS[size]}>{title}</Typography>
      </div>
      <div className={clsx(styles.expandable, isExpanded && styles.expanded)}>
        <Typography
          variant={TYPOGRAPHY_CONTENT_VARIANTS[size]}
          className={clsx(styles['content-basic'], isExpanded && styles.content)}
        >
          {children}
        </Typography>
      </div>
    </div>
  );
};

export default AccordionItem;
