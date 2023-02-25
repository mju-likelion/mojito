import styled from 'styled-components';

import ProjectImagesForDesktop from '../../../assets/images/Project/ProjectImagesForDesktop.png';
import ProjectImagesForMobile from '../../../assets/images/Project/ProjectImagesForMobile.png';
import ProjectImagesForTablet from '../../../assets/images/Project/ProjectImagesForTablet.png';

const ProjectImageBox = () => {
  return (
    <PorjectTagBox>
      <ProjectImagesInMobile>
        <ProjectImage alt="ProjectImagesForMobile" src={ProjectImagesForMobile} />
      </ProjectImagesInMobile>
      <ProjectImagesInTablet>
        <ProjectImage alt="ProjectImagesForTablet" src={ProjectImagesForTablet} />
      </ProjectImagesInTablet>
      <ProjectImagesInPc>
        <ProjectImage alt="ProjectImagesForDesktop" src={ProjectImagesForDesktop} />
      </ProjectImagesInPc>
    </PorjectTagBox>
  );
};

const PorjectTagBox = styled.div`
  margin: 64px 10px 15px;
  height: 102px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 36px 14px 15px;
    height: 140px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 78px 70px 35px;
    height: 270px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProjectImagesInMobile = styled.div`
  display: block;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

const ProjectImagesInTablet = styled.div`
  display: none;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: block;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

const ProjectImagesInPc = styled.div`
  display: none;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

export default ProjectImageBox;
