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

export const InputPassword = style({
  display: 'flex',
  alignItems: 'center',
  border: `2px solid ${vars.color.primary}`,
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
});

// 오류 스타일 정의
export const inputPasswordError = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  border: '2px solid red',
});

// 스타일 관리
export const inputPasswordVariants = styleVariants({
  default: [InputPassword],
  error: [inputPasswordError],
});

export const InputEmail = style({
  display: 'flex',
  alignItems: 'center',
  border: `2px solid ${vars.color.primary}`,
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
});

// 오류 스타일 정의
export const inputEmailError = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  border: '2px solid red',
});

// 스타일 관리
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

export const ErrorText = style({
  color: 'red',
});
