import React, { ReactNode } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

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
});
