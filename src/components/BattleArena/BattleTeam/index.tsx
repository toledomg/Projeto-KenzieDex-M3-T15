import { useContext, useEffect, useState } from 'react';
import { IPokemonTeam, PokemonContext } from '../../../providers/PokemonContext';

const BattleTeam = () => {
     const {power, statBase} = useContext(PokemonContext)

    /*  useEffect(() => {
       const theWinner = power > statBase ? power : statBase;

       console.log(theWinner);
      }, []) */

     
     /* console.log(`Oponente ${statBase}`); */
  /* console.log(`Meu pokemon ${power}`); */
     
     return <div>Battle</div>;
};

export default BattleTeam;
