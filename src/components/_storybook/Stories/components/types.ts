/**
 * Props interface for a component
 * @property {string} title - Title of the component
 * @property {string} description - Description of the component
 * @property {boolean} isBeta - Whether the component is in beta or not
 * @property {boolean} isStable - Whether the component is stable or not
 * @property {string} figmaLink - Link to the Figma design of the component
 * @property {string} codeLink - Link to the code implementation of the component
 */
export interface HeaderProps {
  title?: string;
  description?: string;
  isBeta?: boolean;
  isStable?: boolean;
  figmaLink?: string;
  codeLink?: string;
}
