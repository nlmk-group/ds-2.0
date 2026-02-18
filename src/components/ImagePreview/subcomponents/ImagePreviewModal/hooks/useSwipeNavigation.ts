import { useCallback, useRef } from 'react';

type UseSwipeNavigationArgs = {
  enabled: boolean;
  hasMany: boolean;
  onPrev: () => void;
  onNext: () => void;
  maxDurationMs?: number;
  minDxPx?: number;
  maxDyPx?: number;
};

type UseSwipeNavigationResult = {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
};

/**
 * Хук useSwipeNavigation добавляет поддержку свайп-навигации на touch-устройствах.
 * Отслеживает жест по порогам времени и смещения, и вызывает колбэки перехода вперед/назад.
 *
 * @param {object} args - Параметры хука.
 * @param {boolean} args.enabled - Включает обработку свайпов (обычно true на mobile).
 * @param {boolean} args.hasMany - Признак, что свайп имеет смысл (больше одного элемента).
 * @param {() => void} args.onPrev - Колбэк перехода к предыдущему элементу.
 * @param {() => void} args.onNext - Колбэк перехода к следующему элементу.
 * @param {number} [args.maxDurationMs=600] - Максимальная длительность жеста, после которой свайп игнорируется.
 * @param {number} [args.minDxPx=40] - Минимальное горизонтальное смещение для распознавания свайпа.
 * @param {number} [args.maxDyPx=80] - Максимальное вертикальное смещение, чтобы отличать свайп от скролла.
 *
 * @returns {object} result - Результат хука.
 * @returns {(e: React.TouchEvent) => void} result.onTouchStart - Обработчик начала touch-жеста.
 * @returns {(e: React.TouchEvent) => void} result.onTouchEnd - Обработчик завершения touch-жеста.
 */

export const useSwipeNavigation = ({
   enabled,
   hasMany,
   onPrev,
   onNext,
   maxDurationMs = 600,
   minDxPx = 40,
   maxDyPx = 80
}: UseSwipeNavigationArgs): UseSwipeNavigationResult => {
  const touchRef = useRef<{ x: number; y: number; t: number } | null>(null);

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!enabled || !hasMany) return;
      const t = e.touches[0];
      if (!t) return;
      touchRef.current = { x: t.clientX, y: t.clientY, t: Date.now() };
    },
    [enabled, hasMany]
  );

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!enabled || !hasMany || !touchRef.current) return;

      const start = touchRef.current;
      touchRef.current = null;

      const t = e.changedTouches[0];
      if (!t) return;

      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      const dt = Date.now() - start.t;

      if (dt > maxDurationMs) return;
      if (Math.abs(dx) < minDxPx) return;
      if (Math.abs(dy) > maxDyPx) return;

      if (dx < 0) onNext();
      else onPrev();
    },
    [enabled, hasMany, maxDurationMs, minDxPx, maxDyPx, onNext, onPrev]
  );

  return { onTouchStart, onTouchEnd };
};
