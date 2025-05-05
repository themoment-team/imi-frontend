import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const ProfileDetailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '6.5rem 20rem',
  minHeight: 'calc(100vh - 4.5rem)',

  '@media': {
    'screen and (max-width: 1728px)': {
      padding: '6.5rem 15rem',
    },
    'screen and (max-width: 1600px)': {
      padding: '6.5rem 12rem',
    },
    'screen and (max-width: 1440px)': {
      padding: '6.5rem 9rem',
    },
    'screen and (max-width: 1200px)': {
      padding: '6.5rem 7rem',
    },
    'screen and (max-width: 1024px)': {
      padding: '6.4rem 4rem',
    },
    'screen and (max-width: 768px)': {
      padding: '6.5rem 2.5rem',
    },
    'screen and (max-width: 480px)': {
      padding: '6.5rem 1.5rem',
    },
  },
});

export const Name = style({
  fontSize: '2rem',
  fontWeight: '500',
  paddingBottom: '5.5rem',
  textAlign: 'center',
});

export const EditBtn = style({
  alignSelf: 'flex-end',
  padding: '0.4rem 0.9rem',
  border: `solid 1px ${vars.color.primary}`,
  borderRadius: '1rem',
  width: 'fit-content',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.light,
    },
  },
});

export const ContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 4.5rem',

  '@media': {
    'screen and (max-width: 1200px)': {
      padding: '0 2rem',
    },
    'screen and (max-width: 768px)': {
      padding: '0 1rem',
    },
    'screen and (max-width: 480px)': {
      padding: '0 0.5rem',
    },
  },
});

export const Content = style({
  fontSize: '1.25rem',
  fontWeight: '300',
  lineHeight: '2rem',
});
