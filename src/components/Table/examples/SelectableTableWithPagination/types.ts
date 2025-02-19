import { ECellStatus } from '@components/Table/Cell/types';

export interface ISelectionWithPagination {
  id: number;
  name: string;
  category: string;
  ironContent: number;
  status: ECellStatus;
  lastUpdated: Date;
}
