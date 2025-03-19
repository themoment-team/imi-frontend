import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const WritePageContainer = style({
  minHeight: 'calc(100vh - 4.5rem)',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.48rem',
  padding: '6.85rem 24.55rem 0',
});

export const Title = style({
  fontSize: '1.75rem',
  fontWeight: 600,
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

export const SectionTitle = style({
  fontSize: '1.25rem',
  fontWeight: '400',
});

export const SectionSubtitle = style({
  fontSize: '1rem',
  fontWeight: 400,
  color: vars.color.gray,
});

export const ButtonGroup = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
});

export const InputField = style({
  padding: '1.1rem',
  fontSize: '1.25rem',
  fontWeight: 400,
  borderRadius: '1rem',
  border: `1px solid ${vars.color.primary}`,
  ':focus': {
    outline: `2px solid ${vars.color.primary}`,
  },
});

export const ToggleGroup = style({
  display: 'flex',
  gap: '0.7rem',
  flexWrap: 'wrap',
});

export const TextareaField = style({
  padding: '1.1rem',
  fontSize: '1.25rem',
  fontWeight: 400,
  borderRadius: '1rem',
  minHeight: '15.8rem',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  border: `1px solid ${vars.color.primary}`,
  ':focus': {
    outline: `2px solid ${vars.color.primary}`,
  },
});

export const SaveButton = style({
  padding: '0.65rem 2.5rem',
  fontSize: '1rem',
  fontWeight: 400,
  color: vars.color.white,
  backgroundColor: vars.color.gray,
  borderRadius: '1rem',
});

export const SubmitButton = style({
  padding: '0.65rem 2.5rem',
  fontSize: '1rem',
  fontWeight: 400,
  backgroundColor: vars.color.primary,
  borderRadius: '1rem',
});
