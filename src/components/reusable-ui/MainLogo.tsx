import { Link } from 'react-router-dom';
// assets
import DevLinkSmallLogo from '../../assets/logo/devlink-logo-small.svg';

function MainLogo() {
  return (
    <Link to="/">
      <span>
        <img src={DevLinkSmallLogo} alt="devlink logo" />
      </span>
    </Link>
  );
}
export default MainLogo;
