const spanAttributes = [
  'class',
  'id',
  'style',
  'title',
  'lang',
  'dir',
  'data',
  'aria',
  'tabindex',
  'hidden',
  'accesskey',
  'draggable',
  'spellcheck',
  'contenteditable'
];
const list = [
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
];

export const argsTypes = {
  '*': {
    description: `У компонента есть возможность принимать все атрибуты, которые есть у span элемента – <b>${spanAttributes.join(
      ' | '
    )}</b>`,
    table: {
      defaultValue: {
        summary: '–'
      },
      type: {
        summary: '–'
      }
    }
  },
  'variant': {
    description: `Вариант текста - <b>${list.join(' | ')}</b>`,
    table: {
      defaultValue: {
        summary: 'Body1'
      },
      type: {
        summary: '–'
      }
    },
    control: { type: 'select' }
  },
  'color': {
    description: 'Цвет текста',
    table: {
      defaultValue: {
        summary: '–'
      },
      type: {
        summary: 'string'
      }
    },
    control: { type: 'color' }
  }
};
