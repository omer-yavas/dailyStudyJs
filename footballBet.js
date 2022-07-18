'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//array içindeki iki array e değişken atama
const [players1, players2] = game.players;

const [gk1, ...fieldPlayers1] = players1;
//iki array i birleştirme
const allPlayers = [...players1, ...players2];
//array e ek değerler atama
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;
console.log(draw, team2, team1);

const printGoals = function (...playerNames) {
  console.log(playerNames, 'with score', game.score);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

team1 < team2 && console.log('team 1 is lıkely to win');
team2 < team1 && console.log('team 2 is lıkely to win');
