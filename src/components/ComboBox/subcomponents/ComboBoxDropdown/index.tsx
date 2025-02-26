import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { Tooltip } from '@components/index';

import styles from '../../ComboBox.module.scss';

import { InputComboBox } from '..';
import { useDropdownHeight, useDropdownWidth } from '../../context';
import { useModal } from '../../hooks/useModal';
import { ResizableGrip } from '../../subcomponents';
import { IComboBoxProps } from '../../types';

const PADDING_SIZE = 16;

const ComboBoxDropdown = ({
  children,
  label,
  isDisabled = false,
  isResize = false,
  dropdownWidth,
  dropdownHeight,
  dropdownMinWidth,
  dropdownMinHeight,
  initialValue,
  displayEnumerated = false,
  displayChildCount = false,
  tooltipDescription,
  countOnlyLevel = 0,
  className,
  style,
  dropdownClassName,
  dropdownStyle,
  inputClassName,
  inputStyle
}: IComboBoxProps) => {
  const dropdownOptimalWidth = useDropdownWidth() ?? 150;
  const dropdownContextHeight = useDropdownHeight();

  const optimalDDHeight = dropdownContextHeight ? dropdownContextHeight.optimalHeight : 200;
  const minDDHeight = dropdownContextHeight ? dropdownContextHeight.minHeight : 150;

  const { isOpen, openModal: openDropdown, closeModal: closeDropdown } = useModal();

  const inputRef = useRef<HTMLInputElement>(null);
  const wrapInputRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const windowInnerWidth = window.innerWidth;

  const width = dropdownMinWidth ? dropdownMinWidth : dropdownOptimalWidth;
  const height = dropdownMinHeight ? dropdownMinHeight : optimalDDHeight;

  const inputPositions = inputRef.current?.getBoundingClientRect();
  const dropdownLeft = inputPositions?.left ?? 0;
  const availableWidth = windowInnerWidth - dropdownLeft;

  const dropdownTop = (inputPositions?.top ?? 0) + (inputPositions?.height ?? 0) + 8;
  const calculateDropdownMinWidth = Math.max(width, inputPositions?.width ?? 0);
  const calculateDropdownMinHeight = Math.max(height, inputPositions?.height ?? 0);
  const leftPosition = width > availableWidth ? dropdownLeft - PADDING_SIZE - (width - availableWidth) : dropdownLeft;

  const handleOutsideClick = (event: MouseEvent) => {
    const isInputClick = wrapInputRef.current?.contains(event.target as Node) ?? false;
    const isDropdownClick = dropdownRef.current?.contains(event.target as Node) ?? false;
    if (!isInputClick && !isDropdownClick) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const inputContent = (
    <InputComboBox
      inputRef={inputRef}
      isDisabled={isDisabled}
      isOpen={isOpen}
      label={label}
      onFocusSearchInput={openDropdown}
      onOpenClick={openDropdown}
      onCloseClick={closeDropdown}
      value={initialValue}
      displayEnumerated={displayEnumerated}
      displayChildCount={displayChildCount}
      countOnlyLevel={countOnlyLevel}
      className={inputClassName}
      style={inputStyle}
    />
  );

  return (
    <div className={`${styles.fullWidth} ${className || ''}`} style={style} ref={wrapInputRef}>
      {tooltipDescription && tooltipDescription.length > 0 ? (
        <Tooltip
          className={styles.tooltipWrapper}
          popupClassName={styles.popupText}
          placement="bottom"
          behavior="hover"
          description={
            Array.isArray(tooltipDescription)
              ? tooltipDescription.map(item => item.label).join(', ')
              : tooltipDescription
          }
          clickable
        >
          {inputContent}
        </Tooltip>
      ) : (
        inputContent
      )}
      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className={`${styles.dropdown} ${dropdownClassName || ''}`}
            style={{
              left: leftPosition,
              top: dropdownTop,
              height: dropdownHeight ? dropdownHeight : calculateDropdownMinHeight,
              width: dropdownWidth ? dropdownWidth : calculateDropdownMinWidth,
              minWidth: inputPositions?.width ?? calculateDropdownMinWidth,
              ...dropdownStyle
            }}
          >
            {isResize && (
              <ResizableGrip
                containerRef={dropdownRef}
                minWidth={inputPositions?.width ?? dropdownOptimalWidth}
                minHeight={minDDHeight}
              />
            )}
            {children}
          </div>,
          document.body
        )}
    </div>
  );
};

export default ComboBoxDropdown;
