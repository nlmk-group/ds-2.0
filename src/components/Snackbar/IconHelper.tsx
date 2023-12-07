import React, { FC } from 'react'
import { colorMapping } from './enums'
import Icon from '@components/Icon';

const IconHelper: FC<{ color: colorMapping }> = ({
  color
}) => {
  switch (color) {
    case colorMapping.dark:
      return (
        <Icon
          name='IconErrorOutline24'
          containerSize={24}
          htmlColor={'var(--default-second)'}
        />
      );
    case colorMapping.green:
      return (
        <Icon
          name='IconDone24'
          containerSize={24}
          htmlColor={'var(--never-changes-white)'}
        />
      );
    case colorMapping.grey:
      return (
        <Icon
          name='IconDone24'
          containerSize={24}
          htmlColor={'var(--text-grey-900)'}
        />
      );
    case colorMapping['light-green']:
      return (
        <Icon
          name='IconDone24'
          containerSize={24}
          htmlColor={'var(--success-green-500)'}
        />
      );
    case colorMapping.pink:
      return (
        <Icon
          name='IconErrorOutline24'
          containerSize={24}
          htmlColor={'var(--error-red-600)'}
        />
      );
    case colorMapping.red:
      return (
        <Icon
          name='IconErrorOutline24'
          containerSize={24}
          htmlColor={'var(--never-changes-white)'}
        />
      );
    case colorMapping.white:
      return (
        <Icon
          name='IconDone24'
          containerSize={24}
          htmlColor={'var(--text-grey-900)'}
        />
      );
    default:
      return <></>
  }
}

export default IconHelper