import React, { FC, TransitionEvent, useCallback, useLayoutEffect, useRef, useState } from 'react';

import { Button, IconChevronArrowDownOutlined16, IconChevronArrowUpOutlined16, Typography } from '@components/index';
import { ETypographyVariants } from '@components/Typography/enums';
import clsx from 'clsx';

import { INotificationCardProps } from './types';

import styles from './NotificationCard.module.scss';

const DEFAULT_SHOW_MORE_LABEL = 'Показать больше';
const DEFAULT_HIDE_LABEL = 'Свернуть';
const MAX_LINES = 3;
const FALLBACK_LINE_HEIGHT = 22; // Body1 line-height — используется только если getComputedStyle не смог измерить

/**
 * Большая карточка уведомления для истории в Drawer или Dialog.
 * Содержит заголовок, текст и время, красной точкой помечает непрочитанные.
 * Длинный текст автоматически сворачивается до трёх строк — кнопка «Показать больше / Свернуть»
 * появляется только если текст действительно обрезается, и раскрывает содержимое плавной анимацией в обе стороны.
 * Высота свёрнутого состояния считается динамически от реального line-height текста
 * (без хардкода), переключение line-clamp синхронизировано с max-height transition через transitionend.
 * @component
 */
const NotificationCard: FC<INotificationCardProps> = ({
  title,
  body,
  timestamp,
  unread = false,
  defaultExpanded = false,
  expanded: expandedProp,
  onExpandedChange,
  showMoreLabel = DEFAULT_SHOW_MORE_LABEL,
  hideLabel = DEFAULT_HIDE_LABEL,
  className,
  style
}) => {
  const isControlled = expandedProp !== undefined;
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const expanded = isControlled ? expandedProp : internalExpanded;

  const [contentHeight, setContentHeight] = useState(0);
  const [lineHeightPx, setLineHeightPx] = useState(FALLBACK_LINE_HEIGHT);
  const [clampActive, setClampActive] = useState(!defaultExpanded);
  const textRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const measure = () => {
      // line-height читаем с <span> Typography — у .text-обёртки своего шрифта нет.
      // В jsdom/старых браузерах getComputedStyle может вернуть 'normal' или пусто —
      // тогда остаётся fallback FALLBACK_LINE_HEIGHT.
      const target = (el.querySelector('span') as HTMLElement | null) ?? el;
      const lh = parseFloat(getComputedStyle(target).lineHeight);
      if (Number.isFinite(lh) && lh > 0) {
        setLineHeightPx(lh);
      }
      setContentHeight(el.scrollHeight);
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [body]);

  // Line-clamp даёт визуальный ellipsis в свёрнутом состоянии, но ломает max-height анимацию.
  // При раскрытии снимаем clamp СРАЗУ (синхронно до paint), чтобы анимация прошла без скачка.
  // При сворачивании возвращаем clamp только после окончания transition (через onTransitionEnd).
  useLayoutEffect(() => {
    if (expanded) setClampActive(false);
  }, [expanded]);

  const handleTransitionEnd = useCallback(
    (e: TransitionEvent<HTMLDivElement>) => {
      if (e.propertyName === 'max-height' && !expanded) {
        setClampActive(true);
      }
    },
    [expanded]
  );

  const toggle = useCallback(() => {
    const next = !expanded;
    if (!isControlled) {
      setInternalExpanded(next);
    }
    onExpandedChange?.(next);
  }, [expanded, isControlled, onExpandedChange]);

  const maxCollapsedHeight = lineHeightPx * MAX_LINES;
  const isOverflowing = contentHeight > maxCollapsedHeight + 1;
  const showToggle = isOverflowing || expanded;

  const textStyle: React.CSSProperties = isOverflowing
    ? { maxHeight: expanded ? contentHeight : maxCollapsedHeight }
    : {};

  return (
    <div className={clsx(styles.card, className)} style={style} data-ui-notification-card>
      <div className={styles.header}>
        {unread && <div className={styles['unread-dot']} data-testid="NOTIFICATION_CARD_UNREAD" />}
        <Typography variant={ETypographyVariants['Body2-Medium']} color="var(--steel-70)">
          {timestamp}
        </Typography>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>
          <Typography variant={ETypographyVariants['Body1-Medium']} color="var(--steel-90)">
            {title}
          </Typography>
        </div>
        <div
          ref={textRef}
          className={clsx(styles.text, clampActive && styles['text-clamped'])}
          style={textStyle}
          onTransitionEnd={handleTransitionEnd}
          data-testid="NOTIFICATION_CARD_BODY"
        >
          <Typography variant={ETypographyVariants.Body1} color="var(--steel-90)">
            {body}
          </Typography>
        </div>
        {showToggle && (
          <div className={styles.toggle}>
            <Button
              type="button"
              size="xs"
              variant="secondary"
              color="ghost"
              onClick={toggle}
              endIcon={expanded ? <IconChevronArrowUpOutlined16 /> : <IconChevronArrowDownOutlined16 />}
            >
              {expanded ? hideLabel : showMoreLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;
