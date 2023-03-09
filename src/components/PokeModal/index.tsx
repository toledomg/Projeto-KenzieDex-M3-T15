/* eslint-disable no-unsafe-optional-chaining */
import { useContext, useEffect, useState } from 'react';
import {
  ModalContainer,
  Modal,
  ModalClose,
  PokemonName,
  AddButton,
  PokemonType,
  ModalHeader,
  ModalMain,
  PokeTypes,
  PokemonModalImage,
} from './style';
import { iInfos, PokemonContext } from '../../providers/PokemonContext';
import { api, apiFake } from '../../services/api';
import { toastAlert } from '../../styles/toast';

const userId = localStorage.getItem('@userID');

const token = localStorage.getItem('@token');


const PokeModal = () => {
  const { setPokeModal, pokeModal, pokemonTeam, setPokemonTeam } =
  useContext(PokemonContext);
  
  const [pokemon, setPokemon] = useState<null | iInfos>(null);
  
  const data = {
    userId,
    pokemonTeam,
  };

  useEffect(() => {
    if (userId){
        const getTeam = async () => {
        try {
          const response = await apiFake.get('teams', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setPokemonTeam(response.data[response.data.length - 1].pokemonTeam)
        } catch (error) {
          console.log(error)
        }
      } 
      getTeam()
      }
  }, [])

  useEffect(() => {
    const loadSingleData = async () => {
      try {
        const response = await api.get(pokeModal!.url);
        setPokemon(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadSingleData();
  }, []);
  
  const loadTeam = async () => {
    try {
      if (pokemonTeam !== null) {
        await apiFake.post('teams', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  if (!pokemon) {
    return pokemon;
  }
  
 

  return (
    <ModalContainer>

      <Modal>
        <ModalClose onClick={() => setPokeModal(null)}>X</ModalClose>
        <div>
          <ModalHeader>
            <PokeTypes>
              <PokemonName>
                {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </PokemonName>

              <PokemonType>
                {pokemon.types[0]!.type.name[0].toUpperCase() +
                  pokemon.types[0].type.name.slice(1)}
              </PokemonType>
            </PokeTypes>

            <PokemonModalImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
              alt={pokemon.name}
              />

            <AddButton
              onClick={() => {
                if (pokemonTeam!.length < 6) {
                  pokemonTeam.push(pokemon);
                  setPokemonTeam(pokemonTeam);
                  loadTeam();
                  toastAlert('success', 'Pokemon adicionado ao time!')
                  setPokeModal(null)
                  localStorage.setItem('@poketeam:', JSON.stringify(pokemonTeam))
                } else if (pokemonTeam.length >= 6) {
                  toastAlert('warning', 'Seu poketeam está cheio...');
                } 
              }}
              >
              Add to team
            </AddButton>
          </ModalHeader>

          <ModalMain>
            <h1>Pokedex Data</h1>

            <section>
              <span>Order:</span>
              <span>#{pokemon.order}</span>
            </section>

            <section>
              <span>Height:</span>
              <span>{Math.round(pokemon.height * 3.2808)}ft</span>
            </section>

            <section>
              <span>Weight:</span>
              <span>{pokemon.weight}kg</span>
            </section>

            <section>
              <span>Main ability:</span>
              <span>
                {pokemon.abilities[0]?.ability.name[0].toUpperCase() +
                  pokemon.abilities[0]?.ability.name.slice(1)}
              </span>
            </section>
          </ModalMain>
        </div>
      </Modal>
    </ModalContainer>
  );
};

export default PokeModal;
