import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div>
      <h1>SignUp</h1>
      <p>
        Already an account ?{' '}
        <Link to="/login" className="text-blue-400 underline">
          Login
        </Link>
      </p>
    </div>
  );
}
export default SignIn;
