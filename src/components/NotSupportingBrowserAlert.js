import styled from 'styled-components';

import { ReactComponent as Sad } from '../assets/images/sad.svg';

const NotSupportingBrowserAlert = () => {
  return (
    <Wrapper>
      <Sad />
      <Description>
        <p>해당 브러우저는 지원하지 않습니다.</p>
        <p>인앱 브라우저가 아닌</p>
        <p>크롬을 이용해주세요.</p>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  color: ${({ theme }) => theme.colors.GRAY_2};
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  margin-top: 40px;
`;

export default NotSupportingBrowserAlert;
