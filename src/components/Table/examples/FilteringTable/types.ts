export type TData = {
  id: number;
  name: string;
  amount: number;
  status: string;
  category: string;
  price: number;
  lastUpdate: Date;
  supplier: string;
  quality: number;
};

export interface IFilterValue {
  type: string;
  value: string | number;
}
