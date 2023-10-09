import { useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import useAuthForm from '../../../hooks/useAuthForm';

function MainLayout() {
  const navigate = useNavigate();
  const { isUserConnected, handleSignOut } = useAuthForm();

  useEffect(() => {
    const checkUserConnection = async () => {
      const userIsConnected = await isUserConnected();
      if (!userIsConnected) {
        navigate('/login');
      }
    };
    checkUserConnection();
  });
  return (
    <>
      <header>
        <nav className="flex justify-between">
          <button type="button" className="bg-blue-400" onClick={handleSignOut}>
            log out
          </button>
          <Link to="/">logo</Link>
          <ul className="flex gap-4">
            <li>
              <NavLink to="/links">Links</NavLink>
            </li>
            <li>
              <NavLink to="/details">Profil Details</NavLink>
            </li>
          </ul>
          <Link to="/preview">Preview</Link>
        </nav>
      </header>
      <main className="p-8">
        <Outlet />
      </main>
    </>
  );
}
export default MainLayout;
