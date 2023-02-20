import styled from 'styled-components';

const ResponsiveBody = ({ mobileText, tabletText, desktopText }) => {
  return (
    <>
      <MobileText>{mobileText}</MobileText>
      <TabletText>{tabletText}</TabletText>
      <DesktopText>{desktopText}</DesktopText>
    </>
  );
};

const MobileText = styled.div`
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;
const TabletText = styled.div`
  display: none;

  @media ${({ theme }) => theme.devices.TABLET} {
    display: block;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

const DesktopText = styled.div`
  display: none;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

export default ResponsiveBody;
