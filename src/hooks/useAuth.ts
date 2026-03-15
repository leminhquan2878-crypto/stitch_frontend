import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export function useAuth() {
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const logoutAction = useAuthStore((s) => s.logout);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== '/login') {
      navigate('/login', { replace: true, state: { from: location } });
    }
  }, [isAuthenticated, location, navigate]);

  const logout = () => {
    logoutAction();
    navigate('/login');
  };

  return { user, isAuthenticated, logout };
}
