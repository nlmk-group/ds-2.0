import { createContext } from 'react';

export interface IDocumentedProp {
  description: string;
  required: boolean;
  type: { name: string; raw?: string; value?: { value: string | number }[] };
  defaultValue?: { value: unknown } | null;
}

// react-docgen-typescript attaches this metadata to the component used by the MDX page.
export const ComponentReference = createContext<unknown>(null);

export function getComponentDocs(component: unknown) {
  return (component as { __docgenInfo?: { displayName: string; props: Record<string, IDocumentedProp> } } | null)
    ?.__docgenInfo;
}
