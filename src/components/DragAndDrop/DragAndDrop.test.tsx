import React from 'react';

import { DragAndDrop } from '@components/index';
import { fireEvent, render, screen } from '@testing-library/react';

import styles from './DragAndDrop.module.scss';

import { cancelUploadLabel, dragNDropBtnLabel, dragNDropDescription, dragNDropTitle, fileTypes } from './constants';
import { EDnDFileType, EDnDIconType, EDnDSizes, EDnDSpinnerWidthHelper, EDnDStatusColor } from './enums';
import UploadIcon from './subcomponents/UploadIcon';

describe('src/components/DragAndDrop', () => {
  const onUploadMockCallBack = jest.fn();

  test('It should render a DragAndDrop', () => {
    const { container } = render(<DragAndDrop onUpload={onUploadMockCallBack} />);
    const dndComponent = container.getElementsByTagName('form')[0];
    expect(dndComponent).toBeInTheDocument();
  });

  test('It should render component with custom style', () => {
    const className = 'disabled';
    const { container } = render(<DragAndDrop className={styles[className]} onUpload={onUploadMockCallBack} />);
    const dndComponent = container.getElementsByTagName('form')[0];

    expect(dndComponent.classList.contains(className)).toBe(true);
  });

  test('It should render disabled component', () => {
    const { container } = render(<DragAndDrop disabled onUpload={onUploadMockCallBack} />);
    const dndComponent = container.getElementsByTagName('form')[0];

    expect(dndComponent.classList.contains('disabled')).toBe(true);
  });

  describe('While using the default labels in component', () => {
    const DndHelper = () => <DragAndDrop onUpload={onUploadMockCallBack} />;

    test('It should render default title', () => {
      render(<DndHelper />);
      expect(screen.getByText(dragNDropTitle)).toBeInTheDocument();
    });

    test('It should render default description', () => {
      render(<DndHelper />);
      expect(screen.getByText(dragNDropDescription)).toBeInTheDocument();
    });

    test('It should render default btn label', () => {
      render(<DndHelper />);
      expect(screen.getByText(dragNDropBtnLabel)).toBeInTheDocument();
    });
  });

  describe('While using custom labels in component', () => {
    const text = 'Hello World!';
    const TestComponent = () => <div data-testid="TEST_COMPONENT">{text}</div>;
    test('It should render custom title', () => {
      render(<DragAndDrop title={text} onUpload={onUploadMockCallBack} />);
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    test('It should render custom title (Component)', () => {
      render(<DragAndDrop title={<TestComponent />} onUpload={onUploadMockCallBack} />);
      expect(screen.getByTestId('TEST_COMPONENT')).toBeInTheDocument();
    });

    test('It should render custom description', () => {
      render(<DragAndDrop description={text} onUpload={onUploadMockCallBack} />);
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    test('It should render custom description (Component)', () => {
      render(<DragAndDrop description={<TestComponent />} onUpload={onUploadMockCallBack} />);
      expect(screen.getByTestId('TEST_COMPONENT')).toBeInTheDocument();
    });

    test('It should render custom btn label', () => {
      render(<DragAndDrop btnLabel={text} onUpload={onUploadMockCallBack} />);
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  test('It should call function onUploadMockCallBack onClick', () => {
    const { container } = render(<DragAndDrop onUpload={onUploadMockCallBack} />);
    const dndComponent = container.getElementsByTagName('input')[0];
    const file = new File(['test file content'], 'test.txt', {
      type: 'text/plain'
    });
    fireEvent.change(dndComponent, { target: { files: [file] } });
    expect(onUploadMockCallBack).toHaveBeenCalledTimes(1);
  });

  describe('while having different types to upload', () => {
    Object.values(EDnDFileType).forEach((key: EDnDFileType) => {
      const ComponentHelper = () => <DragAndDrop fileType={key} onUpload={onUploadMockCallBack} />;

      test(`It should render component that accept ${key}`, () => {
        const { container } = render(<ComponentHelper />);
        const dndComponent = container.getElementsByTagName('input')[0];
        expect(dndComponent).toHaveAttribute('accept', fileTypes[key]);
      });

      test(`It should render icon of type ${key}`, () => {
        render(<ComponentHelper />);
        expect(screen.getByTestId(`ICON_TYPE_${EDnDIconType[key]}`)).toBeInTheDocument();
      });
    });
  });

  describe('While rendering with different statuses', () => {
    Object.values(EDnDStatusColor).forEach((status: EDnDStatusColor) => {
      test(`It should render component with ${status} status`, () => {
        const { container } = render(
          <DragAndDrop statusColor={EDnDStatusColor[status]} onUpload={onUploadMockCallBack} />
        );
        const dndComponent = container.getElementsByTagName('label')[0];
        expect(dndComponent.classList.contains(`label-${status}`)).toBe(true);
      });
    });
  });

  describe('While rendering with different sizes', () => {
    Object.values(EDnDSizes).forEach((size: EDnDSizes) => {
      const ComponentHelper = () => <DragAndDrop size={size} onUpload={onUploadMockCallBack} />;

      test(`It should render component with ${size} size`, () => {
        const { container } = render(<ComponentHelper />);

        const dndComponent = container.getElementsByTagName('label')[0];
        expect(dndComponent.classList.contains(`label-file-upload-${size}`)).toBe(true);
      });

      test(`It should render component's icon with ${size} size`, () => {
        render(<ComponentHelper />);

        expect(screen.getByTestId(`ICON_TYPE_${EDnDIconType.image}`).classList.contains(`icon-${size}`)).toBe(true);
      });
    });
  });

  describe('While rendering with loading status', () => {
    const cancelUploadCallBack = jest.fn();
    const ComponentHelper = () => (
      <DragAndDrop loading onUpload={onUploadMockCallBack} cancelUpload={cancelUploadCallBack} />
    );
    test('It should call function cancelUpload onClick', () => {
      render(<ComponentHelper />);
      const btn = screen.getByText(cancelUploadLabel);
      fireEvent.click(btn);
      expect(cancelUploadCallBack).toHaveBeenCalledTimes(1);
    });
    test('It should render Dnd that cannot be clicked', () => {
      const { container } = render(<ComponentHelper />);

      const dndComponent = container.getElementsByTagName('form')[0];
      expect(dndComponent).toHaveStyle(`pointer-events: none`);
    });
  });

  describe('While rendering SmallText', () => {
    test('It should render default DnD with SmallText', () => {
      render(<DragAndDrop smallText onUpload={onUploadMockCallBack} />);
      expect(screen.getByTestId(`SMALL_TEXT_${EDnDStatusColor.default}`)).toBeInTheDocument();
    });

    test('It should render DnD with title', () => {
      const txt = 'Hello world!';
      render(<DragAndDrop title={txt} smallText onUpload={onUploadMockCallBack} />);
      expect(screen.getByText(txt)).toBeInTheDocument();
    });

    describe('While rendering with different statuses', () => {
      Object.values(EDnDStatusColor).forEach((status: EDnDStatusColor) => {
        const ComponentHelper = () => <DragAndDrop smallText statusColor={status} onUpload={onUploadMockCallBack} />;

        test(`It should render SmallIcon with ${status} status`, () => {
          render(<ComponentHelper />);
          expect(screen.getByTestId(`SMALL_TEXT_${status}`)).toBeInTheDocument();
        });
      });
    });
  });

  describe('src/components/DragAndDrop/UploadIcon', () => {
    test('It should render a UploadIcon', () => {
      const { container } = render(<UploadIcon size={EDnDSizes.l} percentUpload={0} />);
      const uploadIcon = container.getElementsByTagName('div')[0];
      expect(uploadIcon).toBeInTheDocument();
    });

    test('It should render a UploadIcon', () => {
      const percent = 15;
      render(<UploadIcon size={EDnDSizes.l} percentUpload={percent} />);
      expect(screen.getByTestId('PERCENT')).toHaveTextContent(`${percent}%`);
    });

    describe('While rendering UploadIcon with different sizes', () => {
      Object.values(EDnDSizes).forEach((size: EDnDSizes) => {
        const ComponentHelper = () => <UploadIcon size={size} percentUpload={0} />;

        test(`It should render UploadIcon with ${size} size`, () => {
          const { container } = render(<ComponentHelper />);
          const uploadIcon = container.getElementsByTagName('div')[0];
          expect(uploadIcon).toHaveStyle(`height: ${EDnDSpinnerWidthHelper[size]}`);
          expect(uploadIcon).toHaveStyle(`width: ${EDnDSpinnerWidthHelper[size]}`);
        });
      });
    });
  });

  test('It should render with custom icon', () => {
    render(<DragAndDrop customIcon={<div data-testid="TEST_ICON" />} onUpload={onUploadMockCallBack} />);

    expect(screen.getByTestId('TEST_ICON')).toBeInTheDocument();
  });

  test('It should render with custom component', () => {
    render(
      <DragAndDrop onUpload={onUploadMockCallBack}>
        <div data-testid="TEST_COMPONENT" />
      </DragAndDrop>
    );

    expect(screen.getByTestId('TEST_COMPONENT')).toBeInTheDocument();
  });
});
