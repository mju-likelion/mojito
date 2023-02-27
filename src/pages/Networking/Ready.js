import styled from 'styled-components';

import { ReactComponent as CautionIcon } from '../../assets/images/Networking/caution_illust.svg';
import { ReactComponent as LionSmall } from '../../assets/images/Networking/lion_construct_mobile.svg';
import { ReactComponent as LionBig } from '../../assets/images/Networking/lion_construct_pc.svg';
import { ReactComponent as NetworkingMobile } from '../../assets/images/Networking/networking_mobile.svg';
import { ReactComponent as NetworkingPc } from '../../assets/images/Networking/networking_pc.svg';
import { ReactComponent as NetworkingTablet } from '../../assets/images/Networking/networking_tablet.svg';
import ResponsiveBody from '../../components/ResponsiveBody';

const Ready = () => {
  return (
    <ReadyBlock>
      <ResponsiveBox>
        <ResponsiveBody
          mobileContent={<NetworkingMobile />}
          tabletContent={<NetworkingTablet />}
          desktopContent={<NetworkingPc />}
        ></ResponsiveBody>
      </ResponsiveBox>
      <NetworkingBody>
        <Title>NETWORKING</Title>
        <WrapContent>
          <Caution />
          <Content>준비중인 기능이에요</Content>
          <Caution />
        </WrapContent>
        <WrapLionIcon>
          <ResponsiveBody
            mobileContent={<LionSmall />}
            tabletContent={<LionSmall />}
            desktopContent={<LionBig />}
          ></ResponsiveBody>
        </WrapLionIcon>
      </NetworkingBody>
    </ReadyBlock>
  );
};
const ResponsiveBox = styled.div`
  //이건 디자인 마진 의도 확인하고
  // margin-top: 102px;
  @media ${({ theme }) => theme.devices.TABLET} {
    // margin-top: 200px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
  }
`;

const ReadyBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 56px - 160px);
  @media ${({ theme }) => theme.devices.TABLET} {
    min-height: calc(100vh - 70px - 170px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    min-height: calc(100vh - 70px - 232px);
  }
`;

const NetworkingBody = styled.div`
  height: 286px;
  width: 318px;
  border-radius: 0 0 12px 12px;
  background-color: #303030;
  text-align: center;
  //margin-bottom: 29px; //채널톡 영역 어떻게 되는건지?
  //이것도 디자인 마진 의도 확인하고
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 568px;
    //  margin-bottom: 185px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 466px;
    width: 1200px;
  }
`;

const Title = styled.div`
  font-family: 'Montserrat';
  color: ${({ theme }) => theme.colors.BLUE1};
  font-weight: 500;
  line-height: 13px;
  font-size: 10px;
  margin-top: 42px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 16px;
    line-height: 20px;
  }
`;

const WrapContent = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 8px;
  }
`;

const Caution = styled(CautionIcon)`
  width: 28px;
  height: 34px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    line-height: 56px;
    height: 56px;
  }
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.GRAY2};
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  margin: 0 18px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 26px;
    line-height: 34px;
    margin: 0 27px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 40px;
    line-height: 56px;
  }
`;

const WrapLionIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 29px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-top: 70px;
  }
`;

export default Ready;
