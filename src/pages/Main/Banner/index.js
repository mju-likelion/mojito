import styled from 'styled-components';

import Slogan from '../../../assets/images/Slogan';
import useWindowReszie from '../../../hooks/useWindowResize';

const Banner = () => {
  const [size] = useWindowReszie();
  const { width, height } = SloganSize(size);
  return (
    <Container>
      <Slogan width={width} height={height} />
    </Container>
  );
};

const SloganSize = size => {
  if (size.width >= 1200) {
    return { width: '1200', height: '370' };
  } else if (size.width >= 600) {
    return { width: '568', height: '176' };
  } else {
    return { width: '318', height: '100' };
  }
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
