import React, { FC } from 'react';

import Tooltip from '@components/Tooltip';

import { ILegendProps } from './types';

import { LegendContext } from './context';
import { ELegendType } from './enums';
import LegendEdit from './subcomponents/LegendEdit';
import LegendView from './subcomponents/LegendView';

/**
 * Компонент Legend используется для настройки цветов в таблицах/графике, и их отображение списком.
 * @component
 * @param {Object} props - Свойства компонента Legend.
 * @param {ILegendColor} [props.color] - (CSS Цвет & Custom компонент) для отображения и выбора цвета.
 * @param {ILegendColor[]} [props.colorList] - (CSS Цвет & Custom компонент) список цвета для выбора.
 * @param {ELegendType} [props.type=ELegendType.VIEW] - Тип компонента (ELegendType.VIEW | ELegendType.EDIT).
 * @param {string} [props.label] - Подпись у элемента Legend.
 * @param {function} [props.onColorChange] - Событие изменения цвета (val: ILegendColor) => void.
 * @param {string} [props.tooltipText=''] - Tooltip - текст.
 * @param {boolean} [props.isDisabled] - Запрет редактирования.
 * @param {boolean} [props.withPortal] - Dropdown - Использоваться createPortal для отображения DropdownMenu.
 * @param {string} [props.portalContainerId] - Dropdown - ID Контейнера для использования createPortal.
 * @param {CSSProperties} [props.menuStyle] - Dropdown - Стили DropdownMenu.
 * @param {string} [props.menuLabel] - Dropdown - Подпись при выборе цвета.
 * @returns {JSX.Element} Компонент Legend.
 */
const Legend: FC<ILegendProps> = ({ type = ELegendType.VIEW, label, tooltipText = '', ...rest }) => {
  return (
    <LegendContext.Provider value={rest}>
      <Tooltip title={tooltipText}>
        {type === ELegendType.VIEW ? <LegendView data-ui-legend-view-container label={label} /> : null}
        {type === ELegendType.EDIT ? <LegendEdit data-ui-legend-edit-container label={label} /> : null}
      </Tooltip>
    </LegendContext.Provider>
  );
};

export default Legend;
