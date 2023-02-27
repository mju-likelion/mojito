import styled from 'styled-components';

import Button from '../../../components/Button';
import ResponsiveBody from '../../../components/ResponsiveBody';

import OFFICIAL_APPLY_CONTENT from './OfficialApplyContent';
const OfficialApply = () => {
  const { mobileContent, tabletContent, desktopContent } = OFFICIAL_APPLY_CONTENT;
  return (
    <Container>
      <ContentText>
        <ResponsiveBody mobileContent={mobileContent} tabletContent={tabletContent} desktopContent={desktopContent} />
        <ProposeText>저희와 함께 가실까요?</ProposeText>
      </ContentText>
      <ButtonBox>
        <Button text={'지원하기'} handleClick={() => window.open('https://apply.mju-likelion.com/', '_blank')} />
        {/* 이거 나중에 링크 최종본으로 변경 -> 민쥐가 일단 했습니다 */}
      </ButtonBox>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 305px;
  height: 311px;
  margin: 80px auto 100px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 412px;
    height: 287px;
    margin: 100px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 588px;
    height: 386px;
    margin: 160px auto;
  }
`;
const ContentText = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.GRAY2};
  white-space: pre-wrap;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 20px;
    line-height: 32px;
  }
`;
const ProposeText = styled.p`
  margin-top: 30px;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.WHITE};
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 40px;
    line-height: 50px;
  }
`;
const ButtonBox = styled.div`
  margin: 80px auto 125px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 80px auto 25px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 100px auto 40px;
  }
`;
export default OfficialApply;
