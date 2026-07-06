import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { IComment, ICommentsProps } from './types';

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

const renderComments = (props: Partial<ICommentsProps> = {}) => {
  return render(
    <Comments comments={comments} {...props}>
      <Comments.Item>
        <Comments.Header>
          <Comments.Author />
          <Comments.Meta />
        </Comments.Header>
        <Comments.Content />
        <Comments.Actions />
      </Comments.Item>
    </Comments>
  );
};

describe('Comments', () => {
  test('рендерит корневые комментарии', () => {
    renderComments();

    expect(screen.getByText('Root comment 1')).toBeInTheDocument();
    expect(screen.getByText('Root comment 2')).toBeInTheDocument();
  });

  test('не показывает кнопку обновления без handleRefresh', () => {
    renderComments();

    expect(screen.queryByRole('button', { name: /обновить/i })).not.toBeInTheDocument();
  });

  test('показывает кнопку обновления и вызывает handleRefresh по клику', () => {
    const handleRefresh = jest.fn();

    renderComments({ handleRefresh });

    fireEvent.click(screen.getByRole('button', { name: /обновить/i }));

    expect(handleRefresh).toHaveBeenCalledTimes(1);
  });

  test('показывает форму добавления корневого комментария, если передан handleAddRootComment', () => {
    renderComments({ handleAddRootComment: jest.fn() });

    expect(screen.getByLabelText('Комментарий')).toBeInTheDocument();
  });

  test('не показывает форму добавления корневого комментария, если handleAddRootComment не передан', () => {
    renderComments();

    expect(screen.queryByLabelText('Комментарий')).not.toBeInTheDocument();
  });

  test('показывает пустое состояние, если комментариев нет', () => {
    render(
      <Comments comments={[]}>
        <Comments.Item>
          <Comments.Header>
            <Comments.Author />
            <Comments.Meta />
          </Comments.Header>
          <Comments.Content />
          <Comments.Actions />
        </Comments.Item>
      </Comments>
    );

    expect(screen.getByText('Комментариев пока нет')).toBeInTheDocument();
  });

  test('показывает loader при isLoading=true', () => {
    const { container } = renderComments({ isLoading: true });

    expect(container.querySelector('[data-ui-comments-loader]')).toBeInTheDocument();
    expect(screen.queryByText('Root comment 1')).not.toBeInTheDocument();
  });

  test('скрывает комментарии во время загрузки', () => {
    const { rerender } = render(
      <Comments comments={comments}>
        <Comments.Item>
          <Comments.Header>
            <Comments.Author />
            <Comments.Meta />
          </Comments.Header>
          <Comments.Content />
          <Comments.Actions />
        </Comments.Item>
      </Comments>
    );

    expect(screen.getByText('Root comment 1')).toBeInTheDocument();

    rerender(
      <Comments comments={comments} isLoading>
        <Comments.Item>
          <Comments.Header>
            <Comments.Author />
            <Comments.Meta />
          </Comments.Header>
          <Comments.Content />
          <Comments.Actions />
        </Comments.Item>
      </Comments>
    );

    expect(screen.queryByText('Root comment 1')).not.toBeInTheDocument();
  });
});
