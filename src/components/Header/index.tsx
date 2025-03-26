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
 * @param {Function} [props.back] - Обработчик клика по кнопке "назад".
 * @param {boolean} [props.date=false] - Флаг для отображения текущей даты.
 * @param {Function} [props.favorite] - Обработчик клика по кнопке "избранное".
 * @param {Function} [props.notification] - Обработчик клика по кнопке "уведомления".
 * @param {Function} [props.video] - Обработчик клика по кнопке "видео".
 * @param {Function} [props.print] - Обработчик клика по кнопке "печать".
 * @param {Function} [props.message] - Обработчик клика по кнопке "сообщения".
 * @param {number} [props.notificationAmount=0] - Количество уведомлений, отображаемое на кнопке уведомлений.
 * @param {ReactNode} [props.breadcrumbs] - Элемент хлебных крошек, отображаемый над заголовком.
 * @param {string} [props.className] - Дополнительные CSS-классы для стилизации компонента.
 * @param {ReactNode} [props.children] - Дополнительные элементы внутри заголовка.
 * @returns {JSX.Element} Возвращает JSX-разметку компонента Header.
 */
const Header: FC<IHeaderProps> = ({
  title,
  onBackClick = null,
  hasDate = false,
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
      {onFavoriteClick !== null && <ButtonFavorite favorite={onFavoriteClick} />}
      {onPrintClick !== null && <ButtonPrint print={onPrintClick} />}
      {onVideoClick !== null && <ButtonVideo video={onVideoClick} />}
      {onNotificationClick !== null && (
        <ButtonNotification notification={onNotificationClick} notificationAmount={notificationAmount} />
      )}
      {onMessageClick !== null && <ButtonMessage message={onMessageClick} />}
    </div>
  );

  return (
    <div
      style={style}
      data-ui-header
      data-testid="HEADER_WRAPPER"
      className={clsx(styles['wrapper-default'], className)}
    >
      {breadcrumbs !== null ? (
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
            {onBackClick !== null && <ButtonBack back={onBackClick} />}
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
