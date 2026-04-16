/** Ориентация табов */
export enum ETabsOrientation {
  /** Горизонтальное расположение (по умолчанию) */
  horizontal = 'horizontal',
  /** Вертикальное расположение */
  vertical = 'vertical'
}

/** Позиция панели табов (для вертикального режима). По умолчанию — left */
export enum ETabsTabPosition {
  /** Табы слева от контента (по умолчанию) */
  left = 'left',
  /** Табы справа от контента */
  right = 'right'
}

/** Позиция активного индикатора. По умолчанию зависит от ориентации: horizontal → bottom, vertical+left → right, vertical+right → left */
export enum ETabsIndicatorPosition {
  /** Сверху */
  top = 'top',
  /** Снизу (по умолчанию для горизонтальных табов) */
  bottom = 'bottom',
  /** Слева (по умолчанию для vertical + tabPosition=right) */
  left = 'left',
  /** Справа (по умолчанию для vertical + tabPosition=left) */
  right = 'right'
}
