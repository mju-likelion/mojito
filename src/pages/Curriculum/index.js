import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { CurriculumTextData, CurriculumChartData } from './AssetsData';

const DESKTOP_WIDTH = 1199;
const TABLET_WIDTH = 599;

const Curriculum = () => {
  const [width, setwidth] = useState('desktop');

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth > DESKTOP_WIDTH) {
      setwidth('desktop');
    } else if (window.innerWidth > TABLET_WIDTH) {
      setwidth('tablet');
    } else {
      setwidth('mobile');
    }
  };

  return (
    <Container>
      <RoadmapText>ROADMAP</RoadmapText>
      <PartCurriculumTitle>파트 및 커리큘럼</PartCurriculumTitle>
      <PartCurriculumText>{width && CurriculumTextData[width]}</PartCurriculumText>
      {width === 'mobile' ? (
        <ChartContainer>
          {CurriculumChartData[width].map((chart, i) => (
            <Chart key={i}>
              <ChartSvg src={chart} />
            </Chart>
          ))}
        </ChartContainer>
      ) : (
        <ChartSvg src={CurriculumChartData[width]} />
      )}
    </Container>
  );
};

export default Curriculum;

const Container = styled.div`
  width: 318px;
  margin: 80px auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
    margin: 160px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    margin: 100px auto;
  }
`;

const RoadmapText = styled.p`
  font-family: Montserrat;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.BLUE1};
  font-weight: 500;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 16px;
  }
`;

const PartCurriculumTitle = styled.p`
  font-weight: 700;
  color: white;
  font-size: 26px;
  margin: 4px 0 8px 0;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 40px;
    margin: 8px 0 12px 0;
  }
`;

const PartCurriculumText = styled.p`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.GRAY2};
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 62px;

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 60px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 120px;
  }
`;

const ChartContainer = styled.div``;

const Chart = styled.div`
  margin-bottom: 62px;
`;

const ChartSvg = styled.img`
  width: 318px;
  height: 510px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
    height: 618px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    height: 946px;
  }
`;
