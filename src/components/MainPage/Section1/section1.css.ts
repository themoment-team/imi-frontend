import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const SectionContainer = style({
  height: 'calc(100vh - 4.5rem)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6.95rem',
  '@media': {
    'screen and (max-width: 750px)': {
      gap: '6rem',
    },
    'screen and (max-width: 600px)': {
      gap: '5rem',
    },
    'screen and (max-width: 500px)': {
      gap: '4rem',
    },
    'screen and (max-width: 450px)': {
      gap: '2rem',
    },
  },
});

export const IntroBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.3rem',
  '@media': {
    'screen and (max-width: 750px)': {
      gap: '1.5rem',
    },
    'screen and (max-width: 600px)': {
      gap: '1.2rem',
    },
    'screen and (max-width: 500px)': {
      gap: '0.9rem',
    },
    'screen and (max-width: 450px)': {
      gap: '0.6rem',
    },
  },
});

export const IntroText = style({
  textAlign: 'center',
  fontSize: '3rem',
  fontWeight: 600,
  '@media': {
    'screen and (max-width: 750px)': {
      fontSize: '2.4rem',
    },
    'screen and (max-width: 600px)': {
      fontSize: '2rem',
    },
    'screen and (max-width: 500px)': {
      fontSize: '1.5rem',
    },
    'screen and (max-width: 450px)': {
      fontSize: '1.2rem',
    },
  },
});

export const DescriptionText = style({
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: 400,
  '@media': {
    'screen and (max-width: 500px)': {
      fontSize: '1.2rem',
    },
    'screen and (max-width: 450px)': {
      fontSize: '1rem',
    },
  },
});

export const ActionButton = style({
  fontWeight: 400,
  padding: '0.75rem 2.05rem',
  backgroundColor: vars.color.primary,
  borderRadius: '2rem',
  boxShadow: `0px 0px 20px 0px ${vars.color.primary}`,
  fontSize: '1.25rem',
  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: '1rem',
    },
    'screen and (max-width: 500px)': {
      fontSize: '0.9rem',
    },
  },
});

const bounceAnimation = keyframes({
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-25px)' },
  '100%': { transform: 'translateY(0px)' },
});

export const AnimatedArrow = style({
  position: 'absolute',
  top: '46.5rem',
  animation: `${bounceAnimation} 2s infinite ease-in-out`,
});
