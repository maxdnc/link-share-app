import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuthForm from '../../../hooks/useAuthForm';

function Home() {
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
    <div>
      <h1>Home</h1>
      <p>
        Please login{' '}
        <Link to="/login" className="text-blue-400 underline">
          here
        </Link>{' '}
      </p>
      <button type="button" className="bg-blue-400" onClick={handleSignOut}>
        log out
      </button>
    </div>
  );
}
export default Home;
