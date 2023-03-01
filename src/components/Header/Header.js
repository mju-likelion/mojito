import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as OpenMenuIcon } from '../../assets/images/header_mobile_menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../assets/images/header_mobile_x.svg';

import useWindowResize from './../../hooks/useWindowResize';
import DropDownMenu from './DropDownMenu';
import Logo from './Logo';
import { NAVIGATION_LIST } from './NavigationList';

const Header = () => {
  const [isDropDownOpen, setOpenDropDown] = useState(false);

  const navigate = useNavigate();

  const [windowSize] = useWindowResize();
  const { width } = windowSize;

  useEffect(() => {
    if (isDropDownOpen && width >= 600) {
      setOpenDropDown(false);
    }
  }, [width]);

  return (
    <Wrapper>
      <HeaderTopBox>
        <HeaderBox>
          <Logo setOpenDropDown={setOpenDropDown} />
          {/*이렇게 쓰는거 지양하라고 하셨는데 추후 리팩터링 해보겠습니당...*/}
          <NavigationBox>
            {NAVIGATION_LIST.map(item => (
              <NavigationItem href={item.ref} key={item.id} onClick={() => navigate(item.path)}>
                {item.name}
              </NavigationItem>
            ))}
          </NavigationBox>
          {!isDropDownOpen ? (
            <DropDownOpenIcon onClick={() => setOpenDropDown(true)} />
          ) : (
            <DropDownCloseIcon onClick={() => setOpenDropDown(false)} />
          )}
        </HeaderBox>
      </HeaderTopBox>
      {isDropDownOpen && <DropDownMenu setOpenDropDown={setOpenDropDown} />}
      {/*이렇게 쓰는거 지양하라고 하셨는데 추후 리팩터링 해보겠습니당22...*/}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
`;

const HeaderTopBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BLACK};
`;

const HeaderBox = styled.div`
  padding: 16px;
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
  display: none;
  margin-left: auto;
  font-weight: 700;
  gap: 16px;
  font-family: Montserrat;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: flex;
    font-size: 12px;
    gap: 15px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    gap: 60px;
  }
`;

const NavigationItem = styled.a`
  all: unset;
  cursor: pointer;
`;

const DropDownOpenIcon = styled(OpenMenuIcon)`
  margin-left: auto;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

const DropDownCloseIcon = styled(CloseMenuIcon)`
  margin-left: auto;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

export default Header;
