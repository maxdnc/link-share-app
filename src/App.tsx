import { HashRouter, Route, Routes } from 'react-router-dom';
// pages
import Login from './components/pages/authentification/Login';
import SignIn from './components/pages/authentification/SignIn';
import Home from './components/pages/home/Home';

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
