import * as S from './footer.css';

interface QuickLink {
  text: string;
  url: string;
}

interface TextSection {
  title: string;
  content: string[];
  isLink: false;
}

interface LinkSection {
  title: string;
  content: QuickLink[];
  isLink: true;
}

type FooterSection = TextSection | LinkSection;

const FooterData: FooterSection[] = [
  {
    title: 'IMI',
    content: ['당신의 열정과 재능을 보여주세요!'],
    isLink: false,
  },
  {
    title: 'Quick Link',
    content: [
      { text: '동아리 소개', url: '/clubs' },
      { text: '자기소개서 작성', url: '/write' },
      { text: '소개서 목록', url: '/profile/list' },
    ],
    isLink: true,
  },
  {
    title: 'Contact',
    content: [
      'email: s24070@gsm.hs.kr',
      'discord: junjuny0227',
      'instagram: @j_.yx0n_',
    ],
    isLink: false,
  },
];

const Footer = () => {
  return (
    <div className={S.FooterContainer}>
      <div className={S.ContentContainer}>
        {FooterData.map((data, index) => (
          <div key={index} className={S.SectionBox}>
            <h3 className={S.Title}>{data.title}</h3>
            <div className={S.ContentList}>
              {data.isLink
                ? data.content.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.url}
                      className={S.ContentText}
                    >
                      {item.text}
                    </a>
                  ))
                : data.content.map((item, itemIndex) => (
                    <p key={itemIndex} className={S.ContentText}>
                      {item}
                    </p>
                  ))}
            </div>
          </div>
        ))}
      </div>
      <p className={S.ContentText}>© 2025 IMI. All rights reserved.</p>
    </div>
  );
};

export default Footer;
