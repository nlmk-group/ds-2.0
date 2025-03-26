import React, { FC } from 'react';

import { DateTime, Typography } from '@components/index';
import { clsx } from 'clsx';

import { IHeaderProps } from './types';

import styles from './Header.module.scss';

import {
  ButtonBack,
  ButtonFavorite,
  ButtonMessage,
  ButtonNotification,
  ButtonPrint,
  ButtonVideo
} from './subcomponents';

/**
 * Компонент Header используется для отображения заголовка страницы с дополнительными элементами управления,
 * такими как кнопки "назад", "избранное", "уведомления", "сообщения", "видео", "печать" и "дата".
 *
 * @component
 * @param {IHeaderProps} props - Пропсы компонента.
 * @param {string} props.title - Заголовок страницы.
 * @param {boolean} [props.hasBack] - Флаг для отображения кнопки "Назад".
 * @param {Function} [props.onBackClick] - Обработчик клика по кнопке "Назад".
 * @param {boolean} [props.hasFavorite] - Флаг для отображения кнопки "Избранное".
 * @param {Function} [props.onFavoriteClick] - Обработчик клика по кнопке "Избранное".
 * @param {boolean} [props.hasNotification] - Флаг для отображения кнопки "Уведомления".
 * @param {Function} [props.onNotificationClick] - Обработчик клика по кнопке "Уведомления".
 * @param {boolean} [props.hasVideo] - Флаг для отображения кнопки "Видео".
 * @param {Function} [props.onVideoClick] - Обработчик клика по кнопке "Видео".
 * @param {boolean} [props.hasPrint] - Флаг для отображения кнопки "Печать".
 * @param {Function} [props.onPrintClick] - Обработчик клика по кнопке "Печать".
 * @param {boolean} [props.hasMessage] - Флаг для отображения кнопки "Сообщения".
 * @param {Function} [props.onMessageClick] - Обработчик клика по кнопке "Сообщения".
 * @param {boolean} [props.hasDate=false] - Флаг для отображения текущей даты.
 * @param {number} [props.notificationAmount=0] - Количество уведомлений, отображаемое на кнопке уведомлений.
 * @param {ReactNode} [props.breadcrumbs] - Элемент хлебных крошек, отображаемый в заголовке.
 * @param {string} [props.className] - Дополнительные CSS-классы для стилизации компонента.
 * @param {ReactNode} [props.children] - Дополнительные элементы внутри заголовка.
 * @param {Object} [props.style] - Inline-стили для кастомизации компонента.
 * @returns {JSX.Element} Возвращает JSX-разметку компонента Header.
 */
const Header: FC<IHeaderProps> = ({
  title,
  onBackClick = null,
  hasDate = false,
  hasBack,
  hasFavorite,
  hasMessage,
  hasNotification,
  hasPrint,
  hasVideo,
  onFavoriteClick = null,
  onNotificationClick = null,
  onVideoClick = null,
  onPrintClick = null,
  onMessageClick = null,
  notificationAmount = 0,
  breadcrumbs = null,
  className,
  children,
  style
}) => {
  const RightBlock = (
    <div data-ui-header-right-block className={clsx(styles.right, !breadcrumbs && styles['right-with-margin'])}>
      {Boolean(hasDate) && <DateTime />}
      {onFavoriteClick && hasFavorite && <ButtonFavorite favorite={onFavoriteClick} />}
      {onPrintClick && hasPrint && <ButtonPrint print={onPrintClick} />}
      {onVideoClick && hasVideo && <ButtonVideo video={onVideoClick} />}
      {onNotificationClick && hasNotification && (
        <ButtonNotification notification={onNotificationClick} notificationAmount={notificationAmount} />
      )}
      {onMessageClick && hasMessage && <ButtonMessage message={onMessageClick} />}
    </div>
  );

  return (
    <div
      style={style}
      data-ui-header
      data-testid="HEADER_WRAPPER"
      className={clsx(styles['wrapper-default'], className)}
    >
      {breadcrumbs ? (
        <div className={styles['breadcrumbs-wrapper']}>
          <div>{breadcrumbs}</div>
          {RightBlock}
        </div>
      ) : null}
      <div className={styles['wrapper']}>
        <div style={{ flex: '1' }}>
          <div
            className={clsx(breadcrumbs ? styles['title-button-wrapper-with-crumbs'] : styles['title-button-wrapper'])}
          >
            {onBackClick && hasBack && <ButtonBack back={onBackClick} />}
            <div className={styles['title-container']}>
              <Typography data-testid="HEADER_TITLE" className={styles.title} variant="Heading2">
                {title}
              </Typography>
              {children}
            </div>
            {!breadcrumbs && RightBlock}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
