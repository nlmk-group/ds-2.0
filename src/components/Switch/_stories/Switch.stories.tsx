import React, { ReactNode, useEffect, useState } from 'react';

import { IconStarOutlined16, Switch } from '@components/index';
import { action } from 'storybook/actions';
import { Meta } from '@storybook/react-vite';

import styles from '@components/_storybook/styles.module.scss';

import { ESwitchColors } from '../enums';
import { ISwitchProps } from '../types';
import argsTypes from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/Switch/Stories',
  component: Switch,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof Switch>;

const handleOnChange = action('onChange');

export const DefaultSwitch = (argTypes: ISwitchProps): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);

  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);

  return (
    <Switch
      {...argTypes}
      checked={isChecked}
      onChange={(newChecked: boolean) => {
        setIsChecked(newChecked);
        if (typeof argTypes.onChange === 'function') {
          argTypes.onChange(newChecked);
        }
      }}
    />
  );
};

DefaultSwitch.storyName = 'Switch по умолчанию';
DefaultSwitch.args = {
  checked: false,
  onChange: handleOnChange
};

export const SwitchShowcase = (argTypes: ISwitchProps): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);

  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);

  const colors = Object.values(ESwitchColors);
  return (
    <div>
      {colors.map(color => (
        <Switch
          {...argTypes}
          checked={isChecked}
          onChange={(newChecked: boolean) => {
            setIsChecked(newChecked);
            if (typeof argTypes.onChange === 'function') {
              argTypes.onChange(newChecked);
            }
          }}
          color={color}
          key={color}
        />
      ))}
    </div>
  );
};
SwitchShowcase.storyName = 'Варианты Switch с различными цветами';
SwitchShowcase.args = {
  checked: false,
  onChange: handleOnChange
};
export const DisabledSwitch = (argTypes: ISwitchProps): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);

  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);

  return (
    <Switch
      {...argTypes}
      checked={isChecked}
      onChange={(newChecked: boolean) => {
        setIsChecked(newChecked);
        if (typeof argTypes.onChange === 'function') {
          argTypes.onChange(newChecked);
        }
      }}
    />
  );
};

DisabledSwitch.storyName = 'Switch в состоянии disabled';
DisabledSwitch.args = {
  checked: false,
  onChange: handleOnChange,
  disabled: true
};

export const SwitchWithLabel = (argTypes: ISwitchProps): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSecondChecked, setIsSecondChecked] = useState<boolean>(true);
  const [isThirdChecked, setIsThirdChecked] = useState<boolean>(false);

  return (
    <>
      <Switch
        {...argTypes}
        checked={isChecked}
        onChange={(newChecked: boolean) => {
          setIsChecked(newChecked);
          if (typeof argTypes.onChange === 'function') {
            argTypes.onChange(newChecked);
          }
        }}
        label={'Не активный Switch'}
      />
      <Switch
        {...argTypes}
        checked={isSecondChecked}
        onChange={(newChecked: boolean) => {
          setIsSecondChecked(newChecked);
          if (typeof argTypes.onChange === 'function') {
            argTypes.onChange(newChecked);
          }
        }}
        label={'Активный Switch'}
      />
      <Switch
        {...argTypes}
        checked={isThirdChecked}
        onChange={(newChecked: boolean) => {
          setIsThirdChecked(newChecked);
          if (typeof argTypes.onChange === 'function') {
            argTypes.onChange(newChecked);
          }
        }}
        label={'Заблокированный Switch'}
        disabled
      />
    </>
  );
};

SwitchWithLabel.storyName = 'Switch с лейблом и текстом';
SwitchWithLabel.args = {
  onChange: handleOnChange
};

export const IconsSwitch = (argTypes: ISwitchProps): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(argTypes.checked || false);

  useEffect(() => {
    if (argTypes.checked !== isChecked) {
      setIsChecked(argTypes.checked || false);
    }
  }, [argTypes.checked]);

  return (
    <Switch
      {...argTypes}
      checked={isChecked}
      onChange={(newChecked: boolean) => {
        setIsChecked(newChecked);
        if (typeof argTypes.onChange === 'function') {
          argTypes.onChange(newChecked);
        }
      }}
      activeIcon={<IconStarOutlined16 htmlColor={'var(--unique-white)'} />}
      inactiveIcon={<IconStarOutlined16 htmlColor={'var(--steel-60)'} />}
    />
  );
};

IconsSwitch.storyName = 'Switch с иконкой';
IconsSwitch.args = {
  checked: false,
  onChange: handleOnChange
};
