import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { NAVIGATION_LIST } from './NavigationList';
const DropDownMenu = ({ setOpenDropDown }) => {
  const navigate = useNavigate();
  const handleClick = path => {
    navigate(path);
    setOpenDropDown(false);
  };

  return (
    <DropDownBox>
      {NAVIGATION_LIST.map(item => (
        <MenuItem href={item.ref} key={item.id} onClick={() => handleClick(item.path)}>
          {item.name}
        </MenuItem>
      ))}
    </DropDownBox>
  );
};

const DropDownBox = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

const MenuItem = styled.a`
  all: unset;
  height: 56px;
  font-size: 16px;
  font-weight: 700;
  font-family: Montserrat;
  padding: 18px 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.GRAY1};
`;

export default DropDownMenu;
