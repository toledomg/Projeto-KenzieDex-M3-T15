import { Routes, Route } from 'react-router-dom';
import BattlePage from './pages/BattlePage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TeamPage from './pages/TeamPage';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/home' element={<Dashboard />} />
      <Route path='/team' element={<TeamPage />} />
      <Route path='/battle' element={<BattlePage />} />
    </Routes>
  );
}
