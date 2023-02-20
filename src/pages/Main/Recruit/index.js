import styled from 'styled-components';

import RecruitContent from './RecruitContent';

const Recruit = () => {
  return (
    <Container>
      <RecruitContent />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 2480px;
  background-color: ${({ theme }) => theme.colors.GRAY4};
  text-align: center;
`;

export default Recruit;
