let pokemonRepository = (function() {

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

    function add(pokemon) {
        pokemonList.push(pokemon);
      }

    function getAll() {
        return pokemonList;
    }

    return {
        getAll: getAll,
        add: add
    };

})();



pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height <= 0.7) {
        document.write(`${pokemon.name} is small` + `<br>` + `<br>`);
    } else if (pokemon.height > 0.7 && pokemon.height < 1.4) {
        document.write(`${pokemon.name} is average sized` + `<br>` + `<br>`);
    } else {
        document.write(`${pokemon.name} is big!` + `<br>` + `<br>`);
    }
});

