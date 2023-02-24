import styled from 'styled-components';

import Slogan from '../../../assets/images/Slogan';
import ResponsiveBody from '../../../components/ResponsiveBody';

const Banner = () => {
  return (
    <Container>
      <ResponsiveBody
        desktopText={<Slogan width={'1200'} height={'370'} />}
        tabletText={<Slogan width={'568'} height={'176'} />}
        mobileText={<Slogan width={'318'} height={'100'} />}
      />
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
