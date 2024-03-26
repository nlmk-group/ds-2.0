import React from 'react';

import Accordion from '..';
import { iconsMapping, sizesMapping } from '../enums';
import { TAccordionItem } from '../subcomponents/AccordionItem/types';
import { generateUUID } from '@components/declaration';

export const ACCORDION_ITEMS_MOCK: TAccordionItem[] = [
  {
    id: generateUUID(),
    title: 'First accordion item',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: generateUUID(),
    title: '2nd accordion item',
    content: 'Lorem ipsum'
  },
  {
    id: generateUUID(),
    title: 'Last accordion item',
    content: 'Lorem ipsum'
  }
];

export const ACCORDION_ITEMS_MOCK_TWO: TAccordionItem[] = [
  {
    id: generateUUID(),
    title: 'Vestibulum finibus tortor',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: generateUUID(),
    title: 'Sed vitae pretium elit',
    content: 'Lorem ipsum'
  },
  {
    id: generateUUID(),
    title: 'Donec aliquam ornare nunc',
    content: 'Lorem ipsum'
  }
];

export const ACCORDION_ITEMS_MOCK_THIRD: TAccordionItem[] = [
  {
    id: generateUUID(),
    title: 'Vestibulum ante ipsum primis',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: generateUUID(),
    title: 'Proin vulputate ultrices ante',
    content: 'Lorem ipsum'
  },
  {
    id: generateUUID(),
    title: 'Curabitur imperdiet tempus felis',
    content: 'Lorem ipsum'
  }
];

export const ACCORDION_ITEMS_MOCK_FOURTH: TAccordionItem[] = [
  {
    id: generateUUID(),
    title: 'Maecenas in magna at nunc',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: generateUUID(),
    title: 'Praesent scelerisque maximus',
    content: 'Lorem ipsum'
  },
  {
    id: generateUUID(),
    title: 'Maecenas a sapien consectetur',
    content: 'Lorem ipsum'
  }
];

const defaultProps = {
  startIcon: iconsMapping.plus,
  size: sizesMapping.xs
};
export const FOLDED_ACCORDION_ITEMS_MOCK: TAccordionItem[] = [
  {
    id: 1,
    title: 'First accordion item',
    initiallyExpanded: true,
    content: (
      <Accordion
        {...defaultProps}
        items={[
          {
            id: 1,
            title: 'First accordion item',
            initiallyExpanded: true,
            content: (
              <Accordion
                {...defaultProps}
                items={[
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
                ]}
              />
            )
          }
        ]}
      />
    )
  }
];

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
];
