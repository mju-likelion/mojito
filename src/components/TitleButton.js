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
  border-radius: 100px;
  padding: 7px 30px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding: 15px 46px;
    font-size: 18px;
  }
`;

export default RecruitButton;
