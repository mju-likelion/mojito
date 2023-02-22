import styled from 'styled-components';

import { ReactComponent as MobileProjectImages } from '../../../assets/images/project_mobile.svg';
import { ReactComponent as PcProjectImages } from '../../../assets/images/project_pc.svg';
import { ReactComponent as TabletProjectImages } from '../../../assets/images/project_tablet.svg';
import { ReactComponent as FolderTop } from '../../../assets/images/Subtract.svg';
import Button from '../../../components/Button';

const FootPrint = () => {
  return (
    <>
      {/* 컴포넌트 영역 분리를 위해 임시적으로 hr태그를 사용하였습니다. */}
      <hr />
      <FolderTopLine>
        <FolderTopLineSvg />
      </FolderTopLine>
      <FolderContainer>
        <FolerTextBox>
          <FolderTitle>PROJECT</FolderTitle>
          <IntroductionTitle>
            명지대 멋사 프로젝트 발자국 <span>소개</span>
          </IntroductionTitle>
          <IntroductionContentText>
            멋쟁이사자처럼 명지대(자연)이 수 년간 쌓아온
            <MobileBreakLine /> 프로젝트들의 기록입니다.
            <DeskTopBreakLine /> 끝 없는 오류와 치열한
            <MobileBreakLine /> 논쟁의 끝에서, 마침내 선배기수들이 만들어 낸<br />
            멋쟁이사자처럼 프로젝트의 결과물을 확인해보세요.
          </IntroductionContentText>
        </FolerTextBox>
        <ButtonBox>
          <Button
            text={'프로젝트 구경하러 가기'}
            handleClick={() => window.open('https://github.com/mju-likelion', '_blank')}
            buttonColor="BLACK"
            pcTextSize="20px"
            tabletTextSize="14px"
            pcLineHeight="25px"
            tabletLineHeight="18px"
            fontWeight="700"
            hoverColor="#4f4f4f"
          />
        </ButtonBox>
        <PorjectTagBox>
          <ProjectImagesInMobile />
          <ProjectImagesInTablet />
          <ProjectImagesInPc />
        </PorjectTagBox>
      </FolderContainer>
      <hr />
    </>
  );
};

const ProjectImagesInMobile = styled(MobileProjectImages)`
  display: block;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

const ProjectImagesInTablet = styled(TabletProjectImages)`
  display: none;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: block;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

const ProjectImagesInPc = styled(PcProjectImages)`
  display: none;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

const FolderTopLineSvg = styled(FolderTop)`
  width: 104px;
  height: 14px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 157px;
    height: 21px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 321.5px;
    height: 42px;
  }
`;

const FolderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.BLUE1};
  box-sizing: border-box;

  width: 318px;
  height: 414px;
  margin: 0 auto 80px;
  border-radius: 0 12px 12px 12px;
  padding-top: 20px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 580px;
    margin: 0 auto 100px;
    border-radius: 0 20px 20px 20px;
    padding-top: 24px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    height: 743px;
    margin: 0 auto 160px;
    border-radius: 0 30px 30px 30px;
    padding-top: 60px;
  }
`;

const FolderTopLine = styled.div`
  background-color: ${({ theme }) => theme.colors.BLACK};
  width: 318px;
  height: 14px;
  margin: 60px auto -1px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 580px;
    height: 21px;
    margin: 100px auto -1px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    height: 42px;
    margin: 160px auto -1px; //이거 일단 구분선 때문에 해놓긴했는데..
  }
`;

const FolerTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 278px;
  height: 128px;
  margin: 0px 20px 36px 20px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 520px;
    height: 120px;
    margin: 0px 24px 30px 24px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 720px;
    height: 180px;
    margin: 0px 420px 50px 60px;
  }
`;

const FolderTitle = styled.p`
  font-weight: 500;
  font-family: 'Montserrat';
  font-size: 10px;
  line-height: 13px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 16px;
    line-height: 20px;
  }
`;

const IntroductionTitle = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  margin: 4px 0 8px 0;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 26px;
    line-height: 34px;
  }
  span {
    display: none;
    @media ${({ theme }) => theme.devices.TABLET} {
      display: inline;
    }
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 40px;
    line-height: 56px;
    margin: 8px 0 12px 0;
  }
`;

const IntroductionContentText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
    line-height: 20px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const ButtonBox = styled.div`
  margin: 36px 0 0 20px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 30px 0 0 24px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 50px 0 0 60px;
  }
`;

const PorjectTagBox = styled.div`
  margin: 64px 10px 15px;
  height: 102px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 36px 14px 15px;
    height: 140px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 78px 70px 35px;
    height: 270px;
  }
`;

const MobileBreakLine = styled.br`
  display: block;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

const DeskTopBreakLine = styled.br`
  display: none;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: block;
  }
`;

export default FootPrint;