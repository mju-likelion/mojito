import styled from 'styled-components';

import TitleButton from '../../../../components/TitleButton';

const RecruitTarget = () => {
  return (
    <>
      <TitleButton content={'모집 대상'} />
      <WrapTargetContent>
        <TargetContent>
          명지대학교 자연캠퍼스에 재학 또는 휴학중이며
          <br />
          지원 파트에 대한 기본적인 역량을 갖춘 학생
        </TargetContent>
      </WrapTargetContent>
    </>
  );
};

const WrapTargetContent = styled.div`
  text-align: center;
`;

const TargetContent = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin: 40px 0 60px 0;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 50px 0 80px 0;
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 60px 0 160px 0;
    font-size: 18px;
    line-height: 30px;
  }
`;

export default RecruitTarget;
