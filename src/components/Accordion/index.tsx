import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import { IAccordionProps } from './types';

import styles from './Accordion.module.scss';

import { iconsMapping, sizesMapping, variantsMapping } from './enums';
import AccordionItem from './subcomponents/AccordionItem';
import { TAccordionItem } from './subcomponents/AccordionItem/types';

export const Accordion: React.FC<IAccordionProps> = ({
  items,
  variant = variantsMapping.default,
  startIcon = iconsMapping.arrow,
  endIcon = null,
  size = sizesMapping.m,
  multipleExpanded = false,
  className,
  disabled = false,
  ...props
}) => {
  const [expandedItemIds, setExpandedItemIds] = useState<TAccordionItem['id'][]>([]);

  const handleExpand = (id: TAccordionItem['id']) => {
    const isExpanded = expandedItemIds.includes(id);

    if (multipleExpanded) {
      setExpandedItemIds(prev => (isExpanded ? prev.filter(item => item !== id) : [...prev, id]));
    } else {
      setExpandedItemIds(() => (isExpanded ? [] : [id]));
    }
  };

  useEffect(() => {
    const expandedOnStartIds = items.filter(i => i.initiallyExpanded).map(i => i.id);
    setExpandedItemIds(expandedOnStartIds);
  }, [items]);

  return (
    <div className={clsx(styles.wrapper, className)} {...props}>
      {items.map(item => {
        return (
          <AccordionItem
            key={item.id}
            id={item.id}
            title={item.title}
            onExpand={handleExpand}
            isExpanded={expandedItemIds.includes(item.id)}
            startIcon={startIcon}
            endIcon={endIcon}
            size={size}
            variant={variant}
            disabled={disabled || item.disabled}
          >
            {item.content}
          </AccordionItem>
        );
      })}
    </div>
  );
};

export default Accordion;
