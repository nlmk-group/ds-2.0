import React, { ReactNode } from 'react';
import { Link, MemoryRouter } from 'react-router-dom';

import Breadcrumbs from '@components/Breadcrumbs';
import { IBreadcrumbsProps } from '@components/Breadcrumbs/types';

import styles from '@components/_storybook/styles.module.scss';

import argsTypes from './argsTypes';
import { BASIC_COMPONENT_USE, breadcrumbsLinks, DIFFERENT_TARGET, targetLinks } from './constants';

export default {
  title: 'Components/Breadcrumbs/Stories',
  component: Breadcrumbs,
  argTypes: argsTypes
};

export const BreadcrumbsDefault = (argsTypes: IBreadcrumbsProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <MemoryRouter>
        <Breadcrumbs {...argsTypes}>
          {breadcrumbsLinks.map((link, index) => (
            <Breadcrumbs.Crumb key={index}>
              <Link to={link.href}>{link.label}</Link>
            </Breadcrumbs.Crumb>
          ))}
        </Breadcrumbs>
      </MemoryRouter>
    </div>
  );
};
BreadcrumbsDefault.storyName = BASIC_COMPONENT_USE;
BreadcrumbsDefault.args = {
  width: '100%'
};

export const BreadcrumbsTarget = (argsTypes: IBreadcrumbsProps): ReactNode => {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs {...argsTypes}>
        {targetLinks.map((link, index) => (
          <Breadcrumbs.Crumb key={index}>
            <a href={link.href} target={link.target}>
              {link.label}
            </a>
          </Breadcrumbs.Crumb>
        ))}
      </Breadcrumbs>
    </div>
  );
};
BreadcrumbsTarget.storyName = DIFFERENT_TARGET;
BreadcrumbsDefault.args = {
  width: '100%'
};
