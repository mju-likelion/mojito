import styled from 'styled-components';

import TitleButton from '../TitleButton';

const RecruitTarget = () => {
  return (
    <>
      <TitleButton content={'모집 대상'} />
      <TargetContent>
        명지대학교 자연캠퍼스에 재학 또는 휴학중이며
        <br />
        지원 파트에 대한 기본적인 역량을 갖춘 학생
      </TargetContent>
    </>
  );
};

const TargetContent = styled.div``;

export default RecruitTarget;
