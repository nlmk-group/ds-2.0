import React from 'react';

import { ErrorPageProps } from '@components/ErrorPage/types';

import ErrorPage from '../index';
import { argsTypes } from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ padding: 40 }}>{<Story/>}</div>;

export default {
  title: 'Components/ErrorPage/Stories',
  component: ErrorPage,
  decorators: [withPadding],
  argTypes: argsTypes,
  parameters: {
    layout: 'fullscreen'
  }
};

export const ErrorPageDefault = (argTypes: ErrorPageProps) => {
  return <ErrorPage {...argTypes} />;
};
ErrorPageDefault.storyName = 'Страница ошибки по умолчанию';
ErrorPageDefault.args = {
  description: 'Произошла ошибка',
  hint: 'Попробуйте обновить страницу'
};

export const ErrorPage403 = (argTypes: ErrorPageProps) => {
  return <ErrorPage {...argTypes} />;
};
ErrorPage403.storyName = 'Страница ошибки 403';
ErrorPage403.args = {
  errorCode: 403,
  description: 'Нет доступа',
  hint: 'Пожалуйста, проверьте введённые данные'
};

export const ErrorPage404 = (argTypes: ErrorPageProps) => {
  return <ErrorPage {...argTypes} />;
};
ErrorPage404.storyName = 'Страница ошибки 404';
ErrorPage404.args = {
  errorCode: 404,
  description: 'Страница не найдена',
  hint: 'Проверьте URL на наличие ошибок или попробуйте начать с главной страницы'
};

export const ErrorPageOthers = (argTypes: ErrorPageProps) => {
  return <ErrorPage {...argTypes} />;
};
ErrorPageOthers.storyName = 'Страница любой другой ошибки';
ErrorPageOthers.args = {
  errorCode: 500,
  description: 'Внутренняя ошибка сервера',
  hint: 'Попробуйте перезагрузить страницу'
};
