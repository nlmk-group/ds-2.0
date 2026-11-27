import { useCallback, useEffect, useRef } from 'react';

import { useFloating } from '@floating-ui/react';

type Overlay = { close: () => void };
const stacks = new WeakMap<Window, Overlay[]>();

function onKeyDown(event: KeyboardEvent) {
  if (event.key !== 'Escape' || event.defaultPrevented || event.repeat) return;
  const stack = stacks.get(event.currentTarget as Window);
  if (!stack?.length) return;
  event.preventDefault();
  stack[stack.length - 1].close();
}

/** Register for the lifetime of an open overlay. Updating its callback must preserve stacking order. */
export function useDialogFocus(open: boolean, close: () => void) {
  const { refs, context } = useFloating<HTMLDivElement>({ open });
  const panel = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const { setFloating } = refs;
  const setPanel = useCallback(
    (node: HTMLDivElement | null) => {
      if (node && !panel.current) {
        const active = node.ownerDocument.activeElement;
        opener.current = active instanceof HTMLElement ? active : null;
      }
      panel.current = node;
      setFloating(node);
    },
    [setFloating]
  );
  const latestClose = useRef(close);
  useEffect(() => {
    latestClose.current = close;
  }, [close]);

  useEffect(() => {
    const view = panel.current?.ownerDocument.defaultView;
    if (!open || !view) return;
    const stack = stacks.get(view) ?? [];
    const overlay = { close: () => latestClose.current() };
    if (!stack.length) {
      stacks.set(view, stack);
      view.addEventListener('keydown', onKeyDown);
    }
    stack.push(overlay);
    return () => {
      stack.splice(stack.indexOf(overlay), 1);
      if (!stack.length) {
        stacks.delete(view);
        view.removeEventListener('keydown', onKeyDown);
      }
    };
  }, [open]);

  return { panel, setPanel, context, opener };
}
