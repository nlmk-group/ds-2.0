import React, { FC, memo } from 'react';

import { errorImagesByCode, ErrorKeys, ErrorPageProps } from './types';

import styles from './ErrorPage.module.scss';

import Box from '../Box';
import Typography from '../Typography';

/**
 * Компонент ErrorPage предоставляет информационную страницу об ошибке, отображающую код ошибки, описание и подсказку для пользователя.
 *
 * @param {object} props - Свойства компонента ErrorPage.
 * @param {number} [props.errorCode] - Код ошибки, отображаемый на странице.
 * @param {string} [props.description='Произошла ошибка'] - Описание ошибки.
 * @param {string} [props.hint='Попробуйте обновить страницу'] - Подсказка для пользователя.
 * @returns {JSX.Element} - Компонент ErrorPage.
 */

const ErrorPage: FC<ErrorPageProps> = memo(
  ({ errorCode, description = 'Произошла ошибка', hint = 'Попробуйте обновить страницу', ...props }) => {
    const ImageSrc = errorImagesByCode[errorCode as ErrorKeys] || errorImagesByCode.default;
    return (
      <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" {...props}>
        <Box display="flex" flexDirection="column" alignItems="center" gap="60px">
          <ImageSrc />
          <Box display="flex" flexDirection="column" gap="32px" className={styles.text}>
            <Typography variant="Heading1" color="textPrimary">
              {errorCode}
              {errorCode && ': '}
              {description}
            </Typography>
            <Typography variant="Subheading3" color="textSecondary">
              {hint}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
);

ErrorPage.displayName = 'ErrorPage';

export default ErrorPage;
