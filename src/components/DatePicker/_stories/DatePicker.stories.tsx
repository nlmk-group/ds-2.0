import React, { useState } from 'react';

import DatePicker from '@components/DatePicker';
import { argsTypes } from '@components/DatePicker/_stories/argsTypes';
import { TDatePickerProps, TEnabledHour } from '@components/DatePicker/types';
import { sizesMappingInput } from '@components/declaration';
import { Button } from '@components/index';
import { format } from 'date-fns';

import styles from '@components/DatePicker/_stories/DatePicker.module.scss';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/DatePicker/Stories',
  component: DatePicker,
  decorators: [withWrapper],
  argTypes: argsTypes
};

export const DatePickerDefault = (argTypes: TDatePickerProps): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ height: '330px' }}>
      <DatePicker {...argTypes} value={value} onChange={onChange} />
    </div>
  );
};
DatePickerDefault.storyName = 'DatePicker по умолчанию';
DatePickerDefault.args = {};

export const DatePickerDefaultWithError = (argTypes: TDatePickerProps): JSX.Element => {
  const [value, onChange] = useState(new Date());
  const helperText = 'Helper text';
  return (
    <div style={{ height: '330px' }}>
      <DatePicker helperText={helperText} error {...argTypes} value={value} onChange={onChange} />
    </div>
  );
};
DatePickerDefaultWithError.storyName = 'DatePicker с вспомогательным текстом';

export const DatePickerWithColored = (): JSX.Element => {
  const [colored, setColored] = useState(false);
  const [value, onChange] = useState(new Date());
  const handleChange = (event: Date) => {
    onChange(event);
    const isColored =
      event.getMonth() !== new Date(Date.now()).getMonth() ||
      event.getDate() !== new Date(Date.now()).getDate() ||
      event.getFullYear() !== new Date(Date.now()).getFullYear();
    setColored(isColored);
  };
  return (
    <div style={{ height: '330px' }}>
      <DatePicker value={value} colored={colored} onChange={handleChange} />
    </div>
  );
};
DatePickerWithColored.storyName = 'DatePicker в разных цветах';

export const DatePickerLevelMonth = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ height: '250px' }}>
      <DatePicker value={value} onChange={onChange} level="month" />
    </div>
  );
};
DatePickerLevelMonth.storyName = 'DatePicker с выбором месяца';

export const DatePickerLevelQuarter = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  const onChangeDate = (d: Date) => onChange(d);
  return (
    <div style={{ height: '180px' }}>
      <DatePicker value={value} onChange={onChangeDate} level="quarter" />
    </div>
  );
};
DatePickerLevelQuarter.storyName = 'DatePicker с выбором квартала';

export const DatePickerLevelYear = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ height: '230px' }}>
      <DatePicker value={value} onChange={onChange} level="year" />
    </div>
  );
};
DatePickerLevelYear.storyName = 'DatePicker с выбором года';

export const DatePickerEnglishDatePicker = (): JSX.Element => {
  const [values, setValues] = useState<{
    valueFrom?: Date;
    valueTo?: Date;
    shiftFrom: number;
    shiftTo: number;
  }>({
    valueFrom: new Date(2020, 10, 10),
    valueTo: new Date(2021, 10, 10),
    shiftFrom: 1,
    shiftTo: 2
  });
  return (
    <div style={{ height: '550px' }}>
      <DatePicker
        locale="en"
        type="shift"
        valueFrom={values.valueFrom}
        valueTo={values.valueTo}
        shiftFrom={values.shiftFrom}
        shiftTo={values.shiftTo}
        onPeriodChange={(valueFrom, valueTo, shiftFrom, shiftTo) => {
          setValues({
            valueFrom,
            valueTo,
            shiftFrom: shiftFrom || values.shiftFrom,
            shiftTo: shiftTo || values.shiftTo
          });
        }}
      />
    </div>
  );
};
DatePickerEnglishDatePicker.storyName = 'DatePicker в английской локализации';

export const DatePickerEnabledHoursFromTo = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  const func = (date: Date): TEnabledHour => {
    if (date.getDay() === 4) {
      return 7;
    }
    if (date.getDay() === 1) {
      return 8;
    } else {
      return 2;
    }
  };
  const funcOne = (_date: Date): TEnabledHour => {
    return 9;
  };
  return (
    <div style={{ height: '385px' }}>
      <DatePicker type="time" value={value} onChange={onChange} enabledHourFrom={func} enabledHourTo={funcOne} />
    </div>
  );
};
DatePickerEnabledHoursFromTo.storyName = 'DatePicker с выбором начального значения в часах';

