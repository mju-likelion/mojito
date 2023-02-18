import styled from 'styled-components';

import Button from '../../../components/Button';

import { AboutLikelion, AboutMJU } from './AboutContent';

const About = () => {
  return (
    <Wrapper>
      <div>
        <AboutLikelion />
        <AboutMJU />
        <ButtonWrapper>
          <Button
            text={'지원하기'}
            handleClick={() => window.open('https://mjulikelion-apply.netlify.app/', '_blank')}
          />
        </ButtonWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 160px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default About;
