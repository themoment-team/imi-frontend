import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const Container = style({
  padding: '0 17.5rem',

  '@media': {
    'screen and (max-width: 1728px)': {
      padding: '0rem 15rem',
    },
    'screen and (max-width: 1600px)': {
      padding: '0rem 13rem',
    },
    'screen and (max-width: 1440px)': {
      padding: '0rem 11rem',
    },
    'screen and (max-width: 1200px)': {
      padding: '0rem 8rem',
    },
    'screen and (max-width: 1024px)': {
      padding: '0rem 5rem',
    },
    'screen and (max-width: 768px)': {
      padding: '0rem 2.5rem',
    },
    'screen and (max-width: 480px)': {
      padding: '0rem 2rem',
    },
  },
});

export const WhiteContainer = style({
  padding: '0rem 17.5rem',
  background: vars.color.white,

  '@media': {
    'screen and (max-width: 1728px)': {
      padding: '0rem 15rem',
    },
    'screen and (max-width: 1600px)': {
      padding: '0rem 13rem',
    },
    'screen and (max-width: 1440px)': {
      padding: '0rem 11rem',
    },
    'screen and (max-width: 1200px)': {
      padding: '0rem 8rem',
    },
    'screen and (max-width: 1024px)': {
      padding: '0rem 5rem',
    },
    'screen and (max-width: 768px)': {
      padding: '0rem 2.5rem',
    },
    'screen and (max-width: 480px)': {
      padding: '0rem 2rem',
    },
  },
});

export const FooterBox = style({
  display: 'flex',
  padding: '4rem 3rem',
  borderTop: `2px solid ${vars.color.primary}`,
  justifyContent: 'space-between',

  '@media': {
    'screen and (max-width: 1600px)': {
      padding: '4rem 2.5rem',
    },
    'screen and (max-width: 1440px)': {
      padding: '4rem 2rem',
    },
    'screen and (max-width: 1200px)': {
      padding: '4rem 1.5rem',
    },
    'screen and (max-width: 1024px)': {
      padding: '4rem 1rem',
    },
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
      padding: '4rem 0rem',
    },
    'screen and (max-width: 480px)': {
      gap: '1.5rem',
    },
  },
});

export const IntroduceBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'space-between',
  justifyContent: 'center',
  color: vars.color.gray,
});

export const Contact = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  gap: '0.25rem',
});

export const HeadText = style({
  color: vars.color.gray,
  marginBottom: '0.5rem',
  lineHeight: '140%',
  fontSize: '1.25rem',
});

export const Text = style({
  color: vars.color.gray,
  fontSize: '1rem',
  lineHeight: '140%',
});

export const TitleText = style({
  fontSize: '1.25rem',
  fontWeight: '500',
  lineHeight: '140%',
  color: vars.color.gray,
  marginBottom: '0.3rem',
});

export const TextLink = style({
  color: vars.color.gray,
  cursor: 'pointer',
  lineHeight: '140%',
});

export const SvgContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.5rem',
});
