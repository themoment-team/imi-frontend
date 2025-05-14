import Link from 'next/link';

import * as S from './notFound.css';

export default function NotFoundPage() {
  return (
    <div className={S.NotFoundContainer}>
      <h1 className={S.Title}>404</h1>
      <p className={S.Content}>페이지를 찾을 수 없습니다</p>
      <Link href="/" className={S.HomeLink}>
        홈으로
      </Link>
    </div>
  );
}
