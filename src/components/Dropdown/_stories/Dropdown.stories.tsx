import React, { ReactNode } from 'react';

import { EButtonColor, EButtonSize, EButtonVariant } from '@components/Button/enums';
import { Box, Dropdown, DropdownMenuItem } from '@components/index';
import {
  IconCancelOutlined16,
  IconCancelOutlined24,
  IconChevronArrowRightOutlined16,
  IconChevronArrowRightOutlined24,
  IconSearchOutlined24,
  IconStarOutlined16,
  IconStarOutlined24
} from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { IDropdownProps } from '../types';
import { argsTypes } from './argsTypes';

const WrapperDecorator = (Story: any) => {
  return (
    <Box
      alignItems="flex-start"
      justifyContent="center"
      st={{ height: '300px', marginTop: '40px', borderRadius: '10px' }}
      className={styles.wrapper}
    >
      <Story />
    </Box>
  );
};

export default {
  title: 'Components/Dropdown/Stories',
  component: Dropdown,
  decorators: [WrapperDecorator],
  argTypes: argsTypes
};

const dropdownOptions = [
  { value: 'Сталь' },
  { value: 'Железо' },
  { value: 'Чугун', disabled: true },
  { value: 'Медь' },
  { value: 'Цинк' },
  { value: 'Титан' },
  { value: 'Хром' }
];

const dropdownOptionsSmall = [
  { value: 'Ag' },
  { value: 'N' },
  { value: 'Cu', disabled: true },
  { value: 'Au' },
  { value: 'Fe' },
  { value: 'Ti' },
  { value: 'C' }
];

const dropdownOptionsForCustom = [
  { value: 'Металлургический комбинат' },
  { value: 'Железо' },
  { value: 'Чугун', disabled: true },
  { value: 'Медь' },
  { value: 'Цинк' },
  { value: 'Титан' },
  { value: 'Хром' }
];

const sizeToIconStar = {
  [EButtonSize.m]: <IconStarOutlined24 htmlColor="var(--brand-sapphire-60)" />,
  [EButtonSize.s]: <IconStarOutlined24 htmlColor="var(--brand-sapphire-60)" />,
  [EButtonSize.xs]: <IconStarOutlined16 htmlColor="var(--brand-sapphire-60)" />
};

const sizeToIconCancel = {
  [EButtonSize.m]: <IconCancelOutlined24 htmlColor="var(--spectrum-red-60)" />,
  [EButtonSize.s]: <IconCancelOutlined24 htmlColor="var(--spectrum-red-60)" />,
  [EButtonSize.xs]: <IconCancelOutlined16 htmlColor="var(--spectrum-red-60)" />
};

const sizeToIconChevronRight = {
  [EButtonSize.m]: <IconChevronArrowRightOutlined24 htmlColor="var(--brand-sapphire-60)" />,
  [EButtonSize.s]: <IconChevronArrowRightOutlined24 htmlColor="var(--brand-sapphire-60)" />,
  [EButtonSize.xs]: <IconChevronArrowRightOutlined16 htmlColor="var(--brand-sapphire-60)" />
};

export const DefaultDropdown = (args: IDropdownProps): ReactNode => {
  return (
    <Dropdown {...args}>
      {dropdownOptions.map(({ value, disabled }) => {
        const hasSpace = value.includes(' ');
        const finalAlign = hasSpace ? 'top' : 'center';
        return (
          <DropdownMenuItem
            key={value}
            value={value}
            disabled={disabled}
            onClick={() => {
              console.log(value);
            }}
          >
            <Box key={value} display="flex" alignItems={finalAlign} gap="8px">
              <div style={{ position: 'relative', top: '2px' }}>
                {sizeToIconStar[args.size as keyof typeof sizeToIconStar]}
              </div>
              {value}
            </Box>
          </DropdownMenuItem>
        );
      })}
    </Dropdown>
  );
};

DefaultDropdown.args = {
  buttonChildren: 'Dropdown Button',
  size: EButtonSize.m,
  menuStyle: { minWidth: '200px' }
};

DefaultDropdown.storyName = 'Dropdown по умолчанию';

export const PortalDropdown = (args: IDropdownProps): ReactNode => {
  return (
    <Dropdown {...args}>
      {dropdownOptions.map(({ value, disabled }) => {
        const hasSpace = value.includes(' ');
        const finalAlign = hasSpace ? 'top' : 'center';
        return (
          <DropdownMenuItem
            key={value}
            value={value}
            disabled={disabled}
            onClick={() => {
              console.log(value);
            }}
          >
            <Box key={value} display="flex" alignItems={finalAlign} gap="8px">
              <div style={{ position: 'relative', top: '2px' }}>
                {sizeToIconStar[args.size as keyof typeof sizeToIconStar]}
              </div>
              {value}
            </Box>
          </DropdownMenuItem>
        );
      })}
    </Dropdown>
  );
};

