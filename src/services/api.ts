import axios from 'axios';

export const apiList = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  responseType: 'json',
  timeout: 5000,
});
