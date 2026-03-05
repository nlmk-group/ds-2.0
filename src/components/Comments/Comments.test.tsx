import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { IComment } from './types';

import Comments from './index';

const comments: IComment[] = [
  {
    id: '1',
    author: 'Alex',
    content: 'Root comment 1',
    createdAt: '2026-03-06',
    replies: [
      {
        id: '2',
        author: 'Bob',
        content: 'Reply comment 1',
        createdAt: '2026-03-06',
        parentId: '1',
        replies: []
      }
    ]
  },
  {
    id: '3',
    author: 'John',
    content: 'Root comment 2',
    createdAt: '2026-03-06',
    replies: []
  }
];

describe('Comments', () => {
  test('рендерит корневые комментарии', () => {
    render(<Comments comments={comments} />);

    expect(screen.getByText('Root comment 1')).toBeInTheDocument();
    expect(screen.getByText('Root comment 2')).toBeInTheDocument();
  });

  test('не показывает кнопку обновления без handleRefresh', () => {
    render(<Comments comments={comments} />);

    expect(screen.queryByRole('button', { name: /обновить/i })).not.toBeInTheDocument();
  });

  test('показывает кнопку обновления и вызывает handleRefresh по клику', () => {
    const handleRefresh = jest.fn();

    render(<Comments comments={comments} handleRefresh={handleRefresh} />);

    const button = screen.getByRole('button', { name: /обновить/i });
    fireEvent.click(button);

    expect(handleRefresh).toHaveBeenCalledTimes(1);
  });

  test('показывает форму добавления корневого комментария, если передан handleAddRootComment', () => {
    render(<Comments comments={comments} handleAddRootComment={jest.fn()} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('не показывает форму добавления корневого комментария, если handleAddRootComment не передан', () => {
    render(<Comments comments={comments} />);

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });
});
