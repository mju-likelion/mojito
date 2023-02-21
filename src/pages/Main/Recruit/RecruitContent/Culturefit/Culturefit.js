import styled from 'styled-components';

const Culturefit = props => {
  const { no, content } = props;
  return (
    <CulturefitBlock>
      <NumberBlock>{no}</NumberBlock>
      <LineBlock />
      <ContentBlock>{content}</ContentBlock>
    </CulturefitBlock>
  );
};

const CulturefitBlock = styled.div``;

const NumberBlock = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 26px;
    line-height: 28px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 48px;
    line-height: 50px;
  }
`;

const LineBlock = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.GRAY3};
  margin: 12px 56px 12px 0;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 18px 0;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 20px 0;
  }
`;

const ContentBlock = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 18px;
    line-height: 20px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 24px;
    line-height: 30px;
  }
`;

export default Culturefit;
