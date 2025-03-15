import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const CardContainer = style({
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

export const ImageWrapper = style({
  position: 'relative',
  width: '100%',
  height: '12.9375rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const InfoContainer = style({
  padding: '1rem 1rem 1.65rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'space-between',
  borderTop: `1px solid ${vars.color.primary}`,
  color: vars.color.text,
});

export const ClubTitle = style({
  fontSize: '1.5rem',
  fontWeight: 500,
});

export const ProjectTitle = style({
  fontSize: '1rem',
  fontWeight: 300,
});

export const LeaderBadge = style({
  padding: '0.125rem 0.75rem',
  backgroundColor: vars.color.primary,
  borderRadius: '0.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LeaderText = style({
  fontSize: '1rem',
  fontWeight: 300,
});

export const HeaderRow = style({
  display: 'flex',
  justifyContent: 'space-between',
});
