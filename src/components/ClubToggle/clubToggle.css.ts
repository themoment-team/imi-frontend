import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const InactiveButton = style({
  padding: '0.9rem 1.05rem',
  borderRadius: '2rem',
  fontSize: '1rem',
  fontWeight: 400,
  border: `2px solid ${vars.color.primary}`,
});

export const ActiveButton = style({
  padding: '0.9rem 1.05rem',
  borderRadius: '2rem',
  backgroundColor: vars.color.primary,
  fontSize: '1rem',
  fontWeight: 400,
  border: `2px solid ${vars.color.primary}`,
});
