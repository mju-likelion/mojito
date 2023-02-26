import { useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from '../../assets/images/icon_footer_arrow.svg';

import Toast from './../Toast';
import FooterIcons from './FooterIcons';

const Footer = () => {
  const [toast, setToast] = useState(false);
  const [isCopySuccess, setIsCopySuccess] = useState(false);

  return (
    <FooterBox>
      <FooterIcons handleCopyEmail={() => setToast(true)} setIsCopySuccess={setIsCopySuccess} />
      {toast && (
        <Toast
          setToast={setToast}
          isSuccess={isCopySuccess}
          text={isCopySuccess ? '메일 주소가 복사되었습니다' : '메일 주소 복사에 실패하였습니다'}
        />
      )}
      <RouteApplyBox href={'https://apply.mju-likelion.com/'} target="_blank" rel="noopener noreferrer">
        <RouteApplyBtn>멋쟁이사자처럼 명지대(자연) 11기 APPLY</RouteApplyBtn>
        <ArrowIcon />
      </RouteApplyBox>
      <CopyrightBox>© 2023. LIKELION MJU All pictures cannot be copied without permission.</CopyrightBox>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.GRAY1};
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 24px;
  box-sizing: border-box;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 170px;
    padding-bottom: 30px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 232px;
    padding-bottom: 40px;
  }
`;

const RouteApplyBox = styled.a`
  display: flex;
  align-items: center;
  margin: 18px 0 18px 0;
  text-decoration: none;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 22px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 20px 0 30px 0;
    gap: 5px;
  }
`;

const RouteApplyBtn = styled.button`
  all: unset;
  color: ${({ theme }) => theme.colors.GRAY2};
  font-size: 12px;
  line-height: 14px;
  height: 20px;
  text-align: center;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 14px;
    line-height: 16px;
    height: 30px;
  }
`;

const CopyrightBox = styled.div`
  color: ${({ theme }) => theme.colors.GRAY3};
  font-size: 10px;
  transform: scale(0.8);
  line-height: 10px;
  width: 370px;
  text-align: center;
  font-family: Montserrat;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 12px;
    height: 16px;
    transform: scale(1);
    width: 436px;
    line-height: 15px;
  }
`;

export default Footer;
