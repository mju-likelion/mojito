import styled from 'styled-components';

import { ReactComponent as BigLogo } from '../assets/images/logo_big.svg';
import { ReactComponent as SmallLogo } from '../assets/images/logo_small.svg';

const Logo = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HeaderBigLogo onClick={handleLogoClick} />
      <HeaderSmallLogo onClick={handleLogoClick} />
    </>
  );
};

export default Logo;

const HeaderBigLogo = styled(BigLogo)`
  display: none;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

const HeaderSmallLogo = styled(SmallLogo)`
  cursor: pointer;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;
