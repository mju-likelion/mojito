import styled from 'styled-components';

/**
 * @param icon 카드에 표시할 아이콘 (react component || svg)
 * @param title 제목 (string)
 * @param text 본문텍스트 (string)
 * */
const ArticleCard = ({ icon, title, text }) => {
  return (
    <Wrapper>
      <IconBox>{icon}</IconBox>
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

export default ArticleCard;
