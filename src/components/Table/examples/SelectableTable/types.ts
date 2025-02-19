import { ECellStatus } from '@components/Table/Cell/types';

export interface ISelectableData {
  id: number;
  name: string;
  age: number;
  status: ECellStatus;
  productionDate: Date;
}
