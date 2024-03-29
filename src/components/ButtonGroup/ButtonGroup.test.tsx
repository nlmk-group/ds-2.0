import React from 'react';

import { Button, ButtonGroup } from '@components/index';
import { render } from '@testing-library/react';

import styles from './ButtonGroup.module.scss';

import { orientationMapping } from './enums';
import { EVariant, EFill, ESizes } from '@components/Button/enums';

describe('src/components/ButtonGroup', () => {
  test('It should render a ButtonGroup', () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Hello</Button>
      </ButtonGroup>
    );
    const btnGroupComponent = container.getElementsByTagName('div')[0];
    expect(btnGroupComponent).toBeInTheDocument();
  });

  test('It should render a ButtonGroup with custom style', () => {
    const className = 'test-custom-style';
    const { container } = render(
      <ButtonGroup className={styles[className]}>
        <Button>Hello</Button>
      </ButtonGroup>
    );
    const btnGroupComponent = container.getElementsByTagName('div')[0];
    expect(btnGroupComponent.classList.contains(className)).toBe(true);
  });

  Object.values(orientationMapping).forEach((orientation: orientationMapping) => {
    test(`It should render a ButtonGroup with ${orientation} orientation`, () => {
      const { container } = render(
        <ButtonGroup orientation={orientation}>
          <Button>Hello</Button>
        </ButtonGroup>
      );

      const btnGroupComponent = container.getElementsByTagName('div')[0];
      expect(btnGroupComponent.classList.contains(`wrapper-${orientation}`)).toBe(true);
    });
  });

  test('It should render disabled ButtonGroup', () => {
    const { container } = render(
      <ButtonGroup disabled>
        <Button>Hello</Button>
      </ButtonGroup>
    );
    const button = container.getElementsByTagName('button')[0];
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('disabled');
  });

  Object.values(ESizes).forEach((size: ESizes) => {
    // It was taken from @components/Button
    const sizeClassesMapping = {
      s: 'compact',
      xs: 'extra-compact',
      m: 'null'
    };
    test(`It should render a ButtonGroup with ${size} size buttons`, () => {
      const { container } = render(
        <ButtonGroup size={size}>
          <Button>Hello</Button>
        </ButtonGroup>
      );

      const button = container.getElementsByTagName('button')[0];
      expect(size === ESizes.m ? true : button.classList.contains(sizeClassesMapping[size])).toBe(true);
    });
  });

  Object.values(EVariant).forEach((gradient: EVariant) => {
    Object.values(EFill).forEach((fill: EFill) => {
      test(`It should render a ButtonGroup with ${gradient}-${fill} size buttons`, () => {
        const { container } = render(
          <ButtonGroup variant={gradient} fill={fill}>
            <Button>Hello</Button>
          </ButtonGroup>
        );
  
        const button = container.getElementsByTagName('button')[0];
        if (gradient === EVariant.secondary) {
          expect(button).toHaveClass(gradient);
        } else {
          expect(button).toHaveClass(`${gradient}-${fill}`);
        }
      });
    })
  });
});
