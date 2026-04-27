/* eslint-disable @typescript-eslint/no-duplicate-enum-values --
   M/S — намеренные Figma-алиасы для l/m с тем же runtime-значением,
   чтобы переход на новый нейминг был обратно совместимым. */
export enum EDnDSizes {
  /** @deprecated Используйте `M` (соответствует Figma 'm', Big). Будет удалён в ближайших версиях. */
  l = 'l',
  /** @deprecated Используйте `S` (соответствует Figma 's', Middle). Будет удалён в ближайших версиях. */
  m = 'm',
  /** Big — основной размер (Figma 'm'). */
  M = 'l',
  /** Middle — средний размер (Figma 's'). */
  S = 'm'
}
/* eslint-enable @typescript-eslint/no-duplicate-enum-values */

export enum EDnDFileType {
  file = 'file',
  image = 'image',
  video = 'video'
}

export enum EDnDStatusColor {
  default = 'default',
  info = 'info',
  error = 'error'
}

export enum EDnDIconType {
  file = 'IconUploadFile32',
  image = 'IconUploadImage32',
  video = 'IconUploadVideo32'
}

/* eslint-disable @typescript-eslint/no-duplicate-enum-values --
   M/S — намеренные Figma-алиасы для l/m в helper-enum'ах. */
export enum EDnDTitleSizeHelper {
  /** @deprecated Используйте `M`. Будет удалён в ближайших версиях. */
  l = 'Heading3',
  /** @deprecated Используйте `S`. Будет удалён в ближайших версиях. */
  m = 'Heading4',
  M = 'Heading3',
  S = 'Heading4'
}

export enum EDnDDescriptionSizeHelper {
  /** @deprecated Используйте `M`. Будет удалён в ближайших версиях. */
  l = 'Body1-Medium',
  /** @deprecated Используйте `S`. Будет удалён в ближайших версиях. */
  m = 'Body2-Medium',
  M = 'Body1-Medium',
  S = 'Body2-Medium'
}

export enum EDnDSpinnerSizeHelper {
  /** @deprecated Используйте `M`. Будет удалён в ближайших версиях. */
  l = '2xl',
  /** @deprecated Используйте `S`. Будет удалён в ближайших версиях. */
  m = 'xl',
  M = '2xl',
  S = 'xl'
}

export enum EDnDPercentageSizeHelper {
  /** @deprecated Используйте `M`. Будет удалён в ближайших версиях. */
  l = 'Heading3',
  /** @deprecated Используйте `S`. Будет удалён в ближайших версиях. */
  m = 'Body1-Medium',
  M = 'Heading3',
  S = 'Body1-Medium'
}

export enum EDnDSpinnerWidthHelper {
  /** @deprecated Используйте `M`. Будет удалён в ближайших версиях. */
  l = '96px',
  /** @deprecated Используйте `S`. Будет удалён в ближайших версиях. */
  m = '56px',
  M = '96px',
  S = '56px'
}
/* eslint-enable @typescript-eslint/no-duplicate-enum-values */
