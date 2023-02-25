import styled from 'styled-components';

import ArticleIconCard from '../../../../components/ArticleIconCard';

import { ARTICLES } from './AboutFileData';

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
        {ARTICLES.map(item => (
          <ArticleIconCard key={item.id} iconName={item.iconName} title={item.title} text={item.text} />
        ))}
      </Article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 278px;
  margin: 0 auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 520px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
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
    font-family: 'Montserrat';
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
