import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const ProfileListContainer = style({
  padding: '6.4rem 28rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '3.7rem',
  '@media': {
    'screen and (max-width: 1880px)': {
      padding: '6.4rem 23rem',
    },
    'screen and (max-width: 1728px)': {
      padding: '6.4rem 19rem',
    },
    'screen and (max-width: 1600px)': {
      padding: '6.4rem 14rem',
    },
    'screen and (max-width: 1440px)': {
      padding: '6.4rem 9rem',
    },
    'screen and (max-width: 1200px)': {
      padding: '6.4rem 7rem',
    },
    'screen and (max-width: 1024px)': {
      padding: '6.4rem 5rem',
    },
    'screen and (max-width: 768px)': {
      padding: '6.4rem 2.5rem',
      justifyItems: 'center',
    },
    'screen and (max-width: 480px)': {
      padding: '6.4rem 2rem',
      justifyItems: 'center',
    },
  },
});

export const TitleAndGradeSelector = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '20px',
});

export const Title = style({
  fontSize: '2rem',
  textAlign: 'center',
  fontWeight: '500',
  flex: 1,
});

export const GradeSelector = style({
  position: 'relative',
  fontSize: '0.875rem',
});

export const GradeToggle = style({
  display: 'flex',
  width: ' 6.75rem',
  padding: '0.5rem 1rem',
  justifyContent: 'space-between',
  backgroundColor: '#FFFFFF',
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '0.375rem',
});

export const SelectedText = style({
  color: `${vars.color.text}`,
});

export const DefaultText = style({
  color: `${vars.color.gray}`,
});

export const ToggleBtn = style({
  transform: 'rotate(-90deg)',
});

export const GradeDropdown = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  zIndex: 10,
  backgroundColor: '#FFFFFF',
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '0.375rem',
  width: ' 6.75rem',
  marginTop: '0.25rem',
});

export const GradeOption = style({
  padding: '0.5rem 1rem',
  cursor: 'pointer',
});

export const SelectedGrade = style({
  backgroundColor: `${vars.color.white}`,
  borderRadius: '0.375rem',
});

export const CardContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
  gap: '3rem',
  justifyContent: 'center',
  width: '100%',
  justifyItems: 'start',
});

export const Card = style({
  width: '100%',
  maxWidth: '18.75rem',
  height: '11.25rem',
  padding: '1.5rem 2rem',
  borderRadius: '1rem',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
  border: `solid 1px ${vars.color.primary}`,
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
