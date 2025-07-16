import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const TextContainer = style({
  display: 'flex',
  gap: '0.3rem',
  borderBottom: 'solid 2px',
  borderColor: vars.color.primary,
  padding: '0.5rem 0',
  fontSize: '1.25rem',
  backgroundColor: 'transparent',
});

export const Tag = style({
  backgroundColor: vars.color.primary,
  width: 'fit-content',
  padding: '0 0.1rem',
});

export const Content = style({
  backgroundColor: 'transparent',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '80%',

  '@media': {
    'screen and (max-width: 1440px)': {
      maxWidth: '70%',
    },
  },
});
