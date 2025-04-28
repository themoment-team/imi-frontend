import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const ProfileListContainer = style({
  padding: '6.4rem 28rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '3.7rem',
  '@media': {
    'screen and (max-width: 1880px)': {
      padding: '6.4rem 23rem',
    },
    'screen and (max-width: 1728px)': {
      padding: '6.4rem 19rem',
    },
    'screen and (max-width: 1600px)': {
      padding: '6.4rem 14rem',
    },
    'screen and (max-width: 1440px)': {
      padding: '6.4rem 9rem',
    },
    'screen and (max-width: 1200px)': {
      padding: '6.4rem 7rem',
    },
    'screen and (max-width: 1024px)': {
      padding: '6.4rem 5rem',
    },
    'screen and (max-width: 768px)': {
      padding: '6.4rem 2.5rem',
      justifyItems: 'center',
    },
    'screen and (max-width: 480px)': {
      padding: '6.4rem 2rem',
      justifyItems: 'center',
    },
  },
});

export const Title = style({
  fontSize: '2rem',
  textAlign: 'center',
  fontWeight: '500',
});

export const CardContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
  gap: '3rem',
  justifyContent: 'center',
  width: '100%',
  justifyItems: 'start',
});

export const Card = style({
  width: '100%',
  maxWidth: '18.75rem',
  height: '11.25rem',
  padding: '1.5rem 2rem',
  borderRadius: '1rem',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
  border: `solid 1px ${vars.color.primary}`,
  backgroundColor: vars.color.white,
  cursor: 'pointer',
  transition: 'transform 0.2s',
  selectors: {
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
});

export const WantedContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
  padding: '0.5rem 0',
  fontSize: '1.25rem',
});
