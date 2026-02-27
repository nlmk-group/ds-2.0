import type React from 'react';
import { useCallback, useRef } from 'react';

type UseSwipeNavigationArgs = {
  enabled: boolean;
  hasMany: boolean;
  onPrev: () => void;
  onNext: () => void;
  maxDurationMs?: number;
  minDxPx?: number;
  maxDyPx?: number;
  allowMouse?: boolean;
};

type UseSwipeNavigationResult = {
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerUp: (e: React.PointerEvent) => void;
};

/**
 * Хук useSwipeNavigation обрабатывает свайпы влево/вправо и вызывает колбеки навигации.
 * Запоминает координаты pointerDown и на pointerUp проверяет пороги по времени и смещениям.
 *
 * @param {object} args - Параметры хука.
 * @param {boolean} args.enabled - Включает обработку свайпов.
 * @param {boolean} args.hasMany - Есть ли больше одного элемента (если нет, свайпы игнорируются).
 * @param {() => void} args.onPrev - Колбек перехода на предыдущий элемент (свайп вправо).
 * @param {() => void} args.onNext - Колбек перехода на следующий элемент (свайп влево).
 * @param {number} [args.maxDurationMs=600] - Максимальная длительность жеста, мс.
 * @param {number} [args.minDxPx=40] - Минимальное горизонтальное смещение, px.
 * @param {number} [args.maxDyPx=80] - Максимально допустимое вертикальное смещение, px.
 * @param {boolean} [args.allowMouse=false] - Разрешить обработку mouse pointer (по умолчанию только touch).
 *
 * @returns {object} result - Результат хука.
 * @returns {(e: React.PointerEvent) => void} result.onPointerDown - Хендлер pointerDown (начало жеста).
 * @returns {(e: React.PointerEvent) => void} result.onPointerUp - Хендлер pointerUp (конец жеста и навигация).
 */

export const useSwipeNavigation = ({
  enabled,
  hasMany,
  onPrev,
  onNext,
  maxDurationMs = 600,
  minDxPx = 40,
  maxDyPx = 80,
  allowMouse = false
}: UseSwipeNavigationArgs): UseSwipeNavigationResult => {
  const ref = useRef<{ x: number; y: number; t: number; pointerId: number } | null>(null);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!enabled || !hasMany) return;
      if (!allowMouse && e.pointerType !== 'touch') return;

      ref.current = { x: e.clientX, y: e.clientY, t: Date.now(), pointerId: e.pointerId };
    },
    [enabled, hasMany, allowMouse]
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!enabled || !hasMany || !ref.current) return;
      if (!allowMouse && e.pointerType !== 'touch') return;
      if (e.pointerId !== ref.current.pointerId) return;

      const start = ref.current;
      ref.current = null;

      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      const dt = Date.now() - start.t;

      if (dt > maxDurationMs) return;
      if (Math.abs(dx) < minDxPx) return;
      if (Math.abs(dy) > maxDyPx) return;

      if (dx < 0) onNext();
      else onPrev();
    },
    [enabled, hasMany, allowMouse, maxDurationMs, minDxPx, maxDyPx, onNext, onPrev]
  );

  return { onPointerDown, onPointerUp };
};
