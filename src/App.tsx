import { HashRouter, Route, Routes } from 'react-router-dom';
// pages
import Login from './pages/authentification/Login';
import SignIn from './pages/authentification/SignIn';
import Home from './pages/home/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
