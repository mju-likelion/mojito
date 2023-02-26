import styled from 'styled-components';

import { ReactComponent as FolderTop } from '../../../assets/images/Subtract.svg';
import Button from '../../../components/Button';
import ResponsiveBody from '../../../components/ResponsiveBody';

import ProjectContent from './ProjectContent';
import ProjectImageBox from './ProjectImageBox';

const Project = () => {
  const { mobileContent, tabletContent, desktopContent } = ProjectContent;
  return (
    <>
      <a name="project" /> {/* 헤더 이동 기능위해 추가했습니다 */}
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
            <ResponsiveBody mobileText={mobileContent} tabletText={tabletContent} desktopText={desktopContent} />
          </IntroductionContentText>
        </FolerTextBox>
        <ButtonBox href="https://github.com/mju-likelion" target="_blank">
          <Button
            text={'프로젝트 구경하러 가기'}
            buttonColor="BLACK"
            pcTextSize="20px"
            tabletTextSize="14px"
            pcLineHeight="25px"
            tabletLineHeight="18px"
            fontWeight="700"
            hoverColor="#4f4f4f"
          />
        </ButtonBox>
        <ProjectImageBox />
      </FolderContainer>
    </>
  );
};

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

const IntroductionTitle = styled.div`
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

const IntroductionContentText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  white-space: pre-wrap;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
    line-height: 20px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const ButtonBox = styled.a`
  margin: 36px 0 0 20px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 30px 0 0 24px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 50px 0 0 60px;
  }
`;

export default Project;
