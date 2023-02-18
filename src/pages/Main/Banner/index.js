import styled from 'styled-components';

import Slogan from '../../../assets/images/Slogan';

const Banner = () => {
  return (
    <Container>
      <Slogan />
    </Container>
  );
};

/** @TODO hanjo: 모바일, 태블릿 스타일링 적용 필요 */
const Container = styled.div`
  width: 100%;
  height: 620px;
  background-color: ${({ theme }) => theme.colors.BLUE1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Banner;
