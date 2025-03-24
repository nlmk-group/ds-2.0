import React, { FC, SyntheticEvent, useContext } from 'react';

import clsx from 'clsx';

import styles from '../SegmentButtonGroup.module.scss';

import { SegmentButtonGroupContext } from '../context';
import { ESegmentButtonGroupSizes } from '../enums';
import type { ISegmentButtonProps } from '../types';

/**
 * Компонент `SegmentButton` представляет собой одну кнопку внутри `SegmentButtonGroup`.
 * Поддерживает состояние `active`, переключение состояний и обработку кликов.
 *
 * @component
 *
 * @param {ISegmentButtonProps} props - Свойства компонента `SegmentButton`.
 * @param {string} [props.className] - Дополнительный CSS класс для стилизации кнопки.
 * @param {ReactNode} props.children - Контент кнопки (текст, иконки и пр.).
 * @param {Function} [props.onClick] - Коллбэк, вызываемый при клике по кнопке.
 * @param {Function} [props.toggleButton] - Функция переключения `active` состояния кнопки.
 * @param {number} props.buttonIndex - Индекс кнопки в группе для определения её `active` состояния.
 *
 * @returns {JSX.Element} Компонент кнопки `SegmentButton`, работающий внутри `SegmentButtonGroup`.
 */
const SegmentButton: FC<ISegmentButtonProps> = ({ children, className, onClick, toggleButton, buttonIndex }) => {
  const { disabled, size, activeId } = useContext(SegmentButtonGroupContext);
  const active = activeId === buttonIndex;
  // Обработчик клика
  const handleClick = (e: SyntheticEvent) => {
    if (disabled) return;

    toggleButton?.();
    onClick?.(e);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={clsx(
        styles.segmentButton,
        active && styles.active,
        size === ESegmentButtonGroupSizes.s && styles['segmentButton-s'],
        className
      )}
      data-ui-segment-button
      data-testid="SEGMENT_BUTTON"
    >
      {children}
    </button>
  );
};

export default SegmentButton;
