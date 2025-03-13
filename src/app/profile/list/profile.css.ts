import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const ProfileListContainer = style({
  padding: '6.4rem 28.8rem',
});

export const Title = style({
  fontSize: '2rem',
  textAlign: 'center',
  fontWeight: '500',
});

export const CardContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '3rem',
  // justifyContent: 'space-between',
});

export const Card = style({
  width: '18.75rem',
  height: '11.25rem',
  padding: '1.5rem 2rem',
  borderRadius: '1rem',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.10);',
  backgroundColor: vars.color.white,
  cursor: 'pointer',
  transition: 'transform 0.2s',
  selectors: {
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
});

export const WantedContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
  padding: '0.5rem 0',
  fontSize: '1.25rem',
});
