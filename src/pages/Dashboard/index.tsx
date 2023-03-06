import React, { useEffect, useState } from 'react';
import { apiList } from '../../services/api';
import Header from '../../components/Header';

interface iPokemon {
  name: string;
  url: string;
}

const Dashboard = () => {
  const [pokemonList, setPokemonList ] = useState<iPokemon[]>([])

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const response = await apiList.get('/pokemon')
        setPokemonList(response.data.results)
        console.log(response.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    loadPokemons()
  }, [])

  return (
    <Header/>
  )
}


export default Dashboard;
