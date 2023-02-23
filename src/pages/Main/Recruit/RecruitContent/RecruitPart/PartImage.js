import { ReactComponent as Design } from '../../../../../assets/images/icon_design.svg';
import { ReactComponent as Server } from '../../../../../assets/images/icon_server.svg';
import { ReactComponent as Web } from '../../../../../assets/images/icon_web.svg';

const PartImage = ({ part, width, height }) => {
  switch (part) {
    case 'WEB':
      return <Web width={width} height={height} />;
    case 'SERVER':
      return <Server width={width} height={height} />;
    case 'DESIGN':
      return <Design width={width} height={height} />;
    default:
      return <></>;
  }
};

export default PartImage;
