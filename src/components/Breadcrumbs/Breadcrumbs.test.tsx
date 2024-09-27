import React from 'react';

import { Breadcrumbs } from '@components/index';
import { fireEvent, render, screen, within } from '@testing-library/react';

import { IBreadcrumbProps } from './types';

import BasicBreadcrumbs from './BasicBreadcrumbs';
import { breadcrumbs } from './_stories/constants';
import { targetMapping } from './enums';
import LinkComponent from './LinkComponent';
import ShortenBreadcrumbs from './ShortenBreadcrumbs';

describe('src/components/Breadcrumbs', () => {
  test('It should render an Breadcrumbs', () => {
    const { container } = render(<Breadcrumbs crumbs={breadcrumbs} />);
    const breadcrumbsComponent = container.getElementsByTagName('div')[0];
    expect(breadcrumbsComponent).toBeInTheDocument();
  });

  // LinkComponent
  describe('While rendering LinkComponent', () => {
    const crumb = breadcrumbs.at(0) as IBreadcrumbProps;

    test('It should render the LinkComponent', () => {
      const { container } = render(<LinkComponent {...crumb} />);
      const breadcrumbsComponent = container.getElementsByTagName('div')[0];
      expect(breadcrumbsComponent).toBeInTheDocument();
    });

    test('It should render the LinkComponent with correct title', () => {
      render(<LinkComponent {...crumb} />);
      const breadcrumbsComponent = within(screen.getByTestId('LINK_HREF'));
      expect(breadcrumbsComponent.getByText(crumb.label)).toBeInTheDocument();
    });

    test('It should render the LinkComponent with correct url', () => {
      render(<LinkComponent {...crumb} />);
      const breadcrumbsComponent = screen.getByTestId('LINK_HREF');
      expect(breadcrumbsComponent).toHaveAttribute('href', crumb.href);
    });

    Object.values(targetMapping).forEach((target: targetMapping) => {
      test(`It should render the LinkComponent with correct target value ${target}`, () => {
        render(<LinkComponent {...crumb} target={target} />);
        const breadcrumbsComponent = screen.getByTestId('LINK_HREF');
        expect(breadcrumbsComponent).toHaveAttribute('target', target);
      });
    });

    test('It should render the active LinkComponent', () => {
      render(<LinkComponent {...crumb} active={true} />);
      const breadcrumbsComponent = screen.getByTestId('LINK_HREF');
      expect(breadcrumbsComponent.classList.contains('link-active')).toBe(true);
    });
  });

  // BasicBreadcrumbs
  describe('while rendering BasicBreadcrumbs', () => {
    test('It should render the BasicBreadcrumbs', () => {
      const { container } = render(<BasicBreadcrumbs crumbs={breadcrumbs} />);
      const breadcrumbsComponent = container.getElementsByTagName('div')[0];
      expect(breadcrumbsComponent).toBeInTheDocument();
    });

    test('It should render the BasicBreadcrumbs with correct amount of LinkComponent', () => {
      render(<BasicBreadcrumbs crumbs={breadcrumbs} />);
      const breadcrumbsComponents = screen.getAllByTestId('LINK_HREF');
      expect(breadcrumbsComponents.length).toBe(breadcrumbs.length);
    });
  });

  // ShortenBreadcrumbs
  describe('while rendering ShortenBreadcrumbs', () => {
    test('It should render the ShortenBreadcrumbs', () => {
      const { container } = render(<ShortenBreadcrumbs crumbs={breadcrumbs} />);
      const breadcrumbsComponent = container.getElementsByTagName('div')[0];
      expect(breadcrumbsComponent).toBeInTheDocument();
    });
    // Let's assume:
    // We know that we are rendering more than 2 instances of LinkComponent
    test('It should render the ShortenBreadcrumbs with correct amount of LinkComponent', () => {
      render(<ShortenBreadcrumbs crumbs={breadcrumbs} />);
      const breadcrumbsComponents = screen.getAllByTestId('LINK_HREF');
      expect(breadcrumbsComponents.length).toBe(2);
    });

    test('It should render the button to show list of LinkComponent', () => {
      render(<ShortenBreadcrumbs crumbs={breadcrumbs} />);
      const showListBtn = screen.getByTestId('HIDDEN_OPTIONS_BUTTON');
      expect(showListBtn).toBeInTheDocument();
    });

    describe('While clicking the button to show list of LinkComponent', () => {
      test('It should render the list of LinkComponent', () => {
        render(<ShortenBreadcrumbs crumbs={breadcrumbs} />);
        const showListBtn = screen.getByTestId('HIDDEN_OPTIONS_BUTTON');
        fireEvent.click(showListBtn);
        expect(screen.getByTestId('HIDDEN_OPTIONS_LIST')).toBeInTheDocument();
      });

      // Again, we know that there are more than 2 instances of LinkComponent
      test('It should render the list of LinkComponent', () => {
        render(<ShortenBreadcrumbs crumbs={breadcrumbs} />);
        const showListBtn = screen.getByTestId('HIDDEN_OPTIONS_BUTTON');
        fireEvent.click(showListBtn);
        const optionList = within(screen.getByTestId('HIDDEN_OPTIONS_LIST'));
        expect(optionList.getAllByTestId('LINK_HREF').length).toBe(breadcrumbs.length - 2);
      });
    });
  });
});
