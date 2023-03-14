/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/heading-has-content */
import { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../../../providers/PokemonContext';
import { toastAlert } from '../../../styles/toast';

const BattleTeam = () => {
  const { power, statBase} = useContext(PokemonContext);

  const [winner, setWinner] = useState();
  const [looser, setLooser] = useState();

  return (
    <div>
      <h1 />
    </div>
  );
};

export default BattleTeam;
