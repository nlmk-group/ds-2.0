import React, { ReactNode, useEffect, useState } from 'react';

import { IconDarkModeOutlined16, IconLightModeOutlined16, Switch } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from '@components/_storybook/styles.module.scss';

import { ISwitch } from '../types';
import argsTypes from './argsTypes';
import { DEFAULT_SWITCH, DISABLED_SWITCH, SWITCH_WITH_ICONS, SWITCH_WITH_LABEL } from './constants';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/Switch/Stories',
  component: Switch,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof Switch>;

const handleOnChange = () => {
  return action('onChange');
};

export const DefaultSwitch = (argTypes: ISwitch): ReactNode => {
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
      onChange={(e: any) => {
        setIsChecked(!isChecked);
        if (typeof argTypes.onChange === 'function') {
          argTypes.onChange(e, isChecked);
        }
      }}
    />
  );
};

DefaultSwitch.storyName = DEFAULT_SWITCH;
DefaultSwitch.args = {
  checked: false,
  onChange: handleOnChange()
};

export const DisabledSwitch = (argTypes: ISwitch): ReactNode => {
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
      onChange={(e: any) => {
        setIsChecked(!isChecked);
        if (typeof argTypes.onChange === 'function') {
          argTypes.onChange(e, isChecked);
        }
      }}
    />
  );
};

DisabledSwitch.storyName = DISABLED_SWITCH;
DisabledSwitch.args = {
  checked: false,
  onChange: action('onChange'),
  disabled: true
};

export const SwitchWithLabel = (argTypes: ISwitch): ReactNode => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSecondChecked, setIsSecondChecked] = useState<boolean>(true);
  const [isThirdChecked, setIsThirdChecked] = useState<boolean>(false);

  return (
    <>
      <Switch
        {...argTypes}
        checked={isChecked}
        onChange={(e: any) => {
          setIsChecked(!isChecked);
          if (typeof argTypes.onChange === 'function') {
            argTypes.onChange(e, isChecked);
          }
        }}
        label={'Не активный Switch'}
      />
      <Switch
        {...argTypes}
        checked={isSecondChecked}
        onChange={(e: any) => {
          setIsSecondChecked(!isSecondChecked);
          if (typeof argTypes.onChange === 'function') {
            argTypes.onChange(e, isSecondChecked);
          }
        }}
        label={'Активный Switch'}
      />
      <Switch
        {...argTypes}
        checked={isThirdChecked}
        onChange={(e: any) => {
          setIsThirdChecked(!isThirdChecked);
          if (typeof argTypes.onChange === 'function') {
            argTypes.onChange(e, isThirdChecked);
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
  onChange: handleOnChange()
};

export const IconsSwitch = (argTypes: ISwitch): ReactNode => {
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
      onChange={(e: any) => {
        setIsChecked(!isChecked);
        if (typeof argTypes.onChange === 'function') {
          argTypes.onChange(e, isChecked);
        }
      }}
      activeIcon={<IconDarkModeOutlined16 htmlColor={'var(--ac-icon-white)'} />}
      inactiveIcon={<IconLightModeOutlined16 htmlColor={'var(--ac-icon-blue)'} />}
    />
  );
};

IconsSwitch.storyName = SWITCH_WITH_ICONS;
IconsSwitch.args = {
  checked: false,
  onChange: handleOnChange()
};
