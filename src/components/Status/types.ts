import { TIconName } from '@components/Icon/IconsDirectory/unionType';
import { EStatusColor, EStatusFill, EStatusSize } from '@components/Status/enums';

export interface IStatusProps {
  icon: TIconName | JSX.Element;
  children: string;
  fill?: `${EStatusFill}`;
  color?: `${EStatusColor}`;
  size?: `${EStatusSize}`;
  className?: string;
}
