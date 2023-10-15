//repository for pokemonList
let pokemonRepository = (function() {

    //array of pokemon
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

    //add pokemon to array
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    //access the array    
    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        //selects the <ul> on the html page
        let pokemonlist = document.querySelector('.pokemon-list');
        //adds and <li> element
        let listpokemon = document.createElement('li');
        //adds <button> element
        let button = document.createElement('button');
        //sets the pokemons name as the text for the button
        button.innerText = pokemon.name;
        //adds 'button-class' to the <button> that you added
        //used for css styling
        button.classList.add('button-class');
        //puts the <button> inside of any <li> elements
        listpokemon.appendChild(button);
        //puts the <li> element inside for the <ul> in the html page
        pokemonlist.appendChild(listpokemon);
        //event listener for any button clicks
        button.addEventListener('click', function () {
            showDetails(pokemon.type)
        })
    }
    //called in the eventListener when button is clicked
    function showDetails(pokemon){
        console.log(pokemon)
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
    };

})();



pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});

