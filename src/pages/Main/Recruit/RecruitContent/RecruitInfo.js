import styled from 'styled-components';

const RecruitInfo = () => {
  const infoDesktopContentData =
    "저희 멋쟁이사자처럼은 '교육'과 '협업'을 목표로 하는 단체로\n자연스럽게 그 중심은 다양한 형태의 공부입니다. 자기 발전에 대한 욕심을 원동력으로\n끊임없이 도전하고 노력하는 분들과 함께 한 걸음 더 나아가는한 해를 만들어보고자 합니다. \n따라서 저희 11기에서는 다음과 같은 분들을 모시고자 합니다.";
  // const infoMobileContentData =
  //   "저희 멋쟁이사자처럼은 '교육'과 '협업'을 목표로 하는\n단체로 자연스럽게 그 중심은 다양한 형태의 공부입니다.\n자기 발전에 대한 욕심을 원동력으로 끊임없이 도전하고\n노력하는 분들과 함께 한 걸음 더 나아가는한 해를\n만들어보고자 합니다. 따라서 저희 11기에서는\n다음과 같은 분들을 모시고자 합니다.";

  return (
    <>
      <InfoSubTitle>Recruit</InfoSubTitle>
      <InfoTitle>11기 모집 안내</InfoTitle>
      <InfoContent>{infoDesktopContentData}</InfoContent>
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
  margin-bottom: 60px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 80px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 120px;
  }
`;
export default RecruitInfo;
