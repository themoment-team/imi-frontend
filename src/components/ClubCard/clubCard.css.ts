import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const cardContainer = style({
  maxWidth: '22.5rem',
  height: '18.75rem',
  backgroundColor: vars.color.background,
  borderRadius: '1rem',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0px 0.25rem 0.625rem rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  cursor: 'pointer',
});

export const imageWrapper = style({
  position: 'relative',
  width: '100%',
  height: '12.9375rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const infoContainer = style({
  padding: '1rem 1rem 1.65rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'space-between',
  borderTop: `1px solid ${vars.color.primary}`,
  color: vars.color.text,
});

export const clubTitle = style({
  fontSize: '1.5rem',
  fontWeight: 500,
});

export const projectTitle = style({
  fontSize: '1rem',
  fontWeight: 300,
});

export const leaderBadge = style({
  padding: '0.125rem 0.75rem',
  backgroundColor: vars.color.primary,
  borderRadius: '0.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const leaderText = style({
  fontSize: '1rem',
  fontWeight: 300,
});

export const headerRow = style({
  display: 'flex',
  justifyContent: 'space-between',
});
