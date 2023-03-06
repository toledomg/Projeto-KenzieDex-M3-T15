/* eslint-disable no-console */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IDefaultProviderProps,
  IUser,
  IProduct,
  ILoginFormValues,
  IRegisterFormValues,
  IUserContext,
  IProductCart,
} from './@types';

import { toasts, toastError, toastWarning, toastAlert } from '../styles/toast';
import { api, apiList } from '../services/api';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
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
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data.user);
          navigate('/shop');
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
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);

      const response = await api.post('/users', formData);

      localStorage.setItem('@token', response.data.accessToken);

      navigate('/shop');
      toasts('success', 'Cadastro Realizado com Sucesso');
    } catch (error) {
      setLoading(true);
      console.log(error);
      toasts('warning', 'Algo deu errado');
    } finally {
      setLoading(false);
    }
  };

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

    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
