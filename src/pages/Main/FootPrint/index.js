import styled from 'styled-components';

import { ReactComponent as PorjectImage } from '../../../assets/images/project_pc.svg';
import { ReactComponent as FolderTop } from '../../../assets/images/Subtract.svg';
import Button from '../../../components/Button';

const FootPrint = () => {
  return (
    <>
      {/* 컴포넌트 영역 분리를 위해 임시적으로 hr태그를 사용하였습니다. */}
      <hr />
      <FolderContainer>
        <FolderTopLine>
          <FolderTop />
        </FolderTopLine>
        <FolerTextBox>
          <FolderTitle>PROJECT</FolderTitle>
          <IntroductionTitle>명지대 멋사 프로젝트 발자국 소개</IntroductionTitle>
          <IntroductionContentText>
            멋쟁이사자처럼 명지대(자연)이 수 년간 쌓아온 프로젝트들의 기록입니다.
            <br /> 끝 없는 오류와 치열한 논쟁의 끝에서, 마침내 선배기수들이 만들어 낸<br />
            멋쟁이사자처럼 프로젝트의 결과물을 확인해보세요.
          </IntroductionContentText>
        </FolerTextBox>
        <ButtonBox>
          <Button
            text={'프로젝트 구경하러 가기'}
            // handleClick={() => window.open('https://mjulikelion-apply.netlify.app/', '_blank')} 이건 추후에 라우터 연결
            buttonColor="BLACK"
            fontWeight="700"
            textSize="20px"
            lineHeight="25px"
          />
        </ButtonBox>
        <PorjectTagBox>
          <PorjectImage />
        </PorjectTagBox>
      </FolderContainer>
      <hr />
    </>
  );
};

const FolderContainer = styled.div`
  width: 1200px;
  height: 785px;
  background-color: ${({ theme }) => theme.colors.BLUE1};
  margin: 160px auto;
`;

const FolderTopLine = styled.div`
  width: 1200px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.BLACK};
`;

const FolerTextBox = styled.div`
  width: 720px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 60px 420px 12px 60px;
`;
const FolderTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Montserrat';
`;

const IntroductionTitle = styled.p`
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
  margin: 8px 0 12px 0;
`;
const IntroductionContentText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
`;

const ButtonBox = styled.div`
  margin: 50px 0 0 60px;
`;

const PorjectTagBox = styled.div`
  margin: 78px 70px 35px;
  height: 270px;
`;

export default FootPrint;
