import React, { useState } from 'react';

import { Button, TimePicker } from '@components/index';
import { argsTypes } from '@components/TimePicker/_stories/argsTypes';
import { TTimePickerType } from '@components/TimePicker/types';
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

const timepickerStoriesParams = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TimePickerDefault = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());

  const handleValueChange = (newValue: Date) => {
    if (argTypes.onChange) {
      setValue(newValue);
      argTypes.onChange(newValue);
    }
  };

  const handleReset = () => {
    setValue(undefined);
    if (argTypes.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <TimePicker {...argTypes} value={value} reset={argTypes.reset} onChange={handleValueChange} onReset={handleReset} />
  );
};
TimePickerDefault.storyName = 'TimerPicker по умолчанию';

export const TimePickerWithLabel = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  const handleReset = () => {
    setValue(undefined);
    if (argTypes.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <TimePicker
      value={value}
      label="Время"
      {...argTypes}
      reset={true}
      onChange={handleValueChange}
      onReset={handleReset}
    />
  );
};
TimePickerWithLabel.storyName = 'TimePicker с полем label';
TimePickerWithLabel.parameters = timepickerStoriesParams;

export const DisabledTimePicker = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  const handleReset = () => {
    setValue(undefined);
    if (argTypes.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <TimePicker
      value={value}
      disabled={true}
      {...argTypes}
      reset={true}
      onChange={handleValueChange}
      onReset={handleReset}
    />
  );
};
DisabledTimePicker.storyName = 'TimePicker в состоянии disabled';
DisabledTimePicker.parameters = timepickerStoriesParams;

export const TimePickerWithSeconds = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  const handleReset = () => {
    setValue(undefined);
    if (argTypes.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <TimePicker
      value={value}
      type="timeWithSeconds"
      {...argTypes}
      reset={true}
      onChange={handleValueChange}
      onReset={handleReset}
    />
  );
};
TimePickerWithSeconds.storyName = 'TimePicker с опцией выбора секунд';
TimePickerWithSeconds.parameters = timepickerStoriesParams;

export const EnabledMinutesFromTo = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());
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

  const handleReset = () => {
    setValue(undefined);
    if (argTypes.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <TimePicker
      value={value}
      enabledMinuteFrom={func}
      enabledMinuteTo={funcOne}
      {...argTypes}
      reset={true}
      onChange={handleValueChange}
      onReset={handleReset}
    />
  );
};
EnabledMinutesFromTo.storyName = 'TimePicker с включенным ограничением по выбору минут';
EnabledMinutesFromTo.parameters = timepickerStoriesParams;

export const EnabledHoursFromTo = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());
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

  const handleReset = () => {
    setValue(undefined);
    if (argTypes.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <TimePicker
      value={value}
      enabledHourFrom={func}
      enabledHourTo={funcOne}
      {...argTypes}
      reset={true}
      onChange={handleValueChange}
      onReset={handleReset}
    />
  );
};
EnabledHoursFromTo.storyName = 'TimePicker с включенным ограничением по выбору часов';
EnabledHoursFromTo.parameters = timepickerStoriesParams;

export const OpenTimePickerOnInputFocus = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  const handleReset = () => {
    setValue(undefined);
    if (argTypes.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <TimePicker
      value={value}
      isOpenOnFocus={true}
      {...argTypes}
      reset={true}
      onChange={handleValueChange}
      onReset={handleReset}
    />
  );
};
OpenTimePickerOnInputFocus.storyName = 'TimePicker с опцией открытия панели при фокусе на поле ввода';
OpenTimePickerOnInputFocus.parameters = timepickerStoriesParams;

export const TimePickerWithoutIcon = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  const handleReset = () => {
    setValue(undefined);
    if (argTypes.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <TimePicker
      value={value}
      withIcon={false}
      {...argTypes}
      reset={true}
      onChange={handleValueChange}
      onReset={handleReset}
    />
  );
};
TimePickerWithoutIcon.storyName = 'TimePicker без иконки';
TimePickerWithoutIcon.parameters = timepickerStoriesParams;

export const TimePickerWithPseudo = (argTypes: TTimePickerType): JSX.Element => {
  const [save, setSave] = useState(false);
  const [innerValue, setInnerValue] = useState<Date | undefined>(new Date());

  const handleValueChange = (newValue: Date) => {
    setInnerValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  const handleReset = () => {
    setInnerValue(undefined);
    if (argTypes.onReset) {
      argTypes.onReset();
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
        reset={true}
        onChange={handleValueChange}
        onReset={handleReset}
      />
      <Button type="button" style={{ marginTop: '10px' }} onClick={() => setSave(!save)}>
        Переключить
      </Button>
    </div>
  );
};
TimePickerWithPseudo.storyName = 'TimePicker с кнопкой переключения на pseudo input';
TimePickerWithPseudo.parameters = timepickerStoriesParams;

export const TimePickerWithoutPicker = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  const handleReset = () => {
    setValue(undefined);
    if (argTypes.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <TimePicker
      value={value}
      withPicker={false}
      {...argTypes}
      reset={true}
      onChange={handleValueChange}
      onReset={handleReset}
    />
  );
};
TimePickerWithoutPicker.storyName = 'TimePicker без панели выбора времени';
TimePickerWithoutPicker.parameters = timepickerStoriesParams;

export const TimePickerPeriod = (argTypes: TTimePickerType): JSX.Element => {
  const [values, setValues] = useState<{ valueFrom?: Date; valueTo?: Date }>({
    valueFrom: new Date(),
    valueTo: addMinutes(new Date(), 10)
  });

  const handlePeriodChange = (valueFrom: Date | undefined, valueTo: Date | undefined) => {
    if (argTypes.onPeriodChange) {
      argTypes.onPeriodChange(valueFrom, valueTo);
    }
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
TimePickerPeriod.parameters = timepickerStoriesParams;

export const TimePickerPeriodWithSeconds = (argTypes: TTimePickerType): JSX.Element => {
  const [values, setValues] = useState<{ valueFrom?: Date; valueTo?: Date }>({
    valueFrom: new Date(),
    valueTo: addMinutes(new Date(), 10)
  });

  const handlePeriodChange = (valueFrom: Date | undefined, valueTo: Date | undefined) => {
    if (argTypes.onPeriodChange) {
      argTypes.onPeriodChange(valueFrom, valueTo);
    }
    setValues({ valueFrom, valueTo });
  };

  return (
    <TimePicker
      {...argTypes}
      type="periodWithSeconds"
      valueFrom={values.valueFrom}
      valueTo={values.valueTo}
      onPeriodChange={handlePeriodChange}
    />
  );
};

TimePickerPeriodWithSeconds.storyName = 'TimePicker с возможностью выбора периода времени с секундами';
TimePickerPeriodWithSeconds.parameters = timepickerStoriesParams;
