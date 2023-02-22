import styled from 'styled-components';

import Button from '../../../components/Button';

const OfficialApply = () => {
  // BreakLine에 관련된 태그 남용 부분은 추후 로직이 merge되면 리팩터링 하도록 하겠습니다.
  return (
    <Container>
      <ContentText>
        도전을 두려워하지않고 어제보다 나은 오늘을
        <MobileBreakLine /> 살고자 한다면,
        <NotMobileBreakLine /> 하던 일이 막히더라도 해결하고자 하는
        <MobileBreakLine /> 승부욕을 가지고 있다면,
        <NotMobileBreakLine /> 할 땐 하고 놀 땐 제대로 노는
        <MobileBreakLine /> 세상 멋있는 여러분을 기다리고 있겠습니다.
        <ProposeText>저희와 함께 가실까요?</ProposeText>
      </ContentText>
      <ButtonBox>
        <Button
          text={'지원하기'}
          //   handleClick={() => window.open('https://github.com/mju-likelion', '_blank')} 이건 나중에 링크 연결하고
        />
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

const NotMobileBreakLine = styled.br`
  display: none;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: block;
  }
`;

const MobileBreakLine = styled.br`
  display: block;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

export default OfficialApply;
