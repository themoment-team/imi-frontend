import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const Container = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  height: '430px',
});

export const FooterBox = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '1353.06px',
  height: '300.33px',
  borderTop: `2px solid ${vars.color.primary}`,
});

export const UpperBox = style({
  width: '100%',
  height: '278.33px',
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
  height: '22px',
});

export const IntroduceBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'space-between',
  width: '210px',
  height: '110px',
  color: vars.color.gray,
});

export const QuickLink = style({
  display: 'flex',
  flexDirection: 'column',
  width: '101px',
  height: '110px',
});

export const Contact = style({
  display: 'flex',
  alignContent: 'space-between',
  flexDirection: 'column',
  width: '183px',
  height: '110px',
});

export const HeadText = style({
  color: vars.color.gray,
  marginBottom: '8px',
  lineHeight: '140%',
  fontSize: '20px',
});

export const Text = style({
  color: vars.color.gray,
  fontSize: '16px',
  marginBottom: '4px',
  lineHeight: '140%',
});

export const TextLink = style({
  color: vars.color.gray,
  cursor: 'pointer',
  marginBottom: '4px',
  lineHeight: '140%',
});
