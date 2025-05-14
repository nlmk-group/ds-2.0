import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import { Tooltip } from '@components/index';
import clsx from 'clsx';

import styles from '../../ComboBox.module.scss';

import { InputComboBox } from '..';
import { useDropdownHeight, useDropdownWidth } from '../../context';
import { useModal } from '../../hooks/useModal';
import { ResizableGrip } from '../../subcomponents';
import { IComboBoxProps } from '../../types';

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
  inputStyle,
  withPortal = false,
  portalContainerId = 'root'
}: IComboBoxProps) => {
  const dropdownOptimalWidth = useDropdownWidth() ?? 150;
  const dropdownContextHeight = useDropdownHeight();

  const optimalDDHeight = dropdownContextHeight ? dropdownContextHeight.optimalHeight : 200;
  const minDDHeight = dropdownContextHeight ? dropdownContextHeight.minHeight : 150;

  const { isOpen, openModal: openDropdown, closeModal: closeDropdown } = useModal();

  const inputRef = useRef<HTMLInputElement>(null);
  const wrapInputRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const width = dropdownMinWidth ? dropdownMinWidth : dropdownOptimalWidth;
  const height = dropdownMinHeight ? dropdownMinHeight : optimalDDHeight;
  const calculateDropdownMinWidth = Math.max(width, inputRef.current?.offsetWidth || 0);
  const calculateDropdownMinHeight = Math.max(height, inputRef.current?.offsetHeight || 0);

  const { styles: popperStyles, attributes } = usePopper(wrapInputRef.current, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top-start']
        }
      },
      {
        name: 'preventOverflow',
        options: {
          boundary: 'clippingParents',
          padding: 8
        }
      },
      {
        name: 'offset',
        options: {
          offset: [0, 8] // [горизонтальный, вертикальный] отступ в пикселях
        }
      }
    ]
  });

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
  }, []);

  const getDropdownStyles = () => {
    const baseStyles = {
      height: dropdownHeight ? dropdownHeight : calculateDropdownMinHeight,
      width: dropdownWidth ? dropdownWidth : calculateDropdownMinWidth,
      minWidth: inputRef.current?.offsetWidth ?? calculateDropdownMinWidth
    };

    if (withPortal) {
      return {
        ...baseStyles,
        ...popperStyles.popper,
        ...dropdownStyle
      };
    }

    return {
      ...baseStyles,
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 1000,
      marginTop: '8px',
      ...dropdownStyle
    };
  };

  const inputContent = (
    <InputComboBox
      inputRef={inputRef}
      isDisabled={isDisabled}
      isOpen={isOpen}
      label={label}
      onFocusSearchInput={openDropdown}
      onOpenClick={openDropdown}
      onCloseClick={closeDropdown}
      initialValue={initialValue}
      displayEnumerated={displayEnumerated}
      displayChildCount={displayChildCount}
      countOnlyLevel={countOnlyLevel}
      className={inputClassName}
      style={inputStyle}
    />
  );

  const dropdownContent = isOpen && (
    <div
      ref={el => {
        dropdownRef.current = el;
        if (withPortal && el) {
          setPopperElement(el);
        }
      }}
      className={clsx(styles.dropdown, dropdownClassName)}
      style={getDropdownStyles() as CSSProperties}
      {...(withPortal ? attributes.popper : {})}
    >
      {isResize && (
        <ResizableGrip
          containerRef={dropdownRef}
          minWidth={inputRef.current?.offsetWidth ?? dropdownOptimalWidth}
          minHeight={minDDHeight}
        />
      )}
      {children}
    </div>
  );

  return (
    <div className={clsx(styles.fullWidth, className)} style={style} ref={wrapInputRef}>
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

      {withPortal && isOpen
        ? createPortal(dropdownContent, document.getElementById(portalContainerId) || document.body)
        : dropdownContent}
    </div>
  );
};

export default ComboBoxDropdown;
