import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const EmptyProfileContainer = style({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
});

export const EmptyProfileContent = style({
  backgroundColor: vars.color.white,
  padding: '8.3rem 1rem',
  width: '100%',
  maxWidth: '48rem',
  textAlign: 'center',
  borderRadius: '3rem',

  '@media': {
    'screen and (max-width: 1024px)': {
      padding: '8rem 1rem',
    },
    'screen and (max-width: 768px)': {
      padding: '6.5rem 1rem',
    },
    'screen and (max-width: 480px)': {
      padding: '5rem 1rem',
    },
  },
});

export const EmptyTitle = style({
  fontSize: '2.5rem',
  fontWeight: '500',
  paddingBottom: '1rem',

  '@media': {
    'screen and (max-width: 1024px)': {
      fontSize: '2.2rem',
    },
    'screen and (max-width: 768px)': {
      fontSize: '1.9rem',
    },
    'screen and (max-width: 480px)': {
      fontSize: '1.6rem',
    },
  },
});

export const EmptyContent = style({
  paddingBottom: '3.6rem',

  '@media': {
    'screen and (max-width: 1024px)': {
      fontSize: '0.8rem',
      paddingBottom: '3.3rem',
    },
    'screen and (max-width: 768px)': {
      paddingBottom: '3rem',
    },
    'screen and (max-width: 480px)': {
      paddingBottom: '2.7rem',
    },
  },
});

export const LinkWrite = style({
  display: 'inline-block',
  padding: '0.4rem 1rem',
  backgroundColor: vars.color.primary,
  cursor: 'pointer',
  borderRadius: '1rem',

  '@media': {
    'screen and (max-width: 1024px)': {
      fontSize: '0.9rem',
    },
  },
});
