import styled from 'styled-components';

import SvgComponent from './SvgComponent';

/**
 * @param iconName 카드에 표시할 아이콘 파일 이름 (string)
 * @param title 제목 (string)
 * @param text 본문텍스트 (string)
 * */
const ArticleCard = ({ iconName, title, text }) => {
  return (
    <Wrapper>
      <IconBox>{SvgComponent(iconName)}</IconBox>
      <Hr />
      <TextBox>
        <h1>{title}</h1>
        <p>{text}</p>
      </TextBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 278px;
  height: 268px;
`;

const IconBox = styled.div``;

const TextBox = styled.div`
  white-space: pre-wrap;
  h1 {
    font-size: 18px;
    font-weight: 700;
    height: 20px;
    line-height: 20px;
    margin-bottom: 14px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    height: 96px;
    line-height: 20px;
  }
`;

const Hr = styled.hr`
  border: 2px solid ${({ theme }) => theme.colors.GRAY1};
  margin: 20px auto;
`;

export default ArticleCard;