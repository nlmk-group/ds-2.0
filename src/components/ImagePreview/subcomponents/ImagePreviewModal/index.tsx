import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import {
  Button,
  IconChevronArrowLeftOutlined32,
  IconChevronArrowRightOutlined32,
  IconCloseOutlined24,
  IconDownloadOutlined24,
  Spinner,
  Typography
} from '@components/index';

import { IImagePreviewModalProps } from './types';
import styles from './ImagePreviewModal.module.scss';
import { ImagePreviewSidebar, ImagePreviewCarouselMobile } from '@components/ImagePreview/subcomponents';
import { useIsMobile, useZoom, useImageLoad, useGalleryNavigation, useSwipeNavigation, useModalLifecycle, useMetaCollapse, useStageResetOnImageChange, useDownloadImage } from './hooks';

const ImagePreviewModal: FC<IImagePreviewModalProps> = ({ items, activeIndex, setActiveIndex, onClose }) => {
  const activeItem = items[activeIndex];
  const isMobile = useIsMobile();

  const { hasMany, canPrev, canNext, prev, next, goTo } = useGalleryNavigation({
    length: items.length,
    activeIndex,
    setActiveIndex
  });

  const {
    stageScrollRef,
    imgRef,
    isZoomed,
    zoomOverflow,
    updateZoomLayout,
    zoomImageStyles,
    onZoomBtnWheel,
    toggleZoom
  } = useZoom(isMobile, activeIndex);

  useModalLifecycle({ isMobile, onClose, onPrev: prev, onNext: next });

  const download = useDownloadImage({
    href: activeItem.fullSrc,
    downloadName: activeItem.downloadName
  });

  const { metaTopRef, isMetaExpanded, setIsMetaExpanded, showMetaToggle } = useMetaCollapse({
    isMobile,
    activeIndex,
    title: activeItem.title,
    description: activeItem.description
  });

  const { onTouchStart, onTouchEnd } = useSwipeNavigation({
    enabled: isMobile,
    hasMany,
    onPrev: prev,
    onNext: next
  });

  const onImageClick: React.MouseEventHandler<HTMLImageElement> = e => {
    if (isMobile) return;
    e.preventDefault();
    e.stopPropagation();
    toggleZoom();
  };

  const fullSrc = activeItem.fullSrc;
  const previewSrc = activeItem.previewSrc as string | undefined;

  useStageResetOnImageChange({
    stageScrollRef,
    activeIndex,
    fullSrc,
    isMobile,
    isZoomed
  });

  const { imgError, isLoading, shownSrc, showImg, renderToken, onImgLoad, onImgError } = useImageLoad({
    activeIndex,
    fullSrc,
    previewSrc,
    isMobile,
    isZoomed,
    updateZoomLayout
  });

  const modal = (
    <>
      <div className={styles.backdrop} />
      <div
        className={clsx(styles.modal, { [styles.modalMobile]: isMobile })}
        style={zoomImageStyles}
        role="dialog"
        aria-modal="true"
        data-ui-image-preview-modal
      >
        <div
          className={clsx(styles.modalContent, { [styles.modalContentMobile]: isMobile })}
          onClick={e => e.stopPropagation()}
          data-ui-image-preview-modal-content
        >
          <div className={styles.topActions} data-ui-image-preview-top-actions>
            <Button
              iconButton={<IconDownloadOutlined24 htmlColor="var(--steel-10)" />}
              onClick={download}
              aria-label="Скачать"
              variant="secondary"
              color="ghost"
            />
            <Button
              iconButton={<IconCloseOutlined24 htmlColor="var(--steel-10)" />}
              onClick={onClose}
              aria-label="Закрыть"
              variant="secondary"
              color="ghost"
            />
          </div>

          {!isMobile && hasMany && (
            <ImagePreviewSidebar items={items} activeIndex={activeIndex} setActiveIndex={goTo} />
          )}

          {!isMobile && canPrev && (
            <Button
              iconButton={<IconChevronArrowLeftOutlined32 htmlColor="var(--steel-10)" />}
              className={clsx(styles.navBtn, styles.navPrev)}
              onClick={prev}
              aria-label="Предыдущее"
              variant="secondary"
              color="ghost"
            />
          )}

          {!isMobile && canNext && (
            <Button
              iconButton={<IconChevronArrowRightOutlined32 htmlColor="var(--steel-10)" />}
              className={clsx(styles.navBtn, styles.navNext)}
              onClick={next}
              aria-label="Следующее"
              variant="secondary"
              color="ghost"
            />
          )}

          <main className={clsx(styles.viewer, { [styles.viewerMobile]: isMobile })} data-ui-image-preview-viewer>
            {isMobile && (
              <div
                ref={metaTopRef}
                className={clsx(styles.metaTop, { [styles.metaTopExpanded]: isMetaExpanded })}
                data-ui-image-preview-meta-top
              >
                <Typography
                  className={clsx(styles.metaLine, isMetaExpanded ? styles.metaUnclamped : styles.metaClamp2)}
                  variant="Body2"
                  color="var(--steel-10)"
                >
                  {activeItem.title ?? ''}
                </Typography>

                <Typography
                  className={clsx(styles.metaLine, isMetaExpanded ? styles.metaUnclamped : styles.metaClamp3)}
                  variant="Body2"
                  color="var(--steel-10)"
                >
                  {activeItem.description ?? ''}
                </Typography>

                {showMetaToggle && (
                  <button
                    type="button"
                    className={styles.metaToggle}
                    onClick={() => setIsMetaExpanded(v => !v)}
                    aria-expanded={isMetaExpanded}
                  >
                    {isMetaExpanded ? 'Свернуть' : 'Показать полностью'}
                  </button>
                )}
              </div>
            )}

            <div className={styles.stage} data-ui-image-preview-stage onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div
                ref={stageScrollRef}
                className={clsx(styles.stageScroll, {
                  [styles.stageScrollZoomed]: !isMobile && isZoomed,
                  [styles.stageScrollZoomedOverflowX]: !isMobile && isZoomed && zoomOverflow.x,
                  [styles.stageScrollZoomedOverflowY]: !isMobile && isZoomed && zoomOverflow.y
                })}
                onWheel={onZoomBtnWheel}
              >
                {showImg && (
                  <img
                    key={renderToken}
                    ref={imgRef}
                    src={shownSrc}
                    className={clsx(styles.image, {
                      [styles.imageZoomed]: !isMobile && isZoomed,
                      [styles.imageZoomable]: !isMobile
                    })}
                    alt={activeItem.alt ?? activeItem.title ?? `Фото ${activeIndex + 1}`}
                    draggable={false}
                    onClick={onImageClick}
                    onLoad={onImgLoad}
                    onError={onImgError}
                  />
                )}

                {isLoading && !imgError && (
                  <div className={styles.spinner}>
                    <Spinner />
                  </div>
                )}

                {(!fullSrc || imgError) && !isLoading && (
                  <div className={styles.emptyIcon}>
                    <Typography>Не удалось загрузить изображение</Typography>
                  </div>
                )}
              </div>
            </div>

            {!isMobile && (
              <div className={styles.meta} data-ui-image-preview-meta>
                <Typography className={styles.metaLine} variant="Body2" color="var(--steel-10)">
                  {activeItem.title ?? ''}
                </Typography>
                <Typography className={styles.metaLine} variant="Body2" color="var(--steel-10)">
                  {activeItem.description ?? ''}
                </Typography>
              </div>
            )}

            {isMobile && hasMany && (
              <ImagePreviewCarouselMobile items={items} activeIndex={activeIndex} setActiveIndex={goTo} />
            )}
          </main>
        </div>
      </div>
    </>
  );

  return createPortal(modal, document.body);
};

export default ImagePreviewModal;
