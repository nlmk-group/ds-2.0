import React, { FC } from 'react';

import { TIconProps } from './types';

import IconContainer from '../Icon/subcomponent/IconContainer';
import icons from './IconsDirectory';

export const Icon: FC<TIconProps> = ({ color = 'inherit', name, containerSize = 24, htmlColor, className, style }) => {
  const iconSize = Number(name.slice(-2));

  const IconComponent = icons[iconSize][name];
  return (
    <IconContainer containerSize={containerSize || iconSize} className={className} style={style}>
      <IconComponent htmlColor={htmlColor} color={color} />
    </IconContainer>
  );
};

export default Icon;
