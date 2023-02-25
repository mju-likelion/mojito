import styled from 'styled-components';

import CurriculumPCHackathon0 from '../../../assets/images/CurriculumPCHackathon0.png';
import CurriculumPCHackathon1 from '../../../assets/images/CurriculumPCHackathon1.png';
import CurriculumPCHackathon2 from '../../../assets/images/CurriculumPCHackathon2.png';
import CurriculumTabletHackathon0 from '../../../assets/images/CurriculumTabletHackathon0.png';
import CurriculumTabletHackathon1 from '../../../assets/images/CurriculumTabletHackathon1.png';
import CurriculumTabletHackathon2 from '../../../assets/images/CurriculumTabletHackathon2.png';

import { BlueTitle, DeskTopBreakLine, MobileTabletBreakLine, EventText } from '.';

const Hackathon = ({ screen }) => {
  return (
    <>
      <BlueTitle>해커톤</BlueTitle>
      <EventText>
        <span>
          {'파트간의 협업을 통하여 아이디어를 '}
          <MobileTabletBreakLine />
          {'실제 서비스로 완성'}
        </span>
        하는
        <DeskTopBreakLine />
        {'멋사의 가장 큰 이벤트입니다. '}
        <MobileTabletBreakLine />
        {'웹-서버-기획/디자인 파트별로'}
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
            <Image image={CurriculumPCHackathon0} />
            <Image image={CurriculumPCHackathon1} />
            <Image image={CurriculumPCHackathon2} />
            <GradientBox>
              <div />
              <div />
            </GradientBox>
          </HackathonImageWrapper>
        </>
      ) : (
        <>
          <HackathonImageWrapper>
            <Image image={CurriculumTabletHackathon0} />
            <Image image={CurriculumTabletHackathon1} />
            <Image image={CurriculumTabletHackathon2} />
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
  box-sizing: border-box;
  margin-top: 20px;
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 264px;
  height: 59px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 40px;
    width: 557px;
    height: 120px;
  }
`;

const Image = styled.div`
  background-image: url(${({ image }) => image});
  width: 33%;
  height: 100%;
  border-radius: 4px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
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
    width: 33%;
    border-radius: 4px;
    :first-child {
      background: linear-gradient(-90deg, transparent 0, #272727 100%);
    }
    :last-child {
      background: linear-gradient(90deg, transparent 0, #272727 100%);
    }
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    div {
      border-radius: 8px;
    }
  }
`;
