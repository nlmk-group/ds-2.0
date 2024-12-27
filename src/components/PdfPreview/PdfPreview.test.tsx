import React from 'react';

import { cleanup, render, screen } from '@testing-library/react';

import PdfPreview from '.';

describe('src/components/PdfPreview', () => {
  const emptyMessage = 'Выберите PDF файл';
  const defaultEmptyMessage = 'Выберите PDF файл для просмотра';
  const mockPdfBlob = new Blob(['pdf content'], { type: 'application/pdf' });
  const mockObjectUrl = 'blob:mock-url';

  beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => mockObjectUrl);
    global.URL.revokeObjectURL = jest.fn();
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('Должен отобразиться компонент в состоянии загрузки', () => {
    render(<PdfPreview data={null} loading={true} />);

    const loader = screen.getByTestId('SPINNER');
    expect(loader).toBeInTheDocument();
  });

  it('Должен отобразиться компонент с пустым состоянием при отсутствии данных', () => {
    render(<PdfPreview data={null} />);

    const emptyState = screen.getByText(defaultEmptyMessage);
    expect(emptyState).toBeInTheDocument();
  });

  it('Должен отобразиться кастомный текст для пустого состояния', () => {
    render(<PdfPreview data={null} emptyMessage={emptyMessage} />);

    const customEmptyMessage = screen.getByText(emptyMessage);
    expect(customEmptyMessage).toBeInTheDocument();
  });

  it('Должен отобразиться PDF просмотрщик при корректных данных', () => {
    render(<PdfPreview data={mockPdfBlob} />);

    const pdfViewer = screen.getByTestId('PDF_PREVIEW');
    const embed = pdfViewer.querySelector('embed');

    expect(pdfViewer).toBeInTheDocument();
    expect(embed).toHaveAttribute('type', 'application/pdf');
    expect(embed).toHaveAttribute('src', mockObjectUrl);
    expect(URL.createObjectURL).toHaveBeenCalledWith(mockPdfBlob);
  });

  it('Должны применяться пользовательские стили', () => {
    const customStyle = { backgroundColor: 'red' };
    render(<PdfPreview data={null} style={customStyle} />);

    const container = screen.getByTestId('PDF_PREVIEW');
    expect(container).toHaveStyle(customStyle);
  });

  it('Должен очищать URL.createObjectURL при размонтировании', () => {
    const { unmount } = render(<PdfPreview data={mockPdfBlob} />);

    unmount();
    expect(URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectUrl);
  });
});
