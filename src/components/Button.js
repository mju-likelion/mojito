import { useEffect, useState } from 'react';

import styled from 'styled-components';

/**
 * @param {string} text 버튼 내부 텍스트
 * @param {string} type 버튼 타입 (button, submit)
 * @param {string} errorMessage 표시할 에러 메시지
 * @param {() => void} handleClick 버튼 클릭시 실행할 이벤트, Route 기능의 경우 history.push와 같은 함수를 이용합니다.
 * @param {string} buttonColor 버튼 배경 색상
 * @param {string} hoverColor 버튼 호버 배경 색상
 * @param {object} props 폰트 관련 속성
 */
const Button = ({
  text,
  type = 'button',
  errorMessage,
  handleClick,
  buttonColor = 'ORANGE',
  hoverColor = '#ffab6b',
  ...props
}) => {
  const { fontWeight, pcTextSize, pcLineHeight, tabletTextSize, tabletLineHeight } = props;
  const [isShowErrorMessage, setIsShowErrorMessage] = useState(false);

  const handleButtonClick = () => {
    if (errorMessage) {
      setIsShowErrorMessage(true);
    } else {
      handleClick?.();
    }
  };

  useEffect(() => {
    errorMessage || setIsShowErrorMessage(false);
  }, [errorMessage]);

  return (
    <Wrapper>
      {/* 'disabled'가 아닌 'disable'임을 주의, handleButtonClick 주석 참고 */}
      <ButtonStyle
        type={type}
        disable={errorMessage}
        onClick={handleButtonClick}
        buttonColor={buttonColor}
        pcTextSize={pcTextSize}
        tabletTextSize={tabletTextSize}
        pcLineHeight={pcLineHeight}
        tabletLineHeight={tabletLineHeight}
        fontWeight={fontWeight}
        hoverColor={hoverColor}
      >
        {text}
      </ButtonStyle>
      {isShowErrorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
`;

const ButtonStyle = styled.button`
  color: #fff;
  border-radius: 35px;
  width: 192px;
  height: 50px;
  font-size: ${({ tabletTextSize }) => tabletTextSize || '18px'};
  line-height: ${({ tabletLineHeight }) => tabletLineHeight || '23px'};
  font-weight: ${({ fontWeight }) => fontWeight || '700'};
  @media (min-width: 1200px) {
    width: 260px;
    height: 70px;
    font-size: ${({ pcTextSize }) => pcTextSize || '28px'};
    line-height: ${({ pcLineHeight }) => pcLineHeight || '35px'};
  }
  background-color: ${({ disable, theme, buttonColor }) => (disable ? theme.colors.GRAY2 : theme.colors[buttonColor])};
  :hover {
    background-color: ${({ disable, hoverColor }) => disable || hoverColor};
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.RED};
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  margin-top: 10px;
  line-height: 15px;
  @media (min-width: 1200px) {
    font-size: 18px;
    margin-top: 17px;
    line-height: 23px;
  }
`;

export default Button;
