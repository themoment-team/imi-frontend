import * as S from './EmptyProfile.css';

export default function EmptyProfile() {
  return (
    <div className={S.EmptyProfileContainer}>
      <h1 className={S.EmptyTitle}>자기소개서가 비어있습니다.</h1>
      <p className={S.EmptuContent}>동아리 선배님들에게 자신을 소개해보세요!</p>
      <p className={S.LinkWrite}>작성하기</p>
    </div>
  );
}
