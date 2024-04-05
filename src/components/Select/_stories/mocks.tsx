import React from 'react';

import {
  IconAddPlusOutlined16,
  IconEqualsSign24,
  IconExceptionContains24,
  IconFinishingContains24,
  IconGreater24,
  IconGreaterOrEqual24,
  IconLess24,
  IconLessOrEqual24,
  IconMultipleChoice24,
  IconNotEqualSign24,
  IconSelectionContains24,
  IconStartingContains24
} from '@components/index';

import { ISelectOption } from '../types';

export const options: ISelectOption[] = [
  {
    value: 'lorem',
    label: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorum earum eligendi
      in istenecessitatibus odit optio quidem tenetur! Assumenda deleniti fugiat
      itaque minus omnis quidem temporibus.Necessitatibus rerum, ullam!`
  },
  { value: 'banana', label: 'Banana', iconRight: <IconAddPlusOutlined16 /> },
  { value: 'cherry', label: 'Cherry', disabled: true },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig', iconRight: <IconAddPlusOutlined16 /> },
  { value: 'grape', label: 'Grape' }
];

export const optionsWithIcons: ISelectOption[] = [
  {
    value: 'lorem',
    label: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorum earum eligendi
      in istenecessitatibus odit optio quidem tenetur! Assumenda deleniti fugiat
      itaque minus omnis quidem temporibus.Necessitatibus rerum, ullam!`,
    iconLeft: <IconSelectionContains24 />,
    iconRight: <IconSelectionContains24 />
  },
  {
    value: 'finishing_contains',
    label: 'Finishing Contains',
    iconLeft: <IconFinishingContains24 />,
    iconRight: <IconFinishingContains24 />
  },
  {
    value: 'equals_sign',
    label: 'Equals Sign',
    disabled: true,
    iconLeft: <IconEqualsSign24 />,
    iconRight: <IconEqualsSign24 />
  },
  {
    value: 'selection_contains',
    label: 'Selection Contains',
    iconLeft: <IconSelectionContains24 />,
    iconRight: <IconSelectionContains24 />
  },
  {
    value: 'greater',
    label: 'Greater',
    iconLeft: <IconGreater24 />,
    iconRight: <IconGreater24 />
  },
  {
    value: 'greater_or_equal',
    label: 'Greater Or Equal',
    iconLeft: <IconGreaterOrEqual24 />,
    iconRight: <IconGreaterOrEqual24 />
  },
  {
    value: 'less',
    label: 'Less',
    iconLeft: <IconLess24 />,
    iconRight: <IconLess24 />
  },
  {
    value: 'less_or_equal',
    label: 'Less Or Equal',
    iconLeft: <IconLessOrEqual24 />,
    iconRight: <IconLessOrEqual24 />
  },
  {
    value: 'multiple_choice',
    label: 'Multiple Choice',
    iconLeft: <IconMultipleChoice24 />,
    iconRight: <IconMultipleChoice24 />
  },
  {
    value: 'exception_contains',
    label: 'Exception Contains',
    iconLeft: <IconExceptionContains24 />,
    iconRight: <IconExceptionContains24 />
  },
  {
    value: 'not_equal',
    label: 'Not Equal',
    iconLeft: <IconNotEqualSign24 />,
    iconRight: <IconNotEqualSign24 />
  },
  {
    value: 'starting_contains',
    label: 'Starting Contains',
    iconLeft: <IconStartingContains24 />,
    iconRight: <IconStartingContains24 />
  }
];

export const optionsWithSubLabel: ISelectOption[] = [
  {
    value: 'finishing_contains',
    label: 'Finishing Contains',
    subLabel: 'Morbi laoreet, ex sed cursus fringilla, sapien leo lobortis est',
    iconRight: <IconFinishingContains24 />
  },
  {
    value: 'equals_sign',
    label: 'Equals Sign',
    disabled: true,
    subLabel: 'Cras ut lorem mauris',
    iconLeft: <IconEqualsSign24 />
  },
  {
    value: 'selection_contains',
    label: 'Selection Contains',
    subLabel: 'Aliquam luctus enim tortor',
    iconLeft: <IconSelectionContains24 />,
    iconRight: <IconSelectionContains24 />
  },
  {
    value: 'greater',
    label: 'Greater',
    subLabel: 'Donec mauris neque'
  },
  {
    value: 'greater_or_equal',
    label: 'Greater Or Equal',
    subLabel: 'Phasellus rutrum quis magna sed tincidunt'
  },
  {
    value: 'less',
    label: 'Less',
    subLabel: 'Quisque augue sem',
    iconLeft: <IconLess24 />
  },
  {
    value: 'less_or_equal',
    label: 'Less Or Equal',
    subLabel: 'Cras ut lorem mauris',
    iconRight: <IconLessOrEqual24 />
  }
];

export const optionsWithNesting: ISelectOption[] = [
  {
    value: 'finishing_contains',
    label: 'Finishing Contains',
    subLabel: 'Morbi laoreet, ex sed cursus fringilla, sapien leo lobortis est',
    iconRight: <IconFinishingContains24 />,
    options: options
  },
  {
    value: 'equals_sign',
    label: 'Equals Sign',
    disabled: true,
    subLabel: 'Cras ut lorem mauris',
    iconLeft: <IconEqualsSign24 />
  },
  {
    value: 'selection_contains',
    label: 'Selection Contains',
    subLabel: 'Aliquam luctus enim tortor',
    iconLeft: <IconSelectionContains24 />,
    iconRight: <IconSelectionContains24 />,
    options: options
  },
  {
    value: 'greater',
    label: 'Greater',
    subLabel: 'Donec mauris neque'
  },
  {
    value: 'greater_or_equal',
    label: 'Greater Or Equal',
    subLabel: 'Phasellus rutrum quis magna sed tincidunt'
  },
  {
    value: 'less',
    label: 'Less',
    subLabel: 'Quisque augue sem',
    iconLeft: <IconLess24 />
  },
  {
    value: 'less_or_equal',
    label: 'Less Or Equal',
    subLabel: 'Cras ut lorem mauris',
    iconRight: <IconLessOrEqual24 />,
    options: options
  }
];

export const optionWithColorfulIcons: ISelectOption[] = [
  {
    value: 'red-icon',
    label: <div>Red !</div>,
    iconLeft: <IconFinishingContains24 color="error" />,
    iconRight: <IconFinishingContains24 color="error" />
  },
  {
    value: 'yellow-icon',
    label: <div>Yellow !</div>,
    iconLeft: <IconFinishingContains24 color="warning" />,
    iconRight: <IconFinishingContains24 color="warning" />
  },
  {
    value: 'green-icon',
    label: 'Green !',
    iconLeft: <IconFinishingContains24 color="success" />,
    iconRight: <IconFinishingContains24 color="success" />
  },
  {
    value: 'combined-icon',
    label: 'Combined !',
    iconLeft: <IconFinishingContains24 color="primary" />,
    iconRight: <IconFinishingContains24 color="success" />
  }
];