export const DatePickerEnabledMinutesFromTo = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  const func = (date: Date): number => {
    if (date.getDay() === 4) {
      return 17;
    }
    if (date.getDay() === 1) {
      return 28;
    } else {
      return 32;
    }
  };
  const funcOne = (_date: Date): number => {
    return 59;
  };
  return (
    <div style={{ height: '385px' }}>
      <DatePicker type="time" value={value} onChange={onChange} enabledMinuteFrom={func} enabledMinuteTo={funcOne} />
    </div>
  );
};
DatePickerEnabledMinutesFromTo.storyName = 'DatePicker с выбором начального значения в минутах';

export const DatePickerEnabledFromTo = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  const now = new Date().getTime();
  const day = 24 * 3600 * 1000;
  return (
    <div style={{ height: '330px' }}>
      <DatePicker
        value={value}
        onChange={onChange}
        enabledFrom={new Date(now - 3 * day)}
        enabledTo={new Date(now + 5 * day)}
      />
    </div>
  );
};
DatePickerEnabledFromTo.storyName = 'DatePicker с выбором начального значения';

export const DatePickerWithTime = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ height: '385px' }}>
      <DatePicker value={value} onChange={onChange} type="time" />
    </div>
  );
};
DatePickerWithTime.storyName = 'DatePicker с выбором времени';

export const DatePickerWithSeconds = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ height: '385px' }}>
      <DatePicker value={value} onChange={onChange} type="seconds" />
    </div>
  );
};
DatePickerWithSeconds.storyName = 'DatePicker с выбором времени в секундах';

export const DatePickerPeriod = (): JSX.Element => {
  const now = new Date().getTime();
  const day = 24 * 3600 * 1000;
  const [values, setValues] = useState<{ valueFrom?: Date; valueTo?: Date }>({
    valueFrom: new Date(now - day),
    valueTo: new Date(now + day)
  });
  return (
    <div style={{ height: '385px' }}>
      <DatePicker
        type="period"
        valueFrom={values.valueFrom}
        valueTo={values.valueTo}
        enabledFrom={new Date(now - 3 * day)}
        onPeriodChange={(valueFrom: Date | undefined, valueTo: Date | undefined) => {
          setValues({
            valueFrom,
            valueTo
          });
        }}
      />
    </div>
  );
};
DatePickerPeriod.storyName = 'DatePicker с выбором периода';

export const DatePickerPeriodMonth = (): JSX.Element => {
  const [values, setValues] = useState<{ valueFrom?: Date; valueTo?: Date }>({
    valueFrom: new Date(2020, 10, 10),
    valueTo: new Date(2021, 10, 10)
  });
  return (
    <div style={{ height: '320px' }}>
      <DatePicker
        type="period"
        level="month"
        valueFrom={values.valueFrom}
        valueTo={values.valueTo}
        onPeriodChange={(valueFrom, valueTo) => {
          setValues({
            valueFrom,
            valueTo
          });
        }}
      />
    </div>
  );
};
DatePickerPeriodMonth.storyName = 'DatePicker с выбором периода по месяцам';

export const DatePickerPeriodQuarter = (): JSX.Element => {
  const [values, setValues] = useState<{ valueFrom?: Date; valueTo?: Date }>({
    valueFrom: new Date(2020, 10, 10),
    valueTo: new Date(2021, 10, 10)
  });
  return (
    <div style={{ height: '260px' }}>
      <DatePicker
        type="period"
        level="quarter"
        valueFrom={values.valueFrom}
        valueTo={values.valueTo}
        onPeriodChange={(valueFrom, valueTo) => {
          setValues({
            valueFrom,
            valueTo
          });
        }}
      />
    </div>
  );
};
DatePickerPeriodQuarter.storyName = 'DatePicker с выбором периода по кварталам';

export const DatePickerPeriodYear = (): JSX.Element => {
  const [values, setValues] = useState<{ valueFrom?: Date; valueTo?: Date }>({
    valueFrom: new Date(2020, 10, 10),
    valueTo: new Date(2021, 10, 10)
  });
  return (
    <div style={{ height: '300px' }}>
      <DatePicker
        type="period"
        level="year"
        valueFrom={values.valueFrom}
        valueTo={values.valueTo}
        onPeriodChange={(valueFrom, valueTo) => {
          setValues({
            valueFrom,
            valueTo
          });
        }}
      />
    </div>
  );
};
DatePickerPeriodYear.storyName = 'DatePicker с выбором периода по годам';

