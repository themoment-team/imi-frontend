import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const SigninContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
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
  marginBottom: '2.5rem',
});

export const InputContainer = style({
  display: 'flex',
  width: '30rem',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
});

export const InputEmailContainer = style({
  display: 'flex',
  width: '30.125rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const InputPasswordContainer = style({
  display: 'flex',
  width: '30.125rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const InputPassword = style({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  height: '3.125rem',
});

export const inputPasswordError = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  border: '1px solid red',
  height: '3.125rem',
});

export const inputPasswordVariants = styleVariants({
  default: [InputPassword],
  error: [inputPasswordError],
});

export const InputEmail = style({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  height: '3.125rem',
});

export const inputEmailError = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  height: '3.125rem',
  border: `1px solid ${vars.color.red}`,
});

export const inputEmailVariants = styleVariants({
  default: [InputEmail],
  error: [inputEmailError],
});

export const InputBox = style({
  border: 'none',
  color: 'black',
  width: '100%',
  background: vars.color.background,
  selectors: {
    '&:placehorder': {
      color: vars.color.gray,
      background: 'none',
    },
    '&:valid': {
      background: 'none',
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
  padding: '0 0 0.25rem 0.58rem',
});

export const UnderText = style({
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
  selectors: {
    '&:hover': {
      fontWeight: '600',
    },
  },
});

export const InputText = style({
  color: vars.color.gray,
  background: 'none',
  fontWeight: '300',
});

export const IconBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

export const LoginBtn = style({
  width: '30rem',
  height: '2.4374rem',
  marginTop: '0.74rem',
  background: vars.color.primary,
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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

export const ErrorText = style({
  color: vars.color.red,
  fontSize: '0.9375rem',
});

export const ErrorBox = style({
  width: '100%',
  height: '1.125rem',
  marginTop: '0.45rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'flex-end',
});

export const BlockLoginBtn = style({
  width: '30rem',
  height: '2.4374rem',
  marginTop: '0.74rem',
  background: '#F0F4FD',
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${vars.color.primary}`,
  cursor: 'not-allowed',
});
