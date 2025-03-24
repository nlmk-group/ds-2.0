import React, { FC, MouseEventHandler, useCallback } from 'react';

import Button from '@components/Button';
import Icon from '@components/Icon';
import Typography from '@components/Typography';
import clsx from 'clsx';

import { IFilterTipProps } from './types';

import styles from './FilterTip.module.scss';

import { WITHOUT_ID } from './constants';
import { EFilterTipSize } from './enums';

const stylesSizeMap: Record<EFilterTipSize, string> = {
  [EFilterTipSize.m]: styles['container--medium'],
  [EFilterTipSize.s]: styles['container--small']
};

/**
 * Компонент FilterTip используется для отображения текущих фильтров и их состояние.
 * @component
 * @param {Object} props - Свойства компонента FilterTip.
 * @param {string} [props.id] - Идентификатор текущего FilterTip.
 * @param {string} [props.text] - Текст внутри FilterTip.
 * @param {boolean} [props.isDisabled] - Недоступен для выбора и удаления.
 * @param {function} [props.onDelete] - Событие нажатия на иконку крестика.
 * @param {boolean} [props.isWithoutCancelIcon] - Отображать FilterTip без кнопки удаления.
 * @param {boolean} [props.isActive] - Активен ли FilterTip.
 * @param {function} [props.onClick] - Событие нажатия на FilterTip.
 * @param {EFilterTipSize} [props.size] - Размер FilterTip.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @returns {JSX.Element} Компонент FilterTip.
 */
const FilterTip: FC<IFilterTipProps> = ({
  id: idProps,
  text,
  isDisabled,
  onDelete,
  isWithoutCancelIcon,
  isActive,
  onClick,
  size = EFilterTipSize.s,
  className: classNameProps
}) => {
  /**
   * Идентификатор компонента
   */
  const id = idProps ?? WITHOUT_ID;
  /**
   * Нажатие на Cancel Icon компонента
   */
  const onClickCancel: MouseEventHandler<HTMLButtonElement> = useCallback(
    e => {
      e.stopPropagation();
      e.preventDefault();
      onDelete?.(id);
    },
    [onDelete, id]
  );

  /**
   * Нажатие на сам компонент
   */
  const onClickHandler: MouseEventHandler<HTMLDivElement> = useCallback(
    e => {
      e.stopPropagation();
      e.preventDefault();
      onClick?.(id);
    },
    [onClick, id]
  );

  // ClassNames компонента
  const className = clsx(
    styles.container,
    isDisabled ? styles['container--disabled'] : {},
    isActive ? styles['container--active'] : {},
    isWithoutCancelIcon ? styles['container--without-cancel'] : {},
    stylesSizeMap[size],
    classNameProps
  );
  // htmlColor иконки закрытия компонента
  const htmlColorIcon = isActive ? 'var(--spectrum-sky-50)' : 'var(--steel-60)';
  // Цвет текста внутри Typography
  const typographyColor = isActive ? 'var(--unique-bluewhite)' : 'var(--steel-90)';

  return (
    <div
      className={className}
      onClick={isDisabled ? undefined : onClickHandler}
      data-ui-filter-tip
      data-testid={`${id}_filter_tip`}
    >
      <Typography color={typographyColor} variant="Body1-Bold" className="filter-tip-text">
        {text ?? ''}
      </Typography>
      {isWithoutCancelIcon ? null : (
        <Button
          type="button"
          id="cancel-button"
          className={clsx(styles['cancel-button'], 'filter-tip-cancel-button')}
          color="grey"
          variant="primary"
          data-testid={`${id}_filter_tip_cancel`}
          disabled={isDisabled}
          onClick={isDisabled ? undefined : onClickCancel}
          iconButton={<Icon name="IconCancelFilled24" htmlColor={htmlColorIcon} />}
          data-ui-filter-tip-cancel
        />
      )}
    </div>
  );
};

export default FilterTip;
