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
 * @param {boolean} [props.showBack] - Флаг для отображения кнопки "Назад".
 * @param {Function} [props.onBackClick] - Обработчик клика по кнопке "Назад".
 * @param {boolean} [props.showFavorite] - Флаг для отображения кнопки "Избранное".
 * @param {Function} [props.onFavoriteClick] - Обработчик клика по кнопке "Избранное".
 * @param {boolean} [props.isFavorite] - Флаг для изменения состояния кнопки "Избранное".
 * @param {boolean} [props.showNotification] - Флаг для отображения кнопки "Уведомления".
 * @param {Function} [props.onNotificationClick] - Обработчик клика по кнопке "Уведомления".
 * @param {boolean} [props.showVideo] - Флаг для отображения кнопки "Видео".
 * @param {Function} [props.onVideoClick] - Обработчик клика по кнопке "Видео".
 * @param {boolean} [props.showPrint] - Флаг для отображения кнопки "Печать".
 * @param {Function} [props.onPrintClick] - Обработчик клика по кнопке "Печать".
 * @param {boolean} [props.showMessage] - Флаг для отображения кнопки "Сообщения".
 * @param {Function} [props.onMessageClick] - Обработчик клика по кнопке "Сообщения".
 * @param {boolean} [props.showDate=false] - Флаг для отображения текущей даты.
 * @param {number} [props.notificationAmount=0] - Количество уведомлений, отображаемое на кнопке уведомлений.
 * @param {ReactNode} [props.breadcrumbs] - Элемент хлебных крошек, отображаемый в заголовке.
 * @param {string} [props.className] - Дополнительные CSS-классы для стилизации компонента.
 * @param {ReactNode} [props.children] - Дополнительные элементы внутри заголовка.
 * @param {Object} [props.style] - Inline-стили для кастомизации компонента.
 * @returns {JSX.Element} Возвращает JSX-разметку компонента Header.
 */
const Header: FC<IHeaderProps> = ({
  title,
  showDate = false,
  showBack,
  showFavorite,
  isFavorite,
  showMessage,
  showNotification,
  showPrint,
  showVideo,
  onBackClick,
  onFavoriteClick,
  onNotificationClick,
  onVideoClick,
  onPrintClick,
  onMessageClick,
  notificationAmount = 0,
  breadcrumbs = null,
  className,
  children,
  style
}) => {
  const RightBlock = (
    <div data-ui-header-right-block className={clsx(styles.right, !breadcrumbs && styles['right-with-margin'])}>
      {showDate && <DateTime />}
      {showFavorite && <ButtonFavorite onClick={onFavoriteClick} isFavorite={isFavorite} />}
      {showPrint && <ButtonPrint onClick={onPrintClick} />}
      {showVideo && <ButtonVideo onClick={onVideoClick} />}
      {showNotification && <ButtonNotification onClick={onNotificationClick} notificationAmount={notificationAmount} />}
      {showMessage && <ButtonMessage onClick={onMessageClick} />}
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
            {showBack && <ButtonBack onClick={onBackClick} />}
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
