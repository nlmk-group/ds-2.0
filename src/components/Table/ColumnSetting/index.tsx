import React, { FC } from 'react';

import {
  Button,
  IconDragIndicatorDotsFilled24,
  IconEyeOffOutlined24,
  IconEyeOutlined24,
  IconPushPinFilled24,
  IconPushPinOutlined24,
  IconRightColumnArrowFilled24,
  IconRightColumnArrowOutlined24,
  IconStackCollapsed24,
  IconStackExpandedTriangleDown24,
  Typography
} from '@components/index';
import clsx from 'clsx';

import { IColumnSettingProps } from './types';

import styles from './ColumnSetting.module.scss';

/**
 * Компонент элемента настроек колонки таблицы.
 * Используется для отображения одной колонки в панели настроек таблицы.
 * Поддерживает функции изменения видимости, закрепления и перетаскивания.
 */
const ColumnSetting: FC<IColumnSettingProps> = ({
  id,
  title,
  visible,
  pinned,
  hasChildren = false,
  expanded = false,
  draggable = true,
  disabled = false,
  highlighted = false,
  onVisibilityChange,
  onPinChange,
  onExpandChange,
  dragHandleProps,
  className
}) => {
  const isPinnedLeft = pinned === 'left';
  const isPinnedRight = pinned === 'right';

  const handleToggleVisibility = () => {
    if (!disabled) {
      onVisibilityChange(!visible);
    }
  };

  const handleTogglePinLeft = () => {
    if (!disabled && onPinChange) {
      onPinChange(isPinnedLeft ? false : 'left');
    }
  };

  const handleTogglePinRight = () => {
    if (!disabled && onPinChange) {
      onPinChange(isPinnedRight ? false : 'right');
    }
  };

  const handleExpandToggle = () => {
    if (hasChildren && onExpandChange) {
      onExpandChange();
    }
  };

  return (
    <div
      className={clsx(styles.columnItem, disabled && styles.disabled, highlighted && styles.highlighted, className)}
      data-testid={`column-item-${id}`}
    >
      {draggable && (
        <div className={styles.dragHandle} {...(!disabled ? dragHandleProps : {})}>
          <Button
            type="button"
            color="ghost"
            variant="secondary"
            size="s"
            iconButton={<IconDragIndicatorDotsFilled24 htmlColor={'var(--brand-sapphire-60)'} />}
          />
        </div>
      )}

      {hasChildren && (
        <div className={styles.expandIcon} onClick={disabled ? undefined : handleExpandToggle}>
          {expanded ? (
            <IconStackExpandedTriangleDown24 htmlColor="var(--steel-90)" />
          ) : (
            <IconStackCollapsed24 htmlColor="var(--steel-90)" />
          )}
        </div>
      )}

      <Typography
        variant="Body1-Medium"
        color="var(--steel-90)"
        className={styles.columnTitle}
        onClick={hasChildren && !disabled ? handleExpandToggle : undefined}
        title={title}
      >
        {title}
      </Typography>

      <div className={styles.controlButtons}>
        <Button
          variant="secondary"
          color="ghost"
          size="s"
          disabled={disabled}
          title={visible ? 'Скрыть' : 'Показать'}
          onClick={handleToggleVisibility}
          iconButton={
            visible ? (
              <IconEyeOutlined24 htmlColor="var(--brand-sapphire-60)" />
            ) : (
              <IconEyeOffOutlined24 htmlColor="var(--brand-sapphire-60)" />
            )
          }
        />

        {!hasChildren && onPinChange && (
          <>
            <Button
              variant="secondary"
              color="ghost"
              size="s"
              disabled={disabled || isPinnedRight}
              title={isPinnedLeft ? 'Открепить слева' : 'Закрепить слева'}
              onClick={handleTogglePinLeft}
              iconButton={
                isPinnedLeft ? (
                  <IconPushPinFilled24 htmlColor="var(--brand-sapphire-60)" />
                ) : (
                  <IconPushPinOutlined24 htmlColor="var(--brand-sapphire-60)" />
                )
              }
            />

            <Button
              variant="secondary"
              color="ghost"
              size="s"
              disabled={disabled || isPinnedLeft}
              title={isPinnedRight ? 'Открепить справа' : 'Закрепить справа'}
              onClick={handleTogglePinRight}
              iconButton={
                isPinnedRight ? (
                  <IconRightColumnArrowFilled24 htmlColor="var(--brand-sapphire-60)" />
                ) : (
                  <IconRightColumnArrowOutlined24 htmlColor="var(--brand-sapphire-60)" />
                )
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ColumnSetting;
