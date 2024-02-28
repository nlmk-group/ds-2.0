import React from 'react';

import ImagePicture from '@components/ImagePicture';

import styles from './ImagePicture.module.scss';

import { ImagePictureRadius, ImagePictureRatios } from '../enums';
import { IImagePicture } from '../types';
import { argsTypes } from './argsTypes';

const IMAGE_MOCK_SRC = 'assets/image_picture_mock.jpg';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{Story()}</div>;

export default {
  title: 'Components/ImagePicture/Stories',
  component: ImagePicture,
  decorators: [withPadding],
  argTypes: argsTypes
};

const SetOfImagePictures = (argTypes: IImagePicture): JSX.Element => {
  return (
    <div>
      {Object.values(ImagePictureRadius).map(radius => {
        return (
          <div className={styles.row} key={radius}>
            {Object.values(ImagePictureRatios).map(aspectRatio => {
              return <ImagePicture {...argTypes} key={aspectRatio} aspectRatio={aspectRatio} radius={radius} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export const ImagePictureDefault = (argTypes: IImagePicture): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>
  );
};
ImagePictureDefault.storyName = 'Варианты компонента ImagePicture';
ImagePictureDefault.args = {
  src: IMAGE_MOCK_SRC,
  alt: 'Mock image'
};

export const ImagePictureEmpty = (argTypes: IImagePicture): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <SetOfImagePictures {...argTypes} />
    </div>
  );
};
ImagePictureEmpty.storyName = 'ImagePicture без изображения';
ImagePictureEmpty.args = {
  src: '',
  alt: ''
};