export const DatePickerPeriodWithShift = (): JSX.Element => {
  const [values, setValues] = useState<{
    valueFrom?: Date;
    valueTo?: Date;
    shiftFrom: number;
    shiftTo: number;
  }>({
    valueFrom: new Date(2020, 10, 10),
    valueTo: new Date(2021, 10, 10),
    shiftFrom: 1,
    shiftTo: 2
  });
  return (
    <div style={{ height: '515px' }}>
      <DatePicker
        type="shift"
        valueFrom={values.valueFrom}
        valueTo={values.valueTo}
        shiftFrom={values.shiftFrom}
        shiftTo={values.shiftTo}
        onPeriodChange={(valueFrom, valueTo, shiftFrom, shiftTo) => {
          setValues({
            valueFrom,
            valueTo,
            shiftFrom: shiftFrom || values.shiftFrom,
            shiftTo: shiftTo || values.shiftTo
          });
        }}
      />
    </div>
  );
};
DatePickerPeriodWithShift.storyName = 'DatePicker с выбором периода и смен';

export const DatePickerPeriodWithCustomShift = (): JSX.Element => {
  const [values, setValues] = useState<{
    valueFrom?: Date;
    valueTo?: Date;
    shiftFrom: number;
    shiftTo: number;
  }>({
    valueFrom: new Date(2020, 10, 10),
    valueTo: new Date(2021, 10, 10),
    shiftFrom: 1,
    shiftTo: 2
  });
  return (
    <div style={{ height: '515px' }}>
      <DatePicker
        type="shift"
        valueFrom={values.valueFrom}
        valueTo={values.valueTo}
        shiftFrom={values.shiftFrom}
        shiftTo={values.shiftTo}
        shiftLength={2}
        onPeriodChange={(valueFrom, valueTo, shiftFrom, shiftTo) => {
          setValues({
            valueFrom,
            valueTo,
            shiftFrom: shiftFrom || values.shiftFrom,
            shiftTo: shiftTo || values.shiftTo
          });
        }}
      />
    </div>
  );
};
DatePickerPeriodWithCustomShift.storyName = 'DatePicker с выбором периода и кастомных смен';

export const DatePickerLabelWithDisabled = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ height: '370px' }}>
      <DatePicker label="Время для отдыха" value={value} disabled onChange={onChange} />
    </div>
  );
};
DatePickerLabelWithDisabled.storyName = 'DatePicker в отключенном состоянии';

export const DatePickerDisableChangesOnBlur = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ height: '385px' }}>
      <DatePicker value={value} onChange={onChange} type="time" disableChangesOnBlur />
    </div>
  );
};
DatePickerDisableChangesOnBlur.storyName = 'DatePicker со сбросом значения в поиске при onBlur поля ввода';

export const DatePickerOpenPickerOnInputFocus = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ height: '385px' }}>
      <DatePicker value={value} onChange={onChange} type="time" isOpenOnFocus />
    </div>
  );
};
DatePickerOpenPickerOnInputFocus.storyName = 'DatePicker с открывающимся меню при фокусировке поля ввода';

export const DatePickerWithPseudo = (): JSX.Element => {
  const [save, setSave] = useState(false);
  const [innerValue, setInnerValue] = useState(new Date());
  return (
    <div style={{ height: '350px' }}>
      <div>
        <DatePicker
          pseudo={save}
          value={innerValue}
          onChange={setInnerValue}
          pseudoChildren={<>{format(innerValue, 'dd.MM.yyyy')}</>}
        />
        <Button type="button" style={{ marginTop: '10px' }} onClick={() => setSave(!save)}>
          Переключить
        </Button>
      </div>
    </div>
  );
};
DatePickerWithPseudo.storyName = 'DatePicker в псевдоинпуте';

export const DatePickerWithoutYear = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ height: '380px' }}>
      <DatePicker value={value} onChange={onChange} type="seconds" isHideYear={true} />
    </div>
  );
};
DatePickerWithoutYear.storyName = 'DatePicker без выбора года';

export const DatePickerExtraCompact = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ height: '330px' }}>
      <DatePicker value={value} size={sizesMappingInput.xs} onChange={onChange} />
    </div>
  );
};
DatePickerExtraCompact.storyName = 'DatePicker в размере xs';

export const DatePickerWithInfiniteTimeScroll = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ height: '330px' }}>
      <DatePicker value={value} size={sizesMappingInput.xs} onChange={onChange} type="seconds" infiniteTimeScroll />
    </div>
  );
};
DatePickerWithInfiniteTimeScroll.storyName = 'DatePicker с бесконечным скроллом времени';
