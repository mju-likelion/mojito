import styled from 'styled-components';

import ArticleIconCard from '../../../../components/ArticleIconCard';

const AboutLikelion = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <h3>ABOUT</h3>
        <h1>멋쟁이사자처럼 대학이란?</h1>
        <p>
          멋쟁이사자처럼 대학은 테크 기반의 아이디어 실현을 위한 <br />
          전국 최대 규모의 대학 연합 IT/창업 동아리입니다.
        </p>
      </TitleWrapper>
      <Article>
        {ARTICELS.map(item => (
          <ArticleIconCard key={item.id} iconName={item.iconName} title={item.title} text={item.text} />
        ))}
      </Article>
    </Wrapper>
  );
};

const ARTICELS = [
  { id: 0, iconName: 'IllustOnOff', title: '온/오프라인 학습', text: '각 학교별 스터디를 통해 웹 개발을 학습합니다.' },
  {
    id: 1,
    iconName: 'IllustService',
    title: '서비스 빌딩을 위한 입체적 교육',
    text: `멋대에서는 웹 개발 교육 뿐만 아니라\n서비스 기획, UX/UI 디자인 등 자신의 서비스를\n빌딩하기 위한 다양한 역량을 배울 수 있습니다.`,
  },
  {
    id: 2,
    iconName: 'IllustIdea',
    title: '아이디어톤',
    text: '팀프로젝트를 통해 실현하고 싶은\n아이디어(웹서비스)를 발표하는 자리이며\n전국의 멋대 학생들이 모여 아이디어를\n공유하는 네트워킹의 장입니다.',
  },
  {
    id: 3,
    iconName: 'IllustHack',
    title: '해커톤',
    text: '실제 아이디어가 구현되는 축제의 장입니다.\n수 주간의 아이디어 빌드업과 프로그래밍에 이어\n해커톤 당일의 밤샘 코딩 및 최종 발표를 통해\n아이디어를 구현하고 소개합니다.',
  },
];

const Wrapper = styled.div`
  width: 278px;
  margin: 0 56px 0 16px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 520px;
    margin: 0 64px 0 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    margin: 0 auto;
  }
`;

const TitleWrapper = styled.div`
  width: 278px;
  h1 {
    font-size: 22px;
    font-weight: 700;
    height: 30px;
    line-height: 30px;
    margin-bottom: 8px;
  }
  h3 {
    color: ${({ theme }) => theme.colors.BLUE1};
    font-size: 10px;
    font-weight: 500;
    height: 13px;
    margin-bottom: 4px;
  }
  p {
    color: ${({ theme }) => theme.colors.GRAY2};
    font-weight: 400;
    height: 36px;
    font-size: 12px;
    line-height: 18px;
  }
  margin-bottom: 60px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 520px;
    h1 {
      font-size: 26px;
      height: 34px;
      line-height: 34px;
      margin-bottom: 8px;
    }
    p {
      height: 40px;
      font-size: 14px;
      line-height: 20px;
    }
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 720px;
    margin-bottom: 120px;
    h1 {
      font-size: 40px;
      height: 56px;
      line-height: 56px;
      margin-bottom: 12px;
    }

    h3 {
      font-size: 16px;
      font-weight: 500;
      height: 20px;
      line-height: 20px;
      margin-bottom: 8px;
    }

    p {
      height: 56px;
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

const Article = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
    gap: 0 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    gap: 0 30px;
    flex-wrap: nowrap;
  }
`;

export default AboutLikelion;
