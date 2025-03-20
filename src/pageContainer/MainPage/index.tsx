import * as S from './main.css';

const MainPage = () => {
  return (
    <div className={S.MainPageContainer}>
      <div className={S.MainContentContainer}>
        <div className={S.GreetingBox}>
          <h1 className={S.GreetingText}>
            자신을 소개하고 동아리에 지원하세요!
          </h1>
          <p className={S.SubText}>당신의 열정과 재능을 보여줄 기회입니다.</p>
        </div>
        <button>바로가기</button>
      </div>
    </div>
  );
};

export default MainPage;
