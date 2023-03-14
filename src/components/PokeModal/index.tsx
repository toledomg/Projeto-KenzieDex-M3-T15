/* eslint-disable consistent-return */
/* eslint-disable no-unsafe-optional-chaining */
import { useNavigate } from 'react-router';
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
import {
  formatPokemonId,
  iInfos,
  PokemonContext,
} from '../../providers/PokemonContext';
import { api, apiFake } from '../../services/api';
import { toastAlert } from '../../styles/toast';

const userId = Number(localStorage.getItem('@userID'));

const token = localStorage.getItem('@token');

const PokeModal = () => {
  const { setPokeModal, pokeModal, pokemonTeam, setPokemonTeam } =
    useContext(PokemonContext);

  const navigate = useNavigate();
  const ESCAPE_KEYCODE = 27;

  const [pokemon, setPokemon] = useState<null | iInfos>(null);
  const data = {
    userId,
    pokemonTeam: pokemon,
  };

  useEffect(() => {
    if (!window) return;

    const keyUpListener = (e: { keyCode: any }) => {
      if (e.keyCode === ESCAPE_KEYCODE) setPokeModal(null);
    };

    window.addEventListener('keyup', keyUpListener);

    return () => {
      window.removeEventListener('keyup', keyUpListener);
    };
  }, []);

  useEffect(() => {
    if (userId) {
      const getTeam = async () => {
        try {
          const response = await apiFake.get('teams', {
            params: {
              userId,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setPokemonTeam(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getTeam();
    }
  }, []);

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

  const addTeam = async () => {
    if (pokemonTeam.length < 6) {
      try {
        await apiFake.post('teams', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toastAlert('success', 'Pokemon adicionado ao time!');
        setPokeModal(null);
      } catch (error) {
        console.log(error);
      }
    } else {
      setPokeModal(null);
      toastAlert('warning', 'Seu poketeam está cheio...');
      navigate('/team');
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
              <>
                <PokemonName>
                  {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                </PokemonName>
                <PokemonType>
                  {pokemon.types[0]!.type.name[0].toUpperCase() +
                    pokemon.types[0].type.name.slice(1)}
                </PokemonType>
              </>
            </PokeTypes>

            <PokemonModalImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
              alt={pokemon.name}
            />

            <AddButton onClick={() => addTeam()}>Add to team</AddButton>
          </ModalHeader>

          <ModalMain>
            <h1>Pokedex Data</h1>

            <section>
              <span>Order:</span>
              <span>{formatPokemonId(pokemon.order)}</span>
            </section>

            <section>
              <span>Height:</span>
              <span>{pokemon.height / 10} m</span>
            </section>

            <section>
              <span>Weight:</span>
              <span>{(Number(pokemon.weight) / 10).toFixed(2)} kg</span>
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
