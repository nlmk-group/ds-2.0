import { DebouncedFunc } from 'lodash';
import { IUseScrollProps } from './types';

export declare const useScrollPagination: ({ wrapperRef, targetRef, callback, canLoadMore, isPortalMounted }: IUseScrollProps) => void;
export declare const useDebounce: <T extends (...args: any[]) => void>(delay: number, callback?: T | undefined) => DebouncedFunc<(...args: Parameters<T>) => void>;
//# sourceMappingURL=hooks.d.ts.map