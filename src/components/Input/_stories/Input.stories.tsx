import React, { ChangeEvent, SetStateAction, useState } from 'react';

import Button from '@components/Button';
import { customInputColors, sizesMappingInput } from '@components/declaration';
import { Meta } from '@storybook/react';
import { expect } from '@storybook/test';
import * as test from '@storybook/test';
import { userEvent, waitFor, within } from '@storybook/test';

import styles from './Input.module.scss';

import Input from '..';
import { DefaultHelper, ErrorHelper, SuccessHelper, WarningHelper } from '../mock/HelperText';
import { IconMock } from '../mock/IconMock';
import { TInputProps } from '../types';
import { argsTypes } from './argsTypes';

const labelText = 'Label';
const helperText = 'Helper text';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/Input/Stories',
  component: Input,
  decorators: [withWrapper],
  argTypes: argsTypes
};

export const InputDefault = (argTypes: TInputProps): JSX.Element => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // какая-нибудь логика после прекращения ввода в input
  };

  const handleReset = () => {
    setValue('');
  };

  console.log({ argTypes });

  return (
    <Input
      {...argTypes}
      value={value}
      reset={argTypes.reset}
      onBlur={handleBlur}
      onChange={handleChange}
      onReset={handleReset}
      label={labelText}
    />
  );
};
InputDefault.storyName = 'Input по умолчанию';
InputDefault.args = {};

export const InputWithLabel = (argTypes: TInputProps): JSX.Element => <Input {...argTypes} label={labelText} />;
InputWithLabel.storyName = 'Input с лейблом';
InputWithLabel.args = {};

export const InputWithLabelAndHelperText = (argTypes: TInputProps) => (
  <Input {...argTypes} label={labelText} helperText={helperText} />
);
InputWithLabelAndHelperText.storyName = 'Input с лейблом и вспомогательным текстом';
InputWithLabelAndHelperText.args = {};

export const InputWithLabelHelperTextAndTextIcon = (argTypes: TInputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue('');
  };

  return (
    <Input
      {...argTypes}
      value={value}
      reset
      onChange={handleChange}
      onReset={handleReset}
      label={labelText}
      helperText={helperText}
      icon={<IconMock weight="кг" />}
    />
  );
};
InputWithLabelHelperTextAndTextIcon.storyName =
  'Input с лейблом, вспомогательным текстом и текстовой иконкой и кнопкой сброса';
InputWithLabelHelperTextAndTextIcon.args = {};

export const InputWithLabelHelperTextElement = (argTypes: TInputProps) => {
  const messageHelper = {
    [customInputColors.default]: <DefaultHelper />,
    [customInputColors.error]: <ErrorHelper />,
    [customInputColors.warning]: <WarningHelper />,
    [customInputColors.success]: <SuccessHelper />
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      {Object.values(customInputColors).map((color: customInputColors) => (
        <Input key={color} {...argTypes} label={labelText} helperText={messageHelper[color]} color={color} />
      ))}
    </div>
  );
};
InputWithLabelHelperTextElement.storyName = 'Input с лейблом, вспомогательным текстом в виде элемента';
InputWithLabelHelperTextElement.args = {};

export const InputDisabled = (argTypes: TInputProps) => (
  <Input {...argTypes} label={labelText} helperText={helperText} disabled value="value" />
);
InputDisabled.storyName = 'Input в состоянии disabled';
InputDisabled.args = {};

export const InputError = (argTypes: TInputProps) => (
  <Input {...argTypes} helperText={helperText} label={labelText} color={customInputColors.error} id="InputNLMK" />
);
InputError.storyName = 'Input в состоянии error';
InputError.args = {};

export const InputWarning = (argTypes: TInputProps) => (
  <Input {...argTypes} helperText={helperText} label={labelText} color={customInputColors.warning} />
);
InputWarning.storyName = 'Input в состоянии warning';
InputWarning.args = {};

export const InputSuccess = (argTypes: TInputProps) => (
  <Input {...argTypes} helperText={helperText} label={labelText} color={customInputColors.success} />
);
InputSuccess.storyName = 'Input в состоянии success';
InputSuccess.args = {};

