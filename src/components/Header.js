import styled from 'styled-components';

import Logo from './Logo';
const Header = () => {
  return (
    <HeaderTopBox>
      <HeaderBox>
        <Logo />
        <NavigationBox>
          <NavigationItem>ABOUT</NavigationItem>
          <NavigationItem>ROADMAP</NavigationItem>
          <NavigationItem>PROJECT</NavigationItem>
          <NavigationItem>RECRUIT</NavigationItem>
          <NavigationItem>NETWORKING</NavigationItem>
        </NavigationBox>
      </HeaderBox>
    </HeaderTopBox>
  );
};

const HeaderTopBox = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BLACK};
`;

const HeaderBox = styled.div`
  padding: 20px 16px;
  box-sizing: border-box;
  margin: auto;
  height: 56px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 70px;
    padding: 27px 16px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding: 15px 0;
  }
`;

const NavigationBox = styled.div`
  display: flex;
  margin-left: auto;
  font-size: 16px;
  font-weight: 700;
  gap: 16px;
  font-family: Montserrat;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 12px;
    gap: 15px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    gap: 60px;
  }
`;

const NavigationItem = styled.button`
  all: unset;
  cursor: pointer;
`;

export default Header;
