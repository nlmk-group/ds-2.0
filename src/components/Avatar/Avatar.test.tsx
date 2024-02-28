import React from 'react';

import { render, screen } from '@testing-library/react';

import Avatar from '.';
import { AvatarShape, AvatarSize } from './enums';
import { IconDoneCheckFilled24 } from '..';

const defaultProps = {
  shape: AvatarShape.circle,
  size: AvatarSize.m
};

describe('src/components/Avatar', () => {
  test('Avatar renders with default props', () => {
    render(<Avatar {...defaultProps} />);
    expect(screen.getByTestId('AVATAR')).toBeInTheDocument();
    expect(screen.getByTestId('AVATAR_ICON')).toBeInTheDocument();
  });

  test("Avatar renders user's image", () => {
    render(<Avatar {...defaultProps} imageSrc={'fake/url'} />);
    expect(screen.getByTestId('AVATAR_IMAGE')).toBeInTheDocument();
  });

  test("Avatar renders user's letters", () => {
    render(<Avatar {...defaultProps} userName="Антон" userSurname="Валуев" />);
    expect(screen.getByTestId('AVATAR_LETTERS')).toBeInTheDocument();
    expect(screen.getByText('АВ')).toBeInTheDocument();
  });

  test('Avatar renders online indicator', () => {
    render(<Avatar {...defaultProps} online />);
    expect(screen.getByTestId('AVATAR_INDICATOR_ONLINE')).toBeInTheDocument();
  });

  test('Avatar renders numbers indicator', () => {
    render(<Avatar {...defaultProps} numberIndicator={8} />);
    expect(screen.getByTestId('AVATAR_INDICATOR_NUMBER')).toBeInTheDocument();
  });

  test('Avatar renders default badge', () => {
    render(
      <Avatar
        {...defaultProps}
        badgeIconName={(
          <IconDoneCheckFilled24 />
        )}
      />
    );
    expect(screen.getByTestId('AVATAR_BADGE_DEFAULT')).toBeInTheDocument();
  });

  test('Avatar renders special badge', () => {
    render(
      <Avatar
        {...defaultProps}
        badgeIconName={(
          <IconDoneCheckFilled24 />
        )}
        badgeSpecialIcon
      />
    );
    expect(screen.getByTestId('AVATAR_BADGE_SPECIAL')).toBeInTheDocument();
  });
});
