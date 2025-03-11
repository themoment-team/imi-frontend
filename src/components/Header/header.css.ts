import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const HeaderBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '72px',
});

export const HeaderWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '1280px',
  height: '40px',
});

export const RightItems = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '359.97px',
  height: '40px',
});

export const Navigation = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '248px',
  height: '22px',
});

export const LoginSignupBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '173px',
  height: '32px',
});

export const LoginBtn = style({
  width: '80px',
  height: '32px',
  background: vars.color.primary,
  borderRadius: '8px',
  color: vars.color.white,
  fontWeight: 'bolder',
  cursor: 'pointer',
});

export const Signup = style({
  width: '80px',
  height: '32px',
  border: `2px solid ${vars.color.primary}`,
  borderRadius: '8px',
  cursor: 'pointer',
});

export const Logout = style({
  width: '80px',
  height: '32px',
  border: `2px solid ${vars.color.primary}`,
  borderRadius: '8px',
  cursor: 'pointer',
});

export const NavigationBtn = style({
  cursor: 'pointer',
});
