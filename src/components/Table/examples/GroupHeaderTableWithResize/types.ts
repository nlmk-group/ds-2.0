import { ECellStatus } from '@components/Table/Cell/types';

export interface IGroupWithResizeData {
  id: number;
  plantName: string;
  steel: number;
  iron: number;
  efficiency: number;
  status: ECellStatus;
}
