/**
 * @type {fileTypeMapping} orientationMapping
 * @type {statusColorMapping} statusColorMapping
 * @type {iconTypeMapping} iconTypeMapping
 * @type {titleSizeHelperMapping} titleSizeHelperMapping
 * @type {descriptionSizeHelperMapping} descriptionSizeHelperMapping
 * @type {spinnerSizeHelperMapping} spinnerSizeHelperMapping
 * @type {percentageSizeHelperMapping} percentageSizeHelperMapping
 * @type {spinnerWidthHelperMapping} spinnerWidthHelperMapping
 */

export enum fileTypeMapping {
  file = 'file',
  image = 'image',
  video = 'video'
}

export enum statusColorMapping {
  default = 'default',
  info = 'info',
  error = 'error',
  warning = 'warning'
}

export enum iconTypeMapping {
  file = 'IconUploadFile32',
  image = 'IconUploadImage32',
  video = 'IconUploadVideo32'
}

export enum titleSizeHelperMapping {
  l = 'Heading3',
  m = 'Heading4',
  s = 'Heading4'
}

export enum descriptionSizeHelperMapping {
  l = 'Subheading3',
  m = 'Caption',
  s = 'Caption'
}

export enum spinnerSizeHelperMapping {
  l = 'xxl',
  m = 'xl',
  s = 'l'
}

export enum percentageSizeHelperMapping {
  l = 'Heading3',
  m = 'Body1-Medium',
  s = 'Caption-Bold'
}

export enum spinnerWidthHelperMapping {
  l = '96px',
  m = '56px',
  s = '40px'
}
