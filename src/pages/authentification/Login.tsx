import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>login</h1>
      <p>
        no account ?{' '}
        <Link to="/signup" className="underline text-blue-500">
          {' '}
          Create account
        </Link>
      </p>
    </div>
  );
}
export default Login;
