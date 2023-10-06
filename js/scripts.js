let pokemonList = [

    {name: 'Bulbasaur',
    height: 0.7,
    type: 'grass'},

    {name: 'Ivysaur',
    height: 1,
    type: ['grass', 'poison']},

    {name: 'Venasaur',
    height: 2,
    type: 'grass'},

    {name: 'Charmander',
    height: 0.6,
    type: 'fire'},

    {name: 'Charmeleon',
    height: 1.1,
    type: 'fire'},

    {name: 'Charizard',
    height: 1.7,
    type: 'dragon'},

    {name: 'Squirtle',
    height: 0.5,
    type: 'water'},

    {name: 'Wartortle',
    height: 1,
    type: 'water'},

    {name: 'Blastoise',
    height: 1.6,
    type: 'water'},

];

console.log(pokemonList[1].type[1]);