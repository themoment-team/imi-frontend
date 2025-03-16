import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const HeaderContainer = style({
  height: '4.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: vars.color.white,
  padding: '0 1.75rem',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '0 3.75rem',
    },
    'screen and (min-width: 1440px)': {
      padding: '0 6.25rem',
    },
    'screen and (min-width: 1728px)': {
      padding: '0 20rem',
    },
  },
});

export const NavigationContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: '1.75rem',
    },
    'screen and (min-width: 1440px)': {
      gap: '2.25rem',
    },
    'screen and (min-width: 1728px)': {
      gap: '3.75rem',
    },
  },
});

export const NavLinks = style({
  display: 'flex',
  gap: '1rem',
  fontWeight: 400,
});

export const ActiveNavLink = style({
  fontWeight: 600,
});

export const AuthBox = style({
  display: 'flex',
  gap: '0.8rem',
});

export const SignInButton = style({
  padding: '0.31rem 1.19rem',
  backgroundColor: vars.color.primary,
  borderRadius: '0.5rem',
  fontWeight: 400,
});

export const SignUpButton = style({
  padding: '0.31rem 0.75rem',
  borderRadius: '0.5rem',
  fontWeight: 400,
  border: `1px solid ${vars.color.primary}`,
});
