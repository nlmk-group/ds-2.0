# TreeList Component

## Версия компонента v1.0

Компонент VideoWindow предназначен для отображения видеоплеера с возможностью изменения размера окна, переключения в полноэкранный режим, минимизации и закрытия.

## Использование

```jsx
import React, { useState } from 'react';

import styles from './styles.module.scss';
import VideoWindow from '../VideoWindow';
export const VideoWindowExample = () => {
  const [isVideoOpen, setIsVideoOpen] = useState < boolean > false;
  return (
    <div className={styles.main}>
      <button onClick={() => setIsVideoOpen(true)}>Открыть видео</button>

      {isVideoOpen && (
        <VideoWindow
          videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
          title="Демо-видео"
          autoPlay
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </div>
  );
};
```

## Props

| Prop       | Type           | Default | Description                          |
| ---------- | -------------- | ------- | ------------------------------------ |
| videoUrl   | string         | -       | Ссылка на видеофайл или поток        |
| title      | string         | ""      | Заголовок видео                      |
| autoPlay   | boolean        | false   | Автоматическое воспроизведение видео |
| onClose    | () => void     | false   | Коллбэк для закрытия видео           |
| style      | CSSProperties  | -       | Объект стилей                        |
| className  | string         | -       | Дополнительный CSS класс             |

### Data-атрибуты

Для удобной кастомизации компонент предоставляет следующие data-атрибуты:

```css
/* Стилизация главного контейнера компонента */
[data-ui-video-window-root] {
  /* стили */
}

/* Стилизация шапки компонента */
[data-ui-video-window-header] {
  /* стили */
}

/* Стилизация заголовка, если передан просто текст, который помещен в Typography элемент */
[data-ui-video-window-typography-title] {
  /* стили */
}
/* Стилизация блока с элементами управления в шапке компонента */
[data-ui-video-window-controls] {
  /* стили */
}
/* Стилизация контейнера содержащего тег <video>*/
[data-ui-video-window-video-content] {
  /* стили */
}
/* Стилизация отображения элемента для изменения размеров окна*/
[data-ui-video-window-resizer] {
  /* стили */
}
```


## Типы данных

### VideoWindowStyles

```typescript
export type VideoWindowStyles = {
  videoTitleClassName?: string;
  videoTitleStyle?: CSSProperties;
};
```

### VideoWindowProps

```typescript
export type VideoWindowProps = {
  videoUrl: string;
  title?: string;
  autoPlay?: boolean;
  onClose: () => void;
  styles?: VideoWindowStyles;
};
```

## Советы по использованию

Используйте `autoPlay` для автоматического воспроизведения видео при открытии `VideoWindow`.
