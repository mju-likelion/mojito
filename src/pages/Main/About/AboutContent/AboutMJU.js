import styled from 'styled-components';

import AboutMju1 from '../../../../assets/images/AboutMju1';
import AboutMju2 from '../../../../assets/images/AboutMju2';
import AboutMju3 from '../../../../assets/images/AboutMju3';
import ArticleImageCard from '../../../../components/ArticleImageCard';

const AboutMJU = () => {
  return (
    <Wrapper>
      <h1>멋쟁이사자처럼 명지대(자연)</h1>
      <Hr />
      <Article>
        {ARTICELS.map(item => (
          <ArticleImageCard key={item.id} imageName={item.imageName} />
        ))}
        {/* <AboutMju1 />
        <AboutMju2 />
        <AboutMju3 /> */}
      </Article>
    </Wrapper>
  );
};

const ARTICELS = [
  {
    id: 0,
    imageName: 'AboutMju1',
  },
  {
    id: 1,
    imageName: 'AboutMju2',
  },
  {
    id: 2,
    imageName: 'AboutMju3',
  },
];

const Wrapper = styled.div`
  h1 {
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    height: 30px;
  }
  color: ${({ theme }) => theme.colors.BLUE1};
  margin-top: 202px;
`;

const Hr = styled.hr`
  margin: 20px auto 30px auto;
  border: 2px solid ${({ theme }) => theme.colors.BLUE1};
`;

const Article = styled.div`
  display: flex;
  gap: 0 36px;
  margin-bottom: 200px;
`;

export default AboutMJU;
