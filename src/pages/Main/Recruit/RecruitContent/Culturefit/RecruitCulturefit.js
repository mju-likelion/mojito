import styled from 'styled-components';

import TitleButton from '../../../../../components/TitleButton';

import Culturefit from './Culturefit';
import CulturefitData from './CulturefitData.json';

const RecruitCulturefit = () => {
  return (
    <>
      <TitleButton content={'동료상'} />
      <WrapCulturefit>
        {CulturefitData.map((c, index) => (
          <Culturefit key={index} no={c.no} content={c.content} />
        ))}
      </WrapCulturefit>
    </>
  );
};

const WrapCulturefit = styled.div`
  grid-row-gap: 40px;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 40px 0 80px 0;

  @media ${({ theme }) => theme.devices.TABLET} {
    grid-column-gap: 16px;
    grid-row-gap: 60px;
    grid-template-columns: repeat(2, 1fr);
    margin: 50px 0 100px 0;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    grid-column-gap: 56px;
    grid-row-gap: 100px;
    grid-template-columns: repeat(3, 1fr);
    margin: 80px 0 200px 0;
  }
`;

export default RecruitCulturefit;
