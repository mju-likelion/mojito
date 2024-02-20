import styled from 'styled-components';

import Slogan12th from '../../../assets/images/Slogan12th';
import ResponsiveBody from '../../../components/ResponsiveBody';

const Banner = () => {
  return (
    <Container>
      <ResponsiveBody
        desktopContent={<Slogan12th width={'1200'} height={'370'} />}
        tabletContent={<Slogan12th width={'568'} height={'176'} />}
        mobileContent={<Slogan12th width={'318'} height={'100'} />}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 198px;
  background-color: ${({ theme }) => theme.colors.PINK1};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.devices.TABLET} {
    height: 300px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 620px;
  }
`;

export default Banner;
