import { default as React } from '../../../node_modules/react';
import { IGrid } from './types';

declare const Grid: {
    ({ children, ...props }: IGrid): React.JSX.Element;
    Column: ({ children, ...props }: import('../Box/types').IBox) => React.JSX.Element;
    Row: ({ children, ...props }: import('../Box/types').IBox) => React.JSX.Element;
};
export default Grid;
//# sourceMappingURL=index.d.ts.map