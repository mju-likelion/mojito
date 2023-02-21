import { useState, useEffect } from 'react';

import styled from 'styled-components';

import HighlightText from '../../components/HighlightText';

import { CurriculumTextData, CurriculumChartData, ArrowImgData, EventTextData, HackathonImageData } from './AssetsData';

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
    <Background>
      <Container>
        <RoadmapText>ROADMAP</RoadmapText>
        <PartCurriculumTitle>파트 및 커리큘럼</PartCurriculumTitle>
        <PartCurriculumText>{width && CurriculumTextData[width]}</PartCurriculumText>
        {width === 'mobile' ? (
          <>
            {CurriculumChartData[width].map((chart, i) => (
              <Chart key={i}>
                <ChartSvg src={chart} />
              </Chart>
            ))}
            <EventBackground>
              <MobileArrowContainer>
                <Arrow src={ArrowImgData[width]} />
              </MobileArrowContainer>
              <MobileEventContainer>
                <EventSection>
                  <BlueTitle>아이디어톤</BlueTitle>
                  <EventText>{EventTextData.ideathon[width]}</EventText>
                </EventSection>
                <EventSection>
                  <BlueTitle>해커톤</BlueTitle>
                  <EventText>{EventTextData.hackathon[width]}</EventText>
                </EventSection>
                <EventSection>
                  <BlueTitle>자율 프로젝트 및 관심분야 스터디</BlueTitle>
                  <EventText>{EventTextData.study}</EventText>
                </EventSection>
              </MobileEventContainer>
            </EventBackground>
          </>
        ) : (
          <>
            <Chart>
              <ChartSvg src={CurriculumChartData[width]} />
            </Chart>
            <EventBackground>
              <EventContainer>
                <Ideathon>
                  <BlueTitle>아이디어톤</BlueTitle>
                  <EventText>
                    <HighlightText text={EventTextData.ideathon[width]} target={EventTextData.ideathon.highlight} />
                  </EventText>
                </Ideathon>
                <Study>
                  <BlueTitle>자율 프로젝트 및 관심분야 스터디</BlueTitle>
                  <EventText>{EventTextData.study}</EventText>
                </Study>
                <ArrowContainer>
                  <Arrow src={ArrowImgData[width]} />
                </ArrowContainer>
                <Hackathon>
                  <BlueTitle>해커톤</BlueTitle>
                  <EventText>
                    <HighlightText text={EventTextData.hackathon[width]} target={EventTextData.hackathon.highlight} />
                    <HackathonImgs>
                      <HackathonSvg src={HackathonImageData[width]} />
                    </HackathonImgs>
                  </EventText>
                </Hackathon>
              </EventContainer>
            </EventBackground>
          </>
        )}
      </Container>
    </Background>
  );
};

export default Curriculum;

const Background = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.GRAY1};
  width: 100vw;
  height: 2936px;
  padding: 80px 0;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 1818px;
    padding: 160px 0;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 2706px;
    padding: 100px 0;
  }
`;

const Container = styled.div`
  width: 318px;
  margin: 0 auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
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

const Chart = styled.div`
  margin-bottom: 62px;
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

const ChartSvg = styled.img`
  width: 100%;
  height: 100%;
`;

const EventBackground = styled.div`
  display: flex;
  width: 318px;
  margin: 80px auto 80px auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    justify-content: flex-end;
    width: 568px;
    margin: 100px auto 0 auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    margin: 160px auto 0 auto;
  }
`;

const EventContainer = styled.div`
  display: grid;
  grid-template-columns: 255px 43px 264px;
  grid-template-rows: 274px 233px 214px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    grid-template-columns: 432px 54px 572px;
    grid-template-rows: 334px 338px 308px;
  }
`;

const ArrowContainer = styled.div`
  @media ${({ theme }) => theme.devices.TABLET} {
    grid-row: 1/-1;
    grid-column: 2/3;
  }
`;

const MobileArrowContainer = styled.div`
  width: 43px;
  height: 841px;
`;

const Arrow = styled.img`
  width: 100%;
  height: 100%;
`;

const BlueTitle = styled.div`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.BLUE1};
  color: ${({ theme }) => theme.colors.BLUE1};
  font-weight: 700;
  border-radius: 100px;
  padding: 7px 30px;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding: 15px 46px;
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

const EventSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Ideathon = styled(EventSection)`
  align-items: flex-end;
  justify-content: flex-end;
  grid-row: 1/2;
  grid-column: 1/2;
  text-align: end;
`;

const Study = styled(EventSection)`
  justify-content: flex-start;
  align-items: flex-end;
  grid-row: -2/-1;
  grid-column: 1/2;
  text-align: end;
`;

const Hackathon = styled(EventSection)`
  grid-row: 2/3;
  grid-column: -2/-1;
  justify-content: flex-start;
  align-items: flex-start;
`;

const EventText = styled.div`
  color: ${({ theme }) => theme.colors.GRAY2};
  white-space: pre-wrap;
  font-size: 12px;
  line-height: 20px;
  span {
    color: white;
    font-weight: 700;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 557px;
    height: 120px;
    margin-top: 40px;

    font-size: 15px;
    line-height: 26px;
  }
`;

const HackathonImgs = styled.div`
  width: 264px;
  height: 59px;
  margin-top: 20px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 557px;
    height: 120px;
    margin-top: 40px;
  }
`;

const HackathonSvg = styled.img`
  width: 100%;
  height: 100%;
`;

const MobileEventContainer = styled.div`
  box-sizing: border-box;
  width: 264px;
  height: 841px;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
