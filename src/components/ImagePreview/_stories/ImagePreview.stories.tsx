import React from 'react';

import ImagePreview from '@components/ImagePreview';

import styles from './ImagePreview.stories.module.scss';

import { IImagePreviewProps } from '../types';
import { argsTypes } from './argsTypes';
import { Box } from "@components/index";
import { Meta } from '@storybook/react-vite';
import {IMockItem, makeItems} from "@components/ImagePreview/mock/helpers";

const image_1 = 'img/image_picture_mock.jpg';
const image_2 = 'img/image_workers.jpg';
const image_3 = 'img/avatar_mock.png';

const withWrapper = (Story: any) => {
  return (
    <Box className={styles.wrapper} alignItems="center" justifyContent="center">
      <Story />
    </Box>
  );
};

const MOCK_ITEMS: IMockItem[] = [
  {
    previewSrc: image_1,
    fullSrc: image_1,
    downloadName: 'photo.jpg',
    alt: 'Mock photo',
    titlePrefix: 'Этап',
    descriptionPrefix: 'Название фото',
    previewTitle: 'Фотография'
  },
  {
    previewSrc: image_2,
    fullSrc: image_2,
    downloadName: 'photo.jpg',
    alt: 'Mock photo',
    titlePrefix: 'Этап',
    descriptionPrefix: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur'
  },
  {
    previewSrc: image_3,
    fullSrc: image_3,
    downloadName: 'photo.jpg',
    alt: 'Mock photo',
    titlePrefix: 'Этап',
    descriptionPrefix: 'Название фото',
    previewTitle: 'Дизайн-система НЛМК – одна из первых в мире, созданная с ориентацией на сложные MES-cистемы'
  }
];

export default {
  title: 'Components/ImagePreview/Stories',
  component: ImagePreview,
  decorators: withWrapper,
  argTypes: argsTypes
} as Meta<typeof ImagePreview>;

export const ImagePreviewDefault = (argTypes: IImagePreviewProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <ImagePreview {...argTypes} />
    </div>
  );
};

ImagePreviewDefault.storyName = 'Вариант компонента c несколькими изображениями';
ImagePreviewDefault.args = {
  items: makeItems(MOCK_ITEMS,
    15
  ),
  previewImgSize: 180
};

export const ImagePreviewSingle = (argTypes: IImagePreviewProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <ImagePreview {...argTypes} />
    </div>
  );
};

ImagePreviewSingle.storyName = 'Вариант компонента c одним изображением';
ImagePreviewSingle.args = {
  items: makeItems(MOCK_ITEMS,
    1
  ),
  previewImgSize: 180
};

export const ImagePreviewLongTitle = (argTypes: IImagePreviewProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <ImagePreview {...argTypes} />
    </div>
  );
};

ImagePreviewLongTitle.storyName = 'Вариант компонента c длинным заголовком и описанием';
ImagePreviewLongTitle.args = {
  items: makeItems({
      ...MOCK_ITEMS[0],
      titlePrefix: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur',
      descriptionPrefix: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur'
    },
    1
  ),
  previewImgSize: 180
};
