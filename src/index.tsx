import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { EButtonColor, EButtonSize, EButtonVariant } from './components/Button/enums';

import { Button, Typography } from './components';

const container = document.getElementById('root');
const root = createRoot(container!);

const ButtonShowcase = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="Heading2" style={{ marginBottom: '24px', textAlign: 'center' }}>
        Builder.io Button Component Showcase
      </Typography>

      <div style={{ marginBottom: '32px' }}>
        <Typography variant="Subheading2-Medium" style={{ marginBottom: '16px' }}>
          Primary Buttons
        </Typography>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <Button variant={EButtonVariant.primary} color={EButtonColor.brand} size={EButtonSize.m}>
            Brand Medium
          </Button>
          <Button variant={EButtonVariant.primary} color={EButtonColor.success} size={EButtonSize.m}>
            Success Medium
          </Button>
          <Button variant={EButtonVariant.primary} color={EButtonColor.error} size={EButtonSize.m}>
            Error Medium
          </Button>
          <Button variant={EButtonVariant.primary} color={EButtonColor.warning} size={EButtonSize.m}>
            Warning Medium
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <Button variant={EButtonVariant.primary} color={EButtonColor.brand} size={EButtonSize.s}>
            Brand Small
          </Button>
          <Button variant={EButtonVariant.primary} color={EButtonColor.success} size={EButtonSize.s}>
            Success Small
          </Button>
          <Button variant={EButtonVariant.primary} color={EButtonColor.error} size={EButtonSize.s}>
            Error Small
          </Button>
          <Button variant={EButtonVariant.primary} color={EButtonColor.warning} size={EButtonSize.s}>
            Warning Small
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant={EButtonVariant.primary} color={EButtonColor.brand} size={EButtonSize.xs}>
            Brand XS
          </Button>
          <Button variant={EButtonVariant.primary} color={EButtonColor.success} size={EButtonSize.xs}>
            Success XS
          </Button>
          <Button variant={EButtonVariant.primary} color={EButtonColor.error} size={EButtonSize.xs}>
            Error XS
          </Button>
          <Button variant={EButtonVariant.primary} color={EButtonColor.warning} size={EButtonSize.xs}>
            Warning XS
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <Typography variant="Subheading2-Medium" style={{ marginBottom: '16px' }}>
          Secondary Buttons
        </Typography>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.grey} size={EButtonSize.m}>
            Grey Medium
          </Button>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.brand} size={EButtonSize.m}>
            Brand Medium
          </Button>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.success} size={EButtonSize.m}>
            Success Medium
          </Button>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.error} size={EButtonSize.m}>
            Error Medium
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.grey} size={EButtonSize.s}>
            Grey Small
          </Button>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.brand} size={EButtonSize.s}>
            Brand Small
          </Button>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.success} size={EButtonSize.s}>
            Success Small
          </Button>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.error} size={EButtonSize.s}>
            Error Small
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.grey} size={EButtonSize.xs}>
            Grey XS
          </Button>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.brand} size={EButtonSize.xs}>
            Brand XS
          </Button>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.success} size={EButtonSize.xs}>
            Success XS
          </Button>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.error} size={EButtonSize.xs}>
            Error XS
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <Typography variant="Subheading2-Medium" style={{ marginBottom: '16px' }}>
          Disabled States
        </Typography>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant={EButtonVariant.primary} color={EButtonColor.brand} size={EButtonSize.m} disabled>
            Primary Disabled
          </Button>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.grey} size={EButtonSize.m} disabled>
            Secondary Disabled
          </Button>
          <Button variant={EButtonVariant.primary} color={EButtonColor.error} size={EButtonSize.s} disabled>
            Error Disabled
          </Button>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.success} size={EButtonSize.xs} disabled>
            Success Disabled
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <Typography variant="Subheading2-Medium" style={{ marginBottom: '16px' }}>
          Ghost Buttons
        </Typography>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant={EButtonVariant.primary} color={EButtonColor.ghost} size={EButtonSize.m}>
            Ghost Medium
          </Button>
          <Button variant={EButtonVariant.secondary} color={EButtonColor.ghost} size={EButtonSize.m}>
            Ghost Secondary
          </Button>
          <Button variant={EButtonVariant.primary} color={EButtonColor.ghost} size={EButtonSize.s}>
            Ghost Small
          </Button>
          <Button variant={EButtonVariant.primary} color={EButtonColor.ghost} size={EButtonSize.xs}>
            Ghost XS
          </Button>
        </div>
      </div>
    </div>
  );
};

root.render(
  <StrictMode>
    <ButtonShowcase />
  </StrictMode>
);
