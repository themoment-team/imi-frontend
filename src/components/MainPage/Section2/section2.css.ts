import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const SectionContainer = style({
  height: '100vh',
  backgroundColor: vars.color.white,
  marginBottom: '4rem',
  display: 'flex',
  alignItems: 'center',
  padding: '0 15.45rem',
  '@media': {
    'screen and (max-width: 1728px)': {
      padding: '0 7rem',
    },
    'screen and (max-width: 1440px)': {
      padding: '0 2.5rem',
    },
    'screen and (max-width: 600px)': {
      padding: '0 1.5rem',
    },
  },
});

export const ContentContainer = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 1200px)': {
      flexDirection: 'column-reverse',
      gap: '5rem',
    },
  },
});

export const IntroduceBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
});

export const Title = style({
  fontSize: '4rem',
  fontWeight: 600,
  '@media': {
    'screen and (max-width: 1200px)': {
      textAlign: 'center',
    },
    'screen and (max-width: 850px)': {
      fontSize: '2.5rem',
    },
    'screen and (max-width: 600px)': {
      fontSize: '2rem',
    },
    'screen and (max-width: 500px)': {
      fontSize: '1.5rem',
    },
  },
});

export const Description = style({
  fontSize: '1.5rem',
  fontWeight: 200,
  lineHeight: '2rem',
  '@media': {
    'screen and (max-width: 1200px)': {
      textAlign: 'center',
    },
    'screen and (max-width: 850px)': {
      fontSize: '1rem',
    },
  },
});

export const Highlight = style({
  backgroundColor: vars.color.primary,
  width: 'fit-content',
  padding: '0 0.1rem',
});

export const LogoBox = style({
  width: '23.125rem',
  height: '23.125rem',
  backgroundColor: vars.color.background,
  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
