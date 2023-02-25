import styled from 'styled-components';

import { NAVIGATION_LIST } from './NavigationList';
const DropDownMenu = () => {
  return (
    <DropDownBox>
      {NAVIGATION_LIST.map(item => (
        <MenuItem key={item.id}>{item.name}</MenuItem>
      ))}
    </DropDownBox>
  );
};

const DropDownBox = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

const MenuItem = styled.div`
  height: 56px;
  font-size: 16px;
  font-weight: 700;
  font-family: Montserrat;
  padding: 18px 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.GRAY1};
`;

export default DropDownMenu;
