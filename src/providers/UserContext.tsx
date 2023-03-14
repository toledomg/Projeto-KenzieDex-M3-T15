/* eslint-disable no-console */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IDefaultProviderProps,
  IUser,
<<<<<<< HEAD
  IProduct,
  ILoginFormValues,
  IRegisterFormValues,
  IUserContext,
  IProductCart,
} from './@types';

import { toasts, toastError, toastWarning, toastAlert } from '../styles/toast';
import { api, apiList } from '../services/api';
=======
  ILoginFormValues,
  IRegisterFormValues,
  IUserContext,
} from './@types';

import { toasts } from '../styles/toast';
import { apiFake } from '../services/api';
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const [user, setUser] = useState<IUser | null>(null);
  const [pokemonList, setPokemonList] = useState([] as IProduct[]);
  const [filteredPokemon, setFilteredPokemon] = useState([] as IProduct[]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@token');
    const idUser = localStorage.getItem('@useID');

    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get(`/users/${idUser}`, {
=======
  const [isHidden, setIsHidden] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const token = localStorage.getItem('@token');
  const idUser = localStorage.getItem('@userID');
  useEffect(() => {
    if (!token) {
      setUser(null);
      navigate('/');
      localStorage.removeItem('@token');
      localStorage.removeItem('@useID');
    } else {
      const userAutoLogin = async () => {
        try {
          const response = await apiFake.get(`/users/${idUser}`, {
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
<<<<<<< HEAD

          setUser(response.data.user);
          navigate('/shop');
        } catch (error) {
          console.log(error);
          navigate('/');
        }
      };

=======
          setUser(response.data.user);
          navigate('/home');
        } catch (error) {
          console.log(error);
          setUser(null);
          navigate('/');
          localStorage.removeItem('@token');
          localStorage.removeItem('@userID');
        }
      };
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
      userAutoLogin();
    }
  }, []);

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);

<<<<<<< HEAD
      const response = await api.post('/login', formData);

      localStorage.setItem('@token', response.data.accessToken);
      localStorage.setItem('@useID', response.data.user.id);
      setUser(response.data.user);
      navigate('/shop');
      toastAlert('success', 'Conectado com Sucesso');
    } catch (error) {
      console.log(error);

      toastError();
      toastWarning();
=======
      const response = await apiFake.post('/login', formData);

      localStorage.setItem('@token', response.data.accessToken);
      localStorage.setItem('@userID', response.data.user.id);
      setUser(response.data.user);

      navigate('/home');
    } catch (error) {
      console.log(error);
      toasts('error', 'Algo deu errado');
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);

<<<<<<< HEAD
      const response = await api.post('/users', formData);

      localStorage.setItem('@token', response.data.accessToken);

      navigate('/shop');
=======
      const response = await apiFake.post('/users', formData);

      localStorage.setItem('@token', response.data.accessToken);
      localStorage.setItem('@userID', response.data.user.id);

      navigate('/home');
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
      toasts('success', 'Cadastro Realizado com Sucesso');
    } catch (error) {
      setLoading(true);
      console.log(error);
      toasts('warning', 'Algo deu errado');
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
  const getAllPokemon = async () => {
    try {
      const token = localStorage.getItem('@token');
      const response = await apiList.get('/pokemon', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (filteredPokemon.length === 0) {
        setPokemonList(response.data);
      } else {
        setPokemonList(filteredPokemon);
      }
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };

  const userLogout = () => {
    setUser(null);
    toastAlert('success', 'Deslogado');
    localStorage.removeItem('@token');
    localStorage.removeItem('@useID');
    localStorage.removeItem('@Pokedex');
=======
  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@token');
    localStorage.removeItem('@userID');
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135

    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
<<<<<<< HEAD
        user,
        userLogin,
        userRegister,
        getAllProduct,
        userLogout,
        navigate,
        pokemonList,
        setPokemonList,
        filteredPokemon,
        setFilteredPokemon,
=======
        isHidden,
        setIsHidden,
        user,
        userLogin,
        userRegister,
        userLogout,
        navigate,
>>>>>>> 93372ea9064e112fdf47a1ae7347caf880d9a135
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
