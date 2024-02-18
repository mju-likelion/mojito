import styled from 'styled-components';

import ArticleIconCard from '../../../../components/ArticleIconCard';

import { ARTICLES, ABOUT_LIKELION_BODY_TEXT } from './AboutFileData';

const AboutLikelion = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <h3>ABOUT</h3>
        <h1>멋쟁이사자처럼 대학이란?</h1>
        <MobileBodyText>{ABOUT_LIKELION_BODY_TEXT.mobile}</MobileBodyText>
        <TabletBodyText>{ABOUT_LIKELION_BODY_TEXT.tablet}</TabletBodyText>
        <DesktopBodyText>{ABOUT_LIKELION_BODY_TEXT.desktop}</DesktopBodyText>
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
  padding-top: 56px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
    padding-top: 70px;
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
    color: ${({ theme }) => theme.colors.PINK1};
    font-size: 10px;
    font-weight: 500;
    height: 13px;
    margin-bottom: 4px;
  }
  margin-bottom: 40px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 520px;
    h1 {
      font-size: 26px;
      height: 34px;
      line-height: 34px;
      margin-bottom: 8px;
    }
    margin-bottom: 60px;
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
  }
`;

const MobileBodyText = styled.p`
  color: ${({ theme }) => theme.colors.GRAY2};
  height: 36px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;
const TabletBodyText = styled.p`
  display: none;
  color: ${({ theme }) => theme.colors.GRAY2};
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: block;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

const DesktopBodyText = styled.p`
  display: none;
  color: ${({ theme }) => theme.colors.GRAY2};
  height: 56px;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

const Article = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px 0;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
    gap: 0 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    gap: 0 30px;
    flex-wrap: nowrap;
    height: 268px;
  }
`;

export default AboutLikelion;
