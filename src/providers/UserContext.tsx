/* eslint-disable no-console */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IDefaultProviderProps,
  IUser,
  ILoginFormValues,
  IRegisterFormValues,
  IUserContext,
} from './@types';

import { toasts, toastError, toastWarning, toastAlert } from '../styles/toast';
import { api, apiFake } from '../services/api';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@token');
    const idUser = localStorage.getItem('@userID');

    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await apiFake.get(`/users/${idUser}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data.user);
          navigate('/home');
        } catch (error) {
          console.log(error);
          navigate('/');
        }
      };

      userAutoLogin();
    }
  }, []);

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);

      const response = await apiFake.post('/login', formData);

      localStorage.setItem('@token', response.data.accessToken);
      localStorage.setItem('@userID', response.data.user.id);
      setUser(response.data.user);
      console.log(response.data.user);
      navigate('/home');
      toastAlert('success', 'Conectado com Sucesso');
    } catch (error) {
      console.log(error);

      toastError();
      toastWarning();
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);

      const response = await apiFake.post('/users', formData);

      localStorage.setItem('@token', response.data.accessToken);

      navigate('/home');
      toasts('success', 'Cadastro Realizado com Sucesso');
    } catch (error) {
      setLoading(true);
      console.log(error);
      toasts('warning', 'Algo deu errado');
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    toastAlert('success', 'Deslogado');
    localStorage.removeItem('@token');
    localStorage.removeItem('@userID');

    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        isHidden,
        setIsHidden,
        user,
        userLogin,
        userRegister,
        userLogout,
        navigate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
