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

for (i = 0; pokemonList.length; i++){
    if (pokemonList[i].height >= 1.5){
        document.write(`${pokemonList[i].name} (${pokemonList[i].height}m) is big!` + '<br>' + '<br>');
    } else if (pokemonList[i].height < 1.5 && pokemonList[i].height >= 0.7){
        document.write(`${pokemonList[i].name} (${pokemonList[i].height}m) is averaged sized.` + '<br>' + '<br>');
    } else {
        document.write(`${pokemonList[i].name} (${pokemonList[i].height}m) is small` + '<br>' + '<br>');
    }
}