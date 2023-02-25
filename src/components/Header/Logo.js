import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as BigLogo } from '../../assets/images/logo_big.svg';
import { ReactComponent as SmallLogo } from '../../assets/images/logo_small.svg';
const Logo = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    const scroll = window.setInterval(() => {
      const pageScrollY = window.scrollY;
      const step = 70;
      if (pageScrollY > 0) {
        window.scrollTo(0, pageScrollY - step);
      } else {
        window.clearInterval(scroll);
      }
    }, 8);
  };

  const handleLogoClick = () => {
    navigate('/');
    scrollToTop();
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
