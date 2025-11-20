import React from 'react';

import { EIconsAccordion, ESizesAccordion, EVariantsAccordion } from '@components/Accordion/enums';
import { render, fireEvent, screen } from '@testing-library/react';

import AccordionItem from '.';

const defaultProps = {
  id: '1',
  title: 'Item 1',
  content: 'Content 1',
  size: ESizesAccordion.m,
  variant: EVariantsAccordion.default,
  startIcon: EIconsAccordion.arrow,
  endIcon: null,
  isExpanded: false,
  onExpand: jest.fn(),
  disabled: false
};

test('AccordionItem renders with default props', () => {
  const { content, ...restProps } = defaultProps;
  render(<AccordionItem {...restProps}>{content}</AccordionItem>);
  expect(screen.getByText('Item 1')).toBeInTheDocument();
});

test('AccordionItem expands/collapses on click', () => {
  const { content, ...restProps } = defaultProps;
  render(<AccordionItem {...restProps}>{content}</AccordionItem>);
  fireEvent.click(screen.getByText('Item 1'));
  expect(defaultProps.onExpand).toHaveBeenCalledWith('1');
});

test('AccordionItem renders left icon when startIcon is set', () => {
  const { content, ...restProps } = defaultProps;
  render(
    <AccordionItem {...restProps} startIcon={EIconsAccordion.plus}>
      {content}
    </AccordionItem>
  );

  const plusIcon = screen.getByTestId('ACCORDION_LEFT_ICON');
  expect(plusIcon).toBeInTheDocument();
});

test('AccordionItem renders right icon when endIcon is set', () => {
  const { content, ...restProps } = defaultProps;
  render(
    <AccordionItem {...restProps} startIcon={null} endIcon={EIconsAccordion.plus}>
      {content}
    </AccordionItem>
  );

  const plusIcon = screen.getByTestId('ACCORDION_RIGHT_ICON');
  expect(plusIcon).toBeInTheDocument();
});

test("AccordionItem doesn't expand/collapse on click if disabled", () => {
  const { content, ...restProps } = defaultProps;
  render(
    <AccordionItem {...restProps} disabled={true}>
      {content}
    </AccordionItem>
  );
  fireEvent.click(screen.getByText('Item 1'));
  expect(screen.getByText('Content 1').classList.contains('content')).toBe(false);
});
