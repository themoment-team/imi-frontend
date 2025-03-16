import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const SigninContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  background: vars.color.background,
});

export const LogoContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '9.375rem',
  height: '9.375rem',
  background: vars.color.white,
  borderRadius: '50%',
});

export const InputContainer = style({
  display: 'flex',
  width: '30rem',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

export const InputEmailContainer = style({
  display: 'flex',
  width: '30.125rem',
  padding: '1rem 1rem 1rem 0',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'start',
});

export const InputEmail = style({
  display: 'flex',
  alignItems: 'center',
  border: `2px solid ${vars.color.primary} `,
  borderRadius: '8px',
  justifyContent: 'space-between',
  padding: '1rem',
  width: '30.125rem',
  height: '4.5625rem',
});

export const InputBox = style({
  border: 'none',
  color: 'black',
  width: '100%',
  background: 'none',
  selectors: {
    '&:placehorder': {
      color: vars.color.gray,
    },
    '&:focus': {
      outline: 'none',
      border: 'none',
    },
  },
});

export const InputPW = style({
  display: 'flex',
  width: '30rem',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

export const Text = style({
  color: ' #1E1E1E',
  textAlign: 'center',
  fontSize: '1rem',
});

export const SignoutText = style({
  color: ' #1E1E1E',
  textAlign: 'center',
  fontSize: '1rem',
});

export const GrayText = style({
  color: vars.color.gray,
  textAlign: 'center',
  fontSize: '1rem',
  marginLeft: '0.5rem',
  cursor: 'pointer',
});

export const InputText = style({
  color: vars.color.gray,
  background: 'none',
});

export const IconBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LoginBtn = style({
  width: '30rem',
  height: '2.4374rem',
  background: vars.color.primary,
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '2.94rem',
});

export const SignupBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  width: '15.6rem',
  height: '1.375rem',
  marginTop: '1.5rem',
});
