import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const ProfileDetailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '6.5rem 20rem',
});

export const BackBtn = style({
  cursor: 'pointer',
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
});

export const Content = style({
  fontSize: '1.25rem',
  lineHeight: '2.5rem',
});
