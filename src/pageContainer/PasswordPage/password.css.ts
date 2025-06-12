import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const SignUpContainer = style({
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
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const InputEmailContainer = style({
  display: 'flex',
  width: '30.125rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const InputPasswordContainer = style({
  display: 'flex',
  width: '30.125rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const InputPassword = style({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${vars.color.primary}`,
  background: vars.color.white,
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  height: '3.125rem',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const inputPasswordError = style({
  display: 'flex',
  alignItems: 'center',
  background: vars.color.white,
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  border: `1px solid ${vars.color.red}`,
  height: '3.125rem',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const inputPasswordVariants = styleVariants({
  default: [InputPassword],
  error: [inputPasswordError],
});

export const ReInputPassword = style({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  height: '3.125rem',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const ReinputPasswordError = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  border: `1px solid ${vars.color.red}`,
  height: '3.125rem',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const ReinputPasswordVariants = styleVariants({
  default: [InputPassword],
  error: [inputPasswordError],
});

export const InputEmail = style({
  display: 'flex',
  alignItems: 'center',
  background: vars.color.white,
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '25rem',
  height: '3.125rem',
  position: 'relative',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const inputEmailError = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '1rem',
  background: vars.color.white,
  justifyContent: 'space-between',
  width: '25rem',
  height: '3.125rem',
  border: `1px solid ${vars.color.red}`,
  position: 'relative',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
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
    '&::placeholder': {
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
  '@media': {
    'screen and (max-width: 481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const TextWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
});

export const Text = style({
  color: ' #1E1E1E',
  textAlign: 'center',
  fontSize: '1rem',
  padding: '0 0 0.25rem 0.58rem',
});

export const BlockTime = style({
  color: vars.color.gray,
  textAlign: 'center',
  fontSize: '1rem',
  padding: '0 0.58rem 0.25rem 0',
});

export const SignoutText = style({
  color: ' #1E1E1E',
  textAlign: 'center',
  fontSize: '1rem',
});

export const InputText = style({
  color: vars.color.gray,
  background: 'none',
  fontWeight: '300',
  position: 'absolute',
  right: '1rem',
});

export const IconBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

export const SignUpBtn = style({
  width: '30rem',
  height: '2.4374rem',
  marginTop: '0.74rem',
  background: vars.color.primary,
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
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

export const BlockSignUpBtn = style({
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
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const InputWrapper = style({
  display: 'flex',
  flexDirection: 'row',
});

export const BlockAuthButton = style({
  marginLeft: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.94rem 1.38rem',
  color: `${vars.color.gray}`,
  width: '4.5rem',
  height: '3.125rem',
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '0.5rem',
  cursor: 'not-allowed',
});

export const AuthButton = style({
  marginLeft: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.94rem 1.38rem',
  color: `${vars.color.text}`,
  background: `${vars.color.primary}`,
  width: '4.5rem',
  height: '3.125rem',
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '0.5rem',
  cursor: 'pointer',
});

export const InputAuthContainer = style({
  display: 'flex',
  width: '30.125rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const inputAuthCode = style({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${vars.color.primary}`,
  background: vars.color.white,
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  height: '3.125rem',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const inputAuthCodeError = style({
  display: 'flex',
  alignItems: 'center',
  background: vars.color.white,
  border: `1px solid ${vars.color.red}`,
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  height: '3.125rem',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const inputAuthVariants = styleVariants({
  default: [inputAuthCode],
  error: [inputAuthCodeError],
});
