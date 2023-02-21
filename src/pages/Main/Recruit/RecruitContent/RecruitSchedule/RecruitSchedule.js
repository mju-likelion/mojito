import styled from 'styled-components';

import TitleButton from '../../../../../components/TitleButton';

import Schedule from './Schedule';
import ScheduleData from './ScheduleData.json';

const RecruitSchedule = () => {
  return (
    <>
      <TitleButton content={'모집 일정'} />
      <WrapSchedule>
        {ScheduleData.map((schedule, index) => (
          <Schedule key={index} title={schedule.title} plan={schedule.plan} time={schedule.time} />
        ))}
      </WrapSchedule>
    </>
  );
};

const WrapSchedule = styled.div`
  margin: 40px 0 60px 0;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 14px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 40px 0 80px 0;
    display: flex;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 60px 0 160px 0;
    margin-top: 60px;
  }
`;

export default RecruitSchedule;
