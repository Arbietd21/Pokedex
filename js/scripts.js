//repository for pokemonList
let pokemonRepository = (function() {

    //array of pokemon
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
        button.addEventListener('click', function (event) {
            showDetails(pokemon)
        });
    }
  
    function loadList() {
        //fetches info from apiUrl (defined above) //.then initiates promise
        return fetch(apiUrl).then(function (response) {
            //.json takes data from api and turns it into objects for js to read
            return response.json();
        //initiates another promise now that the api data is readable   
        }).then(function (json) {
            //makes a forEach loop for the data located in the .result of the api
            json.results.forEach(function (item) {
                //make a pokemon(variable used) fom each object
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                //function created earlier in the repository
                add(pokemon);
            });
        }).catch(function (e) {
          console.error(e);
        })
    }

    function loadDetails(item) {
        //refers to the detailsUrl defined above //item = each pokemon listed
        let url = item.detailsUrl;
        //fetches the api accessed with the url variable defined above
        return fetch(url).then(function (response) {
            //makes the api data readable for js
            return response.json();
        //pulls the details from each pokemon using the readable data    
        }).then(function(details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        })
    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function (){
            console.log(pokemon)
        });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
    };

})();


pokemonRepository.loadList().then(function () {
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
});
