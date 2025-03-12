import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const EmptyProfileContainer = style({
  backgroundColor: vars.color.white,
  margin: '16.8rem 36.4rem',
  padding: '8.3rem 10rem 8.5rem 10rem',
  textAlign: 'center',
  borderRadius: '3rem',
  justifyItems: 'center',
});

export const EmptyTitle = style({
  fontSize: '2.5rem',
  fontWeight: '500',
  paddingBottom: '1rem',
  backgroundColor: vars.color.white,
});

export const EmptuContent = style({
  paddingBottom: '3.6rem',
  backgroundColor: vars.color.white,
});

export const LinkWrite = style({
  display: 'flex',
  width: 'fit-content',
  backgroundColor: vars.color.primary,
  justifyContent: 'center',
  cursor: 'pointer',
});
