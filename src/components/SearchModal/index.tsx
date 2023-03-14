/* eslint-disable no-unsafe-optional-chaining */
import { useNavigate } from 'react-router';
import { useContext } from 'react';
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
  PokemonContext,
} from '../../providers/PokemonContext';
import { apiFake } from '../../services/api';
import { toastAlert } from '../../styles/toast';

const userId = Number(localStorage.getItem('@userID'));

const token = localStorage.getItem('@token');


const SearchModal = () => {
  const {searchModal, setSearchModal, pokemonTeam} = useContext(PokemonContext)
  
  const navigate = useNavigate();

  const data = {
    userId,
    pokemonTeam: searchModal,
  };

  const addTeam = async () => {
    if (pokemonTeam.length < 6) {
      try {
        await apiFake.post('teams', data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toastAlert('success', 'Pokemon adicionado ao time!');
        setSearchModal(null);
      } catch (error) {
        console.log(error);
      }
    } else {
      setSearchModal(null);
      toastAlert('warning', 'Seu poketeam está cheio...');
      navigate('/team');
    }
  };

  return (
    <ModalContainer>
      <Modal>
        <ModalClose onClick={() => setSearchModal(null)}>X</ModalClose>
        <div>
          <ModalHeader>
            <PokeTypes>
              <>
                <PokemonName>
                  {searchModal!.name[0].toUpperCase() + searchModal!.name.slice(1)}
                </PokemonName>
                <PokemonType>
                  {searchModal!.types[0].type.name[0].toUpperCase() +
                    searchModal!.types[0].type.name.slice(1)}
                </PokemonType>
              </>
            </PokeTypes>

            <PokemonModalImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${searchModal!.id}.png`}
              alt={searchModal!.name}
            />

            <AddButton onClick={() => addTeam()}>Add to team</AddButton>
          </ModalHeader>

          <ModalMain>
            <h1>Pokedex Data</h1>

            <section>
              <span>Order:</span>
              <span>{formatPokemonId(searchModal!.order)}</span>
            </section>

            <section>
              <span>Height:</span>
              <span>{searchModal!.height / 10} m</span>
            </section>

            <section>
              <span>Weight:</span>
              <span>{(Number(searchModal!.weight) / 10).toFixed(2)} kg</span>
            </section>

            <section>
              <span>Main ability:</span>
              <span>
                {searchModal!.abilities[0].ability.name[0].toUpperCase() +
                  searchModal!.abilities[0].ability.name.slice(1)}
              </span>
            </section>
          </ModalMain>
        </div>
      </Modal>
    </ModalContainer>
  );
};

export default SearchModal;
