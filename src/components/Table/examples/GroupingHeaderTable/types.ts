import { ECellStatus } from '@components/Table/Cell/types';

export interface IGroupingData {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: ECellStatus;
  progress: number;
}
