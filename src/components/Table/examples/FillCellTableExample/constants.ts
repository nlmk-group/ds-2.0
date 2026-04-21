export interface IPlanRow {
  id: string;
  brigade: string;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;
}

export const DAY_KEYS: (keyof IPlanRow)[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
export const DAY_LABELS: Record<string, string> = {
  mon: 'Пн',
  tue: 'Вт',
  wed: 'Ср',
  thu: 'Чт',
  fri: 'Пт',
  sat: 'Сб',
  sun: 'Вс'
};

export const initialData: IPlanRow[] = [
  { id: 'b1', brigade: 'Бригада №1', mon: 60, tue: 60, wed: 60, thu: 60, fri: 60, sat: 40, sun: 0 },
  { id: 'b2', brigade: 'Бригада №2', mon: 55, tue: 55, wed: 55, thu: 55, fri: 55, sat: 40, sun: 0 },
  { id: 'b3', brigade: 'Бригада №3', mon: 50, tue: 50, wed: 50, thu: 50, fri: 50, sat: 30, sun: 0 },
  { id: 'b4', brigade: 'Бригада №4', mon: 65, tue: 65, wed: 65, thu: 65, fri: 65, sat: 50, sun: 0 }
];
