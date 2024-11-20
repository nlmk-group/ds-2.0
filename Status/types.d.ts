import { TIconName } from '../Icon/IconsDirectory/unionType';
import { EStatusColor, EStatusFill, EStatusSize } from './enums';

export interface IStatusProps {
    icon: TIconName | JSX.Element;
    children: string;
    fill?: `${EStatusFill}`;
    color?: `${EStatusColor}`;
    size?: `${EStatusSize}`;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map