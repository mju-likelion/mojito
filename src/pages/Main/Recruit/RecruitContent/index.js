import Culturefit from './Culturefit';
import RecruitInfo from './RecruitInfo';
import RecruitPart from './RecruitPart/RecruitPart';
import RecruitSchedule from './RecruitSchedule';
import RecruitTarget from './RecruitTarget';

const RecruitContent = () => {
  return (
    <>
      <RecruitInfo />
      <RecruitTarget />
      <RecruitPart />
      <RecruitSchedule />
      <Culturefit />
    </>
  );
};

export default RecruitContent;
