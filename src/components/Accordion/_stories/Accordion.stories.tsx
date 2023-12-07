import React from 'react';

import Accordion from '@components/Accordion';
import { withDesign } from 'storybook-addon-designs';

import styles from './Accordion.module.scss';

import { argsTypes } from './argsTypes';
import { ACCORDION_ITEMS_MOCK, ACCORDION_MULTI_EXPANDED_MOCK, FOLDED_ACCORDION_ITEMS_MOCK } from '../_mock/accordionItems';
import { IAccordionProps } from '../types';
import { variantsMapping, iconsMapping, sizesMapping } from '../enums';

const withPadding = (Story: () => any) => (
  <div style={{ minHeight: 80 }}>{Story()}</div>
);

export default {
  title: 'Components/Accordion/Stories',
  component: Accordion,
  decorators: [withDesign, withPadding],
  argTypes: argsTypes
};

export const AccordionDefault = (argTypes: IAccordionProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Accordion
          {...argTypes}
        />
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
      {Object.values(sizesMapping).map((size, index) => (<Accordion
        key={index}
        {...argTypes}
        size={size}
        />))};
    </div>
  );
};
AccordionSizes.storyName = 'Варианты размеров аккордеона';
AccordionSizes.args = {
  items: ACCORDION_ITEMS_MOCK
};

export const AccordionIcons = (argTypes: IAccordionProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {Object.values(iconsMapping).map((icon, index) => (
        <>
          <Accordion
            key={index}
            {...argTypes}
            startIcon={icon}
          />
          <Accordion
            key={index}
            {...argTypes}
            startIcon={null}
            endIcon={icon}
          />
        </>
      ))};
    </div>
  );
};
AccordionIcons.storyName = 'Варианты аккордеона с иконками';
AccordionIcons.args = {
  items: ACCORDION_ITEMS_MOCK
};

export const AccordionPaper = (argTypes: IAccordionProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Accordion
          {...argTypes}
          variant={variantsMapping.paper}
        />
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
      <Accordion
          {...argTypes}
          startIcon={iconsMapping.plus}
        />
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
      <Accordion
          {...argTypes}
          multipleExpanded
        />
    </div>
  );
};
MultiExpandedAccordion.storyName = 'Аккордеон с возможностью раскрытия нескольких секций';
MultiExpandedAccordion.args = {
  items: ACCORDION_MULTI_EXPANDED_MOCK
};
