/* eslint-disable @typescript-eslint/no-duplicate-enum-values --
   l/m — алиасы для M/S. */
export enum EDnDSizes {
  /** Big — основной размер (Figma 'm'). */
  M = 'l',
  /** Middle — средний размер (Figma 's'). */
  S = 'm',
  /** Алиас для M. */
  l = 'l',
  /** Алиас для S. */
  m = 'm'
}

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

export enum EDnDTitleSizeHelper {
  M = 'Heading3',
  S = 'Heading4',
  /** Алиас для M. */
  l = 'Heading3',
  /** Алиас для S. */
  m = 'Heading4'
}

export enum EDnDDescriptionSizeHelper {
  M = 'Body1-Medium',
  S = 'Body2-Medium',
  /** Алиас для M. */
  l = 'Body1-Medium',
  /** Алиас для S. */
  m = 'Body2-Medium'
}

export enum EDnDSpinnerSizeHelper {
  M = '2xl',
  S = 'xl',
  /** Алиас для M. */
  l = '2xl',
  /** Алиас для S. */
  m = 'xl'
}

export enum EDnDPercentageSizeHelper {
  M = 'Heading3',
  S = 'Body1-Medium',
  /** Алиас для M. */
  l = 'Heading3',
  /** Алиас для S. */
  m = 'Body1-Medium'
}

export enum EDnDSpinnerWidthHelper {
  M = '96px',
  S = '56px',
  /** Алиас для M. */
  l = '96px',
  /** Алиас для S. */
  m = '56px'
}
/* eslint-enable @typescript-eslint/no-duplicate-enum-values */
