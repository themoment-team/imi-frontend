import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const Container = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '12.75rem',
});

export const WhiteContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '12.75rem',
  background: vars.color.white,
});

export const FooterBox = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '84.57rem',
  height: '12.75rem',
  borderTop: `0.125rem solid ${vars.color.primary}`,
});

export const UpperBox = style({
  width: '100%',
  height: '12.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 3rem 0 3rem',
});

export const IntroduceBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'space-between',
  justifyContent: 'center',
  width: '13.125rem',
  height: '6.875rem',
  color: vars.color.gray,
});

export const Contact = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  width: '13.875rem',
  height: '6.875rem',
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
