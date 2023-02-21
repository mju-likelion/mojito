import styled from 'styled-components';

import ArticleImageCard from '../../../../components/ArticleImageCard';
import useWindowResize from '../../../../hooks/useWindowResize';

/** @TODO TABLE 버전 UI 추가하기 */
const AboutMJU = () => {
  const [size] = useWindowResize();

  return (
    <Wrapper>
      <h1>멋쟁이사자처럼 명지대(자연)</h1>
      <Hr />
      <Article>
        {imageResolver(size).map(item => (
          <ArticleImageCard key={item.id} imageName={item.imageName} />
        ))}
      </Article>
    </Wrapper>
  );
};

/** @TODO 현재 태블릿, 모바일 버전 svg 컴포넌트 내용이 pc버전 내용임, 버전에 맞게 수정 필요 */
const FILE_NAME = {
  pc: ['AboutMju1PC', 'AboutMju2PC', 'AboutMju3PC'],
  tablet: ['AboutMju1Tablet', 'AboutMju2Tablet', 'AboutMju3Tablet'],
  mobile: ['AboutMju1Mobile', 'AboutMju2Mobile', 'AboutMju3Mobile'],
};
const imageResolver = size => {
  if (size.width >= 1200) {
    return FILE_NAME.pc.map((file, idx) => ({ id: idx, imageName: file }));
  } else if (size.width >= 600) {
    return FILE_NAME.tablet.map((file, idx) => ({ id: idx, imageName: file }));
  } else {
    return FILE_NAME.mobile.map((file, idx) => ({ id: idx, imageName: file }));
  }
};

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.BLUE1};
  font-weight: 700;
  width: 318px;
  margin: auto;
  margin-top: 100px;
  h1 {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
  }

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 376px;
    margin-top: 120px;
    h1 {
      font-size: 20px;
      line-height: 24px;
      height: 24px;
    }
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    margin: 202px auto 0 auto;
    h1 {
      text-align: start;
      font-size: 26px;
      line-height: 30px;
      height: 30px;
    }
  }
`;

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.BLUE1};
  margin: 6px auto 20px auto;
  width: 262px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 376px;
    margin: 10px auto 20px auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    border: 2px solid ${({ theme }) => theme.colors.BLUE1};
    margin: 20px auto 30px auto;
  }
`;

const Article = styled.div`
  display: flex;
  flex-wrap: wrap;
  svg:nth-child(even) {
    margin: 30px 0 60px 0;
  }

  @media ${({ theme }) => theme.devices.TABLET} {
    /*  */
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    svg:nth-child(even) {
      margin: 0;
    }
    gap: 0 36px;
  }
`;

export default AboutMJU;
