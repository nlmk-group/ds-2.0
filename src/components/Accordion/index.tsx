import React, { Fragment, useEffect, useState } from 'react';

import clsx from 'clsx';

import { IAccordionProps } from './types';

import styles from './Accordion.module.scss';

import { ESizesAccordion, EVariantsAccordion } from './enums';
import AccordionItem from './subcomponents/AccordionItem';
import { TAccordionItem } from './subcomponents/AccordionItem/types';

/**
 * Компонент Accordion предоставляет интерфейс аккордеона с возможностью управления состоянием открытия/закрытия его элементов.
 *
 * @param {object} props - Свойства компонента Accordion.
 * @param {TAccordionItem[]} props.items - Массив элементов аккордеона.
 * @param {EVariantsAccordion} [props.variant=EVariantsAccordion.default] - Вариант внешнего вида аккордеона.
 * @param {import('./enums').EIconsAccordion} props.startIcon - Иконка в начале заголовка аккордеона.
 * @param {import('./enums').EIconsAccordion} props.endIcon - Иконка в конце заголовка аккордеона.
 * @param {ESizesAccordion} [props.size=ESizesAccordion.m] - Размер аккордеона.
 * @param {boolean} [props.multipleExpanded=false] - Разрешает одновременное разворачивание нескольких элементов.
 * @param {string} [props.className] - Дополнительный CSS-класс.
 * @param {boolean} [props.disabled=false] - Отключает взаимодействие с аккордеоном.
 * @returns {JSX.Element} - Компонент Accordion.
 */
export const Accordion: React.FC<IAccordionProps> = ({
  items,
  variant = EVariantsAccordion.default,
  startIcon,
  endIcon,
  size = ESizesAccordion.m,
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
    <div className={clsx(styles.wrapper, className)} {...props} data-ui-accordion>
      {items.map((item: TAccordionItem) => {
        return (
          <Fragment key={item.id}>
            <AccordionItem
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
          </Fragment>
        );
      })}
    </div>
  );
};

export default Accordion;
