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

export const DatePickerDefault = (argTypes: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '330px' }}>
      <DatePicker {...argTypes} value={value} onChange={onChange} reset={argTypes?.reset} onReset={handleReset} />
    </div>
  );
};
DatePickerDefault.storyName = 'DatePicker по умолчанию';
DatePickerDefault.args = {};

export const DatePickerDefaultWithError = (argTypes: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());
  const helperText = 'Helper text';

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '330px' }}>
      <DatePicker
        helperText={helperText}
        error
        {...argTypes}
        value={value}
        onChange={onChange}
        reset
        onReset={handleReset}
      />
    </div>
  );
};
DatePickerDefaultWithError.storyName = 'DatePicker с вспомогательным текстом';

export const DatePickerWithColored = (argTypes?: any): JSX.Element => {
  const [colored, setColored] = useState(false);
  const [value, onChange] = useState<Date | undefined>(new Date());
  const handleChange = (event: Date) => {
    onChange(event);
    const isColored =
      event.getMonth() !== new Date(Date.now()).getMonth() ||
      event.getDate() !== new Date(Date.now()).getDate() ||
      event.getFullYear() !== new Date(Date.now()).getFullYear();
    setColored(isColored);
  };

  const handleReset = () => {
    onChange(undefined);
    setColored(false);
  };

  return (
    <div style={{ height: '330px' }}>
      <DatePicker value={value} colored={colored} onChange={handleChange} reset onReset={handleReset} />
    </div>
  );
};
DatePickerWithColored.storyName = 'DatePicker в разных цветах';

export const DatePickerLevelMonth = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());

  const handleReset = () => {
    onChange(undefined);
  };

  return (
    <div style={{ height: '250px' }}>
      <DatePicker value={value} onChange={onChange} level="month" reset onReset={handleReset} />
    </div>
  );
};
DatePickerLevelMonth.storyName = 'DatePicker с выбором месяца';

export const DatePickerLevelQuarter = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());
  const onChangeDate = (d: Date) => onChange(d);

  const handleReset = () => {
    onChange(undefined);
  };

  return (
    <div style={{ height: '180px' }}>
      <DatePicker value={value} onChange={onChangeDate} level="quarter" reset onReset={handleReset} />
    </div>
  );
};
DatePickerLevelQuarter.storyName = 'DatePicker с выбором квартала';

export const DatePickerLevelYear = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '230px' }}>
      <DatePicker value={value} onChange={onChange} level="year" reset onReset={handleReset} />
    </div>
  );
};
DatePickerLevelYear.storyName = 'DatePicker с выбором года';

export const DatePickerEnglishDatePicker = (argTypes?: any): JSX.Element => {
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

  const handleReset = () => {
    setValues({
      valueFrom: undefined,
      valueTo: undefined,
      shiftFrom: 1,
      shiftTo: 2
    });
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

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
        reset
        onReset={handleReset}
      />
    </div>
  );
};
DatePickerEnglishDatePicker.storyName = 'DatePicker в английской локализации';

export const DatePickerEnabledHoursFromTo = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());
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

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '385px' }}>
      <DatePicker
        type="time"
        value={value}
        onChange={onChange}
        enabledHourFrom={func}
        enabledHourTo={funcOne}
        reset
        onReset={handleReset}
      />
    </div>
  );
};
DatePickerEnabledHoursFromTo.storyName = 'DatePicker с выбором начального значения в часах';

export const DatePickerEnabledMinutesFromTo = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());
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

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '385px' }}>
      <DatePicker
        type="time"
        value={value}
        onChange={onChange}
        enabledMinuteFrom={func}
        enabledMinuteTo={funcOne}
        reset
        onReset={handleReset}
      />
    </div>
  );
};
DatePickerEnabledMinutesFromTo.storyName = 'DatePicker с выбором начального значения в минутах';

export const DatePickerEnabledFromTo = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());
  const now = new Date().getTime();
  const day = 24 * 3600 * 1000;

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '330px' }}>
      <DatePicker
        value={value}
        onChange={onChange}
        enabledFrom={new Date(now - 3 * day)}
        enabledTo={new Date(now + 5 * day)}
        reset
        onReset={handleReset}
      />
    </div>
  );
};
DatePickerEnabledFromTo.storyName = 'DatePicker с выбором начального значения';

export const DatePickerWithTime = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '385px' }}>
      <DatePicker value={value} onChange={onChange} type="time" reset onReset={handleReset} />
    </div>
  );
};
DatePickerWithTime.storyName = 'DatePicker с выбором времени';

export const DatePickerWithSeconds = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '385px' }}>
      <DatePicker value={value} onChange={onChange} type="seconds" reset onReset={handleReset} />
    </div>
  );
};
DatePickerWithSeconds.storyName = 'DatePicker с выбором времени в секундах';

export const DatePickerPeriod = (argTypes?: any): JSX.Element => {
  const now = new Date().getTime();
  const day = 24 * 3600 * 1000;
  const [values, setValues] = useState<{ valueFrom?: Date; valueTo?: Date }>({
    valueFrom: new Date(now - day),
    valueTo: new Date(now + day)
  });

  const handleReset = () => {
    setValues({
      valueFrom: undefined,
      valueTo: undefined
    });
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

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
        reset
        onReset={handleReset}
      />
    </div>
  );
};
DatePickerPeriod.storyName = 'DatePicker с выбором периода';

