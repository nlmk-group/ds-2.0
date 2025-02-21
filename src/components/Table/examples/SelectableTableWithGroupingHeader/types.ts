export enum EStatus {
  InProcess,
  Done
}

export interface ISelectionWithGrouping {
  id: number; // Идентификатор записи
  name: string; // Название сырья
  plan: number; // План (т)
  fact: number; // Факт (т)
  enterprise: string; // Предприятие
  status: EStatus; // Статус
}
