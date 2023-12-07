import React from 'react';
import { ToggleButtonGroup } from '@components/index';
import { render, screen, fireEvent } from '@testing-library/react';
import { threeButtonDefault } from './constants';
import { IBaseToggleButtonGroupItem } from './types';
import { sizeMapping, statusMapping } from './enums';

describe('src/components/ToggleButtonGroup', () => {

  test('It should render a ToggleButtonGroup', () => {
    const { container } = render(<ToggleButtonGroup btnGroup={threeButtonDefault} />);
    const btnGroup = container.getElementsByTagName('div')[0];
    expect(btnGroup).toBeInTheDocument();
  });

  test(`It should render ToggleButtonGroup with ${threeButtonDefault.length} ToggleButtons`, () => {
    render(<ToggleButtonGroup btnGroup={threeButtonDefault} />);
    const buttons = screen.getAllByTestId('TOGGLE_BUTTON');
    expect(buttons.length).toBe(threeButtonDefault.length);
  });

  threeButtonDefault.forEach((item, index) => {
    test('it should render ToggleButton with correct title', () => {
      const oneElement = [threeButtonDefault[index]]
      render(<ToggleButtonGroup btnGroup={oneElement} />);
      expect(screen.getByTestId('TOGGLE_BUTTON')).toHaveTextContent(threeButtonDefault[index].label);
    })
  })

  test('It should call a function while click', () => {
    const mockCallBack = jest.fn();
    const testBtnGroup: IBaseToggleButtonGroupItem[] = [
      {
        label: 'Test',
        action: mockCallBack
      }
    ];
    render(<ToggleButtonGroup btnGroup={testBtnGroup} />);
    const btn = screen.getByTestId('TOGGLE_BUTTON');
    fireEvent.click(btn);
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  test('It should render default active button when it was clicked', () => {
    const mockCallBack = jest.fn();
    const testBtnGroup: IBaseToggleButtonGroupItem[] = [
      {
        label: 'Test',
        action: mockCallBack
      }
    ];
    render(<ToggleButtonGroup btnGroup={testBtnGroup} />);
    const btn = screen.getByTestId('TOGGLE_BUTTON');
    fireEvent.click(btn);
    expect(btn.classList.contains(`btn-active-${statusMapping.default}`)).toBe(true);
  });

  test('It should render ToggleButton with icon', () => {
    const testBtnGroup: IBaseToggleButtonGroupItem[] = [
      {
        label: 'Test',
        withIcon: true
      }
    ];

    render(<ToggleButtonGroup btnGroup={testBtnGroup} />);
    expect(screen.getByTestId('ICON')).toBeInTheDocument();
  });

  describe('While rendering with badge', () => {
    const actionNumberResult = '8'
    const testBtnGroup: IBaseToggleButtonGroupItem[] = [
      {
        label: 'Test',
        actionNumber: actionNumberResult
      }
    ];

    test('It should render ToggleButton with badge', () => {
      render(<ToggleButtonGroup btnGroup={testBtnGroup} />);
      expect(screen.getByTestId('BADGE')).toBeInTheDocument();
    });
    test('It should render badge with correct number', () => {
      render(<ToggleButtonGroup btnGroup={testBtnGroup} />);
      expect(screen.getByTestId('BADGE')).toHaveTextContent(actionNumberResult.toString());
    });
  });

  test('It should render disabled button', () => {
    render(
      <ToggleButtonGroup
        btnGroup={[
          {
            label: 'Test',
            disabled: true
          }
        ]}
      />
    );
    const btn = screen.getByTestId('TOGGLE_BUTTON');
    expect(btn.classList.contains('btn-disabled')).toBe(true);
  });

  Object.values(sizeMapping).forEach((size: sizeMapping) => {
    describe(`While rendering with ${size} size`, () => {
      const TestToggleButtonGroup = ({ size }:{size: string}) => (
        <ToggleButtonGroup
          size={size as sizeMapping}
          btnGroup={[{
            label: 'Test',
            withIcon: true,
            actionNumber: '7'
          }]}
        />
      );

      test(`It should render wrapper with ${size} size`, () => {
        render(<TestToggleButtonGroup size={size}/>);
        const toggleBtn = screen.getByTestId('TOGGLE_BUTTON');
        expect(toggleBtn.classList.contains(`btn-size-${size}`)).toBe(true);
      });

      test(`It should render icon with ${size} size`, () => {
        render(<TestToggleButtonGroup size={size}/>);
        expect(screen.getByTestId('ICON').classList.contains(`icon-${size}`)).toBe(true)
      });
    });
  });

  Object.values(statusMapping).forEach((status: statusMapping) => {
    describe(`While rendering with ${status} status`, () => {
      const TestToggleButtonGroup = ({ status }:{status: string}) => (
        <ToggleButtonGroup
          status={status as statusMapping}
          btnGroup={[
            {
              label: 'Test',
              withIcon: true,
              actionNumber: '7'
            }
          ]}
        />
      );

      test(`It should render button wrapper with ${status} class`, () => {
        render(<TestToggleButtonGroup status={status}/>);
        const toggleBtn = screen.getByTestId('TOGGLE_BUTTON');
        expect(toggleBtn.classList.contains(`btn-${status}`)).toBe(true);
      });

      test(`It should render active button with ${status} class when it was clicked`, () => {
        render(<TestToggleButtonGroup status={status}/>);
        const btn = screen.getByTestId('TOGGLE_BUTTON');
        fireEvent.click(btn);
        expect(btn.classList.contains(`btn-active-${status}`)).toBe(true);
      });
      
      test(`It should render button's badge with ${status} class`, () => {
        render(<TestToggleButtonGroup status={status}/>);
        const toggleBtn = screen.getByTestId('BADGE');
        expect(toggleBtn.classList.contains(`badge-${status}`)).toBe(true);
      });
    });
  });

  test('it should render button with custom icon', () => {
    render(
      <ToggleButtonGroup
        btnGroup={[
          {
            label: 'Test',
            withIcon: true,
            customIcon: (<div data-testid='CUSTOM_ICON'>Icon</div>),
            actionNumber: '7'
          }
        ]}
      />
    );
    expect(screen.getByTestId('CUSTOM_ICON')).toBeInTheDocument();
  });
});