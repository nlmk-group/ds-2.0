/**
 * @type {EDnDFileType} orientationDnD
 * @type {EDnDStatusColor} statusColorDnD
 * @type {EDnDIconType} iconTypeDnD
 * @type {EDnDTitleSizeHelper} titleSizeHelperDnD
 * @type {EDnDDescriptionSizeHelper} descriptionSizeHelperDnD
 * @type {EDnDSpinnerSizeHelper} spinnerSizeHelperDnD
 * @type {EDnDPercentageSizeHelper} percentageSizeHelperDnD
 * @type {EDnDSpinnerWidthHelper} spinnerWidthHelperDnD
 */

export enum EDnDFileType {
  file = 'file',
  image = 'image',
  video = 'video'
}

export enum EDnDStatusColor {
  default = 'default',
  info = 'info',
  error = 'error',
  warning = 'warning'
}

export enum EDnDIconType {
  file = 'IconUploadFile32',
  image = 'IconUploadImage32',
  video = 'IconUploadVideo32'
}

export enum EDnDTitleSizeHelper {
  l = 'Heading3',
  m = 'Heading4',
  s = 'Heading4'
}

export enum EDnDDescriptionSizeHelper {
  l = 'Body1-Medium',
  m = 'Body2-Medium',
  s = 'Caption'
}

export enum EDnDSpinnerSizeHelper {
  l = '2xl',
  m = 'xl',
  s = 'l'
}

export enum EDnDPercentageSizeHelper {
  l = 'Heading3',
  m = 'Body1-Medium',
  s = 'Caption-Bold'
}

export enum EDnDSpinnerWidthHelper {
  l = '96px',
  m = '56px',
  s = '40px'
}
