import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const WritePageContainer = style({
  minHeight: 'calc(100vh - 4.5rem)',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.48rem',
  padding: '6.85rem 24.55rem 2.5rem',
  '@media': {
    'screen and (max-width: 1728px)': {
      padding: '6.85rem 14rem 2.5rem',
    },
    'screen and (max-width: 1440px)': {
      padding: '6.85rem 10rem 2.5rem',
    },
    'screen and (max-width: 1200px)': {
      padding: '6.85rem 8.5rem 2.5rem',
    },
    'screen and (max-width: 1024px)': {
      padding: '6.85rem 7rem 2.5rem',
    },
    'screen and (max-width: 850px)': {
      padding: '6.85rem 4.5rem 2.5rem',
    },
    'screen and (max-width: 750px)': {
      padding: '6.85rem 2rem 2.5rem',
    },
  },
});

export const Title = style({
  fontSize: '1.75rem',
  fontWeight: 600,
});

export const Form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.48rem',
});

export const Section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

export const SectionHeader = style({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '0.35rem',
});

export const SectionTitleBox = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  paddingRight: '0.5rem',
});

export const SectionTitle = style({
  fontSize: '1.25rem',
  fontWeight: '400',
});

export const SectionSubtitle = style({
  fontSize: '1rem',
  fontWeight: 400,
  color: vars.color.gray,
});

export const InputField = style({
  padding: '1rem',
  fontSize: '1.25rem',
  fontWeight: 400,
  borderRadius: '1rem',
  border: `1px solid ${vars.color.primary}`,
  ':focus': {
    outline: `1.5px solid ${vars.color.primary}`,
  },
});

export const ToggleGroup = style({
  display: 'flex',
  gap: '0.7rem',
  flexWrap: 'wrap',
});

export const TextareaField = style({
  padding: '1rem',
  resize: 'none',
  fontSize: '1.25rem',
  fontWeight: 300,
  lineHeight: '2rem',
  borderRadius: '1rem',
  minHeight: '15.8rem',
  border: `1px solid ${vars.color.primary}`,
  ':focus': {
    outline: `1.5px solid ${vars.color.primary}`,
  },
});

export const SubmitButton = style({
  fontSize: '1rem',
  fontWeight: 400,
  backgroundColor: vars.color.primary,
  borderRadius: '1rem',
  padding: '0.65rem 2.5rem',
  alignSelf: 'center',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: '#BBC5DE',
  },
  '@media': {
    'screen and (max-width: 375px)': {
      padding: '0.65rem 2rem',
    },
  },
});
