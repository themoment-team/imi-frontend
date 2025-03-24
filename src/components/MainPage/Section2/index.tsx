import { ImiLogo } from '@/asset';

import * as S from './section2.css';

const Section2 = () => {
  return (
    <section className={S.SectionContainer}>
      <div className={S.ContentContainer}>
        <div className={S.IntroduceBox}>
          <h1 className={S.Title}>
            <span className={S.Highlight}>IMI</span>는 어떤 프로젝트인가요?
          </h1>
          <p className={S.Description}>
            이 프로젝트는 신입생들에게 자기소개서를 작성할 기회를 제공하여,
            <br />
            보다 원활한 동아리 지원을 돕는 것을 목표로 합니다.
            <br />
            또한 동아리 선배들은 미리 지원자를 확인하고 적합한 인재를 찾을 수
            있습니다.
            <br />
            동아리에 자신을 어필하고 싶나요?{' '}
            <span className={S.Highlight}>IMI</span>가 도와드리겠습니다
          </p>
        </div>
        <div className={S.LogoBox}>
          <ImiLogo width="216" height="151.6" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
