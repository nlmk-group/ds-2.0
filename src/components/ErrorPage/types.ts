import { error403, error404, Default } from './components';

export const errorImagesByCode = {
  404: error404,
  403: error403,
  default: Default
} as const;

export interface ErrorPageProps {
  errorCode?: number;
  description?: string;
  hint?: string;
}

export type ErrorKeys = keyof typeof errorImagesByCode;
