import styled from 'styled-components';

const ResponsiveBody = ({ mobileContent, tabletContent, desktopContent }) => {
  return (
    <Container>
      <MobileContent>{mobileContent}</MobileContent>
      <TabletContent>{tabletContent}</TabletContent>
      <DesktopContent>{desktopContent}</DesktopContent>
    </Container>
  );
};

const Container = styled.div`
  & svg {
    display: block;
  }
`;

const MobileContent = styled.div`
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;
const TabletContent = styled.div`
  display: none;

  @media ${({ theme }) => theme.devices.TABLET} {
    display: block;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

const DesktopContent = styled.div`
  display: none;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

export default ResponsiveBody;
