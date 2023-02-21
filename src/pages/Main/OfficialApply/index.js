import styled from 'styled-components';

import Button from '../../../components/Button';

const OfficialApply = () => {
  return (
    <Container>
      <ContentText>
        도전을 두려워하지않고 어제보다 나은 오늘을 살고자 한다면,
        <br /> 하던 일이 막히더라도 해결하고자 하는 승부욕을 가지고 있다면,
        <br /> 할 땐 하고 놀 땐 제대로 노는 세상 멋있는 여러분을 기다리고 있겠습니다.
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
  width: 588px;
  height: 386px;
  margin: 160px auto;
`;

const ContentText = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.GRAY2};
  text-align: center;
  font-size: 20px;
  line-height: 32px;
`;

const ProposeText = styled.p`
  margin-top: 30px;
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

const ButtonBox = styled.div`
  margin: 100px auto 40px;
`;

export default OfficialApply;
