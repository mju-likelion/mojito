import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/images/NotFound/404_lion.svg';

import Button from './../../components/Button';
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <AlertContainer>
        <LogoBox>
          <LionLogo />
        </LogoBox>
        <StatusFont>404</StatusFont>
        <ErrorFont>Page not found</ErrorFont>
        <AlertContentFont>
          죄송합니다.찾으려는 페이지의 주소가 <PhoneBreakLine /> 잘못 입력되었거나 주소의 변경 혹은 <PhoneBreakLine />
          삭제로 인해 사용하실 수 없습니다.
        </AlertContentFont>
      </AlertContainer>

      <ButtonBox>
        <Button type="button" text={'메인으로'} handleClick={() => navigate('/')} />
      </ButtonBox>
    </>
  );
};

const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 368px;
  margin: 121px auto 60px auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 423px;
    height: 397px;
    margin: 198px auto 70px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 470px;
    height: 436px;
    margin: 232px auto 70px auto;
  }
`;
const LogoBox = styled.div`
  width: 126px;
  height: 129px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px auto 121px auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 70px auto 198px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 70px auto 232px auto;
  }
`;

const LionLogo = styled(Logo)`
  width: 100%;
  height: 100%;
`;

const PhoneBreakLine = styled.br`
  display: block;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

const StatusFont = styled.p`
  font-weight: 800;
  font-size: 60px;
  line-height: 73px;
  font-family: 'Montserrat';
  color: ${({ theme }) => theme.colors.WHITE};

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 80px;
    line-height: 98px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 96px;
    line-height: 117px;
  }
`;

const ErrorFont = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  font-family: 'Montserrat';
  color: ${({ theme }) => theme.colors.WHITE};

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 30px;
    line-height: 37px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 40px;
    line-height: 49px;
  }
`;

const AlertContentFont = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.GRAY2};
  text-align: center;
  margin-top: 40px;

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 18px;
    line-height: 26px;
    margin-top: 50px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 20px;
    line-height: 30px;
  }
`;

export default NotFoundPage;
