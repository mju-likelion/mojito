import { useState, useEffect } from 'react';

import styled from 'styled-components';

import SvgComponent from '../../../components/SvgComponent';

import { CurriculumChartData, ArrowImgData } from './AssetsData';
import Hackathon from './Hackathon';
import Ideathon from './Ideathon';
import Study from './Study';

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
        <PartCurriculumText>
          멋쟁이사자처럼 명지대(자연) 11기에서는 <MobileBreakLine />
          웹, 서버, 기획/디자인 파트로 나누어 진행됩니다. <MobileBreakLine />
          <DesktopTabletBreakLine />각 파트별로 회원들의 실력 향상과 프로젝트 아웃풋을 <MobileBreakLine />
          위한 각 파트별 커리큘럼이 운영되며, <DesktopTabletBreakLine />
          다른 파트와의 <MobileBreakLine />
          크로스오버로 협업을 위한 과정을 배워갑니다.
        </PartCurriculumText>
        {width === 'mobile' ? (
          <>
            {CurriculumChartData[width].map((chart, i) => (
              <Chart key={i}>{SvgComponent(chart)}</Chart>
            ))}
            <EventBackground>
              <MobileArrowContainer>{SvgComponent(ArrowImgData[width])}</MobileArrowContainer>
              <MobileEventContainer>
                <EventSection>
                  <Ideathon />
                </EventSection>
                <EventSection>
                  <Hackathon width={width} />
                </EventSection>
                <EventSection>
                  <Study />
                </EventSection>
              </MobileEventContainer>
            </EventBackground>
          </>
        ) : (
          <>
            <Chart>{SvgComponent(CurriculumChartData[width])}</Chart>
            <EventBackground>
              <EventContainer>
                <IdeathonWrapper>
                  <Ideathon />
                </IdeathonWrapper>
                <StudyWrapper>
                  <Study />
                </StudyWrapper>
                <ArrowContainer>{SvgComponent(ArrowImgData[width])}</ArrowContainer>
                <HackathonWrapper>
                  <Hackathon width={width} />
                </HackathonWrapper>
              </EventContainer>
            </EventBackground>
          </>
        )}
      </Container>
    </Background>
  );
};

export default Curriculum;

export const DeskTopBreakLine = styled.br`
  display: none;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

export const MobileTabletBreakLine = styled.br`
  display: block;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

export const BlueTitle = styled.div`
  box-sizing: border-box;
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

export const EventText = styled.div`
  color: ${({ theme }) => theme.colors.GRAY2};
  white-space: pre-wrap;
  font-size: 12px;
  line-height: 20px;
  span {
    color: white;
    font-weight: 700;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 15px;
    line-height: 26px;
  }
`;

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
  font-family: 'Montserrat';
  font-size: 10px;
  color: ${({ theme }) => theme.colors.BLUE1};
  font-weight: 500;
  line-height: 13px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 16px;
    line-height: 20px;
  }
`;

const PartCurriculumTitle = styled.p`
  font-weight: 700;
  color: white;
  font-size: 22px;
  line-height: 30px;
  margin: 4px 0 8px 0;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 26px;
    line-height: 34px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 40px;
    line-height: 56px;
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

const DesktopTabletBreakLine = styled.br`
  display: none;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: block;
  }
`;

const MobileBreakLine = styled.br`
  display: block;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

const Chart = styled.div`
  margin-bottom: 62px;
  width: 318px;
  height: 510px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 0;
    width: 568px;
    height: 618px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    height: 946px;
  }
`;

const EventBackground = styled.div`
  display: flex;
  width: 318px;
  margin: 80px auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    justify-content: flex-end;
    width: 568px;
    margin: 100px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    margin: 160px auto;
  }
`;

const EventContainer = styled.div`
  display: grid;
  grid-template-columns: 257px 43px 264px;
  grid-template-rows: 274px 233px 214px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    grid-template-columns: 395px 69px 572px;
    grid-template-rows: 334px 338px 308px;
  }
`;

const ArrowContainer = styled.div`
  @media ${({ theme }) => theme.devices.TABLET} {
    display: flex;
    justify-content: flex-end;
    grid-row: 1/-1;
    grid-column: 2/3;
  }
`;

const MobileArrowContainer = styled.div`
  width: 43px;
  height: 841px;
`;

const EventSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const IdeathonWrapper = styled(EventSection)`
  align-items: flex-end;
  justify-content: flex-end;
  grid-row: 1/2;
  grid-column: 1/2;
  text-align: end;
`;

const StudyWrapper = styled(EventSection)`
  justify-content: flex-start;
  align-items: flex-end;
  grid-row: -2/-1;
  grid-column: 1/2;
  text-align: end;
`;

const HackathonWrapper = styled(EventSection)`
  grid-row: 2/3;
  grid-column: -2/-1;
  justify-content: flex-start;
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
