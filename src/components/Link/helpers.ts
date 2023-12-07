import { sizeMapping } from './enums';

export const typographyMapping = {
  [sizeMapping.h1]: 'Heading1',
  [sizeMapping.h2]: 'Heading2',
  [sizeMapping.h3]: 'Heading3',
  [sizeMapping.h4]: 'Heading4',
  [sizeMapping.sub1]: 'Subheading1',
  [sizeMapping.sub2]: 'Subheading2',
  [sizeMapping.sub3]: 'Subheading3',
  [sizeMapping.body]: 'Body',
  [sizeMapping.body1]: 'Body1',
  [sizeMapping.body2]: 'Body2',
  [sizeMapping.caption]: 'Caption'
};

export const getTypography = (str: sizeMapping) => {
  return typographyMapping[str] || 'Body1';
};
