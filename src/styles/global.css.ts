import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css';

globalStyle(
  `html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button, input, textarea`,
  {
    margin: 0,
    padding: 0,
    border: 0,
    color: vars.color.text,
    fontSize: '100%',
    fontFamily:
      "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
    verticalAlign: 'baseline',
    boxSizing: 'border-box',
  }
);

globalStyle('input::placeholder, textarea::placeholder', {
  color: vars.color.gray,
  opacity: 1,
});

globalStyle('body', { backgroundColor: vars.color.background });

globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section',
  {
    display: 'block',
  }
);

globalStyle('body', {
  lineHeight: 1,
});

globalStyle('ol, ul', {
  listStyle: 'none',
});

globalStyle('blockquote, q', {
  quotes: 'none',
});

globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: '',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('button', {
  padding: 0,
  border: 'none',
  outline: 'none',
  background: 'inherit',
  cursor: 'pointer',
});
