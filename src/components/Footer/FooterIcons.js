import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components';

import { ReactComponent as FaceIconSvg } from '../../assets/images/icon_face.svg';
import { ReactComponent as GitIconSvg } from '../../assets/images/icon_git.svg';
import { ReactComponent as InstaIconSvg } from '../../assets/images/icon_insta.svg';
import { ReactComponent as MailIconSvg } from '../../assets/images/icon_mail.svg';
import { ReactComponent as MediIconSvg } from '../../assets/images/icon_medi.svg';

import { SOCIAL_LINKS } from './SocialLinks';

const FooterIcons = ({ handleCopyEmail, setIsCopySuccess }) => {
  return (
    <IconsBox>
      <AnchorIcon href={SOCIAL_LINKS['instagram']} target="_blank" rel="noopener noreferrer">
        <InstaIcon />
      </AnchorIcon>
      <AnchorIcon href={SOCIAL_LINKS['github']} target="_blank" rel="noopener noreferrer">
        <GitIcon />
      </AnchorIcon>
      <AnchorIcon href={SOCIAL_LINKS['facebook']} target="_blank" rel="noopener noreferrer">
        <FaceIcon />
      </AnchorIcon>
      <AnchorIcon href={SOCIAL_LINKS['medium']} target="_blank" rel="noopener noreferrer">
        <MediIcon />
      </AnchorIcon>
      <CopyToClipboard
        text={SOCIAL_LINKS['email']}
        onCopy={text => (text === SOCIAL_LINKS['email'] ? setIsCopySuccess(true) : setIsCopySuccess(false))}
      >
        <MailIcon onClick={handleCopyEmail} />
      </CopyToClipboard>
    </IconsBox>
  );
};

const IconsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 264px;
  height: 40px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 440px;
    height: 56px;
  }
`;

const AnchorIcon = styled.a`
  cursor: pointer;
`;

const InstaIcon = styled(InstaIconSvg)`
  width: 40px;
  height: 40px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 56px;
    height: 56px;
  }
  &:hover .instaCircle {
    fill: #525252;
  }
`;

const GitIcon = styled(GitIconSvg)`
  width: 40px;
  height: 40px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 56px;
    height: 56px;
  }
  &:hover .gitCircle {
    fill: #525252;
  }
`;

const FaceIcon = styled(FaceIconSvg)`
  width: 40px;
  height: 40px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 56px;
    height: 56px;
  }
  &:hover .faceCircle {
    fill: #525252;
  }
`;

const MediIcon = styled(MediIconSvg)`
  width: 40px;
  height: 40px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 56px;
    height: 56px;
  }
  &:hover .mediCircle {
    fill: #525252;
  }
`;

const MailIcon = styled(MailIconSvg)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 56px;
    height: 56px;
  }
  &:hover .mailCircle {
    fill: #525252;
  }
`;

export default FooterIcons;
