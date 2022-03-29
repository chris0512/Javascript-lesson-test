const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort((a,b)=> b - a);

console.log(scores);


const players = [
    {name: 'mario', score:20},
    {name: 'luigi', score:10},
    {name: 'chun-li', score:50},
    {name: 'yoshi', score:30},
    {name: 'shaun', score:70}
];

players.sort((a,b)=>b.score - a.score);
console.log(players);