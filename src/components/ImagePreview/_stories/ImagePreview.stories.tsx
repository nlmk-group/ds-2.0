import React, { useState } from 'react';

import { ImagePreview, ImagePreviewModal } from '@components/ImagePreview';
import { IMockItem, makeItems } from '@components/ImagePreview/mock/helpers';
import { Box, Button, IconFileDOCX32 } from '@components/index';
import { Meta } from '@storybook/react-vite';

import styles from './ImagePreview.stories.module.scss';

import { IImageItem, IImagePreviewModalProps, IImagePreviewProps } from '../types';
import { argsTypes } from './argsTypes';

const image_1 = 'img/image_picture_mock.jpg';
const image_2 = 'img/image_workers.jpg';
const image_3 = 'img/avatar_mock.png';

const withWrapper = (Story: any) => {
  return (
    <Box className={styles.wrapper} justifyContent="center">
      <div className={styles.container}>
        <Story />
      </div>
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
    descriptionPrefix:
      'Горячекатаный прокат НЛМК является основой для всех дальнейших переделов, и его качество гарантируется тщательно отработанной технологией производства. Основные потребительские достоинства горячекатаной стали заложены в структуре металла и на 60% зависят от поступающего полуфабриката — слябов НЛМК, которые закладывают химический состав, чистоту металла и качество поверхности.'
  },
  {
    previewSrc: image_3,
    fullSrc: image_3,
    downloadName: 'photo.png',
    alt: 'Mock photo',
    titlePrefix: 'Этап',
    descriptionPrefix: 'Название фото',
    previewTitle: 'Горячекатаный прокат широко востребован при строительстве нефтегазопроводов'
  }
];

export default {
  title: 'Components/ImagePreview/Stories',
  component: ImagePreview,
  decorators: [withWrapper],
  argTypes: argsTypes
} as Meta<typeof ImagePreview>;

export const ImagePreviewDefault = (argTypes: IImagePreviewProps): JSX.Element => {
  return <ImagePreview {...argTypes} />;
};

ImagePreviewDefault.storyName = 'ImagePreview c несколькими изображениями';
ImagePreviewDefault.args = {
  items: makeItems(MOCK_ITEMS, 15),
  previewImgSize: 180
};

export const ImagePreviewCheckbox = (argTypes: IImagePreviewProps): JSX.Element => {
  const secondId = argTypes.items?.[1]?.id;
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>(() =>
    secondId == null ? {} : { [String(secondId)]: true }
  );

  const handleCheckbox = ({ item, checked }: { item: IImageItem; checked: boolean }) => {
    const key = String(item.id);
    setCheckedMap(prev => ({ ...prev, [key]: checked }));
  };

  return <ImagePreview {...argTypes} checkedMap={checkedMap} handleCheckbox={handleCheckbox} />;
};

ImagePreviewCheckbox.storyName = 'ImagePreview c чекбоксом';
ImagePreviewCheckbox.args = {
  items: makeItems(MOCK_ITEMS, 5),
  previewImgSize: 180
};

export const ImagePreviewLongTitle = (argTypes: IImagePreviewProps): JSX.Element => {
  return <ImagePreview {...argTypes} />;
};

ImagePreviewLongTitle.storyName = 'ImagePreview c длинным заголовком и описанием';
ImagePreviewLongTitle.args = {
  items: makeItems(
    [
      {
        ...MOCK_ITEMS[0],
        previewTitle: 'Горячекатаный прокат НЛМК',
        titlePrefix:
          'Горячекатаный прокат НЛМК является основой для всех дальнейших переделов, и его качество гарантируется тщательно отработанной технологией производства. Основные потребительские достоинства горячекатаной стали заложены в структуре металла и на 60% зависят от поступающего полуфабриката — слябов НЛМК, которые закладывают химический состав, чистоту металла и качество поверхности.',
        descriptionPrefix:
          'За четким соблюдением необходимых параметров следят томографические и рентгеновские системы: каждая марка стали охлаждается с определенной скоростью и до нужного и заранее установленного для нее предела температуры, обретая свои главные потребительские свойства: прочность, штампуемость, пластичность и потенциал получения специальных магнитных свойств.'
      },
      {
        ...MOCK_ITEMS[1],
        previewTitle: 'За четким соблюдением необходимых параметров следят томографические и рентгеновские системы'
      }
    ],
    2
  ),
  previewImgSize: 180
};

export const ImagePreviewNoPreviewSrc = (argTypes: IImagePreviewProps): JSX.Element => {
  const alreadyChecked = argTypes.items?.[0]?.id;
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>(() =>
    alreadyChecked == null ? {} : { [String(alreadyChecked)]: true }
  );

  const handleCheckbox = ({ item, checked }: { item: IImageItem; checked: boolean }) => {
    const key = String(item.id);
    setCheckedMap(prev => ({ ...prev, [key]: checked }));
  };

  return (
    <Box p={24} background="var(--steel-10)" borderRadius={8}>
      <ImagePreview {...argTypes} checkedMap={checkedMap} handleCheckbox={handleCheckbox} />
    </Box>
  );
};

ImagePreviewNoPreviewSrc.storyName = 'ImagePreview без изображения';
ImagePreviewNoPreviewSrc.args = {
  items: makeItems(
    [
      {
        previewSrc: '',
        fullSrc: '',
        previewTitle: 'name-1.file',
        titlePrefix: 'Файл',
        descriptionPrefix: 'Неграфический файл'
      },
      {
        previewSrc: '',
        fullSrc: '',
        previewTitle: 'name-2.file',
        titlePrefix: 'Файл',
        descriptionPrefix: 'Неграфический файл'
      },
      {
        previewSrc: '',
        fullSrc: '',
        PlaceholderSvgIcon: <IconFileDOCX32 />,
        previewTitle: 'name-3.docx',
        titlePrefix: 'Файл',
        descriptionPrefix: 'Неграфический файл'
      },
      MOCK_ITEMS[0],
      MOCK_ITEMS[1]
    ],
    5
  ),
  previewImgSize: 180
};

const ModalStory = ({
  items,
  activeIndex: initialActiveIndex = 0,
  showDownloadButton = true,
  classNameModal,
  portalContainerId,
  zoomDisabled
}: Partial<IImagePreviewModalProps> & { items: IImageItem[] }) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  return (
    <Box p={24}>
      {!open && (
        <Button onClick={() => setOpen(true)} variant="primary">
          Открыть модальное окно
        </Button>
      )}

      {open && (
        <ImagePreviewModal
          items={items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onClose={() => setOpen(false)}
          showDownloadButton={showDownloadButton}
          classNameModal={classNameModal}
          portalContainerId={portalContainerId}
          zoomDisabled={zoomDisabled}
        />
      )}
    </Box>
  );
};

export const ImagePreviewModalDefault = (): JSX.Element => {
  return <ModalStory items={makeItems(MOCK_ITEMS, 5)} />;
};
ImagePreviewModalDefault.storyName = 'ImagePreviewModal по умолчанию';

export const ImagePreviewModalZoomDisabled = (): JSX.Element => {
  return <ModalStory items={makeItems(MOCK_ITEMS, 3)} zoomDisabled />;
};
ImagePreviewModalZoomDisabled.storyName = 'ImagePreviewModal без зума';

export const ImagePreviewModalSingle = (): JSX.Element => {
  return (
    <ModalStory
      items={makeItems([MOCK_ITEMS[0]], 1)}
      showDownloadButton={false}
      classNameModal={styles['hide-sidebar']}
    />
  );
};
ImagePreviewModalSingle.storyName = 'ImagePreviewModal с одной картинкой без кнопки для загрузки изображения';
