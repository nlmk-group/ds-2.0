/**
 * @type {fileTypeDnD} orientationDnD
 * @type {statusColorDnD} statusColorDnD
 * @type {iconTypeDnD} iconTypeDnD
 * @type {titleSizeHelperDnD} titleSizeHelperDnD
 * @type {descriptionSizeHelperDnD} descriptionSizeHelperDnD
 * @type {spinnerSizeHelperDnD} spinnerSizeHelperDnD
 * @type {percentageSizeHelperDnD} percentageSizeHelperDnD
 * @type {spinnerWidthHelperDnD} spinnerWidthHelperDnD
 */

export enum EFileTypeDnD {
  file = 'file',
  image = 'image',
  video = 'video'
}

export enum EStatusColorDnD {
  default = 'default',
  info = 'info',
  error = 'error',
  warning = 'warning'
}

export enum EIconTypeDnD {
  file = 'IconUploadFile32',
  image = 'IconUploadImage32',
  video = 'IconUploadVideo32'
}

export enum ETitleSizeHelperDnD {
  l = 'Heading3',
  m = 'Heading4',
  s = 'Heading4'
}

export enum EDescriptionSizeHelperDnD {
  l = 'Body1-Medium',
  m = 'Body2-Medium',
  s = 'Caption'
}

export enum ESpinnerSizeHelperDnD {
  l = '2xl',
  m = 'xl',
  s = 'l'
}

export enum EPercentageSizeHelperDnD {
  l = 'Heading3',
  m = 'Body1-Medium',
  s = 'Caption-Bold'
}

export enum ESpinnerWidthHelperDnD {
  l = '96px',
  m = '56px',
  s = '40px'
}
