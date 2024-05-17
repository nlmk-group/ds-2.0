import React, { Fragment } from 'react';

import { AttachFiles, File } from '@components/index';
import { fireEvent, render, screen } from '@testing-library/react';

import { FILE_NAME, FILES_DESCRIPTION } from './_stories/text';

describe('src/components/AttachFiles', () => {
  // Check render AttachFiles at DOM
  test('It should render a File', () => {
    const { container } = render(<File label={'aloha'} />);
    const fileComponent = container.getElementsByTagName('div')[0];
    expect(fileComponent).toBeInTheDocument();
  });

  test('It should render a File with correct label', () => {
    render(<File label={FILE_NAME} />);
    expect(screen.getByTestId('FILE_TITLE')).toHaveTextContent(FILE_NAME);
  });

  test('It should render a File with description', () => {
    render(<File label={FILE_NAME} description={FILES_DESCRIPTION} />);
    expect(screen.getByTestId('FILE_DESCRIPTION')).toHaveTextContent(FILES_DESCRIPTION);
    expect(screen.getByTestId('FILE_DESCRIPTION').classList.contains('description')).toBe(true);
  });

  describe('While rendering left icon', () => {
    test('It should render a File with default icon', () => {
      render(<File label={FILE_NAME} />);
      expect(screen.getByTestId('DEFAULT_ICON')).toBeInTheDocument();
    });

    test('It should render a File with tick icon', () => {
      render(<File label={FILE_NAME} tick />);
      expect(screen.getByTestId('TICK_ICON')).toBeInTheDocument();
    });

    describe('While rendering checkbox', () => {
      const mockCallBack = jest.fn();
      const checkedValueTrue = true;
      const FileWithCheckBox = () => (
        <File label={FILE_NAME} checkedValue={checkedValueTrue} checked onCheckedChange={mockCallBack} />
      );

      test('It should render a File with checkbox', () => {
        render(<FileWithCheckBox />);
        expect(screen.getByTestId('CHECKED_ICON')).toBeInTheDocument();
      });

      test('It should render a File with checked checkbox', () => {
        render(<FileWithCheckBox />);
        const checkbox = screen.getByTestId('CHECKED_ICON').querySelector('input') as HTMLInputElement;
        expect(checkbox.checked).toBe(checkedValueTrue);
      });

      test('It should call function on click action', () => {
        render(<FileWithCheckBox />);

        const checkbox = screen.getByTestId('CHECKED_ICON').querySelector('input') as HTMLInputElement;
        fireEvent.click(checkbox);
        expect(mockCallBack).toHaveBeenCalledTimes(1);
      });
    });

    describe('While rendering with control', () => {
      describe('While rendering with removed control', () => {
        const mockCallBack = jest.fn();
        const FileWithRemovedControl = () => <File label={FILE_NAME} removed removedOnClick={mockCallBack} />;

        test('It should render a File with removed control', () => {
          render(<FileWithRemovedControl />);
          expect(screen.getByTestId('REMOVED_CONTROL')).toBeInTheDocument();
        });

        test('It should call function on click action', () => {
          render(<FileWithRemovedControl />);

          const removedBtn = screen.getByTestId('REMOVED_CONTROL').querySelector('button') as HTMLInputElement;
          fireEvent.click(removedBtn);
          expect(mockCallBack).toHaveBeenCalledTimes(1);
        });
      });

      describe('While rendering with commented control', () => {
        const mockCallBack = jest.fn();
        const FileWithCommentedControl = () => <File label={FILE_NAME} commented commentedOnClick={mockCallBack} />;

        test('It should render a File with commented control', () => {
          render(<FileWithCommentedControl />);
          expect(screen.getByTestId('COMMENTED_CONTROL')).toBeInTheDocument();
        });

        test('It should call function on click action', () => {
          render(<FileWithCommentedControl />);

          const commentedBtn = screen.getByTestId('COMMENTED_CONTROL').querySelector('button') as HTMLInputElement;
          fireEvent.click(commentedBtn);
          expect(mockCallBack).toHaveBeenCalledTimes(1);
        });
      });

      describe('While rendering with commented control', () => {
        const mockCallBack = jest.fn();
        const FileWithSavedControl = () => <File label={FILE_NAME} saved savedOnClick={mockCallBack} />;

        test('It should render a File with saved control', () => {
          render(<FileWithSavedControl />);
          expect(screen.getByTestId('SAVED_CONTROL')).toBeInTheDocument();
        });

        test('It should call function on click action', () => {
          render(<FileWithSavedControl />);

          const savedBtn = screen.getByTestId('SAVED_CONTROL').querySelector('button') as HTMLInputElement;
          fireEvent.click(savedBtn);
          expect(mockCallBack).toHaveBeenCalledTimes(1);
        });
      });

      describe('While rendering with commented control', () => {
        const mockCallBack = jest.fn();
        const FileWithAddFileControl = () => <File label={FILE_NAME} addFile addFileOnClick={mockCallBack} />;

        test('It should render a File with saved control', () => {
          render(<FileWithAddFileControl />);
          expect(screen.getByTestId('ADD_FILE_CONTROL')).toBeInTheDocument();
        });

        test('It should call function on click action', () => {
          render(<FileWithAddFileControl />);

          const addFileBtn = screen.getByTestId('ADD_FILE_CONTROL').querySelector('button') as HTMLInputElement;
          fireEvent.click(addFileBtn);
          expect(mockCallBack).toHaveBeenCalledTimes(1);
        });
      });
    });

    test('It should render an AttachFile component with collection of Files components', () => {
      render(
        <AttachFiles>
          <File label={FILE_NAME} removed />
          <File label={FILE_NAME} removed />
          <File label={FILE_NAME} removed />
          <File label={FILE_NAME} removed />
        </AttachFiles>
      );

      expect(screen.getByTestId('ATTACHFILES_WRAPPER')).toBeInTheDocument();
      expect(screen.getByTestId('ATTACHFILES_LIST')).toBeInTheDocument();
    });

    test('It should render an AttachFile component with correct amount of Files components', () => {
      const FileList = [
        <File label={FILE_NAME} removed />,
        <File label={FILE_NAME} removed />,
        <File label={FILE_NAME} removed />,
        <File label={FILE_NAME} removed />
      ];
      render(
        <AttachFiles>
          {FileList.map((FileItem, index) => (
            <Fragment key={index}>{FileItem}</Fragment>
          ))}
        </AttachFiles>
      );

      expect(screen.getAllByTestId('FILE_TITLE').length).toBe(FileList.length);
    });

    test('It should render an AttachFile component with title', () => {
      render(
        <AttachFiles title={<File label={FILE_NAME} checked />}>
          <File label={FILE_NAME} removed />
          <File label={FILE_NAME} removed />
          <File label={FILE_NAME} removed />
          <File label={FILE_NAME} removed />
        </AttachFiles>
      );

      expect(screen.getByTestId('ATTACHFILES_TITLE')).toBeInTheDocument();
    });
  });
});
