import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const Container = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '23.6205rem',
});

export const FooterBox = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '84.57rem',
  height: '18.77rem',
  borderTop: `0.125rem solid ${vars.color.primary}`,
});

export const UpperBox = style({
  width: '100%',
  height: '17.4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
});

export const UnderBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.gray,
  width: '100%',
  height: '1.375rem',
});

export const IntroduceBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'space-between',
  width: '13.125rem',
  height: '6.875rem',
  color: vars.color.gray,
});

export const QuickLink = style({
  display: 'flex',
  flexDirection: 'column',
  width: '6.3125rem',
  height: '6.875rem',
});

export const Contact = style({
  display: 'flex',
  alignContent: 'space-between',
  flexDirection: 'column',
  width: '11.4375rem',
  height: '6.875rem',
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
  marginBottom: '0.25rem',
  lineHeight: '140%',
  cursor: 'pointer',
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
  marginBottom: '0.25rem',
  lineHeight: '140%',
});
