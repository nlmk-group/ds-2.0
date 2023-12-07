import React from 'react'
import Accordion from '..';
import { TAccordionItem } from '../subcomponents/AccordionItem/types';
import { iconsMapping, sizesMapping } from '../enums';

export const ACCORDION_ITEMS_MOCK: TAccordionItem[] = [
  {
    id: 1,
    title: 'First accordion item',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: 2,
    title: '2nd accordion item',
    content: 'Lorem ipsum'
  },
  {
    id: 3,
    title: 'Last accordion item',
    content: 'Lorem ipsum'
  }
]

const defaultProps = {
  startIcon: iconsMapping.plus,
  size: sizesMapping.xs
}
export const FOLDED_ACCORDION_ITEMS_MOCK: TAccordionItem[] = [
  {
    id: 1,
    title: 'First accordion item',
    initiallyExpanded: true,
    content: <Accordion {...defaultProps} items={[  {
      id: 1,
      title: 'First accordion item',
      initiallyExpanded: true,
      content: <Accordion {...defaultProps} items={[  {
        id: 1,
        title: 'First accordion item',
        content: 'Lorem ipsum',
        initiallyExpanded: true
      },
      {
        id: 2,
        title: '2nd accordion item',
        content: 'Lorem ipsum'
      },
      {
        id: 3,
        title: 'Last accordion item',
        content: 'Lorem ipsum'
      }]} />
    }]} />
  }
]

export const ACCORDION_MULTI_EXPANDED_MOCK: TAccordionItem[] = [
  {
    id: 1,
    title: 'First accordion item',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: 2,
    title: '2nd accordion item',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: 3,
    title: 'Last accordion item',
    content: 'Lorem ipsum',
    initiallyExpanded: true

  }
]