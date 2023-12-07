import { Breadcrumb } from './types';
import { targetMapping } from './enums'

export const breadcrumbsSimple: Breadcrumb[] = [
  {
    href: 'https://developer.mozilla.org/en-US/',
    label: 'MDN'
  },
  {
    href: 'https://www.geeksforgeeks.org/',
    label: 'Geeks For Geeks',
    active: true
  }
];

export const breadcrumbs: Breadcrumb[] = [
  {
    href: 'https://developer.mozilla.org/en-US/',
    label: 'MDN'
  },
  {
    href: 'https://www.lipsum.com/',
    label: 'Lorem Ipsum'
  },
  {
    href: 'https://www.w3schools.com/',
    label: 'W3 Schools'
  },
  {
    href: 'https://css-tricks.com/',
    label: 'CSS Tricks'
  },
  {
    href: 'https://www.geeksforgeeks.org/',
    label: 'Geeks For Geeks',
    active: true
  }
];

export const breadcrumbsThreeOptions: Breadcrumb[] = [
  {
    href: 'https://developer.mozilla.org/en-US/',
    label: 'MDN'
  },
  {
    href: 'https://www.w3schools.com/',
    label: 'W3'
  },
  {
    href: 'https://css-tricks.com/',
    label: 'CSS'
  }
];

export const breadcrumbsTarget: Breadcrumb[] = [
  {
    href: 'https://www.lipsum.com/',
    label: `${targetMapping._blank}`,
    target: targetMapping._blank
  },
  {
    href: 'https://www.lipsum.com/',
    label: `${targetMapping._parent}`,
    target: targetMapping._parent
  },
  {
    href: 'https://www.lipsum.com/',
    label: `${targetMapping._self}`,
    target: targetMapping._self
  },
  {
    href: 'https://www.lipsum.com/',
    label: `${targetMapping._top}`,
    target: targetMapping._top
  }
]