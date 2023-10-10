// react
import { useEffect } from 'react';
// react router
import { Outlet, useNavigate } from 'react-router-dom';

// hook
import useAuthForm from '../../../hooks/useAuthForm';
import NavBar from './NavBar';

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
        <NavBar />
      </header>

      <main className="p-8">
        <Outlet />
      </main>
      <button type="button" className="bg-blue-400" onClick={handleSignOut}>
        log out
      </button>
    </>
  );
}
export default MainLayout;
