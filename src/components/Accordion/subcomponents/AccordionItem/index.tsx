import React, { useState } from 'react';

import { iconsMapping } from '@components/Accordion/enums';
import Icon from '@components/Icon';
import Typography from '@components/Typography';
import clsx from 'clsx';

import { IAccordionItemProps, TAccordionItem } from './types';

import styles from './AccordionItem.module.scss';

import { ICON_SIZE, TYPOGRAPHY_CONTENT_VARIANTS, TYPOGRAPHY_TITLE_VARIANTS } from './constants';

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
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const expandIcons = {
    [iconsMapping.plus]: isExpanded ? 'IconClose24' : 'IconAdd24',
    [iconsMapping.arrow]: isExpanded ? 'IconChevronArrowUpOutlined24' : 'IconChevronArrowDownOutlined24'
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
      className={clsx(styles.accordionItem, styles[size], styles[variant], {
        [styles.disabled]: disabled,
        [styles.hovered]: isHovered
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className={styles.header} onClick={() => handleClick(id)}>
        <div>
          {startIcon && (
            <div data-testid="ACCORDION_LEFT_ICON">
              <Icon name={expandIcons[startIcon]} containerSize={ICON_SIZE} />
            </div>
          )}
        </div>
        <Typography variant={TYPOGRAPHY_TITLE_VARIANTS[size]}>{title}</Typography>
        <div>
          {endIcon && (
            <div data-testid="ACCORDION_RIGHT_ICON">
              <Icon name={expandIcons[endIcon]} containerSize={ICON_SIZE} />
            </div>
          )}
        </div>
      </div>
      {isExpanded && !disabled && (
        <Typography variant={TYPOGRAPHY_CONTENT_VARIANTS[size]} className={styles.content}>
          {children}
        </Typography>
      )}
    </div>
  );
};

export default AccordionItem;
