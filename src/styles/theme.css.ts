import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#D0DBF7',
    background: '#F5F7FB',
    text: '#1C1C1E', // black
    gray: '#A0A3A8',
    white: '#FFFFFF',
  },
});
