import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const HeaderBox = style({
  padding: '1rem 17.5rem',
  background: vars.color.white,

  '@media': {
    'screen and (max-width: 1728px)': {
      padding: '1rem 15rem',
    },
    'screen and (max-width: 1600px)': {
      padding: '1rem 13rem',
    },
    'screen and (max-width: 1440px)': {
      padding: '1rem 11rem',
    },
    'screen and (max-width: 1200px)': {
      padding: '1rem 8rem',
    },
    'screen and (max-width: 1024px)': {
      padding: '1rem 5rem',
    },
    'screen and (max-width: 768px)': {
      padding: '1rem 3rem',
    },
    'screen and (max-width: 480px)': {
      padding: '1rem 0.7rem',
    },
    'screen and (max-width: 375px)': {
      padding: '1rem 1.5rem',
    },
  },
});

export const HeaderWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const RightItems = style({
  display: 'flex',
  gap: '4rem',
  '@media': {
    'screen and (max-width: 1200px)': {
      gap: '3.5rem',
    },
    'screen and (max-width: 1024px)': {
      gap: '3rem',
    },
    'screen and (max-width: 768px)': {
      gap: '2.5rem',
    },
    'screen and (max-width: 480px)': {
      gap: '1rem',
    },
    'screen and (max-width: 375px)': {
      gap: '1.5rem',
    },
  },
});

export const LogoBox = style({
  cursor: 'pointer',
  alignContent: 'center',
});

export const Navigation = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8125rem',
  '@media': {
    'screen and (max-width: 480px)': {
      gap: '0.5rem',
    },
    'screen and (max-width: 375px)': {
      flexDirection: 'column',
      alignItems: 'start',
      gap: '0.3rem',
    },
  },
});

export const NavigationBtn = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  cursor: 'pointer',
});

export const Underline = style({
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      left: 0,
      top: '2.8rem',
      width: '0',
      height: '0.125rem',
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

export const LoginSignupBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const LoginBtn = style({
  padding: '0.3125rem 1.19rem',
  background: vars.color.primary,
  borderRadius: '0.5rem',
  cursor: 'pointer',
});

export const Signup = style({
  padding: '0.3125rem 0.5625rem',
  border: `0.125rem solid ${vars.color.primary}`,
  borderRadius: '0.5rem',
  cursor: 'pointer',
});

export const Logout = style({
  padding: '0.3125rem 0.5625rem',
  border: `0.125rem solid ${vars.color.primary}`,
  borderRadius: '0.5rem',
  cursor: 'pointer',
});
