import * as S from './loading.css';

export default function Loading() {
  return (
    <div className={S.LoadingContainer}>
      <div className={S.Spinner}></div>
      <p className={S.LoadingText}>Loading..</p>
    </div>
  );
}
