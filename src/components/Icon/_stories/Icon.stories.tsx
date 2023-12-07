import React from 'react';

import Icon from '@components/Icon';
import { argsTypes } from '@components/Icon/_stories/argsTypes';

import styles from './Icon.module.scss';

import icons from '../IconsList';
import { TIconProps } from '../types';

export default {
  title: 'Components/Icon/Stories',
  component: Icon,
  argTypes: argsTypes
};

export const IconComponent = (argsTypes: any): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Icon name={'IconTackleCrane24'} color="primary" containerSize={32} {...argsTypes} />
      <Icon name="IconFeedback32" color="primary" containerSize={32} {...argsTypes} />
    </div>
  );
};
IconComponent.storyName = 'Компонент Icon по умолчанию';

export const AllIcons = (): JSX.Element => {
  const allIcon = { ...icons[16], ...icons[24], ...icons[32] };
  const iconsWithColors = Object.keys(allIcon).map(iconName => {
    const SpecificStory = allIcon[iconName];

    return {
      title: iconName,
      default: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory
      }),
      action: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'action'
      }),
      disabled: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'disabled'
      }),
      error: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'error'
      }),
      inherit: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'inherit'
      }),
      primary: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'primary'
      }),
      secondary: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'secondary'
      }),
      success: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'success'
      }),
      warning: React.createElement<TIconProps>(SpecificStory, {
        name: SpecificStory,
        color: 'warning'
      })
    };
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        {iconsWithColors.map((icon, key) => {
          const isWhiteIcon =
            icon.title === 'LogoSvgIcon' || icon.title === 'LogoutSvgIcon' || icon.title === 'WhiteStarSvgIcon';
          return (
            <div key={key} className={styles.row}>
              <div>{icon.title}</div>
              <div style={{ backgroundColor: isWhiteIcon ? 'black' : undefined }}>{icon.default}</div>
              <div style={{ backgroundColor: isWhiteIcon ? 'black' : undefined }}>{icon.action}</div>
              <div style={{ backgroundColor: isWhiteIcon ? 'black' : undefined }}>{icon.disabled}</div>
              <div style={{ backgroundColor: isWhiteIcon ? 'black' : undefined }}>{icon.error}</div>
              <div style={{ backgroundColor: isWhiteIcon ? 'black' : undefined }}>{icon.inherit}</div>
              <div style={{ backgroundColor: isWhiteIcon ? 'black' : undefined }}>{icon.primary}</div>
              <div style={{ backgroundColor: isWhiteIcon ? 'black' : undefined }}>{icon.secondary}</div>
              <div style={{ backgroundColor: isWhiteIcon ? 'black' : undefined }}>{icon.warning}</div>
              <div style={{ backgroundColor: isWhiteIcon ? 'black' : undefined }}>{icon.success}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
AllIcons.storyName = 'Все доступные иконки';
