import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { tokenStorage } from '../services/tokenStorageService';

type Props = { children: ReactNode };

export const RequireAuth = ({ children }: Props) => {
  const isAuthed = !!tokenStorage.getAccessToken();
  const location = useLocation();

  if (!isAuthed) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <>{children}</>;
};

export const GuestOnly = ({ children }: Props) => {
  const isAuthed = !!tokenStorage.getAccessToken();
  const location = useLocation();

  if (isAuthed) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  return <>{children}</>;
};


