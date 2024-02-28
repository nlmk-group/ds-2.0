export const argsTypes = {
  variant: {
    description: 'Вариант текста',
    table: {
      defaultValue: {
        summary: 'Body1'
      }
    },
    options: [
      'Heading1',
      'Subheading1',
      'Heading2',
      'Subheading2',
      'Subheading2-Medium',
      'Heading3',
      'Subheading3',
      'Subheading3-Medium',
      'Heading4',
      'Body',
      'Body-Medium',
      'Body1',
      'Body1-Medium',
      'Body1Mono-Medium',
      'Body1Mono-Bold',
      'Body1-Bold',
      'Body2',
      'Body2-Medium',
      'Body2Mono-Medium',
      'Body2Mono-Bold',
      'Body2-Bold',
      'Caption',
      'Caption-Medium',
      'Caption-Bold',
      'CaptionMono',
      'CaptionMono-Medium',
      'CaptionMono-Bold'
    ],
    control: { type: 'select' }
  },
  color: {
    description: 'Цвет текста',
    table: {
      defaultValue: {
        summary: 'inherit'
      },
      type: {
        summary: 'string'
      }
    },
    options: [
      'primary',
      'secondary',
      'disabled',
      'hint',
      'error',
      'success',
      'warning',
      'info',
      'textSecondary',
      'textPrimary',
      'inherit'
    ],
    control: { type: 'select' }
  }
};
