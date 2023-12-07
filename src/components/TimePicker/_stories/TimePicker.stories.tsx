import React, { useState } from 'react';

import { Button, TimePicker } from '@components/index';
import { argsTypes } from '@components/TimePicker/_stories/argsTypes';
import { TTimePickerType } from '@components/TimePicker/types';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import { addMinutes } from 'date-fns';
import { withDesign } from 'storybook-addon-designs';

import styles from './TimePicker.module.scss';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/TimePicker/Stories',
  component: TimePicker,
  decorators: [withDesign, withWrapper],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: argsTypes
} as Meta<typeof TimePicker>;

export const TimePickerDefault = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  return <TimePicker value={value} {...argTypes} onChange={handleValueChange} />;
};

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

export const TimePickerWithDisabledPanel = (argTypes: TTimePickerType): JSX.Element => {
  const [value, setValue] = useState(new Date());

  const handleValueChange = (newValue: Date) => {
    setValue(newValue);
    if (argTypes.onChange) {
      argTypes.onChange(newValue);
    }
  };

  return <TimePicker value={value} disabledPanel={true} {...argTypes} onChange={handleValueChange} />;
};

// todo вернуть когда в Input появится пропс colored
// export const TimePickerWithColored = (): JSX.Element => {
//     const [colored, setColored] = useState(false)
//     const [value, onChange] = useState(new Date())
//     const handleChange = (e) => {
//         onChange(e)
//         if (e.getHours() !== new Date(Date.now()).getHours() || e.getMinutes() !== new Date(Date.now()).getMinutes()) {
//             setColored(true)
//         } else {
//             setColored(false)
//         }
//     }
//     return (
//         <Grid>
//             <Grid style={{ marginBottom: '10px' }}>
//                 <TimePicker value={value} colored={colored} onChange={handleChange} />
//             </Grid>
//             <Grid>
//                 <Button style={{ marginLeft: '10px' }} onClick={() => setColored(false)}>
//                     Сохранить
//                 </Button>
//             </Grid>
//         </Grid>
//     )
// }

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
      <Button style={{ marginTop: '10px' }} onClick={() => setSave(!save)}>
        Переключить
      </Button>
    </div>
  );
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
      type="period"
      valueFrom={values.valueFrom}
      valueTo={values.valueTo}
      onPeriodChange={handlePeriodChange}
    />
  );
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
