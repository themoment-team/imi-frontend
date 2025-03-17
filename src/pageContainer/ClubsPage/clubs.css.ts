import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const ClubsPageContainer = style({
  minHeight: 'calc(100vh - 4.5rem)',
  padding: '9.75rem 0 8rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2.875rem',
});

export const HeaderRow = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '0 3rem',

  '@media': {
    'screen and (min-width: 600px)': {
      padding: '0 6rem',
    },
    'screen and (min-width: 1024px)': {
      padding: '0 10rem',
    },
    'screen and (min-width: 1440px)': {
      padding: '0 15.5rem',
    },
    'screen and (min-width: 1728px)': {
      padding: '0 23.5rem',
    },
  },
});

export const PageTitle = style({
  fontSize: '2rem',
  fontWeight: 500,
});

export const AccentBar = style({
  width: '0.25rem',
  height: '2.25rem',
  backgroundColor: vars.color.primary,
});

export const ClubCardsContainer = style({
  width: '100%',
  display: 'flex',
  gap: '2.25rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '0 3rem',

  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '0 4rem',
    },
    'screen and (min-width: 1440px)': {
      padding: '0 6rem',
    },
    'screen and (min-width: 1728px)': {
      padding: '0 12rem',
    },
  },
});
