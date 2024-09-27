import React, { ReactNode, useEffect, useState } from 'react';

import { IconStarOutlined16, Switch } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from '@components/_storybook/styles.module.scss';

import { ISwitchProps } from '../types';
import argsTypes from './argsTypes';
import { DEFAULT_SWITCH, DISABLED_SWITCH, SWITCH_WITH_ICONS, SWITCH_WITH_LABEL } from './constants';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

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

DefaultSwitch.storyName = DEFAULT_SWITCH;
DefaultSwitch.args = {
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

DisabledSwitch.storyName = DISABLED_SWITCH;
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

SwitchWithLabel.storyName = SWITCH_WITH_LABEL;
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

IconsSwitch.storyName = SWITCH_WITH_ICONS;
IconsSwitch.args = {
  checked: false,
  onChange: handleOnChange
};
