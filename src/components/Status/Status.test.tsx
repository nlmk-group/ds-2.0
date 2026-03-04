import React from 'react';

import { render } from '@testing-library/react';

import { argsTypes } from './_stories/argsTypes';
import { EStatusColor, EStatusFill, EStatusSize } from './enums';
import { Status } from './index';

describe('src/components/Status', () => {
  const text = 'Published';
  const iconName = 'IconCloudDoneOutlined24';

  const colors = argsTypes.color?.options;
  const fills = argsTypes.fill?.options;
  const sizes = argsTypes.size?.options;
  const { container } = render(<Status icon={iconName}>{text}</Status>);
  const status = container.getElementsByTagName('div')[0];

  // Check render Status at DOM
  test('Проверка отображения компонента в DOM дереве', () => {
    expect(status).toBeInTheDocument();
  });

  // Check Status label
  test('Проверка на наличие текста внутри компонента', () => {
    expect(status).toHaveTextContent(text);
  });

  // Check Status icon
  test('Проверка на наличие иконки внутри компонента', () => {
    const { container } = render(<Status icon={iconName}>{text}</Status>);
    const icon = container.getElementsByTagName('svg')[0];
    expect(icon).toBeInTheDocument();
  });

  // Check Status fill
  test('Проверка вариантов заливки фона компонента', () => {
    fills?.map((fill: EStatusFill) => {
      const { container } = render(
        <Status icon={iconName} fill={fill}>
          {text}
        </Status>
      );
      const status = container.getElementsByTagName('div')[0];
      expect(status).toHaveClass(`fill-${fill}`);
    });
  });

  // Check Status size
  test('Проверка размера компонента', () => {
    sizes.map((size: EStatusSize) => {
      const { container } = render(
        <Status icon={iconName} size={size}>
          {text}
        </Status>
      );
      const status = container.getElementsByTagName('div')[0];
      expect(status).toHaveClass(`size-${size}`);
    });
  });

  // Check Status color
  test('Проверка компонента на все цветовые варианты', () => {
    colors.map((color: EStatusColor) => {
      const { container } = render(
        <Status icon={iconName} color={color}>
          {text}
        </Status>
      );
      const status = container.getElementsByTagName('div')[0];
      expect(status).toHaveClass(`color-${color}`);
    });
  });
});
