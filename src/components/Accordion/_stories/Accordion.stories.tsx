import React, { Fragment } from 'react';

import Accordion from '@components/Accordion';

import styles from './Accordion.module.scss';

import {
  ACCORDION_ITEMS_MOCK,
  ACCORDION_ITEMS_MOCK_FOURTH,
  ACCORDION_ITEMS_MOCK_THIRD,
  ACCORDION_ITEMS_MOCK_TWO,
  ACCORDION_MULTI_EXPANDED_MOCK,
  FOLDED_ACCORDION_ITEMS_MOCK
} from '../_mock/accordionItems';
import { EIconsAccordion, ESizesAccordion, EVariantsAccordion } from '../enums';
import { IAccordionProps } from '../types';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story/>}</div>;

export default {
  title: 'Components/Accordion/Stories',
  component: Accordion,
  decorators: [withPadding],
  argTypes: argsTypes
};

const mockArr = [
  ACCORDION_ITEMS_MOCK,
  ACCORDION_ITEMS_MOCK_TWO,
  ACCORDION_ITEMS_MOCK_THIRD,
  ACCORDION_ITEMS_MOCK_FOURTH
];

export const AccordionDefault = (argTypes: IAccordionProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Accordion {...argTypes} />
    </div>
  );
};
AccordionDefault.storyName = 'Аккордеон по умолчанию';
AccordionDefault.args = {
  items: ACCORDION_ITEMS_MOCK
};

export const AccordionSizes = (argTypes: IAccordionProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {Object.values(ESizesAccordion).map((size, index) => (
        <Accordion key={index} {...argTypes} size={size} items={mockArr[index]} />
      ))}
    </div>
  );
};
AccordionSizes.storyName = 'Варианты размеров аккордеона';

export const AccordionIcons = (argTypes: IAccordionProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {Object.values(EIconsAccordion).map((icon, index) => (
        <Fragment key={index}>
          <Accordion {...argTypes} startIcon={icon} items={mockArr[index]} />
          <Accordion {...argTypes} endIcon={icon} items={mockArr[index + 2]} />
        </Fragment>
      ))}
    </div>
  );
};
AccordionIcons.storyName = 'Варианты аккордеона с иконками';

export const AccordionPaper = (argTypes: IAccordionProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Accordion {...argTypes} variant={EVariantsAccordion.paper} />
    </div>
  );
};
AccordionPaper.storyName = 'Paper аккордеон';
AccordionPaper.args = {
  items: ACCORDION_ITEMS_MOCK
};

export const FoldedAccordion = (argTypes: IAccordionProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Accordion {...argTypes} startIcon={EIconsAccordion.plus} />
    </div>
  );
};
FoldedAccordion.storyName = 'Аккордеон с мультивложенностью';
FoldedAccordion.args = {
  items: FOLDED_ACCORDION_ITEMS_MOCK
};

export const MultiExpandedAccordion = (argTypes: IAccordionProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Accordion {...argTypes} multipleExpanded />
    </div>
  );
};
MultiExpandedAccordion.storyName = 'Аккордеон с возможностью раскрытия нескольких секций';
MultiExpandedAccordion.args = {
  items: ACCORDION_MULTI_EXPANDED_MOCK
};
