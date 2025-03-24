import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const SectionContainer = style({
  height: '100vh',
  backgroundColor: vars.color.white,
  display: 'flex',
  alignItems: 'center',
  padding: '0 17.5rem',
  '@media': {
    'screen and (max-width: 1728px)': {
      padding: '0 4rem',
    },
    'screen and (max-width: 1440px)': {
      padding: '0 2.5rem',
    },
    'screen and (max-width: 500px)': {
      padding: '0 1.5rem',
    },
    'screen and (max-width: 450px)': {
      padding: '0 1rem',
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
  '@media': {
    'screen and (max-width: 850px)': {
      gap: '2.4rem',
    },
    'screen and (max-width: 600px)': {
      gap: '1.8rem',
    },
    'screen and (max-width: 500px)': {
      gap: '1.2rem',
    },
  },
});

export const Title = style({
  fontSize: '3.5rem',
  fontWeight: 600,
  '@media': {
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
  lineHeight: '2.5rem',
  '@media': {
    'screen and (max-width: 850px)': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
});

export const Highlight = style({
  backgroundColor: vars.color.primary,
  width: 'fit-content',
  padding: '0 0.1rem',
});

export const LogoBox = style({
  width: '20.625rem',
  height: '20.625rem',
  backgroundColor: vars.color.background,
  boxShadow: `0px 0px 10px 0px ${vars.color.primary}`,
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 850px)': {
      display: 'none',
    },
  },
});
