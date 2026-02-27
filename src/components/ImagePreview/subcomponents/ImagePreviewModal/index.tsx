import React from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import {
  Button,
  IconChevronArrowLeftOutlined32,
  IconChevronArrowRightOutlined32,
  IconCloseOutlined24,
  IconDownloadOutlined24,
  Spinner,
  Tooltip,
  Typography
} from '@components/index';

import { IImagePreviewModalProps } from './types';
import styles from './ImagePreviewModal.module.scss';
import {
  ImagePreviewSidebar,
  ImagePreviewCarouselMobile,
  ImagePreviewMeta
} from '@components/ImagePreview/subcomponents';
import {
  useZoom,
  useImageLoad,
  useGalleryNavigation,
  useSwipeNavigation,
  useModalLifecycle,
  useMetaCollapse,
  useStageResetOnImageChange,
  useDownloadImage, useIsNarrowScreen
} from './hooks';

const MAX_MOBILE_WIDTH = 1000;

const ImagePreviewModal = ({ items, activeIndex, setActiveIndex, onClose }: IImagePreviewModalProps) => {
  const activeItem = items[activeIndex];
  const { fullSrc, previewSrc, downloadName, downloadHandler, title, description, alt } = activeItem;

  const isMobile = useIsNarrowScreen(MAX_MOBILE_WIDTH);

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
    href: fullSrc,
    downloadName
  });

  const { metaTopRef, isMetaExpanded, setIsMetaExpanded, showMetaToggle } = useMetaCollapse({
    isMobile,
    activeIndex,
    title,
    description
  });

  const { onPointerDown, onPointerUp } = useSwipeNavigation({
    enabled: isMobile,
    hasMany,
    onPrev: prev,
    onNext: next,
    allowMouse: true
  });

  const onImageClick: React.MouseEventHandler<HTMLImageElement> = e => {
    if (isMobile) return;
    e.preventDefault();
    e.stopPropagation();
    toggleZoom();
  };

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
    previewSrc: previewSrc as string | undefined,
    isMobile,
    isZoomed,
    updateZoomLayout
  });

  const modal = (
    <>
      <div className={styles['backdrop']} />
      <div
        className={clsx(styles['modal'], { [styles['modal-mobile']]: isMobile })}
        style={zoomImageStyles}
        role="dialog"
        aria-modal="true"
        data-ui-image-preview-modal
      >
        <div
          className={clsx(styles['modal-content'], { [styles['modal-content-mobile']]: isMobile })}
          onClick={e => e.stopPropagation()}
          data-ui-image-preview-modal-content
        >
          <div className={styles['top-actions']} data-ui-image-preview-top-actions>
            <Tooltip title="Скачать изображение" placement="bottom">
              <Button
                iconButton={<IconDownloadOutlined24 htmlColor="var(--unique-white)" />}
                onClick={() => {
                  if (downloadHandler) {
                    downloadHandler(activeItem);
                  } else {
                    download();
                  }
                }}
                aria-label="Скачать"
                variant="secondary"
                color="ghost"
              />
            </Tooltip>
            <Button
              iconButton={<IconCloseOutlined24 htmlColor="var(--unique-white)" />}
              onClick={onClose}
              aria-label="Закрыть"
              variant="secondary"
              color="ghost"
            />
          </div>

          {!isMobile && <ImagePreviewSidebar items={items} activeIndex={activeIndex} setActiveIndex={goTo} />}

          {!isMobile && canPrev && (
            <Button
              iconButton={<IconChevronArrowLeftOutlined32 htmlColor="var(--unique-white)" />}
              className={clsx(styles['nav-btn'], styles['nav-prev'])}
              onClick={prev}
              aria-label="Предыдущее"
              variant="secondary"
              color="ghost"
            />
          )}

          {!isMobile && canNext && (
            <Button
              iconButton={<IconChevronArrowRightOutlined32 htmlColor="var(--unique-white)" />}
              className={clsx(styles['nav-btn'], styles['nav-next'])}
              onClick={next}
              aria-label="Следующее"
              variant="secondary"
              color="ghost"
            />
          )}

          <div className={clsx(styles['viewer'], { [styles['viewer-mobile']]: isMobile })} data-ui-image-preview-viewer>
            {isMobile && (
              <ImagePreviewMeta
                isMobile
                title={title}
                description={description}
                metaTopRef={metaTopRef}
                isMetaExpanded={isMetaExpanded}
                showMetaToggle={showMetaToggle}
                onToggleMeta={() => setIsMetaExpanded(v => !v)}
              />
            )}

            <div
              className={styles['stage']}
              data-ui-image-preview-stage
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
            >
              <div
                ref={stageScrollRef}
                className={clsx(styles['stage-scroll'], {
                  [styles['stage-scroll-zoomed']]: !isMobile && isZoomed,
                  [styles['stage-scroll-zoomed-overflow-x']]: !isMobile && isZoomed && zoomOverflow.x,
                  [styles['stage-scroll-zoomed-overflow-y']]: !isMobile && isZoomed && zoomOverflow.y
                })}
                onWheel={onZoomBtnWheel}
              >
                {showImg && (
                  <img
                    key={renderToken}
                    ref={imgRef}
                    src={shownSrc}
                    className={clsx(styles['image'], {
                      [styles['image-zoomed']]: !isMobile && isZoomed,
                      [styles['image-zoomable']]: !isMobile
                    })}
                    alt={alt ?? title ?? `Фото ${activeIndex + 1}`}
                    draggable={false}
                    onClick={onImageClick}
                    onLoad={onImgLoad}
                    onError={onImgError}
                  />
                )}

                {isLoading && !imgError && (
                  <div className={styles['spinner']}>
                    <Spinner />
                  </div>
                )}

                {(!fullSrc || imgError) && !isLoading && (
                  <div className={styles['empty-icon']}>
                    <Typography color="var(--unique-white)">Не удалось загрузить изображение</Typography>
                  </div>
                )}
              </div>
            </div>

            {!isMobile && <ImagePreviewMeta isMobile={false} title={title} description={description} />}

            {isMobile && <ImagePreviewCarouselMobile items={items} activeIndex={activeIndex} setActiveIndex={goTo} />}
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modal, document.body);
};

export default ImagePreviewModal;
