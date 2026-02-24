import React from 'react';

import ImagePreview from '@components/ImagePreview';

import styles from './ImagePreview.stories.module.scss';

import { IImagePreviewProps } from '../types';
import { argsTypes } from './argsTypes';
import { Box } from "@components/index";
import { Meta } from '@storybook/react-vite';
import { IMockItem, makeItems } from "@components/ImagePreview/mock/helpers";

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
    descriptionPrefix: 'Горячекатаный прокат НЛМК является основой для всех дальнейших переделов, и его качество гарантируется тщательно отработанной технологией производства. Основные потребительские достоинства горячекатаной стали заложены в структуре металла и на 60% зависят от поступающего полуфабриката — слябов НЛМК, которые закладывают химический состав, чистоту металла и качество поверхности.'
  },
  {
    previewSrc: image_3,
    fullSrc: image_3,
    downloadName: 'photo.jpg',
    alt: 'Mock photo',
    titlePrefix: 'Этап',
    descriptionPrefix: 'Название фото',
    previewTitle: 'Горячекатаный прокат широко востребован при строительстве нефтегазопроводов'
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
  items: makeItems([{
      ...MOCK_ITEMS[0],
      titlePrefix: 'Горячекатаный прокат НЛМК является основой для всех дальнейших переделов, и его качество гарантируется тщательно отработанной технологией производства. Основные потребительские достоинства горячекатаной стали заложены в структуре металла и на 60% зависят от поступающего полуфабриката — слябов НЛМК, которые закладывают химический состав, чистоту металла и качество поверхности.',
      descriptionPrefix: 'За четким соблюдением необходимых параметров следят томографические и рентгеновские системы: каждая марка стали охлаждается с определенной скоростью и до нужного и заранее установленного для нее предела температуры, обретая свои главные потребительские свойства: прочность, штампуемость, пластичность и потенциал получения специальных магнитных свойств.'
    }],
    1
  ),
  previewImgSize: 180
};
