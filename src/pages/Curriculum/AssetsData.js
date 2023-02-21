import HackathonPcImg from '../../assets/images/curriculm2_pc_image.svg';
import HackathonTabletImage from '../../assets/images/curriculm2_tablet_image.svg';
import ArrowImgMobileImg from '../../assets/images/curriculum_line_mobile.svg';
import ArrowImgPCImg from '../../assets/images/curriculum_line_pc.svg';
import ArrowImgTabletImg from '../../assets/images/curriculum_line_tablet.svg';
import CurriculumMobileDesignImg from '../../assets/images/curriculum_mobile_design.svg';
import CurriculumMobileServerImg from '../../assets/images/curriculum_mobile_server.svg';
import CurriculumMobileWebImg from '../../assets/images/curriculum_mobile_web.svg';
import CurriculumPcImg from '../../assets/images/curriculum_pc.svg';
import CurriculumTabletImg from '../../assets/images/curriculum_tablet.svg';

export const CurriculumTextData = {
  desktop: `멋쟁이사자처럼 명지대(자연) 11기에서는 웹, 서버, 기획/디자인 파트로 나누어 진행됩니다. 각 파트별로 회원들의 실력 향상과 프로젝트 아웃풋을 위한 각 파트별 커리큘럼이 운영되며 다른 파트와의 크로스오버로 협업을 위한 과정을 배워갑니다.`,
  tablet: `멋쟁이사자처럼 명지대(자연) 11기에서는 웹, 서버, 기획/디자인 파트로 나누어 진행됩니다. 각 파트별로 회원들의 실력 향상과 프로젝트 아웃풋을 위한 각 파트별 커리큘럼이 운영되며 다른 파트와의 크로스오버로 협업을 위한 과정을 배워갑니다.`,
  mobile: `멋쟁이사자처럼 명지대(자연) 11기에서는 웹, 서버, 기획/디자인 파트로 나누어 진행됩니다. 각 파트별로 회원들의 실력 향상과 프로젝트 아웃풋을 위한 각 파트별 커리큘럼이 운영되며, 다른 파트와의 크로스오버로 협업을 위한 과정을 배워갑니다.`,
};

export const CurriculumChartData = {
  desktop: CurriculumPcImg,
  tablet: CurriculumTabletImg,
  mobile: [CurriculumMobileWebImg, CurriculumMobileServerImg, CurriculumMobileDesignImg],
};

export const ArrowImgData = {
  desktop: ArrowImgPCImg,
  tablet: ArrowImgTabletImg,
  mobile: ArrowImgMobileImg,
};

export const EventTextData = {
  ideathon: {
    desktop: `웹서비스로 실현하고 싶은 아이디어의 싹을 틔우는 아이디어톤은 
막연하게 가지고 있던 문제인식과 솔루션을 탄탄한 기획과 
디자인으로 전환하는 이벤트입니다. 멋사의 핵심가치인 협업을
이루기 위한 초석으로, 아이디어가 서비스로 만들어지기 전 
여러 협업자들이 서비스에 대한 싱크를 맞춰나가는 과정입니다.`,
    tablet: `웹서비스로 실현하고 싶은 아이디어의 싹을 틔우는
아이디어톤은 막연하게 가지고 있던 문제인식과
솔루션을 탄탄한 기획과 디자인으로
전환하는 이벤트입니다. 멋사의 핵심가치인 협업을
이루기 위한 초석으로, 아이디어가 서비스로
만들어지기 전 여러 협업자들이 서비스에 대한
싱크를 맞춰나가는 과정입니다.`,
    mobile: `웹서비스로 실현하고 싶은 아이디어의 싹을 틔우는
아이디어톤은 막연하게 가지고 있던 문제인식과
솔루션을 탄탄한 기획과 디자인으로
전환하는 이벤트입니다. 멋사의 핵심가치인 협업을
이루기 위한 초석으로, 아이디어가 서비스로
만들어지기 전 여러 협업자들이 서비스에 대한
싱크를 맞춰나가는 과정입니다.`,
    highlight: '멋사의 핵심가치인 협업을 이루기 위한 초석',
  },
  hackathon: {
    desktop: `파트간의 협업을 통하여 아이디어를 실제 서비스로 완성하는 
멋사의 가장 큰 이벤트입니다. 웹-서버-기획/디자인 파트별로 
수 주간의 세션을 통해 익혔던 지식과 기술을 
마음껏 발휘할 수 있는 기회가 펼쳐집니다.`,
    tablet: `파트간의 협업을 통하여 아이디어를실제 서비스로 완성하는 멋사의 가장 큰 이벤트입니다.웹-서버-기획/디자인 파트별로수 주간의 세션을 통해 익혔던 지식과 기술을마음껏 발휘할 수 있는 기회가 펼쳐집니다.`,
    mobile: `공식행사인 아이디어톤과 해커톤이 종료된 후
사용하고 싶은 스택이나 기술의 제한없이
자율적으로 프로젝트를 진행하거나
관심분야에 따라 스터디를 진행합니다.`,
    highlight: '파트간의 협업을 통하여 아이디어를 실제 서비스로 완성',
  },
  study: `공식행사인 아이디어톤과 해커톤이 종료된 후 사용하고 싶은 스택이나 기술의 제한없이 자율적으로 프로젝트를 진행하거나 관심분야에 따라 스터디를 진행합니다.`,
};

export const HackathonImageData = {
  desktop: HackathonPcImg,
  tablet: HackathonTabletImage,
};
