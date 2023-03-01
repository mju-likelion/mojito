import { useState } from 'react';

import styled from 'styled-components';

import ResponsiveBody from '../../../../../components/ResponsiveBody';
import TitleButton from '../../../../../components/TitleButton';

import { PART_DATA } from './PartData.js';
import PartInfo from './PartInfo';
import PartInfoMobile from './PartInfoMobile';
import PartInfoTablet from './PartInfoTablet';

const RecruitPart = () => {
  const [clickedArray, setClickedArray] = useState([false, false, false]);

  const handleClick = index => {
    let newArr = [...clickedArray];
    if (newArr[index]) {
      newArr[index] = false;
      setClickedArray([false, false, false]);
    } else {
      newArr = [false, false, false];
      newArr[index] = !newArr[index];
      setClickedArray(newArr);
    }
  };

  return (
    <>
      <TitleButton content={'모집 파트'} />
      <RecruitPartBlock>
        <PartInfoBlock>
          {Object.keys(PART_DATA).map((keyName, index) => (
            <ResponsiveBody
              key={index}
              mobileContent={
                <PartInfoMobile
                  partInfo={PART_DATA[keyName]}
                  key={index}
                  handleClick={handleClick}
                  isSelected={clickedArray[index]}
                />
              }
              tabletContent={<PartInfoTablet partInfo={PART_DATA[keyName]} key={index} />}
              desktopContent={<PartInfo partInfo={PART_DATA[keyName]} key={index} />}
            />
          ))}
        </PartInfoBlock>
      </RecruitPartBlock>
    </>
  );
};

const PartInfoBlock = styled.div`
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: flex;
  }
`;

const RecruitPartBlock = styled.div`
  display: table;
  margin: 40px auto 60px auto;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 50px 0 80px 0;
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 60px 0 160px 0;
  }
`;

export default RecruitPart;
