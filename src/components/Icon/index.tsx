import React, { FC } from 'react';

import { TIconProps } from './types';

import IconContainer from '../Icon/subcomponent/IconContainer';
import icons from './IconsDirectory';

export const Icon: FC<TIconProps> = ({ color = 'inherit', name, containerSize = 24, htmlColor }) => {
  const iconSize = Number(name.slice(-2));

  const Icon = icons[iconSize][name];
  return (
    <IconContainer containerSize={containerSize || iconSize}>
      <Icon htmlColor={htmlColor} color={color} />
    </IconContainer>
  );
};

export default Icon;
