import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const NotFoundContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

export const Title = style({
  fontSize: '4rem',
  fontWeight: '700',
});

export const Content = style({
  fontSize: '1.5rem',
  fontWeight: '400',
  paddingTop: '0.5rem',
  paddingBottom: '2rem',
});

export const HomeLink = style({
  backgroundColor: vars.color.primary,
  borderRadius: '2rem',
  padding: '0.75rem 2rem',
  fontWeight: '500',
});
