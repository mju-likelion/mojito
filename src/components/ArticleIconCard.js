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
      {SvgComponent(iconName)}
      <Hr />
      <TextBox>
        <h1>{title}</h1>
        <TextMobile>{text.mobile}</TextMobile>
        <TextTablet>{text.tablet}</TextTablet>
        <TextPc>{text.pc}</TextPc>
      </TextBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  :first-child {
    height: 195px;
  }
  :nth-child(2) {
    margin: 28px 0 18px 0;
  }
  :nth-child(4) {
    margin-top: 17px;
  }
  height: 252px;
  width: 276px;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 252px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 278px;
    height: 268px;
  }
`;

const TextBox = styled.div`
  white-space: pre-wrap;
  h1 {
    font-size: 18px;
    font-weight: 700;
    height: 20px;
    line-height: 20px;
    margin-bottom: 14px;
  }
  /* p {
    color: ${({ theme }) => theme.colors.GRAY2};
    font-size: 15px;
    font-weight: 400;
    height: 96px;
    line-height: 24px;
  } */
`;

const TextMobile = styled.p`
  color: ${({ theme }) => theme.colors.GRAY2};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

const TextTablet = styled.p`
  color: ${({ theme }) => theme.colors.GRAY2};
  font-size: 12px;
  font-weight: 400;
  height: 96px;
  line-height: 20px;

  display: none;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: block;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

const TextPc = styled.p`
  color: ${({ theme }) => theme.colors.GRAY2};
  font-size: 15px;
  font-weight: 400;
  height: 96px;
  line-height: 24px;

  display: none;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.GRAY1};
  margin: 20px auto;
`;

export default ArticleCard;
