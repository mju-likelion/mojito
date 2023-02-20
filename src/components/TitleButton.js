import styled from 'styled-components';

const RecruitButton = ({ content }) => {
  return (
    <TitleButtonBlock>
      <Title>{content}</Title>
    </TitleButtonBlock>
  );
};
const TitleButtonBlock = styled.div`
  text-align: center;
`;

const Title = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.colors.BLUE1};
  border: 1px solid ${({ theme }) => theme.colors.BLUE1};
  border-radius: 30px;
  padding: 7px 30px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding: 15px 46px;
  }
`;

export default RecruitButton;
