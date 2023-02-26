import styled from 'styled-components';

/**
 * @param imageName 카드에 표시할 이미지 파일 이름 (string)
 * @param title 제목 (string)
 * @param text 본문텍스트 (string)
 * */

const ArticleImageCard = props => {
  const { image, title, text } = props;
  return (
    <ArticleImageCardBlock>
      <ArticleImage src={image} />
      <Title>
        {title}
        <Text>{text}</Text>
      </Title>
    </ArticleImageCardBlock>
  );
};

const ArticleImageCardBlock = styled.div`
  display: block;
  text-align: center;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    text-align: left;
  }
`;

const ArticleImage = styled.img`
  margin-bottom: 16px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  display: block;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.WHITE};
  font-weight: 700;
  line-height: 20px;
  font-size: 12px;
  margin-bottom: 50px;
  @media ${({ theme }) => theme.devices.TABLET} {
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 60px;
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 0;
  }
`;

const Text = styled.span`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.GRAY2};
  font-weight: 400;
  line-height: 20px;
  font-size: 12px;
  @media ${({ theme }) => theme.devices.TABLET} {
    line-height: 24px;
    font-size: 14px;
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    line-height: 30px;
    font-size: 16px;
  }
`;

export default ArticleImageCard;
