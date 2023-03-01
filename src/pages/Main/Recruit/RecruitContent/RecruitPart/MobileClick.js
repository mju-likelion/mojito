import React from 'react';

import styled from 'styled-components';

const MobileClick = ({ partInfo }) => {
  return (
    <>
      <PartInfoTopClick>{partInfo.value}</PartInfoTopClick>
      <PartInfoContent>
        <InfoTitle>무엇을 하나요?</InfoTitle>
        <InfoContent>{partInfo.infoMobile}</InfoContent>
        <InfoTitle>무엇을 배우나요?</InfoTitle>
        <InfoContent>{partInfo.tool}</InfoContent>
      </PartInfoContent>
    </>
  );
};

const PartInfoTopClick = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-top: 24px;
  margin-left: 24px;
  color: ${({ theme }) => theme.colors.GRAY2};
  transition: all 0.2s ease-out;
`;

const PartInfoContent = styled.div`
  margin: 24px 24px;
  line-height: 1.3;
  margin-top: auto;
`;

const InfoTitle = styled.div`
  font-size: 15px;
  line-height: 19px;
  font-weight: 700;
  margin-top: 16px;
`;

const InfoContent = styled.div`
  word-break: keep-all;
  white-space: pre-wrap;
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.GRAY2};
`;

export default MobileClick;
