import React, { Fragment, useEffect, useRef, useState } from 'react';

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
  const [expandedItemIds, setExpandedItemIds] = useState(() =>
    items.filter(item => item.initiallyExpanded).map(item => item.id)
  );
  const previousItems = useRef(items);

  useEffect(() => {
    const previousIds = new Set(previousItems.current.map(item => item.id));
    const currentIds = new Set(items.map(item => item.id));
    const additions = items.filter(item => item.initiallyExpanded && !previousIds.has(item.id));
    previousItems.current = items;
    setExpandedItemIds(previous => {
      const retained = previous.filter(id => currentIds.has(id));
      if (!additions.length && retained.length === previous.length) return previous;
      if (!multipleExpanded && additions.length) return [additions[0].id];
      return [...retained, ...additions.map(item => item.id)];
    });
  }, [items, multipleExpanded]);

  const handleExpand = (id: TAccordionItem['id']) => {
    setExpandedItemIds(previous => {
      if (previous.includes(id)) return previous.filter(expandedId => expandedId !== id);
      return multipleExpanded ? [...previous, id] : [id];
    });
  };

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
