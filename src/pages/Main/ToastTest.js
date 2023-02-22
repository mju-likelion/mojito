// 현재 푸터 컴포넌트 merge가 안 되어있어 임시로 만든 컴포넌트로 디벨롭 merge 전 지울 파일 입니다.

import React, { useState } from 'react';

import styled from 'styled-components';

import Toast from '../../components/Toast';

const ToastTest = () => {
  const [toast, setToast] = useState(false);
  const [isCopySuccess, setIsCopySuccess] = useState(false);
  return (
    <Testbox>
      토스트 메시지 테스트
      <br />
      <Testbtn
        onClick={() => {
          setToast(true);
          setIsCopySuccess(true);
        }}
      >
        성공
      </Testbtn>
      <Testbtn
        onClick={() => {
          setToast(true);
          setIsCopySuccess(false);
        }}
      >
        실패
      </Testbtn>
      {toast && (
        <Toast
          setToast={setToast}
          isSuccess={isCopySuccess}
          text={isCopySuccess ? '메일 주소가 복사되었습니다' : '메일 주소 복사에 실패하였습니다'}
        />
      )}
    </Testbox>
  );
};

const Testbox = styled.div`
  height: 200px;
  padding-top: 10px;
  width: 100%;
  text-align: center;
`;

const Testbtn = styled.button`
  background-color: ${({ theme }) => theme.colors.BLACK};
  border: 1px solid ${({ theme }) => theme.colors.WHITE};
  margin: 20px 10px 0 10px;
  color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 10%;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.GRAY3};
  }
`;

export default ToastTest;
