import { useEffect, useRef } from 'react';

type Args = {
  isMobile: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

/**
 * Хук useModalLifecycle управляет жизненным циклом модалки:
 * блокирует скролл страницы и вешает обработчики клавиатуры (Escape, стрелки) с учетом режима mobile.
 *
 * @param {object} args - Параметры хука.
 * @param {boolean} args.isMobile - Признак mobile-режима (стрелки клавиатуры отключаются).
 * @param {() => void} args.onClose - Колбэк закрытия модалки (Escape).
 * @param {() => void} args.onPrev - Колбэк перехода к предыдущему (ArrowLeft, только не mobile).
 * @param {() => void} args.onNext - Колбэк перехода к следующему (ArrowRight, только не mobile).
 */

export const useModalLifecycle = ({ isMobile, onClose, onPrev, onNext }: Args) => {
  const closeRef = useRef(onClose);
  const prevRef = useRef(onPrev);
  const nextRef = useRef(onNext);

  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    prevRef.current = onPrev;
  }, [onPrev]);

  useEffect(() => {
    nextRef.current = onNext;
  }, [onNext]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeRef.current();
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (!isMobile) prevRef.current();
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (!isMobile) nextRef.current();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobile]);
};
