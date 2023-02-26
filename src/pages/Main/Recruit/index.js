import styled from 'styled-components';

import RecruitContent from './RecruitContent';

const Recruit = () => {
  return (
    <>
      <a name="recruit" />
      <Container>
        <div>
          <RecruitContent />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.GRAY4};
  @media ${({ theme }) => theme.devices.TABLET} {
    padding: 100px 0;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding: 160px 0;
  }
`;

export default Recruit;
