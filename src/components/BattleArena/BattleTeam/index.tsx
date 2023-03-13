import { useEffect, useState } from 'react';
import { IPokemonTeam } from '../../../providers/PokemonContext';

const BattleTeam = () => {
  //   const [power, setPower] = useState<IPokemonTeam[]>([]);
  //   const [cardBattle, setCardBattle] = useState<IPokemonTeam[]>([]);
  //   const [statBase, setStatBase] = useState<any[]>([]);
  //   const [firstPokemon, setFirstPokemon] = useState([]);
  //   const [secondPokemon, setSecondPokemon] = useState([]);
  //   const [winner, setWinner] = useState(null);
  //   const [firstTotalPoint, setFirstTotalPoint] = useState(0);
  //   const [secondTotalPoint, setSecondTotalPoint] = useState(0);
  //   function countTotalPoint(points = []) {
  //     return points.reduce((acc, current) => acc + current.base_stat, 0);
  //   }
  //   const firstTotal = countTotalPoint(power);
  //   const secondTotal = countTotalPoint(power);
  //   const theWinner = firstTotal > secondTotal ? firstPokemon : secondPokemon;
  //   useEffect(() => {
  //     cardBattle.map((pokeTeam) => {
  //       setStatBase(pokeTeam.pokemonTeam.stats);
  //       statBase.reduce((total, stat) => {
  //         if (stat.base_stat > 0) {
  //           setPower((total += stat.base_stat));
  //         }
  //         return total;
  //       }, 0);
  //     });
  //   }, [power]);
  //   //
  //   return <div>Battle</div>;
};

export default BattleTeam;
