import styled from 'styled-components';

import IllustService from '../../../assets/images/IllustService';
import ArticleCard from '../../../components/ArticleCard';

const About = () => {
  return (
    <>
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
          <ArticleCard key={item.id} icon={null} title={item.title} text={item.text} />
        ))}
      </Article>
    </>
  );
};

const ARTICELS = [
  { id: 0, icon: IllustService, title: '온/오프라인 학습', text: '각 학교별 스터디를 통해 웹 개발을 학습합니다.' },
  {
    id: 1,
    icon: '',
    title: '서비스 빌딩을 위한 입체적 교육',
    text: '멋대에서는 웹 개발 교육 뿐만 아니라 서비스 기획, UX/UI 디자인 등 자신의 서비스를 빌딩하기 위한 다양한 역량을 배울 수 있습니다.',
  },
  {
    id: 2,
    icon: '',
    title: '아이디어톤',
    text: '팀프로젝트를 통해 실현하고 싶은 아이디어(웹서비스)를 발표하는 자리이며 전국의 멋대 학생들이 모여 아이디어를 공유하는 네트워킹의 장입니다.',
  },
  {
    id: 3,
    icon: '',
    title: '해커톤',
    text: '실제 아이디어가 구현되는 축제의 장입니다. 수 주간의 아이디어 빌드업과 프로그래밍에 이어 해커톤 당일의 밤샘 코딩 및 최종 발표를 통해 아이디어를 구현하고 소개합니다.',
  },
];

const TitleWrapper = styled.div`
  margin-bottom: 120px;
  h1 {
    font-size: 40px;
    font-weight: 700;
    height: 56px;
    line-height: 56px;
    margin-bottom: 12px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.BLUE1};
    font-size: 16px;
    font-weight: 500;
    height: 20px;
    line-height: 20px;
    margin-bottom: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.GRAY2};
    height: 56px;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
`;

const Article = styled.div`
  display: flex;
  gap: 0 30px;
`;

export default About;