export const InputCompact = (argTypes: TInputProps) => <Input {...argTypes} size={sizesMappingInput.s} label="Label" />;
InputCompact.storyName = 'Input компактный';
InputCompact.args = {};

// Textarea
export const InputMultilineDefault = (argTypes: TInputProps): JSX.Element => <Input {...argTypes} multiline />;
InputMultilineDefault.storyName = 'Textarea по умолчанию';
InputMultilineDefault.args = {};

export const InputMultilineWithLabel = (argTypes: TInputProps): JSX.Element => (
  <Input {...argTypes} multiline label={labelText} />
);
InputMultilineWithLabel.storyName = 'Textarea с лейблом';
InputMultilineWithLabel.args = {};

export const InputMultilineWithLabelAndHelperText = (argTypes: TInputProps): JSX.Element => (
  <div className={styles['column-wrapper']}>
    <Input {...argTypes} multiline label={labelText} helperText={helperText} />
    <Input {...argTypes} multiline label={labelText} helperText={<DefaultHelper />} />
  </div>
);
InputMultilineWithLabelAndHelperText.storyName = 'Textarea с лейблом и вспомогательным текстом';
InputMultilineWithLabelAndHelperText.args = {};

export const InputMultilineResize = (argTypes: TInputProps): JSX.Element => (
  <Input {...argTypes} multiline label={labelText} resize />
);
InputMultilineResize.storyName = 'Textarea со свойством ресайз';
InputMultilineResize.args = {};

export const InputMultilineDisabled = (argTypes: TInputProps): JSX.Element => (
  <Input {...argTypes} multiline label={labelText} helperText={helperText} disabled />
);
InputMultilineDisabled.storyName = 'Textarea в состоянии disabled';

export const InputWithColored = (): JSX.Element => {
  const [colored, setColored] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setColored(true);
  };

  const handleReset = () => {
    setValue('');
    setColored(false);
  };

  return (
    <>
      <Input label="Label" value={value} colored={colored} reset onChange={handleChange} onReset={handleReset} />
      <Button style={{ marginTop: '10px' }} onClick={() => setColored(false)}>
        Сохранить
      </Button>
    </>
  );
};
InputWithColored.storyName = 'Input с подсветкой';

export const InputMultilineError = (argTypes: TInputProps): JSX.Element => (
  <Input {...argTypes} multiline label={labelText} helperText={helperText} color={customInputColors.error} />
);
InputMultilineError.storyName = 'Textarea в состоянии error';
InputMultilineError.args = {};

export const InputMultilineWarning = (argTypes: TInputProps): JSX.Element => (
  <Input {...argTypes} multiline label={labelText} helperText={helperText} color={customInputColors.warning} />
);
InputMultilineWarning.storyName = 'Textarea в состоянии warning';
InputMultilineWarning.args = {};

export const InputMultilineSuccess = (argTypes: TInputProps): JSX.Element => (
  <Input {...argTypes} multiline label={labelText} helperText={helperText} color={customInputColors.success} />
);
InputMultilineSuccess.storyName = 'Textarea в состоянии success';
InputMultilineSuccess.args = {};

// Переключатель на PseudoInput
export const InputPseudoDefaultChecking = (argTypes: TInputProps): JSX.Element => {
  const [isPseudo, setIsPseudo] = useState(false);
  const [innerValue, setInnerValue] = useState('value');

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInnerValue(e.target.value);
  };

  const handleReset = () => setInnerValue('');

  return (
    <>
      <Input
        {...argTypes}
        pseudo={isPseudo}
        value={innerValue}
        label={labelText}
        reset
        onChange={handleChange}
        onReset={handleReset}
      />
      <Button onClick={() => setIsPseudo(!isPseudo)} style={{ marginTop: '10px' }}>
        Переключить
      </Button>
    </>
  );
};

InputPseudoDefaultChecking.args = {
  onChange: test.fn()
};

// @ts-ignore
InputPseudoDefaultChecking.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  args.onChange();
  await waitFor(() => expect(args.onChange).toHaveBeenCalled());
};
