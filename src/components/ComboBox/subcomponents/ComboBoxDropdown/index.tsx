import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Tooltip } from '@components/index';
import { autoUpdate, flip, limitShift, offset, shift, useFloating } from '@floating-ui/react';
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
  portalContainerId = 'root',
  autoFocusSearch = false,
  autoExpandOnSearch = false
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
  const [isPositioned, setIsPositioned] = useState(false);

  const width = dropdownMinWidth ? dropdownMinWidth : dropdownOptimalWidth;
  const height = dropdownMinHeight ? dropdownMinHeight : optimalDDHeight;
  const calculateDropdownMinWidth = Math.max(width, inputRef.current?.offsetWidth || 0);
  const calculateDropdownMinHeight = Math.max(height, inputRef.current?.offsetHeight || 0);

  const { refs, floatingStyles, placement } = useFloating({
    placement: 'bottom-start',
    middleware: [offset(4), flip({ fallbackPlacements: ['top-start'] }), shift({ limiter: limitShift(), padding: 8 })],
    whileElementsMounted: autoUpdate
  });

  useEffect(() => {
    if (wrapInputRef.current) {
      refs.setReference(wrapInputRef.current);
    }
  }, [wrapInputRef, refs]);

  useEffect(() => {
    if (popperElement) {
      refs.setFloating(popperElement);
      requestAnimationFrame(() => {
        setIsPositioned(true);
      });
    } else {
      setIsPositioned(false);
    }
  }, [popperElement, refs]);

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
      minWidth: inputRef.current?.offsetWidth ?? calculateDropdownMinWidth,
      visibility: (isPositioned ? 'visible' : 'hidden') as CSSProperties['visibility']
    };

    if (withPortal) {
      return {
        ...baseStyles,
        ...floatingStyles,
        ...dropdownStyle
      };
    }

    return {
      ...baseStyles,
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 1000,
      marginTop: '4px',
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

  const enhancedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && typeof child.type !== 'string') {
      return React.cloneElement(child, {
        autoFocusSearch,
        autoExpandOnSearch,
        isDropdownOpen: isOpen
      } as any);
    }
    return child;
  });

  const dropdownContent = isOpen && (
    <div
      ref={el => {
        dropdownRef.current = el;
        if (el) {
          setPopperElement(el);
        }
      }}
      className={clsx(styles.dropdown, dropdownClassName)}
      style={getDropdownStyles() as CSSProperties}
      data-popper-placement={placement}
    >
      {isResize && (
        <ResizableGrip
          containerRef={dropdownRef}
          minWidth={inputRef.current?.offsetWidth ?? dropdownOptimalWidth}
          minHeight={minDDHeight}
        />
      )}
      {enhancedChildren}
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
