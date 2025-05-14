import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const ClubsContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.625rem',
  paddingLeft: '1rem',
  borderLeft: 'solid 4px',
  borderColor: vars.color.primary,
});

export const Club = style({
  padding: '0.9rem 1rem',
  borderRadius: '2rem',
  cursor: 'pointer',
  border: '2px solid',
  borderColor: vars.color.primary,
  transition: 'background-color 0.3s',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.light,
    },
  },
});

// 활성화된 버튼

export const Active = style({
  backgroundColor: vars.color.primary,
});
