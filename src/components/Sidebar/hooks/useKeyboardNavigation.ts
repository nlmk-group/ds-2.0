import { KeyboardEvent, useLayoutEffect, useRef } from 'react';
import { flushSync } from 'react-dom';

interface IUseKeyboardNavigationProps {
  keyboardNavigation: boolean;
  isAdaptive: boolean;
  isVertical: boolean;
  isExpanded: boolean;
  activeItem: string | null;
  getTrigger: () => HTMLElement | null;
}

const itemSelector = '[data-ui-sidebar-menu-item], [data-ui-sidebar-submenu-item]';
const triggerSelector = '[data-ui-sidebar-collapse-button], [data-ui-sidebar-burger]';

const useKeyboardNavigation = ({
  keyboardNavigation,
  isAdaptive,
  isVertical,
  isExpanded,
  activeItem,
  getTrigger
}: IUseKeyboardNavigationProps) => {
  const keyboardRootRef = useRef<HTMLDivElement>(null);
  const pendingFocus = useRef<'expandedTrigger' | 'trigger' | 'parent' | null>(null);
  const submenuParentRef = useRef<HTMLElement | null>(null);

  const availableItems = (root: HTMLElement, selector = itemSelector) =>
    Array.from(root.querySelectorAll<HTMLElement>(selector)).filter(item => {
      if (item.getAttribute('aria-disabled') === 'true' || item.closest('[hidden], [inert], [aria-hidden="true"]'))
        return false;
      for (let node: HTMLElement | null = item; node && node !== root; node = node.parentElement) {
        const style = window.getComputedStyle(node);
        if (style.display === 'none' || style.visibility === 'hidden') return false;
      }
      return true;
    });

  const focusItem = (item?: HTMLElement) => {
    item?.focus();
    item?.scrollIntoView?.({ block: 'nearest', inline: 'nearest' });
  };

  useLayoutEffect(() => {
    if (!keyboardNavigation || !keyboardRootRef.current) return;
    // Menu items are the focus targets; links in custom content must not add a second Tab stop.
    const links: Array<{ link: HTMLAnchorElement; tabIndex: string | null }> = [];
    keyboardRootRef.current.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
      if (!link.closest(itemSelector)) return;
      links.push({ link, tabIndex: link.getAttribute('tabindex') });
      link.tabIndex = -1;
    });
    return () => {
      links.forEach(({ link, tabIndex }) => {
        if (tabIndex === null) link.removeAttribute('tabindex');
        else link.setAttribute('tabindex', tabIndex);
      });
    };
  });

  useLayoutEffect(() => {
    const target = pendingFocus.current;
    if (!keyboardNavigation || !target) return;

    if (target === 'parent' && !activeItem && isExpanded) {
      focusItem(submenuParentRef.current || undefined);
      pendingFocus.current = null;
    } else if (target === 'trigger' && !isExpanded) {
      focusItem(getTrigger() || undefined);
      pendingFocus.current = null;
    } else if (target === 'expandedTrigger' && isExpanded && keyboardRootRef.current) {
      focusItem(availableItems(keyboardRootRef.current, triggerSelector)[0]);
      pendingFocus.current = null;
    }
  });

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>, collapseSidebar: () => void) => {
    if (event.defaultPrevented) return;
    const eventTarget = event.target as HTMLElement;
    if (eventTarget.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
    const target =
      event.key.startsWith('Arrow') && eventTarget.closest('a[href]')
        ? eventTarget.closest<HTMLElement>(itemSelector) || eventTarget
        : eventTarget;
    if (event.key === 'Escape' && isExpanded) {
      event.preventDefault();
      pendingFocus.current = 'trigger';
      collapseSidebar();
      return;
    }
    // Native controls and nested interactive content retain their own keyboard behavior.
    const isTrigger = target.matches(triggerSelector);
    const isFavorites = target.matches('[data-ui-sidebar-favorites]');
    if (!target.matches(itemSelector) && !isTrigger && !isFavorites) return;
    const inSubmenu = isFavorites || target.matches('[data-ui-sidebar-submenu-item]');
    const group = target.closest<HTMLElement>('[data-ui-sidebar-submenu-item-group]');
    const parentGroup = group?.parentElement?.closest<HTMLElement>('[data-ui-sidebar-submenu-item-group]');
    const vertical = isAdaptive || isVertical || Boolean(parentGroup);
    const openKey = vertical ? 'ArrowRight' : 'ArrowDown';
    const closeKey = vertical ? 'ArrowLeft' : 'ArrowUp';
    if (!isTrigger && event.key === closeKey) {
      event.preventDefault();
      if (target.getAttribute('aria-expanded') === 'true') {
        flushSync(() => target.click());
        focusItem(target);
      } else if (inSubmenu) {
        const parent =
          parentGroup?.querySelector<HTMLElement>('[data-ui-sidebar-submenu-item]') ||
          availableItems(event.currentTarget, '[data-ui-sidebar-menu-item]').find(item => item.title === activeItem);
        if (parent?.getAttribute('aria-expanded') === 'true') flushSync(() => parent.click());
        focusItem(parent);
      }
      return;
    }
    if (!isTrigger && !isFavorites && (event.key === 'Enter' || event.key === openKey)) {
      const isArrow = event.key === openKey;
      if (isArrow && !target.hasAttribute('aria-expanded')) return;
      event.preventDefault();
      const wasExpanded = target.getAttribute('aria-expanded') === 'true';
      if (!isArrow || !wasExpanded) flushSync(() => target.click());
      if (target.getAttribute('aria-expanded') === 'true' && (isArrow || !wasExpanded)) {
        const submenu = target.matches('[data-ui-sidebar-menu-item]')
          ? event.currentTarget.querySelector<HTMLElement>('[data-ui-sidebar-submenu]')
          : target.closest<HTMLElement>('[data-ui-sidebar-submenu-item-group]');
        if (submenu) {
          focusItem(
            availableItems(submenu, '[data-ui-sidebar-submenu-item]').find(item => item !== target) ||
              availableItems(submenu, '[data-ui-sidebar-favorites]')[0]
          );
        }
      }
      return;
    }
    const previous = vertical ? 'ArrowUp' : 'ArrowLeft';
    const next = vertical ? 'ArrowDown' : 'ArrowRight';
    if (event.key !== previous && event.key !== next) return;
    event.preventDefault();
    const root = inSubmenu
      ? (!isAdaptive && !isVertical && parentGroup) || target.closest<HTMLElement>('[data-ui-sidebar-submenu]')
      : event.currentTarget;
    if (!root) return;
    const selector = inSubmenu
      ? '[data-ui-sidebar-favorites], [data-ui-sidebar-submenu-item]'
      : `[data-ui-sidebar-menu-item], ${triggerSelector}`;
    const items = availableItems(root, selector).filter(item => {
      if (vertical || !inSubmenu) return true;
      const itemGroup = item.closest('[data-ui-sidebar-submenu-item-group]');
      return !itemGroup?.parentElement?.closest('[data-ui-sidebar-submenu-item-group]');
    });
    const index = items.indexOf(target);
    if (index < 0) return;
    focusItem(items[Math.max(0, Math.min(items.length - 1, index + (event.key === next ? 1 : -1)))]);
  };

  return { keyboardRootRef, pendingFocus, submenuParentRef, availableItems, handleKeyDown };
};

export default useKeyboardNavigation;
