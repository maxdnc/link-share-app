import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Please login{' '}
        <Link to="/login" className="text-blue-400 underline">
          here
        </Link>{' '}
      </p>
    </div>
  );
}
export default Home;
