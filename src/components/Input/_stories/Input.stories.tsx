import React, { useState, SetStateAction } from 'react';

import Button from '@components/Button';
import { customInputColors, sizesMappingInput } from '@components/declaration';
import { expect, jest } from '@storybook/jest';
import { Meta, Story } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { withDesign } from 'storybook-addon-designs';

import styles from './Input.module.scss';

import Input from '..';
import { IconMock } from '../mock/IconMock';
import { TInputProps } from '../types';
import { argsTypes } from './argsTypes';

const labelText = 'Label';
const helperText = 'Helper text';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
    title: 'Components/Input/Stories',
    component: Input,
    argTypes: argsTypes,
    decorators: [withDesign, withWrapper]
} as Meta<typeof Input>;

export const InputDefault = (argTypes: TInputProps): JSX.Element => <Input {...argTypes} />;
InputDefault.storyName = 'Input по умолчанию';

export const InputWithLabel = (argTypes: TInputProps): JSX.Element => <Input label={labelText} {...argTypes} />;
InputWithLabel.storyName = 'Input с лейблом';

export const InputWithLabelAndHelperText = (argTypes: TInputProps) => (
    <Input label={labelText} helperText={helperText} {...argTypes} />
);
InputWithLabelAndHelperText.storyName = 'Input с лейблом и вспомогательным текстом';

export const InputWithLabelHelperTextAndTextIcon = (argTypes: TInputProps) => (
    <Input label={labelText} helperText={helperText} icon={<IconMock weight="кг" />} {...argTypes} />
);
InputWithLabelHelperTextAndTextIcon.storyName = 'Input с лейблом, вспомогательным текстом и текстовой иконкой';

export const InputDisabled = (argTypes: TInputProps) => (
    <Input label={labelText} helperText={helperText} disabled value="value" {...argTypes} />
);
InputDisabled.storyName = 'Input в состоянии disabled';

export const InputError = (argTypes: TInputProps) => (
    <Input helperText={helperText} label={labelText} color={customInputColors.error} id="InputNLMK" {...argTypes} />
);
InputError.storyName = 'Input в состоянии error';

export const InputWarning = (argTypes: TInputProps) => (
    <Input helperText={helperText} label={labelText} color={customInputColors.warning} {...argTypes} />
);
InputWarning.storyName = 'Input в состоянии warning';

export const InputSuccess = (argTypes: TInputProps) => (
    <Input helperText={helperText} label={labelText} color={customInputColors.success} {...argTypes} />
);
InputSuccess.storyName = 'Input в состоянии success';

export const InputCompact = (argTypes: TInputProps) => <Input size={sizesMappingInput.s} label="Label" {...argTypes} />;
InputCompact.storyName = 'Input компактный';

// Textarea
export const InputMultilineDefault = (argTypes: TInputProps): JSX.Element => <Input multiline {...argTypes} />;
InputMultilineDefault.storyName = 'Textarea по умолчанию';

export const InputMultilineWithLabel = (argTypes: TInputProps): JSX.Element => (
    <Input multiline label={labelText} {...argTypes} />
);
InputMultilineWithLabel.storyName = 'Textarea с лейблом';

export const InputMultilineWithLabelAndHelperText = (argTypes: TInputProps): JSX.Element => (
    <Input multiline label={labelText} helperText={helperText} {...argTypes} />
);
InputMultilineWithLabelAndHelperText.storyName = 'Textarea с лейблом и вспомогательным текстом';

export const InputMultilineResize = (argTypes: TInputProps): JSX.Element => (
    <Input multiline label={labelText} resize {...argTypes} />
);
InputMultilineResize.storyName = 'Textarea со свойством ресайз';

export const InputMultilineDisabled = (argTypes: TInputProps): JSX.Element => (
    <Input multiline label={labelText} helperText={helperText} disabled {...argTypes} />
);
InputMultilineDisabled.storyName = 'Textarea в состоянии disabled';

export const InputMultilineError = (argTypes: TInputProps): JSX.Element => (
    <Input multiline label={labelText} helperText={helperText} color={customInputColors.error} {...argTypes} />
);
InputMultilineError.storyName = 'Textarea в состоянии error';

export const InputMultilineWarning = (argTypes: TInputProps): JSX.Element => (
    <Input multiline label={labelText} helperText={helperText} color={customInputColors.warning} {...argTypes} />
);
InputMultilineWarning.storyName = 'Textarea в состоянии warning';

export const InputMultilineSuccess = (argTypes: TInputProps): JSX.Element => (
    <Input multiline label={labelText} helperText={helperText} color={customInputColors.success} {...argTypes} />
);
InputMultilineSuccess.storyName = 'Textarea в состоянии success';

// Переключатель на PseudoInput
export const InputPseudoDefaultChecking: Story = (argTypes: TInputProps): JSX.Element => {
    const [isPseudo, setIsPseudo] = useState(false);
    const [innerValue, setInnerValue] = useState('value');

    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
        setInnerValue(e.target.value);
    };

    return (
        <>
            <Input pseudo={isPseudo} value={innerValue} label={labelText} onChange={handleChange} {...argTypes} />
            <Button onClick={() => setIsPseudo(!isPseudo)} style={{ marginTop: '10px' }}>
                Переключить
            </Button>
        </>
    );
};
InputPseudoDefaultChecking.storyName = 'PseudoInput переключатель';

InputPseudoDefaultChecking.args = {
    onChange: jest.fn()
};

InputPseudoDefaultChecking.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByRole('button'));
    args.onChange();
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
};
