import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const SectionContainer = style({
  height: '100vh',
  backgroundColor: vars.color.white,
  marginBottom: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ContentContainer = style({
  display: 'flex',
  gap: '3.75rem',
  alignItems: 'center',
});

export const IntroduceBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
});

export const Title = style({
  fontSize: '4rem',
  fontWeight: 600,
});

export const Description = style({
  fontSize: '1.5rem',
  fontWeight: 200,
  lineHeight: '2.5rem',
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
