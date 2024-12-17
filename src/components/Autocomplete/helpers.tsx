import React, { Children, cloneElement, isValidElement, ReactNode } from 'react';

/**
 * Выделяет жирным шрифтом части строки, соответствующие поисковому запросу
 *
 * @param {string} value - Исходная строка
 * @param {string} substr - Подстрока для выделения
 * @returns {ReactNode} React элемент с выделенными частями текста
 */
export const boldString = (value: string, substr: string) => {
  const regExp = new RegExp(`(${substr})`, 'gi');
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
  if (Array.isArray(element)) {
    return element.map((child, index) => <span key={index}>{boldReactElement(child, substr)}</span>);
  }

  if (typeof element === 'string') {
    return boldString(element, substr);
  }

  if (isValidElement(element)) {
    const newProps = { ...element.props };

    for (const key in newProps) {
      if (typeof newProps[key] === 'string') {
        newProps[key] = boldString(newProps[key], substr);
      } else if (Array.isArray(newProps[key])) {
        newProps[key] = newProps[key].map((child: any) => boldReactElement(child, substr));
      }
    }

    newProps.children = Children.map(newProps.children, child => boldReactElement(child, substr));

    return cloneElement(element, newProps);
  }

  return element;
};
