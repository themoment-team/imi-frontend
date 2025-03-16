import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const FooterContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5.75rem',
  padding: '0 3rem 5.85rem',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '0 6rem',
    },
    'screen and (min-width: 1200px)': {
      padding: '0 9rem',
    },
    'screen and (min-width: 1440px)': {
      padding: '0 13rem',
    },
    'screen and (min-width: 1728px)': {
      padding: '0 17.72rem',
    },
  },
});

export const ContentContainer = style({
  width: '100%',
  borderTop: `2px solid ${vars.color.primary}`,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '4.75rem 0 0',
  '@media': {
    'screen and (max-width: 600px)': {
      flexDirection: 'column',
      gap: '1rem',
    },
    'screen and (min-width: 750px)': {
      padding: '4.75rem 1rem 0',
    },
    'screen and (min-width: 1024px)': {
      padding: '4.75rem 2rem 0',
    },
    'screen and (min-width: 1200px)': {
      padding: '4.75rem 4rem 0m',
    },
    'screen and (min-width: 1440px)': {
      padding: '4.75rem, 6rem 0',
    },
    'screen and (min-width: 1728px)': {
      padding: '4.75rem 8rem 0',
    },
  },
});

export const SectionBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const Title = style({
  color: vars.color.gray,
  fontSize: '1.25rem',
  fontWeight: 500,
});

export const ContentList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});

export const ContentText = style({
  color: vars.color.gray,
  fontSize: '1rem',
  fontWeight: 400,
});
