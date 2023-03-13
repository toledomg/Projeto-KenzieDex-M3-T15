import React, { useContext } from 'react';
import { StyledModalBattleSection } from './styles';
import { ModalClose, ModalContainer } from '../../../PokeModal/style';
import { PokemonContext } from '../../../../providers/PokemonContext';

const ModalBattle = () => {
  const { modal, setModal } = useContext(PokemonContext);
  return (
    <ModalContainer>
      <ModalClose onClick={() => setModal(false)}>X</ModalClose>
      <StyledModalBattleSection>
        <h1>teste</h1>
      </StyledModalBattleSection>
    </ModalContainer>
  );
};

export default ModalBattle;
