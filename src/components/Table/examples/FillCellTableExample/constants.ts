export const DAY_LABELS = {
  mon: 'Пн',
  tue: 'Вт',
  wed: 'Ср',
  thu: 'Чт',
  fri: 'Пт',
  sat: 'Сб',
  sun: 'Вс'
} as const;

export type TDayKey = keyof typeof DAY_LABELS;

export const DAY_KEYS = Object.keys(DAY_LABELS) as TDayKey[];

export type IPlanRow = {
  id: string;
  brigade: string;
} & Record<TDayKey, number>;

export const initialData: IPlanRow[] = [
  { id: 'b1', brigade: 'Бригада №1', mon: 60, tue: 60, wed: 60, thu: 60, fri: 60, sat: 40, sun: 0 },
  { id: 'b2', brigade: 'Бригада №2', mon: 55, tue: 55, wed: 55, thu: 55, fri: 55, sat: 40, sun: 0 },
  { id: 'b3', brigade: 'Бригада №3', mon: 50, tue: 50, wed: 50, thu: 50, fri: 50, sat: 30, sun: 0 },
  { id: 'b4', brigade: 'Бригада №4', mon: 65, tue: 65, wed: 65, thu: 65, fri: 65, sat: 50, sun: 0 }
];
