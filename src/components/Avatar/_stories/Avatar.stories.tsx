import React from 'react';

import Avatar from '@components/Avatar';
import { IAvatarProps } from '@components/Avatar/types';
import { IconBirthday16, IconDoneCheckFilled16 } from '@components/Icon/IconsDirectory';

import styles from './Avatar.module.scss';

import { EAvatarSize } from '../enums';
import { getAvatarImageSrc } from '../utils';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story/>}</div>;

const AvatarImageMock = getAvatarImageSrc();

export default {
  title: 'Components/Avatar/Stories',
  component: Avatar,
  decorators: [withPadding],
  argTypes: argsTypes
};

const SetOfAvatars = (argsTypes: IAvatarProps) => {
  return (
    <>
      <div className={styles.row}>
        {Object.values(EAvatarSize).map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} imageSrc={AvatarImageMock} />;
        })}
      </div>
      <div className={styles.row}>
        {Object.values(EAvatarSize).map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} userName="Антон" userSurname="Валуев" />;
        })}
      </div>
      <div className={styles.row}>
        {Object.values(EAvatarSize).map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} />;
        })}
      </div>
    </>
  );
};
const SetOfAvatarsSmall = (argsTypes: IAvatarProps) => {
  const avatarSizes = Object.values(EAvatarSize).filter(size => size !== EAvatarSize.xxxl);
  return (
    <>
      <div className={styles.row}>
        {avatarSizes.map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} imageSrc={AvatarImageMock} />;
        })}
      </div>
      <div className={styles.row}>
        {avatarSizes.map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} userName="Антон" userSurname="Валуев" />;
        })}
      </div>
      <div className={styles.row}>
        {avatarSizes.map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} />;
        })}
      </div>
    </>
  );
};

export const AvatarDefault = (argsTypes: IAvatarProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Avatar {...argsTypes} />
    </div>
  );
};
AvatarDefault.storyName = 'Дефолтный аватар';

export const DefaultAvatarsWithSizes = (argsTypes: IAvatarProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>
  );
};
DefaultAvatarsWithSizes.storyName = 'Дефолтные аватары различных размеров';

export const AvatarOnline = (argsTypes: IAvatarProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>
  );
};
AvatarOnline.storyName = 'Аватар в режиме онлайн';
AvatarOnline.args = {
  online: true
};

export const AvatarOffline = (argsTypes: IAvatarProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>
  );
};
AvatarOffline.storyName = 'Аватар в режиме оффлайн';
AvatarOffline.args = {
  online: false
};

export const AvatarWithNumber = (argsTypes: IAvatarProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <SetOfAvatarsSmall {...argsTypes} />
    </div>
  );
};
AvatarWithNumber.storyName = 'Аватар c индикатором количества';
AvatarWithNumber.args = {
  numberIndicator: 8
};

export const AvatarWithDefaultBadge = (argsTypes: IAvatarProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        {Object.values(EAvatarSize).map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} imageSrc={AvatarImageMock} />;
        })}
      </div>
      <div className={styles.row}>
        {Object.values(EAvatarSize).map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} userName="Антон" userSurname="Валуев" />;
        })}
      </div>
      <div className={styles.row}>
        {Object.values(EAvatarSize).map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} />;
        })}
      </div>
    </div>
  );
};
AvatarWithDefaultBadge.storyName = 'Аватар c дефолтным бейджем';
AvatarWithDefaultBadge.args = {
  badgeIconName: <IconDoneCheckFilled16 htmlColor="var(--unique-white)" />
};

export const AvatarWithSpecialBadge = (argsTypes: IAvatarProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>
  );
};
AvatarWithSpecialBadge.storyName = 'Аватар cо специальным бейджем';
AvatarWithSpecialBadge.args = {
  badgeIconName: <IconBirthday16 htmlColor="var(--unique-white)" />,
  badgeSpecialIcon: true
};
