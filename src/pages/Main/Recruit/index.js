import styled from 'styled-components';

import RecruitContent from './RecruitContent';

const Recruit = () => {
  return (
    <Container>
      <a name="recruit" /> {/*헤더 이동 기능위해 추가했습니다*/}
      <div>
        <RecruitContent />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 160px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.GRAY4};
`;

export default Recruit;
