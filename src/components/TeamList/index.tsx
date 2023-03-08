import { StyledTeamUl } from './style'
import { TeamCard } from './TeamCard'

export const TeamList = () => {
    const add = 1

  return (
    <StyledTeamUl>
        <TeamCard name='bulbasaur' id='1'/>
        <TeamCard name='bulbasaur' id='1'/>
        <TeamCard name='bulbasaur' id='1'/>
        <TeamCard name='bulbasaur' id='1'/>
        <TeamCard name='bulbasaur' id='1'/>
        <TeamCard name='bulbasaur' id='1'/>
    </StyledTeamUl> 
  )
}
