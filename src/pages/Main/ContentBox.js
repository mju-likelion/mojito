import styled from 'styled-components';

import { About, AboutMJU } from './Contents';

const ContentBox = () => {
  return (
    <Wrapper>
      <About />
      <AboutMJU />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: gray; */

  margin: 160px auto 120px auto;
  width: 720px;
`;

export default ContentBox;
