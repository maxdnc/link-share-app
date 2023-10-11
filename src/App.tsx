import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
// pages
import Login from './components/pages/authentification/Login';
import SignIn from './components/pages/authentification/SignIn';

import CustomLinks from './components/pages/home/CustomLinks';
import Details from './components/pages/home/Details';
import MainLayout from './components/pages/home/MainLayout';
import Preview from './components/pages/preview/Preview';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/customlinks" />} />
          <Route path="/customlinks" index element={<CustomLinks />} />
          <Route path="/details" element={<Details />} />
        </Route>
        <Route path="/preview" element={<Preview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
