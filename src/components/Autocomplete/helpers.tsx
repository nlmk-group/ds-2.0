import React, { Children, cloneElement, isValidElement, ReactNode } from 'react';

/**
 * Выделяет жирным шрифтом части строки, соответствующие поисковому запросу
 *
 * @param {string} value - Исходная строка
 * @param {string} substr - Подстрока для выделения
 * @returns {ReactNode} React элемент с выделенными частями текста
 */
export const boldString = (value: string, substr: string) => {
  if (!substr || !value) return value;

  const regExp = new RegExp(`(${substr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const textArray = value.split(regExp);
  return textArray.map((part, index) =>
    part.toLowerCase() === substr.toLowerCase() ? <b key={index}>{part}</b> : part
  );
};

/**
 * Рекурсивно обрабатывает React элементы и их дочерние элементы,
 * выделяя жирным шрифтом части текста, соответствующие поисковому запросу
 *
 * @param {ReactNode | string} element - React элемент или строка для обработки
 * @param {string} substr - Подстрока для выделения
 * @returns {ReactNode} Обработанный React элемент с выделенным текстом
 */
export const boldReactElement = (element: ReactNode | string, substr: string): ReactNode => {
  if (!substr) return element;

  if (Array.isArray(element)) {
    return element.map((child, index) => (
      <React.Fragment key={index}>{boldReactElement(child, substr)}</React.Fragment>
    ));
  }

  if (typeof element === 'string') {
    return boldString(element, substr);
  }

  if (isValidElement(element)) {
    const newChildren = Children.map((element.props as { children?: ReactNode }).children, c =>
      boldReactElement(c, substr)
    );

    return cloneElement(element, { children: newChildren } as any);
  }

  return element;
};
