import type { Metadata } from 'next';

import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'IMI',
  description: 'IMI는 GSM 신입생들을 위한 자기소개서 작성 서비스입니다.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
