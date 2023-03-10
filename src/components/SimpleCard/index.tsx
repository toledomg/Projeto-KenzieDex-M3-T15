/* eslint-disable no-shadow */
import { useContext } from 'react';
import {
  CardContainer,
  PokemonImage,
  PokemonName,
  PokemonId,
  InfoButton,
} from './style';

import {
  iPokemon,
  PokemonContext,
  formatPokemonId,
} from '../../providers/PokemonContext';
import { toastAlert } from '../../styles/toast';

interface iSimpleCardProps {
  name: string;
  url: string;
  pokemon: iPokemon;
  id: string;
}

const SimpleCard = ({ name, url, pokemon, id }: iSimpleCardProps) => {
  const pokedexNumber: string = url.slice(34, -1);

  const { pokemonTeam } = useContext(PokemonContext);

  const idPokemon = parseInt(pokedexNumber, 10);

  const { setPokeModal } = useContext(PokemonContext);

  const handleClick = () => {
    setPokeModal(pokemon);
  };

  return (
    <CardContainer>
      <section>
        <PokemonName>{name[0].toUpperCase() + name.slice(1)}</PokemonName>

        <PokemonId>{formatPokemonId(idPokemon)}</PokemonId>
      </section>

      <InfoButton onClick={() => handleClick()}>+ infos</InfoButton>

      <PokemonImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokedexNumber}.png`}
        alt={name}
      />
    </CardContainer>
  );
};

export default SimpleCard;
