import styled from 'styled-components';

import RecruitContent from './RecruitContent';

const Recruit = () => {
  return (
    <Container>
      <div>
        <RecruitContent />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 2480px;
  margin: 0 auto;
  padding: 160px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.GRAY4};
`;

export default Recruit;
