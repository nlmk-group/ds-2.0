import React, { ReactNode, useEffect, useState } from 'react';

import { Icon, Switch } from '@components/index';
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
          argTypes.onChange(e);
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
          argTypes.onChange(e);
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
            argTypes.onChange(e);
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
            argTypes.onChange(e);
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
            argTypes.onChange(e);
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
          argTypes.onChange(e);
        }
      }}
      activeIcon={<Icon name="IconMetallalomScrapFilled16" containerSize={16} htmlColor={'var(--text-grey-100)'} />}
      inactiveIcon={<Icon name="IconMetallalomScrap16" containerSize={16} htmlColor={'var(--primary-blue-600)'} />}
    />
  );
};

IconsSwitch.storyName = SWITCH_WITH_ICONS;
IconsSwitch.args = {
  checked: false,
  onChange: handleOnChange()
};
