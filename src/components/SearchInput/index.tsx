/* eslint-disable react/button-has-type */
import { useContext, useState } from "react"
import { SearchInputContainer } from "./style"
import { api } from "../../services/api"
import searchLoop from '../../assets/search loop.png'
import { PokemonContext } from "../../providers/PokemonContext"
import { toastAlert } from "../../styles/toast"

const SearchInput = () => {
  const [pokemonName, setPokemonName] = useState<string>('')
  const { setSearchModal } = useContext(PokemonContext)
  
  const searchPokemon = async () => {
    try {
      if (pokemonName !== ''){
        const response = await api.get(`/pokemon/${pokemonName}`)
        setSearchModal(response.data)
      }
    } catch (error) {
      toastAlert('error', 'Digite o nome completo do Pokemon!')
    }
  }

  return (
    <SearchInputContainer>
      <img src={searchLoop} alt='search loop' />
      <input placeholder='A procura de um Pokemon?' type='text' onChange={(event) => setPokemonName(event.target.value)}/>
      <button onClick={() => searchPokemon()}>Pesquisar</button>
    </SearchInputContainer>
  )
}

export default SearchInput