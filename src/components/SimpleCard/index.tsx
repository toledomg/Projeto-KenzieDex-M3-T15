import { CardContainer, PokemonImage, PokemonName, PokemonType, InfoButton } from "./style"



interface iSimpleCardProps{
  name: string;
  url: string;
}

const SimpleCard = ({name, url}: iSimpleCardProps) => {
  const pokedexNumber:string = url.slice(34, -1)
  
  return(
  <CardContainer>
    <section>
      <PokemonName>{name[0].toUpperCase() + name.slice(1)}</PokemonName>
      <PokemonType>Type</PokemonType>
    </section>
    
    <InfoButton>+infos</InfoButton>

    <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokedexNumber}.png`} alt={name} />
  </CardContainer>
 )}
 
 export default SimpleCard