import React from 'react';

import styled from 'styled-components';

import MobileClick from './MobileClick';
import MobileNoClick from './MobileNoClick';

const PartInfoMobile = ({ partInfo, isSelected, handleClick }) => {
  return (
    <PartInformationBlock info={partInfo.value} onClick={() => handleClick(partInfo.key)}>
      {isSelected ? <MobileClick partInfo={partInfo} /> : <MobileNoClick partInfo={partInfo} />}
    </PartInformationBlock>
  );
};

const PartInformationBlock = styled.div`
  margin: ${props => (props.info === 'SERVER' ? '12px 0' : '0')};
  display: flex;
  width: 318px;
  height: 251px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-radius: 18px;
`;

export default PartInfoMobile;
