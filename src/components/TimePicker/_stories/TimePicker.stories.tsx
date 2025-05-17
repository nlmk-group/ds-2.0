import React, { useState } from 'react';

import { Button, TimePicker } from '@components/index';
import { argsTypes } from '@components/TimePicker/_stories/argsTypes';
import { TTimePickerType } from '@components/TimePicker/types';
import { action } from '@storybook/addon-actions';
import { addMinutes } from 'date-fns';

import styles from './TimePicker.module.scss';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/TimePicker/Stories',
  component: TimePicker,
  decorators: [withWrapper],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: argsTypes
};

export const TimePickerDefault = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());

  const handleValueChange = (newValue: Date) => {
    if (argTypes.onChange) {
      setValue(newValue);
      argTypes.onChange(newValue);
    }
  };

  return <TimePicker value={value} {...argTypes} onChange={handleValueChange} />;
};
TimePickerDefault.storyName = 'TimerPicker по умолчанию';

export const TimePickerWithLabel = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  return <TimePicker value={value} label="Время" {...argTypes} onChange={handleValueChange} />;
};
TimePickerWithLabel.storyName = 'TimePicker с полем label';
TimePickerWithLabel.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const DisabledTimePicker = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  return <TimePicker value={value} disabled={true} {...argTypes} onChange={handleValueChange} />;
};
DisabledTimePicker.storyName = 'TimePicker в состоянии disabled';
DisabledTimePicker.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TimePickerWithSeconds = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  return <TimePicker value={value} type="timeWithSeconds" {...argTypes} onChange={handleValueChange} />;
};
TimePickerWithSeconds.storyName = 'TimePicker с опцией выбора секунд';
TimePickerWithSeconds.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const EnabledMinutesFromTo = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const func = (): any => {
    return 32;
  };

  const funcOne = (): any => {
    return 59;
  };

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  return (
    <TimePicker
      value={value}
      enabledMinuteFrom={func}
      enabledMinuteTo={funcOne}
      {...argTypes}
      onChange={handleValueChange}
    />
  );
};
EnabledMinutesFromTo.storyName = 'TimePicker с включенным ограничением по выбору минут';
EnabledMinutesFromTo.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const EnabledHoursFromTo = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());
  const func = (): any => {
    return 2;
  };

  const funcOne = (): any => {
    return 9;
  };

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  return (
    <TimePicker
      value={value}
      enabledHourFrom={func}
      enabledHourTo={funcOne}
      {...argTypes}
      onChange={handleValueChange}
    />
  );
};
EnabledHoursFromTo.storyName = 'TimePicker с включенным ограничением по выбору часов';
EnabledHoursFromTo.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const OpenTimePickerOnInputFocus = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  return <TimePicker value={value} isOpenOnFocus={true} {...argTypes} onChange={handleValueChange} />;
};
OpenTimePickerOnInputFocus.storyName = 'TimePicker с опцией открытия панели при фокусе на поле ввода';
OpenTimePickerOnInputFocus.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TimePickerWithoutIcon = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  return <TimePicker value={value} withIcon={false} {...argTypes} onChange={handleValueChange} />;
};
TimePickerWithoutIcon.storyName = 'TimePicker без иконки';
TimePickerWithoutIcon.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TimePickerWithPseudo = (argTypes: TTimePickerType): JSX.Element => {
  const [save, setSave] = useState(false);
  const [innerValue, setInnerValue] = useState(new Date());

  const handleValueChange = (newValue: Date) => {
    setInnerValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  return (
    <div>
      <TimePicker
        type="timeWithSeconds"
        label="Время"
        pseudo={save}
        value={innerValue}
        {...argTypes}
        onChange={handleValueChange}
      />
      <Button type="button" style={{ marginTop: '10px' }} onClick={() => setSave(!save)}>
        Переключить
      </Button>
    </div>
  );
};
TimePickerWithPseudo.storyName = 'TimePicker с кнопкой переключения на pseudo input';
TimePickerWithPseudo.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TimePickerWithoutPicker = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  return <TimePicker value={value} withPicker={false} {...argTypes} onChange={handleValueChange} />;
};
TimePickerWithoutPicker.storyName = 'TimePicker без панели выбора времени';
TimePickerWithoutPicker.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TimePickerPeriod = (argTypes: TTimePickerType): JSX.Element => {
  const [values, setValues] = useState<{ valueFrom?: Date; valueTo?: Date }>({
    valueFrom: new Date(),
    valueTo: addMinutes(new Date(), 10)
  });

  const handlePeriodChange = (valueFrom: Date | undefined, valueTo: Date | undefined) => {
    action('изменен период времени')(valueFrom, valueTo);
    setValues({ valueFrom, valueTo });
  };

  return (
    <TimePicker
      {...argTypes}
      type="period"
      valueFrom={values.valueFrom}
      valueTo={values.valueTo}
      onPeriodChange={handlePeriodChange}
    />
  );
};
TimePickerPeriod.storyName = 'TimePicker с возможностью выбора периода времени';
TimePickerPeriod.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TimePickerPeriodWithSeconds = (argTypes: TTimePickerType): JSX.Element => {
  const [values, setValues] = useState<{ valueFrom?: Date; valueTo?: Date }>({
    valueFrom: new Date(),
    valueTo: addMinutes(new Date(), 10)
  });

  const handlePeriodChange = (valueFrom: Date | undefined, valueTo: Date | undefined) => {
    action('изменен период времени')(valueFrom, valueTo);
    setValues({ valueFrom, valueTo });
  };

  return (
    <TimePicker
      type="periodWithSeconds"
      valueFrom={values.valueFrom}
      valueTo={values.valueTo}
      onPeriodChange={handlePeriodChange}
    />
  );
};

TimePickerPeriodWithSeconds.storyName = 'TimePicker с возможностью выбора периода времени с секундами';
TimePickerPeriodWithSeconds.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
