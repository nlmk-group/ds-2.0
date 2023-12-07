import React from 'react';
import Avatar from '@components/Avatar';
import { IAvatarProps } from '@components/Avatar/types';
import { withDesign } from 'storybook-addon-designs';

import styles from './Avatar.module.scss';

import { argsTypes } from './argsTypes';
import { AvatarShape, AvatarSize } from '../enums';
import { SPECIAL_ICONS } from '../subcomponents/IconBadge/constants';
import { getAvatarImageSrc } from '../utils';

const withPadding = (Story: () => any) => (
  <div style={{ minHeight: 80 }}>{Story()}</div>
);

const AvatarImageMock = getAvatarImageSrc()

export default {
  title: 'Components/Avatar/Stories',
  component: Avatar,
  decorators: [withDesign, withPadding],
  argTypes: argsTypes
};

const SetOfAvatars = (argsTypes: IAvatarProps) => {
  return (
    <>
    <div className={styles.row}>
        {Object.values(AvatarSize).map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} imageSrc={AvatarImageMock} />
        })}
      </div>
      <div className={styles.row}>
        {Object.values(AvatarSize).map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} shape={AvatarShape.square} imageSrc={AvatarImageMock} />
        })}
      </div>
      <div className={styles.row}>
        {Object.values(AvatarSize).map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} userName='Антон' userSurname='Валуев' />
        })}
      </div>
      <div className={styles.row}>
        {Object.values(AvatarSize).map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} userName='Антон' userSurname='Валуев' shape={AvatarShape.square} />
        })}
      </div>
      <div className={styles.row}>
        {Object.values(AvatarSize).map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} />
        })}
      </div>
      <div className={styles.row}>
        {Object.values(AvatarSize).map((size, i) => {
          return <Avatar key={i} {...argsTypes} size={size} shape={AvatarShape.square} />
        })}
      </div>
    </>
  )
}

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
}

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
}

export const AvatarWithNumber = (argsTypes: IAvatarProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>
  );
};
AvatarWithNumber.storyName = 'Аватар c индикатором количества';
AvatarWithNumber.args = {
  numberIndicator: 8
}

export const AvatarWithDefaultBadge = (argsTypes: IAvatarProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>
  );
};
AvatarWithDefaultBadge.storyName = 'Аватар c дефолтным бейджем';
AvatarWithDefaultBadge.args = {
  badgeIconName: 'IconDone24'
}

export const AvatarWithSpecialBadge = (argsTypes: IAvatarProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <SetOfAvatars {...argsTypes} />
    </div>
  );
};
AvatarWithSpecialBadge.storyName = 'Аватар cо специальным бейджем';
AvatarWithSpecialBadge.args = {
  badgeIconName: SPECIAL_ICONS[0]
}
