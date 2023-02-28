import styled from 'styled-components';

import Button from '../../../components/Button';

import { AboutLikelion, AboutMJU } from './AboutContent';

const About = () => {
  return (
    <>
      <a name="about" /> {/* 헤더 이동 기능위해 추가했습니다 */}
      <Wrapper>
        <div>
          <AboutLikelion />
          <AboutMJU />
        </div>
        <ButtonWrapper>
          <Button text={'지원하기'} handleClick={() => window.open('https://apply.mju-likelion.com/', '_blank')} />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 26px auto 80px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 30px auto 85px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 90px auto;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 200px;
  }
`;

export default About;
