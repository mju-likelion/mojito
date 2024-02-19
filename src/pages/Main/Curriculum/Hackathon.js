import styled from 'styled-components';

import CurriculumPCHackathon0 from '../../../assets/images/curriculum_pc_hackathon11th0.png';
import CurriculumPCHackathon1 from '../../../assets/images/curriculum_pc_hackathon11th1.png';
import CurriculumPCHackathon2 from '../../../assets/images/curriculum_pc_hackathon11th2.png';
import CurriculumTabletHackathon0 from '../../../assets/images/curriculum_tablet_hackathon11th0.png';
import CurriculumTabletHackathon1 from '../../../assets/images/curriculum_tablet_hackathon11th1.png';
import CurriculumTabletHackathon2 from '../../../assets/images/curriculum_tablet_hackathon11th2.png';

import { PinkTitle, DeskTopBreakLine, MobileTabletBreakLine, EventText } from '.';

const Hackathon = ({ screen }) => {
  return (
    <>
      <PinkTitle>해커톤</PinkTitle>
      <EventText>
        {'파트간의 협업을 통하여 아이디어를 '}
        <MobileTabletBreakLine />
        {'실제 서비스로 완성하는 '}
        <DeskTopBreakLine />
        {'멋사의 가장 큰 이벤트입니다. '}
        <MobileTabletBreakLine />
        {'웹-서버 파트별로'}
        <MobileTabletBreakLine />
        <DeskTopBreakLine />
        수 주간의 세션을 통해 익혔던 지식과 기술을
        <DeskTopBreakLine />
        <MobileTabletBreakLine />
        마음껏 발휘할 수 있는 기회가 펼쳐집니다.
      </EventText>
      {screen === 'desktop' ? (
        <>
          <HackathonImageWrapper>
            <Image src={CurriculumPCHackathon0} alt="hackathonImage0" />
            <Image src={CurriculumPCHackathon1} alt="hackathonImage1" />
            <Image src={CurriculumPCHackathon2} alt="hackathonImage2" />
            <GradientBox>
              <div />
              <div />
            </GradientBox>
          </HackathonImageWrapper>
        </>
      ) : (
        <>
          <HackathonImageWrapper>
            <Image src={CurriculumTabletHackathon0} alt="hackathonImage0" />
            <Image src={CurriculumTabletHackathon1} alt="hackathonImage1" />
            <Image src={CurriculumTabletHackathon2} alt="hackathonImage2" />
            <GradientBox>
              <div />
              <div />
            </GradientBox>
          </HackathonImageWrapper>
        </>
      )}
    </>
  );
};

export default Hackathon;

const HackathonImageWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  width: 264px;
  height: 59px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 40px;
    width: 557px;
    height: 120px;
  }
`;

const Image = styled.img`
  width: 85.31px;
  height: 100%;
  border-radius: 4px;
  margin-right: 3.79px;

  :nth-child(2) {
    width: 85.79px;
  }

  :last-child {
    margin-right: 0;
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 180px;
    :nth-child(2) {
      width: 180px;
    }
    margin-right: 8px;
    border-radius: 8px;
  }
`;

const GradientBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;

  div {
    width: 85.31px;
    border-radius: 4px;
    :first-child {
      background: linear-gradient(-90deg, transparent 0, #2f2f2f 100%);
    }
    :last-child {
      background: linear-gradient(90deg, transparent 0, #2f2f2f 100%);
    }
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    div {
      border-radius: 8px;
      width: 180px;
    }
  }
`;
