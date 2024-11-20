import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Pagination from '.';

describe('src/components/Pagination', () => {
  const setCurrentPageMock = jest.fn();
  const setElementsPerPageMock = jest.fn();

  beforeEach(() => {
    setCurrentPageMock.mockClear();
  });

  test('renders without crashing', () => {
    render(<Pagination
      currentPage={1}
      setCurrentPage={setCurrentPageMock}
      elementsPerPage={10}
      setElementsPerPage={setElementsPerPageMock}
      withSelect
      maxPageCount={5}
    />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Отображать')).toBeInTheDocument();
    expect(setCurrentPageMock).not.toHaveBeenCalled();
  });

  test('renders with custom className', () => {
    const { container } = render(
      <Pagination currentPage={1} setCurrentPage={setCurrentPageMock} maxPageCount={5} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  test('renders all page numbers when maxPageCount is 5', () => {
    render(<Pagination currentPage={1} setCurrentPage={setCurrentPageMock} maxPageCount={5} />);
    [1, 2, 3, 4, 5].forEach(num => {
      expect(screen.getByText(String(num))).toBeInTheDocument();
    });
  });

  test('highlights current page', () => {
    render(<Pagination currentPage={3} setCurrentPage={setCurrentPageMock} maxPageCount={5} />);
    expect(screen.getByText('3').parentElement).toHaveClass('selected');
  });

  test('renders ellipsis when necessary', () => {
    render(<Pagination currentPage={1} setCurrentPage={setCurrentPageMock} maxPageCount={10} />);
    expect(screen.getByText('...')).toBeInTheDocument();
  });

  test('shows correct range of pages when on first page', () => {
    render(<Pagination currentPage={1} setCurrentPage={setCurrentPageMock} maxPageCount={10} />);
    [1, 2, 3, 4, 5].forEach(num => {
      expect(screen.getByText(String(num))).toBeInTheDocument();
    });
  });

  test('shows correct range of pages when on last page', () => {
    render(<Pagination currentPage={10} setCurrentPage={setCurrentPageMock} maxPageCount={10} />);
    [6, 7, 8, 9, 10].forEach(num => {
      expect(screen.getByText(String(num))).toBeInTheDocument();
    });
  });

  test('shows correct range of pages when in middle', () => {
    render(<Pagination currentPage={5} setCurrentPage={setCurrentPageMock} maxPageCount={10} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    [4, 5, 6].forEach(num => {
      expect(screen.getByText(String(num))).toBeInTheDocument();
    });
  });

  test('handles large page numbers correctly', () => {
    render(<Pagination currentPage={9999} setCurrentPage={setCurrentPageMock} maxPageCount={10000} />);
    expect(screen.getByText('9999')).toHaveClass('zoomOut');
  });
});
