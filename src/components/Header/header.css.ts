import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const HeaderBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '72px',
  background: vars.color.white,
});

export const HeaderWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '1280px',
  height: '40px',
  background: vars.color.white,
});

export const RightItems = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '359.97px',
  height: '40px',
  background: vars.color.white,
});

export const Navigation = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '248px',
  height: '22px',
  background: vars.color.white,
});

export const LoginSignupBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '173px',
  height: '32px',
  background: vars.color.white,
});

export const LoginBtn = style({
  width: '80px',
  height: '32px',
  background: vars.color.primary,
  borderRadius: '8px',
  color: vars.color.white,
  fontWeight: 'bolder',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Signup = style({
  width: '80px',
  height: '32px',
  border: `2px solid ${vars.color.primary}`,
  borderRadius: '8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Logout = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80px',
  height: '32px',
  border: `2px solid ${vars.color.primary}`,
  borderRadius: '8px',
  cursor: 'pointer',
});

export const NavigationBtn = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  cursor: 'pointer',
  background: vars.color.white,
});

export const Underline = style({
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      left: 0,
      top: '43px',
      width: '0',
      height: '2px',
      backgroundColor: vars.color.primary,
      transition: 'width 0.3s ease',
    },
  },
});

export const UnderlineVariants = styleVariants({
  active: {
    selectors: {
      '&::after': {
        width: '100%',
      },
    },
  },
  inactive: {
    selectors: {
      '&::after': {
        width: '0%',
      },
    },
  },
});

export const BoldVariants = styleVariants({
  active: {
    fontWeight: '600',
  },
  inactive: {
    fontWeight: '400',
  },
});
