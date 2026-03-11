import React from 'react';

import { IComment, ICommentActionProps } from '@components/Comments/types';
import { Dropdown, DropdownMenuItem, Icon } from '@components/index';

interface CommentActionsMenuProps {
  comment: IComment;
  builtInEdit?: boolean;
  builtInDelete?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  actions?: ICommentActionProps[];
}

export const CommentActionsMenu = ({
  comment,
  builtInEdit = false,
  builtInDelete = false,
  onEdit,
  onDelete,
  actions = []
}: CommentActionsMenuProps) => {
  const hasActions = builtInEdit || builtInDelete || actions.length > 0;

  if (!hasActions) {
    return null;
  }

  return (
    <Dropdown
      iconButton={<Icon name="IconMoreVertDotsFilled24" />}
      menuStyle={{ minWidth: '160px' }}
      variant="secondary"
      color="ghost"
      size="m"
      withPortal
    >
      {builtInEdit && (
        <DropdownMenuItem onClick={onEdit} value="edit">
          Редактировать
        </DropdownMenuItem>
      )}

      {builtInDelete && (
        <DropdownMenuItem onClick={onDelete} value="delete">
          Удалить
        </DropdownMenuItem>
      )}

      {actions.map(action => (
        <DropdownMenuItem
          key={action.value}
          value={action.value}
          disabled={action.disabled}
          onClick={() => action.onClick(comment.id)}
        >
          {action.label}
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
