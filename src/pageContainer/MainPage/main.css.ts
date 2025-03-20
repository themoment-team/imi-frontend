import { style } from '@vanilla-extract/css';

export const MainPageContainer = style({
  height: 'calc(100vh - 4.5rem)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  padding: '17.2rem 0 15.5rem 0',
});

export const MainContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6.95rem',
  alignItems: 'center',
});

export const GreetingBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.3rem',
  alignItems: 'center',
});

export const GreetingText = style({
  fontSize: '3rem',
  fontWeight: 600,
});

export const SubText = style({
  fontSize: '1.5rem',
  fontWeight: 400,
});

export const ShortcutButton = style({
  fontSize: '1.25rem',
  fontWeight: 400,
  padding: '0.75rem 2.05rem',
});
