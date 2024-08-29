import React, { SyntheticEvent, useCallback, useMemo, useState } from 'react';

import Icon from '@components/Icon';
import { IconBirthday16, IconDoneCheckFilled16, IconDoneCheckFilled32 } from '@components/Icon/IconsDirectory';
import IconBirthday32 from '@components/Icon/IconsDirectory/NLMKONE/Birthday/32';
import { IconPersonFilled110 } from '@components/Icon/IconsDirectory/System/PersonFilled';
import Typography from '@components/Typography';
import clsx from 'clsx';

import { IAvatarComponent } from './types';

import styles from './Avatar.module.scss';

import { AVATAR_SIZE_PARAMETERS } from './constants';
import { EAvatarSize } from './enums';
import { IconBadge } from './subcomponents/IconBadge';
import IconCameraAvatar from './subcomponents/IconCameraAvatar/IconCameraAvatar';
import { getSizingStyles } from './utils';

/**
 * Компонент Avatar отрисовывает аватар пользователя с дополнительными элементами, такими как онлайновый индикатор, бейдж и т.д.
 *
 * @param {object} props - Свойства компонента.
 * @param {EAvatarSize} [props.size=EAvatarSize.m] - Размер аватара.
 * @param {string} [props.imageSrc] - URL-адрес изображения аватара.
 * @param {string} [props.userName] - Имя пользователя.
 * @param {string} [props.userSurname] - Фамилия пользователя.
 * @param {boolean} [props.online] - Статус пользователя онлайн.
 * @param {string} [props.badgeIconName] - Имя иконки бейджа для отображения.
 * @param {boolean} [props.badgeSpecialIcon=false] - Флаг, указывающий, является ли иконка бейджа специальной.
 * @param {number} [props.numberIndicator] - Числовой индикатор для отображения.
 * @param {string} [props.className] - Дополнительный CSS-класс для аватара.
 * @returns {JSX.Element} - Компонент Avatar.
 */

const Avatar: IAvatarComponent = ({
  size = EAvatarSize.m,
  imageSrc,
  userName,
  userSurname,
  online,
  badgeIconName,
  badgeSpecialIcon = false,
  numberIndicator,
  className
}) => {
  const hasNumberIndicator = typeof numberIndicator === 'number';
  const shouldShowOnlineIndicator = !hasNumberIndicator && typeof online === 'boolean';
  const sizeParameters = AVATAR_SIZE_PARAMETERS[size];
  const { iconSize, lettersVariant } = sizeParameters;

  const [imageIsAvailable, setImageIsAvailable] = useState<boolean>(Boolean(imageSrc));
  const firstLetter = userName?.charAt(0);
  const secondLetter = userSurname?.charAt(0);
  const shouldShowLetters = !imageIsAvailable && firstLetter && secondLetter;
  const shouldShowIcon = !imageIsAvailable && !shouldShowLetters;

  const { avatarStyles, lettersStyles, onlineIndicatorStyles, numberIndicatorStyles, badgeStyles } = useMemo(
    () =>
      getSizingStyles({
        sizeParameters,
        isSpecialBadge: badgeSpecialIcon,
        sizeVariant: size
      }),
    [size, badgeSpecialIcon, sizeParameters]
  );

  const iconMappings = {
    [EAvatarSize.xxxl]: badgeSpecialIcon ? (
      <IconBirthday32 htmlColor="var(--unique-white)" />
    ) : (
      <IconDoneCheckFilled32 htmlColor="var(--unique-white)" />
    ),
    [EAvatarSize.xxl]: badgeSpecialIcon ? (
      <IconBirthday16 htmlColor="var(--unique-white)" />
    ) : (
      <IconDoneCheckFilled16 htmlColor="var(--unique-white)" />
    ),
    [EAvatarSize.xl]: badgeSpecialIcon ? (
      <IconBirthday16 htmlColor="var(--unique-white)" />
    ) : (
      <IconDoneCheckFilled16 htmlColor="var(--unique-white)" />
    ),
    [EAvatarSize.l]: badgeSpecialIcon ? (
      <IconBirthday16 htmlColor="var(--unique-white)" />
    ) : (
      <IconDoneCheckFilled16 htmlColor="var(--unique-white)" />
    ),
    [EAvatarSize.m]: badgeSpecialIcon ? (
      <IconBirthday16 htmlColor="var(--unique-white)" />
    ) : (
      <IconDoneCheckFilled16 htmlColor="var(--unique-white)" />
    ),
    [EAvatarSize.s]: badgeSpecialIcon ? (
      <IconBirthday16 htmlColor="var(--unique-white)" />
    ) : (
      <IconDoneCheckFilled16 htmlColor="var(--unique-white)" />
    )
  };

  const renderedBadgeIconName = iconMappings[size];
  const isXxxlWithBirthdayIcon = badgeSpecialIcon && size === EAvatarSize.xxxl;

  const onLoadImageError = useCallback((e: SyntheticEvent) => {
    (e.target as HTMLImageElement).style.display = 'none';
    setImageIsAvailable(false);
  }, []);

  return (
    <div
      className={clsx(styles.avatar, styles[size], styles.circle, className, {
        [styles.xxxl]: size === EAvatarSize.xxxl
      })}
      style={avatarStyles}
      data-testid="AVATAR"
    >
      {size === EAvatarSize.xxxl && (
        <div className={styles.overlay}>
          <div style={{ opacity: '100%' }}>
            <IconCameraAvatar htmlColor="var(--unique-white)" />
          </div>
        </div>
      )}
      {imageIsAvailable && (
        <img
          src={imageSrc}
          className={styles.image}
          data-testid="AVATAR_IMAGE"
          alt="avatar image"
          onError={onLoadImageError}
        />
      )}

      {shouldShowLetters && (
        <div className={styles.letters} style={lettersStyles}>
          <Typography variant={lettersVariant} data-testid="AVATAR_LETTERS">
            {firstLetter}
            {secondLetter}
          </Typography>
        </div>
      )}

      {shouldShowIcon && (
        <div className={styles['user-icon']} data-testid="AVATAR_ICON">
          {size === EAvatarSize.xxxl ? (
            <IconPersonFilled110 htmlColor="var(--unique-white)" />
          ) : (
            <Icon name="IconPersonFilled32" containerSize={iconSize} htmlColor="var(--unique-white)" />
          )}
        </div>
      )}

      {shouldShowOnlineIndicator && (
        <div
          className={clsx(styles['online-indicator'], styles[online ? 'online' : 'offline'])}
          style={onlineIndicatorStyles}
          data-testid="AVATAR_INDICATOR_ONLINE"
        />
      )}

      {hasNumberIndicator && (
        <div className={styles['number-indicator']} style={numberIndicatorStyles} data-testid="AVATAR_INDICATOR_NUMBER">
          <Typography variant={size === EAvatarSize.xxxl ? 'Body-Bold' : 'Caption-Bold'}>{numberIndicator}</Typography>
        </div>
      )}

      {badgeIconName && (
        <div className={styles.badge} style={badgeStyles}>
          <IconBadge
            iconName={renderedBadgeIconName}
            badgeSpecialIcon={badgeSpecialIcon}
            isXxxlWithBirthdayIcon={isXxxlWithBirthdayIcon}
          />
        </div>
      )}
    </div>
  );
};

Avatar.componentType = 'Avatar';

export default Avatar;
