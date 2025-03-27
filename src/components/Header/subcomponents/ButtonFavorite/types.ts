import { MouseEventHandler } from 'react';

export interface IButtonFavoriteProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isFavorite?: boolean;
}
