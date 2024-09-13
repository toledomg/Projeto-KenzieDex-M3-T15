import axios from 'axios';

const localUrl = import.meta.env.VITE_API_LOCAL_URL;
const deployUrl = import.meta.env.VITE_API_DEPLOY_URL;

// Use a variável VITE_ENV para controlar o ambiente ou `NODE_ENV` para produção
const baseURL =
  import.meta.env.VITE_ENV === 'development' ||
  import.meta.env.NODE_ENV === 'development'
    ? localUrl
    : deployUrl;

export const apiFake = axios.create({
  baseURL: baseURL,
  responseType: 'json',
  timeout: 5000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
});

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_POKEMON_URL,
  responseType: 'json',
  timeout: 5000,
});
