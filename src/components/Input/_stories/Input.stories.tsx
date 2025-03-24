import React, { ChangeEvent, SetStateAction, useState } from 'react';

import { customInputColors } from '@components/declaration';
import { Button } from '@components/index';
import { expect, fn } from '@storybook/test';
import { userEvent, waitFor, within } from '@storybook/test';

import styles from './Input.module.scss';

import Input from '..';
import { DefaultHelper, ErrorHelper, SuccessHelper, WarningHelper } from '../mock/helpers';
import { TInputProps } from '../types';
import argsTypes from './argsTypes';

const labelText = 'Label';
const helperText = 'Helper text';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

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
    console.log('event blur: ', e);
  };

  const handleReset = () => {
    setValue('');
  };

  console.log({ argTypes });

  return (
    <Input
      value={value}
      reset={argTypes.reset}
      label={labelText}
      {...argTypes}
      onBlur={handleBlur}
      onChange={handleChange}
      onReset={handleReset}
    />
  );
};
InputDefault.storyName = 'Input по умолчанию';
InputDefault.args = {};

export const InputWithLabelHelperTextElement = () => {
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
        <Input key={color} label={labelText} helperText={messageHelper[color]} color={color} />
      ))}
    </div>
  );
};
InputWithLabelHelperTextElement.storyName = 'Input с лейблом, разным color и вспомогательным текстом в виде элемента';
InputWithLabelHelperTextElement.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

// Textarea
export const InputMultilineDefault = (): JSX.Element => <Input multiline />;
InputMultilineDefault.storyName = 'Textarea по умолчанию';
InputMultilineDefault.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const InputMultilineWithLabelAndHelperText = (): JSX.Element => (
  <div className={styles['column-wrapper']}>
    <Input multiline label={labelText} helperText={helperText} />
    <Input multiline label={labelText} helperText={<DefaultHelper />} />
  </div>
);
InputMultilineWithLabelAndHelperText.storyName = 'Textarea с лейблом и вспомогательным текстом';
InputMultilineWithLabelAndHelperText.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const InputMultilineResize = (): JSX.Element => <Input multiline label={labelText} resize />;
InputMultilineResize.storyName = 'Textarea со свойством ресайз';
InputMultilineResize.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const InputMultilineDisabled = (): JSX.Element => (
  <Input multiline label={labelText} helperText={helperText} disabled />
);
InputMultilineDisabled.storyName = 'Textarea в состоянии disabled';
InputMultilineDisabled.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

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
      <Button type="button" style={{ marginTop: '10px' }} onClick={() => setColored(false)}>
        Сохранить
      </Button>
    </>
  );
};
InputWithColored.storyName = 'Input с подсветкой';
InputWithColored.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

// Переключатель на PseudoInput
export const InputPseudoDefaultChecking = (): JSX.Element => {
  const [isPseudo, setIsPseudo] = useState(false);
  const [innerValue, setInnerValue] = useState('value');

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInnerValue(e.target.value);
  };

  const handleReset = () => setInnerValue('');

  return (
    <>
      <Input
        pseudo={isPseudo}
        value={innerValue}
        label={labelText}
        reset
        onChange={handleChange}
        onReset={handleReset}
      />
      <Button type="button" onClick={() => setIsPseudo(!isPseudo)} style={{ marginTop: '10px' }}>
        Переключить
      </Button>
    </>
  );
};

InputPseudoDefaultChecking.args = {
  onChange: fn()
};
InputPseudoDefaultChecking.storyName = 'Переключение между Input и PseudoInput';
InputPseudoDefaultChecking.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

// @ts-ignore
InputPseudoDefaultChecking.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  args.onChange();
  await waitFor(() => expect(args.onChange).toHaveBeenCalled());
};