PortalDropdown.args = {
  buttonChildren: 'Dropdown Button',
  size: EButtonSize.m,
  menuStyle: { minWidth: '200px' },
  withPortal: true
};

PortalDropdown.storyName = 'Dropdown с порталом';

export const DropdownWithCustomElements = (args: IDropdownProps): ReactNode => {
  return (
    <Dropdown {...args}>
      {dropdownOptionsForCustom.map(({ value, disabled }) => {
        const hasSpace = value.includes(' ');
        const finalAlign = hasSpace ? 'top' : 'center';
        return (
          <DropdownMenuItem
            key={value}
            value={value}
            disabled={disabled}
            onClick={() => {
              console.log(value);
            }}
          >
            <Box key={value} display="flex" alignItems={finalAlign} gap="8px">
              <div style={{ position: 'relative', top: '4px' }}>
                {sizeToIconCancel[args.size as keyof typeof sizeToIconCancel]}
              </div>
              <div
                style={{
                  flexGrow: 1,
                  width: '150px'
                }}
              >
                {value}
              </div>
              <div style={{ position: 'relative', top: '2px', marginLeft: 'auto' }}>
                {sizeToIconChevronRight[args.size as keyof typeof sizeToIconChevronRight]}
              </div>
            </Box>
          </DropdownMenuItem>
        );
      })}
    </Dropdown>
  );
};

DropdownWithCustomElements.storyName = 'Dropdown с кастомизированными элементами списка';
DropdownWithCustomElements.args = {
  buttonChildren: 'Dropdown Button',
  size: EButtonSize.m,
  menuStyle: { minWidth: '200px' }
};

export const SmallDropdown = (args: IDropdownProps): ReactNode => {
  return (
    <Dropdown {...args}>
      {dropdownOptionsSmall.map(({ value, disabled }) => {
        const hasSpace = value.includes(' ');
        const finalAlign = hasSpace ? 'top' : 'center';
        return (
          <DropdownMenuItem
            key={value}
            value={value}
            disabled={disabled}
            onClick={() => {
              console.log(value);
            }}
          >
            <Box key={value} display="flex" alignItems={finalAlign} gap="8px">
              <div style={{ position: 'relative', top: '2px' }}>
                {sizeToIconStar[args.size as keyof typeof sizeToIconStar]}
              </div>
              {value}
            </Box>
          </DropdownMenuItem>
        );
      })}
    </Dropdown>
  );
};

SmallDropdown.args = {
  buttonChildren: 'Ед.',
  size: EButtonSize.m,
  menuStyle: { minWidth: '100px' }
};

SmallDropdown.storyName = 'Dropdown с короткими значениями';

export const DropdownWithButtonFeatures = (args: IDropdownProps): ReactNode => {
  return (
    <Dropdown {...args}>
      {dropdownOptions.map(({ value, disabled }) => (
        <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => console.log(value)}>
          {value}
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};

DropdownWithButtonFeatures.args = {
  buttonChildren: 'Фильтр',
  size: EButtonSize.m,
  variant: EButtonVariant.primary,
  color: EButtonColor.brand,
  startIcon: <IconStarOutlined24 />,
  startBadge: '3',
  menuStyle: { minWidth: '150px' },
  buttonStyle: { fontWeight: 'bold' }
};

DropdownWithButtonFeatures.storyName = 'Dropdown с Button возможностями';

export const DropdownWithCustomIcon = (args: IDropdownProps): ReactNode => {
  return (
    <Dropdown {...args}>
      {dropdownOptions.map(({ value, disabled }) => (
        <DropdownMenuItem key={value} value={value} disabled={disabled} onClick={() => console.log(value)}>
          {value}
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};

DropdownWithCustomIcon.args = {
  iconButton: <IconSearchOutlined24 />,
  size: EButtonSize.m,
  variant: EButtonVariant.secondary,
  menuStyle: { minWidth: '150px' }
};

DropdownWithCustomIcon.storyName = 'Dropdown с кастомной иконкой';

export const DropdownVariantsShowcase = (args: IDropdownProps): ReactNode => {
  return (
    <Box display="flex" gap="16px" flexWrap="wrap">
      <Dropdown {...args} variant={EButtonVariant.primary} buttonChildren="Primary">
        {dropdownOptionsSmall.map(({ value, disabled }) => (
          <DropdownMenuItem key={value} value={value} disabled={disabled}>
            {value}
          </DropdownMenuItem>
        ))}
      </Dropdown>

      <Dropdown {...args} variant={EButtonVariant.secondary} buttonChildren="Secondary">
        {dropdownOptionsSmall.map(({ value, disabled }) => (
          <DropdownMenuItem key={value} value={value} disabled={disabled}>
            {value}
          </DropdownMenuItem>
        ))}
      </Dropdown>
    </Box>
  );
};

DropdownVariantsShowcase.args = {
  size: EButtonSize.m,
  menuStyle: { minWidth: '120px' }
};

DropdownVariantsShowcase.storyName = 'Dropdown варианты';
