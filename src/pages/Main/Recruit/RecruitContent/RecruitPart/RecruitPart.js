import { useState, useEffect } from 'react';

import styled from 'styled-components';

import TitleButton from '../../../../../components/TitleButton';

import { PART_DATA } from './PartData.js';
import PartInfo from './PartInfo';
import PartInfoMobile from './PartInfoMobile';
import PartInfoTablet from './PartInfoTablet';

const RecruitPart = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const DESKTOP_WIDTH = 1199;
  const TABLET_WIDTH = 599;
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

  const changeWidth = (apply, index) => {
    if (innerWidth > DESKTOP_WIDTH) {
      return <PartInfo partInfo={apply} key={index} />;
    } else if (innerWidth > TABLET_WIDTH) {
      return <PartInfoTablet partInfo={apply} key={index} />;
    } else {
      return <PartInfoMobile partInfo={apply} key={index} handleClick={handleClick} isSelected={clickedArray[index]} />;
    }
  };

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  });

  return (
    <>
      <TitleButton content={'모집 파트'} />
      <RecruitPartBlock>
        <PartInfoBlock>
          {Object.keys(PART_DATA).map((keyName, index) => changeWidth(PART_DATA[keyName], index))}
        </PartInfoBlock>
      </RecruitPartBlock>
    </>
  );
};

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

const PartInfoBlock = styled.div`
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: flex;
  }
`;

export default RecruitPart;
