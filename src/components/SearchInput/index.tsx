import { useEffect, useState } from "react"
import { SearchInputContainer } from "./style"
import { api } from "../../services/api"
import searchLoop from '../../assets/search loop.png'
import { iInfos } from "../../providers/PokemonContext"

const SearchInput = () => {
  const [search, setSearch] = useState<string>('')
  const [singelPokemon, setSinglePokemon] = useState<iInfos | null>(null)
  const pokemonName = '';

  return (
    <SearchInputContainer>
      <img src={searchLoop} alt='search loop' />
      <input placeholder='A procura de um Pokemon específico?' type='text' />
    </SearchInputContainer>
  )
}

export default SearchInput