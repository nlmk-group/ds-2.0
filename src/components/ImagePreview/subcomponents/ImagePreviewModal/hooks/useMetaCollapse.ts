import { useEffect, useLayoutEffect, useRef, useState } from 'react';

type Args = {
  isMobile: boolean;
  activeIndex: number;
  title?: string;
  description?: string;
};

type Result = {
  metaTopRef: React.MutableRefObject<HTMLDivElement | null>;
  isMetaExpanded: boolean;
  setIsMetaExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  showMetaToggle: boolean;
};

/**
 * Хук useMetaCollapse управляет сворачиванием/разворачиванием метаданных на mobile:
 * измеряет высоту блока заголовка и описания и решает, показывать ли кнопку "Показать полностью".
 *
 * @param {object} args - Параметры хука.
 * @param {boolean} args.isMobile - Признак mobile-режима (логика активна только на mobile).
 * @param {number} args.activeIndex - Активный индекс (при смене сбрасывает состояние сворачивания).
 * @param {string} [args.title] - Заголовок активного элемента (участвует в пересчете).
 * @param {string} [args.description] - Описание активного элемента (участвует в пересчете).
 *
 * @returns {object} result - Результат хука.
 * @returns {React.MutableRefObject<HTMLDivElement | null>} result.metaTopRef - Ref на контейнер метаданных для измерения.
 * @returns {boolean} result.isMetaExpanded - Развернуты ли метаданные полностью.
 * @returns {React.Dispatch<React.SetStateAction<boolean>>} result.setIsMetaExpanded - Сеттер состояния развернутости.
 * @returns {boolean} result.showMetaToggle - Нужно ли показывать кнопку "Показать полностью".
 */

export const useMetaCollapse = ({ isMobile, activeIndex, title, description }: Args): Result => {
  const [isMetaExpanded, setIsMetaExpanded] = useState(false);
  const [showMetaToggle, setShowMetaToggle] = useState(false);
  const metaTopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMetaExpanded(false);
    setShowMetaToggle(false);
  }, [activeIndex, isMobile]);

  useLayoutEffect(() => {
    if (!isMobile) return;
    const el = metaTopRef.current;
    if (!el) return;

    const measure = () => {
      if (isMetaExpanded) {
        setShowMetaToggle(true);
        return;
      }

      const prevMaxHeight = el.style.maxHeight;
      const prevOverflow = el.style.overflow;
      const prevMeasuring = el.getAttribute('data-measuring');

      el.style.maxHeight = 'clamp(56px, 20vh, 220px)';
      el.style.overflow = 'hidden';

      el.setAttribute('data-measuring', '1');
      const fullHeight = el.scrollHeight;

      el.setAttribute('data-measuring', '0');
      const collapsedHeight = el.clientHeight;

      if (prevMeasuring == null) el.removeAttribute('data-measuring');
      else el.setAttribute('data-measuring', prevMeasuring);

      el.style.maxHeight = prevMaxHeight;
      el.style.overflow = prevOverflow;

      setShowMetaToggle(fullHeight - collapsedHeight > 1);
    };

    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    return () => ro.disconnect();
  }, [isMobile, activeIndex, title, description, isMetaExpanded]);

  return { metaTopRef, isMetaExpanded, setIsMetaExpanded, showMetaToggle };
};
