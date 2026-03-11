import React from 'react';

import { ICommentActionItem, ICommentBuiltInActions } from '@components/Comments/types';
import { Dropdown, DropdownMenuItem, Icon } from '@components/index';

interface ICommentActionsProps {
  commentId: string;
  customActions: ICommentActionItem[];
  builtInActions?: ICommentBuiltInActions;
  handleEditComment?: () => void;
}
export const CommentActions = ({
  commentId,
  customActions,
  builtInActions,
  handleEditComment
}: ICommentActionsProps) => {
  return (
    <Dropdown
      iconButton={<Icon name={'IconMoreVertDotsFilled24'} />}
      menuStyle={{
        minWidth: '160px'
      }}
      variant={'secondary'}
      color={'ghost'}
      size={'m'}
      withPortal
    >
      {builtInActions?.onEdit && (
        <DropdownMenuItem onClick={handleEditComment} value="edit">
          Редактировать
        </DropdownMenuItem>
      )}
      {builtInActions?.onDelete && (
        <DropdownMenuItem onClick={() => builtInActions.onDelete?.(commentId)} value="edit">
          Удалить
        </DropdownMenuItem>
      )}
      {customActions.map(action => {
        const { value, disabled, label, onClick } = action;
        return (
          <DropdownMenuItem key={value} onClick={onClick} value={value} disabled={disabled}>
            {label}
          </DropdownMenuItem>
        );
      })}
    </Dropdown>
  );
};
