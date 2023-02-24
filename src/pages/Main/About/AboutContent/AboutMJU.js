import styled from 'styled-components';

import AboutMju1Mobile from '../../../../assets/images/AboutMju1Mobile.png';
import AboutMju1PC from '../../../../assets/images/AboutMju1PC.png';
import AboutMju1Tablet from '../../../../assets/images/AboutMju1Tablet.png';
import AboutMju2Mobile from '../../../../assets/images/AboutMju2Mobile.png';
import AboutMju2PC from '../../../../assets/images/AboutMju2PC.png';
import AboutMju2Tablet from '../../../../assets/images/AboutMju2Tablet.png';
import AboutMju3Mobile from '../../../../assets/images/AboutMju3Mobile.png';
import AboutMju3PC from '../../../../assets/images/AboutMju3PC.png';
import AboutMju3Tablet from '../../../../assets/images/AboutMju3Tablet.png';
import ArticleImageCard from '../../../../components/ArticleImageCard';

/** @TODO TABLE 버전 UI 추가하기 */
const AboutMJU = () => {
  return (
    <Wrapper>
      <h1>멋쟁이사자처럼 명지대(자연)</h1>
      <Hr />
      <Article>
        <PcImages>
          {FILE_NAME.pc.map((item, idx) => (
            <ArticleImageCard key={idx} image={item.image} title={item.title} text={item.text} />
          ))}
        </PcImages>
        <TabletImages>
          {FILE_NAME.tablet.map((item, idx) => (
            <ArticleImageCard key={idx} image={item.image} title={item.title} text={item.text} />
          ))}
        </TabletImages>
        <MobileImages>
          {FILE_NAME.mobile.map((item, idx) => (
            <ArticleImageCard key={idx} image={item.image} title={item.title} text={item.text} />
          ))}
        </MobileImages>
      </Article>
    </Wrapper>
  );
};

/** @TODO 현재 태블릿, 모바일 버전 svg 컴포넌트 내용이 pc버전 내용임, 버전에 맞게 수정 필요 */
const FILE_NAME = {
  pc: [
    {
      image: AboutMju1PC,
      title: '멋쟁이사자처럼 명지대(자연)은\n',
      text: '2019년부터 시작되어 현재까지 5년간\n많은 학우들과 웹 개발을 함께 해오고 있습니다.',
    },
    {
      image: AboutMju2PC,
      title: '웹 서비스 제작을 위한 프로그래밍 언어부터 다양한\n프레임워크까지',
      text: ' 직접 사용해보고 공부할 뿐만 아니라\n파트별 커리큘럼을 통해 지식이 실제 서비스로 연결될 수\n있도록 탄탄한 스터디 로드맵을 구축하고 있습니다.',
    },
    {
      image: AboutMju3PC,
      title: '',
      text: '열정 가득한 운영진, 페이스메이커가 되어줄\n11기 회원들과 함께 1년간 웹 개발의 세상 속에서\n달릴 준비가 되었다면 지금 바로\n멋쟁이사자처럼 명지대 (자연)에 지원하세요.',
    },
  ],
  tablet: [
    {
      image: AboutMju1Tablet,
      title: '멋쟁이사자처럼 명지대(자연)은\n',
      text: '2019년부터 시작되어 현재까지 5년간\n많은 학우들과 웹 개발을 함께 해오고 있습니다.',
    },
    {
      image: AboutMju2Tablet,
      title: '웹 서비스 제작을 위한 프로그래밍 언어부터\n다양한 프레임워크까지',
      text: ' 직접 사용해보고 공부할 뿐만 아니라\n파트별 커리큘럼을 통해 지식이 실제 서비스로 연결될 수 있도록\n탄탄한 스터디 로드맵을 구축하고 있습니다.',
    },
    {
      image: AboutMju3Tablet,
      title: '',
      text: '열정 가득한 운영진, 페이스메이커가 되어줄 11기 회원들과\n함께 1년간 웹 개발의 세상 속에서 달릴 준비가 되었다면\n지금 바로 멋쟁이사자처럼 명지대 (자연)에 지원하세요.',
    },
  ],
  mobile: [
    {
      image: AboutMju1Mobile,
      title: '멋쟁이사자처럼 명지대(자연)은\n',
      text: '2019년부터 시작되어 현재까지 5년간 많은\n학우들과 웹 개발을 함께 해오고 있습니다.',
    },
    {
      image: AboutMju2Mobile,
      title: '웹 서비스 제작을 위한 프로그래밍 언어부터 다양한\n프레임워크까지',
      text: ' 직접 사용해보고 공부할 뿐만 아니라 파트별\n커리큘럼을 통해 지식이 실제 서비스로 연결될 수 있도록\n탄탄한 스터디 로드맵을 구축하고 있습니다.',
    },
    {
      image: AboutMju3Mobile,
      title: '',
      text: '열정 가득한 운영진, 페이스메이커가 되어줄 11기 회원들과\n함께 1년간 웹 개발의 세상 속에서 달릴 준비가 되었다면\n지금 바로 멋쟁이사자처럼 명지대 (자연)에 지원하세요.',
    },
  ],
};

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.BLUE1};
  font-weight: 700;
  width: 318px;
  margin: auto;
  margin-top: 100px;
  h1 {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
  }

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 376px;
    margin-top: 120px;
    h1 {
      font-size: 20px;
      line-height: 24px;
      height: 24px;
    }
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    margin: 202px auto 0 auto;
    h1 {
      text-align: start;
      font-size: 26px;
      line-height: 30px;
      height: 30px;
    }
  }
`;

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.BLUE1};
  margin: 6px auto 20px auto;
  width: 262px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 376px;
    margin: 10px auto 20px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    border: 2px solid ${({ theme }) => theme.colors.BLUE1};
    margin: 20px auto 30px auto;
  }
`;

const Article = styled.div`
  display: flex;
  flex-wrap: wrap;
  svg:nth-child(even) {
    margin: 30px 0 60px 0;
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    svg:nth-child(even) {
      margin: 0;
    }
    gap: 0 36px;
  }
`;

const PcImages = styled.div`
  gap: 0 36px;
  display: none;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: flex;
  }
`;

const TabletImages = styled.div`
  display: none;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: block;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

const MobileImages = styled.div`
  margin: auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

export default AboutMJU;
