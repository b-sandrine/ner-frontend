import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import Owner from './components/Owners/Owner';
import Settings from './components/Settings/Settings';
import Content from './components/Content/Content';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="content" element={<Content />} />
          <Route path="owners" element={<Owner />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;