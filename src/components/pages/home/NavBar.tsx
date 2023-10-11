// icon
import { ImLink } from 'react-icons/im';
import { FaRegCircleUser } from 'react-icons/fa6';
import { PiEyeBold } from 'react-icons/pi';

// component
import LinkPrimary from '../../reusable-ui/LinkPrimary';
import MainLogo from '../../reusable-ui/MainLogo';

function NavBar() {
  return (
    <nav className="flex justify-between p-4 items-center">
      <MainLogo />

      <ul className="flex gap-4">
        <li>
          <LinkPrimary
            to="/customlinks"
            icon={<ImLink />}
            label="Links"
            version="default"
          />
        </li>
        <li>
          <LinkPrimary
            to="/details"
            icon={<FaRegCircleUser />}
            label="Profile Details"
            version="default"
          />
        </li>
      </ul>
      <LinkPrimary
        to="/preview"
        icon={<PiEyeBold />}
        label="Preview"
        version="purple"
      />
    </nav>
  );
}
export default NavBar;
