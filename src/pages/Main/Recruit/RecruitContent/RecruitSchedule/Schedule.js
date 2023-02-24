import styled from 'styled-components';

import { ReactComponent as RecruitFinalPc } from '../../../../../assets/images/recruit_final_pc.svg';
import { ReactComponent as RecruitFinalTablet } from '../../../../../assets/images/recruit_final_tablet.svg';
import { ReactComponent as ArrowPc } from '../../../../../assets/images/recruit_schedule_union_pc.svg';
import { ReactComponent as ArrowTablet } from '../../../../../assets/images/recruit_schedule_union_tablet.svg';

const Schedule = props => {
  const { title, plan, time } = props;
  return (
    <ScheduleBlock>
      {title === '최종발표' ? (
        <>
          <DesktopFinal />
          <TabletFinal />
        </>
      ) : (
        <NoneBlock />
      )}
      <ScheduleTitle>{title}</ScheduleTitle>
      <WrapSchedulePlan>
        <SchedulePlan>{plan}</SchedulePlan>
        <ScheduleTime>&nbsp;{time}</ScheduleTime>
      </WrapSchedulePlan>
      <DesktopArrow />
      <TabletArrow />
    </ScheduleBlock>
  );
};

const ScheduleBlock = styled.div`
  display: block;
`;

const DesktopFinal = styled(RecruitFinalPc)`
  display: none;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

const TabletFinal = styled(RecruitFinalTablet)`
  display: block;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

const NoneBlock = styled.div`
  height: 32px;
`;

const ScheduleTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 18px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 22px;
    margin-bottom: 26px;
  }
`;

const WrapSchedulePlan = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-bottom: 20px;
  }
`;

const SchedulePlan = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
  }
`;

const ScheduleTime = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.GRAY2};

  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
  }
`;

const DesktopArrow = styled(ArrowPc)`
  display: none;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

const TabletArrow = styled(ArrowTablet)`
  display: block;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

export default Schedule;
