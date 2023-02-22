import React from 'react';

import styled from 'styled-components';

import iconPlus from '../../../../../assets/images/icon_plus.svg';

import PartImage from './PartImage';

const PartInfo = ({ partInfo }) => {
  return (
    <PartInformationBlock info={partInfo.value}>
      <PartInfoTop>
        {partInfo.value}
        <PartInfoImg src={iconPlus} />
      </PartInfoTop>
      <CenterImgBlock>
        <PartImage part={partInfo.value} width={'186px'} height={'140px'} />
      </CenterImgBlock>
      <PartInfoContent>
        <InfoTitle>무엇을 하나요?</InfoTitle>
        <InfoContent>{partInfo.infoDesktop}</InfoContent>
        <InfoTitle>무엇을 배우나요?</InfoTitle>
        <InfoContent>{partInfo.tool}</InfoContent>
      </PartInfoContent>
    </PartInformationBlock>
  );
};

const PartInfoTop = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 24px;
  margin-left: 24px;
  display: flex;
  transition: all 0.2s ease-out;
`;

const PartInfoImg = styled.img`
  margin-left: auto;
  margin-right: 24px;
`;

const CenterImgBlock = styled.div`
  margin-top: 57px;
  display: flex;
  justify-content: center;
`;

const PartInfoContent = styled.div`
  white-space: pre-wrap;
  display: none;
  margin: auto 24px 24px 24px;
`;

const InfoTitle = styled.div`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
`;

const InfoContent = styled.div`
  word-break: keep-all;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.GRAY2};
`;

const PartInformationBlock = styled.div`
  margin: ${props => (props.info === 'SERVER' ? '0 30px' : '0')};
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-radius: 18px;

  &:hover ${PartInfoTop} {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.GRAY2};
  }

  &:hover ${PartInfoImg} {
    display: none;
  }

  &:hover ${CenterImgBlock} {
    display: none;
  }

  &:hover ${PartInfoContent} {
    display: block;
  }
`;

export default PartInfo;
