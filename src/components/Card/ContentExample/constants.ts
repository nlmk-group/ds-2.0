import { action } from '@storybook/addon-actions';

export const selectorOptions = [
  {
    label: 'C++',
    value: 'C++'
  },
  {
    label: 'C#',
    value: 'C#'
  },
  {
    disabled: true,
    label: 'Swift',
    value: 'Swift'
  },
  {
    label: 'Java',
    value: 'Java'
  },
  {
    label: 'Python',
    value: 'Python'
  },
  {
    label: 'Kotlin',
    value: 'Kotlin'
  }
];

export const descriptionExample =
  'Кириллица важна Следует отметить, что перспективное планирование предполагает независимые способы реализации переосмысления внешнеэкономических политик. С другой стороны, семантический разбор внешних противодействий предопределяет высокую востребованность экономической целесообразности принимаемых решений. Являясь всего лишь частью общей картины, представители современных социальных резервов формируют глобальную экономическую сеть и при этом — объявлены нарушающими общечеловеческие нормы этики и морали. Таким образом, синтетическое тестирование предоставляет широкие возможности для укрепления моральных ценностей.';

export const primaryButton = {
  label: 'Принять',
  onClick: action('onClick, Принять')
};

export const secondaryButton = {
  label: 'Отменить',
  onClick: action('onClick, Отменить')
};

export const imageURL =
  'https://assets.euromoneydigital.com/dims4/default/38fddd1/2147483647/strip/true/crop/3576x2000+0+0/resize/840x470!/quality/90/?url=http%3A%2F%2Feuromoney-brightspot.s3.amazonaws.com%2Ff5%2Fb4%2F9835b4a04b02a0ac15aebbe9c774%2Fnlmk-alamy-23march22.jpg';

export const badges = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'SQL', 'Jira'];

export const selector = {
  label: 'Programming languages',
  options: selectorOptions,
  onSelectionChange: action('onSelectionChange')
};
