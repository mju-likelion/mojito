import styled from 'styled-components';

import SvgComponent from '../../components/SvgComponent';

import { HackathonImageData } from './AssetsData';

import { BlueTitle, DeskTopBreakLine, MobileTabletBreakLine, EventText } from '.';

const Hackathon = ({ width }) => {
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
      <HackathonImageWrapper>{SvgComponent(HackathonImageData[width])}</HackathonImageWrapper>
    </>
  );
};

export default Hackathon;

const HackathonImageWrapper = styled.div`
  width: 264px;
  height: 59px;
  margin-top: 20px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 557px;
    height: 120px;
    margin-top: 40px;
  }
`;
