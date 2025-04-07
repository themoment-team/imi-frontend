import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const LoadingContainer = style({
  height: '50rem',
  width: 'auto',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.75rem',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Spinner = style({
  width: '4rem',
  height: '4rem',

  border: '5px solid transparent',
  borderRight: '5px solid transparent',
  borderLeft: `5px solid ${vars.color.primary}`,
  borderTopColor: `${vars.color.primary}`,
  borderBottom: `5px solid ${vars.color.primary}`,

  borderRadius: '50%',
  animation: `${spin} 1.2s linear infinite`,
});

export const LoadingText = style({
  fontWeight: '300',
});