export const DatePickerPeriodMonth = (argTypes?: any): JSX.Element => {
  const [values, setValues] = useState<{ valueFrom?: Date; valueTo?: Date }>({
    valueFrom: new Date(2020, 10, 10),
    valueTo: new Date(2021, 10, 10)
  });

  const handleReset = () => {
    setValues({
      valueFrom: undefined,
      valueTo: undefined
    });
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

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
        reset
        onReset={handleReset}
      />
    </div>
  );
};
DatePickerPeriodMonth.storyName = 'DatePicker с выбором периода по месяцам';

export const DatePickerPeriodQuarter = (argTypes?: any): JSX.Element => {
  const [values, setValues] = useState<{ valueFrom?: Date; valueTo?: Date }>({
    valueFrom: new Date(2020, 10, 10),
    valueTo: new Date(2021, 10, 10)
  });

  const handleReset = () => {
    setValues({
      valueFrom: undefined,
      valueTo: undefined
    });
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

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
        reset
        onReset={handleReset}
      />
    </div>
  );
};
DatePickerPeriodQuarter.storyName = 'DatePicker с выбором периода по кварталам';

export const DatePickerPeriodYear = (argTypes?: any): JSX.Element => {
  const [values, setValues] = useState<{ valueFrom?: Date; valueTo?: Date }>({
    valueFrom: new Date(2020, 10, 10),
    valueTo: new Date(2021, 10, 10)
  });

  const handleReset = () => {
    setValues({
      valueFrom: undefined,
      valueTo: undefined
    });
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

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
        reset
        onReset={handleReset}
      />
    </div>
  );
};
DatePickerPeriodYear.storyName = 'DatePicker с выбором периода по годам';

export const DatePickerPeriodWithShift = (argTypes?: any): JSX.Element => {
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

  const handleReset = () => {
    setValues({
      valueFrom: undefined,
      valueTo: undefined,
      shiftFrom: 1,
      shiftTo: 2
    });
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

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
        reset
        onReset={handleReset}
      />
    </div>
  );
};
DatePickerPeriodWithShift.storyName = 'DatePicker с выбором периода и смен';

export const DatePickerPeriodWithCustomShift = (argTypes?: any): JSX.Element => {
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

  const handleReset = () => {
    setValues({
      valueFrom: undefined,
      valueTo: undefined,
      shiftFrom: 1,
      shiftTo: 2
    });
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

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
        reset
        onReset={handleReset}
      />
    </div>
  );
};
DatePickerPeriodWithCustomShift.storyName = 'DatePicker с выбором периода и кастомных смен';

export const DatePickerLabelWithDisabled = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '370px' }}>
      <DatePicker label="Время для отдыха" value={value} disabled onChange={onChange} reset onReset={handleReset} />
    </div>
  );
};
DatePickerLabelWithDisabled.storyName = 'DatePicker в отключенном состоянии';

export const DatePickerDisableChangesOnBlur = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '385px' }}>
      <DatePicker value={value} onChange={onChange} type="time" disableChangesOnBlur reset onReset={handleReset} />
    </div>
  );
};
DatePickerDisableChangesOnBlur.storyName = 'DatePicker со сбросом значения в поиске при onBlur поля ввода';

export const DatePickerOpenPickerOnInputFocus = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '385px' }}>
      <DatePicker value={value} onChange={onChange} type="time" isOpenOnFocus reset onReset={handleReset} />
    </div>
  );
};
DatePickerOpenPickerOnInputFocus.storyName = 'DatePicker с открывающимся меню при фокусировке поля ввода';

export const DatePickerWithPseudo = (argTypes?: any): JSX.Element => {
  const [save, setSave] = useState(false);
  const [innerValue, setInnerValue] = useState<Date | undefined>(new Date());

  const handleReset = () => {
    setInnerValue(undefined);
  };

  return (
    <div style={{ height: '350px' }}>
      <div>
        <DatePicker
          pseudo={save}
          value={innerValue}
          onChange={setInnerValue}
          pseudoChildren={<>{innerValue ? format(innerValue, 'dd.MM.yyyy') : ''}</>}
          reset
          onReset={handleReset}
        />
        <Button type="button" style={{ marginTop: '10px' }} onClick={() => setSave(!save)}>
          Переключить
        </Button>
      </div>
    </div>
  );
};
DatePickerWithPseudo.storyName = 'DatePicker в псевдоинпуте';

export const DatePickerWithoutYear = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '380px' }}>
      <DatePicker value={value} onChange={onChange} type="seconds" isHideYear={true} reset onReset={handleReset} />
    </div>
  );
};
DatePickerWithoutYear.storyName = 'DatePicker без выбора года';

export const DatePickerExtraCompact = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '330px' }}>
      <DatePicker value={value} size={sizesMappingInput.xs} onChange={onChange} reset onReset={handleReset} />
    </div>
  );
};
DatePickerExtraCompact.storyName = 'DatePicker в размере xs';

export const DatePickerWithInfiniteTimeScroll = (argTypes?: any): JSX.Element => {
  const [value, onChange] = useState<Date | undefined>(new Date());

  const handleReset = () => {
    onChange(undefined);
    if (argTypes?.onReset) {
      argTypes.onReset();
    }
  };

  return (
    <div style={{ height: '330px' }}>
      <DatePicker
        value={value}
        size={sizesMappingInput.xs}
        onChange={onChange}
        type="seconds"
        infiniteTimeScroll
        reset
        onReset={handleReset}
      />
    </div>
  );
};
DatePickerWithInfiniteTimeScroll.storyName = 'DatePicker с бесконечным скроллом времени';
