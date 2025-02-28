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

| Prop     | Type       | Default | Description                          |
| -------- | ---------- | ------- | ------------------------------------ |
| videoUrl | string     | -       | Ссылка на видеофайл или поток        |
| title    | string     | ""      | Заголовок видео                      |
| autoPlay | boolean    | false   | Автоматическое воспроизведение видео |
| onClose  | () => void | false   | Коллбэк для закрытия видео           |
| styles   | Object     | false   | Объект стилей заголовка              |

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
