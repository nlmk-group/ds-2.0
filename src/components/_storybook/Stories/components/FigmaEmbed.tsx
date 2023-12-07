import React, {FC} from 'react';

import styles from '../Stories.module.scss';

const FigmaEmbed:FC<{url: string;}> = ({ url, ...props }) => {
  const src = `https://www.figma.com/embed?embed_host=astra&url=${url}`;
  
  return (
    <iframe className={styles.iframe} height="600" width="100%" src={src} allowFullScreen {...props} />
  );
};
  
export default FigmaEmbed;