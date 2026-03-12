import React from 'react';

import { useCommentContext } from '@components/Comments/hooks';
import { Badge as BadgeComponent } from '@components/index';

export const Badge = () => {
  const {
    comment: { badge }
  } = useCommentContext();

  if (!badge?.label) {
    return null;
  }

  return (
    <BadgeComponent color={badge.color} variant={badge.variant}>
      {badge.label}
    </BadgeComponent>
  );
};

Badge.displayName = 'Comments.Badge';
