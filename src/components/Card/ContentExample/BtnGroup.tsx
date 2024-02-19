import React, { FC } from 'react';

import { Button, Icon } from '@components/index';

import { IBtnGroup } from './types';

const BtnGroup: FC<IBtnGroup> = ({ primaryButton, secondaryButton }) => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {primaryButton !== null && (
        <div data-testid="CARD_BUTTON_PRIMARY">
          <Button
            startIcon={
              primaryButton.startIcon || (
                <Icon name="IconArticleOutlined24" containerSize={24} htmlColor={'var(--assigned-colors-button-main-text)'} />
              )
            }
            onClick={primaryButton.onClick}
          >
            {primaryButton.label}
          </Button>
        </div>
      )}
      {secondaryButton !== null && (
        <div data-testid="CARD_BUTTON_SECONDARY">
          <Button variant="bar" startIcon={secondaryButton.startIcon} onClick={secondaryButton.onClick}>
            {secondaryButton.label}
          </Button>
        </div>
      )}
    </div>
  );
};

export default BtnGroup;
