import React, { ReactNode } from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import Breadcrumbs from './index';

describe('src/components/Breadcrumbs', () => {
  const mockLink = ({ children }: { children: ReactNode }) => <a href="#">{children}</a>;

  it('renders correctly with basic usage', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Home' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Category' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Product' })}</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('Product')).toBeInTheDocument();
  });

  it('applies custom width', () => {
    render(
      <Breadcrumbs width={50}>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Home' })}</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    const wrapper = screen.getByTestId('BREADCRUMBS_WRAPPER');
    expect(wrapper).toHaveStyle('width: 50px');
  });

  it('applies custom className', () => {
    render(
      <Breadcrumbs className="custom-class">
        <Breadcrumbs.Crumb>{mockLink({ children: 'Home' })}</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    const wrapper = screen.getByTestId('BREADCRUMBS_WRAPPER');
    expect(wrapper).toHaveClass('custom-class');
  });

  it('renders BasicBreadcrumbs when there are 2 or fewer crumbs', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Home' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Category' })}</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    expect(screen.queryByTestId('HIDDEN_OPTIONS_BUTTON')).not.toBeInTheDocument();
  });

  it('renders ShortenBreadcrumbs when there are more than 2 crumbs', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Home' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Category' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Subcategory' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Product' })}</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    expect(screen.getByTestId('HIDDEN_OPTIONS_BUTTON')).toBeInTheDocument();
  });

  it('shows hidden options when clicking on the ellipsis', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Home' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Category' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Subcategory' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Product' })}</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    fireEvent.click(screen.getByTestId('HIDDEN_OPTIONS_BUTTON'));
    expect(screen.getByTestId('HIDDEN_OPTIONS_LIST')).toBeInTheDocument();
  });

  it('does not render separators for the last crumb', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Home' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Category' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Product' })}</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    const separators = screen.getAllByTestId('CRUMB_SEPARATOR');
    expect(separators).toHaveLength(1);
  });

  it('last crumb should have isLast class but clickable links in dropdown should not', () => {
    const mockOnClick = jest.fn();

    render(
      <Breadcrumbs width="200px">
        <Breadcrumbs.Crumb>
          <a href="#" onClick={mockOnClick}>
            Home
          </a>
        </Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>
          <a href="#" onClick={mockOnClick}>
            Category
          </a>
        </Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>
          <a href="#" onClick={mockOnClick}>
            Subcategory
          </a>
        </Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>
          <a href="#" onClick={mockOnClick}>
            Product
          </a>
        </Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    fireEvent.click(screen.getByTestId('HIDDEN_OPTIONS_BUTTON'));

    const dropdownLinks = screen.getByTestId('HIDDEN_OPTIONS_LIST').querySelectorAll('a');
    fireEvent.click(dropdownLinks[0]);

    expect(mockOnClick).toHaveBeenCalled();
  });

  it('elements in dropdown should not have separators', () => {
    render(
      <Breadcrumbs width="200px">
        <Breadcrumbs.Crumb>{mockLink({ children: 'Home' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Category' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Subcategory' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Product' })}</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    fireEvent.click(screen.getByTestId('HIDDEN_OPTIONS_BUTTON'));

    const dropdownList = screen.getByTestId('HIDDEN_OPTIONS_LIST');
    const separatorsInDropdown = dropdownList.querySelectorAll('[data-testid="CRUMB_SEPARATOR"]');

    expect(separatorsInDropdown).toHaveLength(0);
  });

  it('last crumb should have isLast class and no separator', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Home' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Product' })}</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    const crumbs = screen.getAllByTestId('LINK_HREF');
    const lastCrumb = crumbs[crumbs.length - 1];

    expect(lastCrumb.parentElement).toHaveClass('isLast');

    expect(lastCrumb.parentElement?.querySelector('[data-testid="CRUMB_SEPARATOR"]')).toBeNull();
  });

  it('separators should be correctly distributed in basic mode', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Home' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Category' })}</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    const separators = screen.getAllByTestId('CRUMB_SEPARATOR');
    const crumbs = screen.getAllByTestId('LINK_HREF');

    expect(separators).toHaveLength(crumbs.length - 1);
  });

  it('in shortened mode should have exactly one separator after first element', () => {
    render(
      <Breadcrumbs width="100px">
        {' '}
        <Breadcrumbs.Crumb>{mockLink({ children: 'Home' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Category' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Subcategory' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Product' })}</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    expect(screen.getByTestId('HIDDEN_OPTIONS_BUTTON')).toBeInTheDocument();

    const separators = screen.getAllByTestId('CRUMB_SEPARATOR');
    expect(separators).toHaveLength(1);
  });

  it('elements in dropdown should not have isLast class but last visible element should', () => {
    render(
      <Breadcrumbs width="200px">
        <Breadcrumbs.Crumb>{mockLink({ children: 'Home' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Category' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Subcategory' })}</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb>{mockLink({ children: 'Product' })}</Breadcrumbs.Crumb>
      </Breadcrumbs>
    );

    fireEvent.click(screen.getByTestId('HIDDEN_OPTIONS_BUTTON'));

    const dropdownCrumbs = screen.getByTestId('HIDDEN_OPTIONS_LIST').querySelectorAll('[data-ui-crumb]');
    dropdownCrumbs.forEach((crumb: any) => {
      expect(crumb).not.toHaveClass('isLast');
    });

    const visibleCrumbs = screen.getAllByTestId('LINK_HREF');
    const lastVisibleCrumb = visibleCrumbs[visibleCrumbs.length - 1];
    expect(lastVisibleCrumb.parentElement).toHaveClass('isLast');
  });
});
