/**
 * @type {orientationMapping} targetMapping
 * @type {gradientMapping} gradientMapping
 * @type {badgeSizeMappingHelper} badgeSizeMappingHelper
 * @type {iconSizeMappingHelper} iconSizeMappingHelper
 */

export enum orientationMapping {
  vertical = 'vertical',
  horizontal = 'horizontal'
}

export enum gradientMapping {
  primary = 'primary',
  outline = 'outline',
  text = 'text'
}

// taken from @components/declaration sizesMapping
export enum badgeSizeMappingHelper {
  m = 'l',
  s = 'm',
  xs = 's'
}

export enum iconSizeMappingHelper {
  m = 32,
  s = 24,
  xs = 16
}
