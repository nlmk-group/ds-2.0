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
export enum EDnDSizes {
  l = 'l',
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
  l = 'Heading3',
  m = 'Heading4'
}

export enum EDnDDescriptionSizeHelper {
  l = 'Body1-Medium',
  m = 'Body2-Medium'
}

export enum EDnDSpinnerSizeHelper {
  l = '2xl',
  m = 'xl'
}

export enum EDnDPercentageSizeHelper {
  l = 'Heading3',
  m = 'Body1-Medium'
}

export enum EDnDSpinnerWidthHelper {
  l = '96px',
  m = '56px'
}
