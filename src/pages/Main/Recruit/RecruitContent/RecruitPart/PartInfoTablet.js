import React from 'react';

import styled from 'styled-components';

import PartImage from './PartImage';

const PartInfoTablet = ({ partInfo }) => {
  return (
    <PartInformationBlock info={partInfo.value}>
      <PartInfoTop>{partInfo.value}</PartInfoTop>
      <WrapContent>
        <CenterImgBlock>
          <PartImageBlock part={partInfo.value} width={'144px'} height={'108px'} />
        </CenterImgBlock>
        <PartInfoContent>
          <InfoTitle>무엇을 하나요?</InfoTitle>
          <InfoContent>{partInfo.infoTablet}</InfoContent>
          <InfoTitle>무엇을 배우나요?</InfoTitle>
          <InfoContent>{partInfo.tool}</InfoContent>
        </PartInfoContent>
      </WrapContent>
    </PartInformationBlock>
  );
};

const PartInfoTop = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  padding-top: 24px;
  margin-left: 24px;
`;

const WrapContent = styled.div`
  display: flex;
`;

const CenterImgBlock = styled.div`
  margin: 35px 17px 25px 24px;
`;

const PartInfoContent = styled.div`
  margin: 36px 23px 24px 0;
`;

const InfoTitle = styled.div`
  font-size: 15x;
  font-weight: 700;
  line-height: 19px;
`;

const InfoContent = styled.div`
  white-space: pre-wrap;
  line-height: 15px;
  font-size: 12px;
  font-weight: 400;
  margin-top: 4px;
  margin-bottom: 17px;
  color: ${({ theme }) => theme.colors.GRAY2};
`;

const PartImageBlock = styled(PartImage)`
  width: 144px;
  height: 108px;
`;

const PartInformationBlock = styled.div`
  margin: ${props => (props.info === 'SERVER' ? '12px 0' : '0')};

  width: 568px;
  height: 216px;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  border-radius: 18px;
`;

export default PartInfoTablet;
