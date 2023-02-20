import styled from 'styled-components';

import ResponsiveBody from '../../../../../components/ResponsiveBody';

import recruitGuide from './recruiteGuide';

const RecruitInfo = () => {
  const { mobileText, desktopText } = recruitGuide;
  return (
    <>
      <InfoSubTitle>Recruit</InfoSubTitle>
      <InfoTitle>11기 모집 안내</InfoTitle>
      <InfoContent>
        <ResponsiveBody mobileText={mobileText} tabletText={desktopText} desktopText={desktopText} />
      </InfoContent>
    </>
  );
};

const InfoSubTitle = styled.div`
  color: ${({ theme }) => theme.colors.BLUE1};
  font-family: 'Montserrat';
  font-size: 10px;
  font-weight: 500;
  line-height: 13px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 16px;
    line-height: 20px;
  }
`;

const InfoTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 26px;
    line-height: 34px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 40px;
    line-height: 56px;
  }
`;

const InfoContent = styled.div`
  color: ${({ theme }) => theme.colors.GRAY2};
  white-space: pre-wrap;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin: 8px 0 60px 0;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
    line-height: 20px;
    margin: 8px 0 80px 0;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 12px 0 120px 0;
  }
`;
export default RecruitInfo;
