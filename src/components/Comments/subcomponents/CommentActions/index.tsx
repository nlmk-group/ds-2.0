import React from 'react';

import { Dropdown, DropdownMenuItem, Icon } from '@components/index';
import { ICommentActionItem, ICommentBuiltInActions } from '@components/Comments/types';

interface ICommentActionsProps {
  commentId: string;
  customActions: ICommentActionItem[];
  builtInActions?: ICommentBuiltInActions;
  handleEditComment?: () => void;
}
export const CommentActions = ({ commentId, customActions, builtInActions, handleEditComment }: ICommentActionsProps) => {
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
      {customActions.map(action => (
        <DropdownMenuItem key={action.value} onClick={action.onClick} value={action.value} disabled={action.disabled}>
          {action.label}
        </DropdownMenuItem>
      ))}
    </Dropdown>
  )
}
