/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/heading-has-content */
import { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../../../providers/PokemonContext';

const BattleTeam = () => {
  const { power, statBase } = useContext(PokemonContext);

  const [winner, setWinner] = useState();
  const [looser, setLooser] = useState();

  useEffect(() => {
    const theWinner =
      power! > statBase!
        ? console.log(`You WIN with ${power} points x ${statBase} points`)
        : console.log(`You LOOSE with ${power} points x ${statBase} points`);
  }, []);

  return (
    <div>
      <h1 />
    </div>
  );
};

export default BattleTeam;
