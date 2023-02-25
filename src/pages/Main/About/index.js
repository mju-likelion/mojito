import styled from 'styled-components';

import Button from '../../../components/Button';

import { AboutLikelion, AboutMJU } from './AboutContent';

const About = () => {
  return (
    <Wrapper>
      <a name="about" /> {/*헤더 이동 기능위해 추가했습니다*/}
      <AboutLikelion />
      <AboutMJU />
      <ButtonWrapper>
        <Button
          text={'지원하기'}
          handleClick={null /*() => window.open('https://mjulikelion-apply.netlify.app/', '_blank')*/}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 80px auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 100px auto 85px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 160px auto;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 80px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 200px;
  }
`;

export default About;
