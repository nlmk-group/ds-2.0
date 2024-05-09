import React from 'react';

import { render, screen } from '@testing-library/react';

import ErrorPage from './';

test('ErrorPage renders with default props', () => {
  render(<ErrorPage />);
  expect(screen.getByText('Произошла ошибка')).toBeInTheDocument();
  expect(screen.getByText('Попробуйте обновить страницу')).toBeInTheDocument();
});

test('ErrorPage renders with code 403', () => {
  render(
    <ErrorPage
      errorCode={403}
      description="Нет доступа"
      hint="Воспользуйтесь боковым меню, чтобы перейти к нужной форме"
    />
  );
  expect(screen.getByText('403: Нет доступа')).toBeInTheDocument();
});

test('ErrorPage renders with code 404', () => {
  render(
    <ErrorPage
      errorCode={404}
      description="Страница не найдена"
      hint="Воспользуйтесь боковым меню, чтобы перейти к нужной форме"
    />
  );

  expect(screen.getByText('404: Страница не найдена')).toBeInTheDocument();
});

test('ErrorPage renders with any other code', () => {
  render(
    <ErrorPage
      errorCode={500}
      description="Внутренняя ошибка сервера"
      hint="Воспользуйтесь боковым меню, чтобы перейти к нужной форме"
    />
  );

  expect(screen.getByText('500: Внутренняя ошибка сервера')).toBeInTheDocument();
});
