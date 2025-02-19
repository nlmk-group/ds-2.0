import { ECellStatus } from '@components/Table/Cell/types';

export interface IExpandableData {
  id: number;
  name: string;
  age: number;
  status: ECellStatus;
  details?: string;
}