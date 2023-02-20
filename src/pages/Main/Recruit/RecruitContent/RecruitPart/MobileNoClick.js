import React from 'react';

import styled from 'styled-components';

import iconPlus from '../../../../../assets/images/icon_plus.svg';

import PartImage from './PartImage';

const MobileNoClick = ({ partInfo }) => {
  return (
    <>
      <PartInfoTop>
        {partInfo.value}
        <PartInfoImg src={iconPlus} />
      </PartInfoTop>
      <CenterImgBlock>
        <PartImage part={partInfo.value} width={'155px'} height={'117px'} />
      </CenterImgBlock>
    </>
  );
};

const PartInfoTop = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin-top: 24px;
  margin-left: 24px;
  display: flex;
`;

const PartInfoImg = styled.img`
  margin-left: auto;
  margin-right: 28px;
`;

const CenterImgBlock = styled.div`
  margin: 44px auto 0 auto;
  display: flex;
  justify-content: center;
`;

export default MobileNoClick;
