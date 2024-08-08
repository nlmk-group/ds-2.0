import React from 'react';

import { EChipColors } from '@components/Chip/enums';
import { sizesMapping } from '@components/declaration';
import { render } from '@testing-library/react';

import { ChipSize } from './types';

import { argsTypes } from './_stories/argsTypes';
import { Chip } from './index';

describe('src/components/Chip', () => {
  const text = '1234';
  const suffix = 'кг';
  const colors = argsTypes.color.options;
  const sizes = argsTypes.size.options;
  const { container } = render(
    <Chip label="Label" suffix={suffix}>
      {text}
    </Chip>
  );
  const chip = container.getElementsByTagName('div')[0];

  // Check render Chip at DOM
  test('Проверка отображения компонента в DOM дереве', () => {
    expect(chip).toBeInTheDocument();
  });

  // Check Chip Label
  test('Проверка наличия текста внутри компонента', () => {
    expect(chip).toHaveTextContent(text);
  });

  // Check Chip suffix
  test('Проверка компонента, на наличие текста суффикса', () => {
    expect(chip).toHaveTextContent(suffix);
  });

  // Check variant
  test('Проверка компонента на все цветовые варианты', () => {
    colors.map(className => {
      const { container } = render(
        <Chip label="Label" color={className as EChipColors}>
          {text}
        </Chip>
      );
      const chip = container.getElementsByTagName('div')[2];
      expect(chip).toHaveClass(className);
    });
  });

  // Check suffix variant
  test('Для каждой комбинации размера и цвета создается чип с соответствующим суффиксом, и проверяется, что текстовый элемент суффикса имеет соответствующий набор классов, причём если цвет чипа является primary, то используется класс-цвет hint, в противном случае класс соответствует указанному цвету.', () => {
    sizes.map(size => {
      colors.map(color => {
        const { container } = render(
          <Chip suffix="кг" size={size as ChipSize} color={color as EChipColors}>
            {text}
          </Chip>
        );
        const chip = container.getElementsByTagName('div')[1];
        const suffix = chip.getElementsByTagName('span')[1];
        if (size === sizesMapping.s) {
          expect(suffix).toHaveClass('typography--variant-Caption-Bold');
        } else {
          expect(suffix).toHaveClass('typography--variant-Body2-Bold');
        }
      });
    });
  });
});
