import styled from 'styled-components';

import Button from '../../../components/Button';

import { AboutLikelion, AboutMJU } from './AboutContent';

const About = () => {
  return (
    <Wrapper>
      <div>
        <AboutLikelion />
        <AboutMJU />
      </div>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
