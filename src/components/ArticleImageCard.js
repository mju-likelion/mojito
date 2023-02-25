import styled from 'styled-components';

import SvgComponent from './SvgComponent';

/**
 * @param imageName 카드에 표시할 이미지 파일 이름 (string)
 * @param title 제목 (string)
 * @param text 본문텍스트 (string)
 * */
const ArticleImageCard = ({ imageName = null, title = '', text = '' }) => {
  return (
    <>
      {imageName && <>{SvgComponent(imageName)}</>}
      {title && text && (
        <TextBox>
          <h1>{title}</h1>
          <p>{text}</p>
        </TextBox>
      )}
    </>
  );
};

const TextBox = styled.div`
  p {
    color: ${({ theme }) => theme.colors.GRAY2};
    width: 100%;
    height: 120px;
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
  }
`;

export default ArticleImageCard;
