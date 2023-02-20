import Culturefit from './Culturefit/Culturefit';
import RecruitInfo from './RecruitInfo/RecruitInfo';
import RecruitPart from './RecruitPart/RecruitPart';
import RecruitSchedule from './RecruitSchedule/RecruitSchedule';
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
