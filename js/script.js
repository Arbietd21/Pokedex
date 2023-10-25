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
        let listPokemon = document.createElement('li');
        //add .list-group-item class to <li>
        listPokemon.classList.add('list-group-item');
        //adds <button> element
        let button = document.createElement('button');
        //sets the pokemons name as the text for the button
        button.innerText = pokemon.name;
        //gives styling to the button with bootstrap
        button.classList.add('btn-primary');
        button.classList.add('btn')
        //enables the modal using bootstrap
        button.setAttribute('data-toggle', 'modal')
        button.setAttribute('data-target', '#modal-container')
        //puts the <button> inside of any <li> elements
        listPokemon.appendChild(button);
        //puts the <li> element inside for the <ul> in the html page
        pokemonlist.appendChild(listPokemon);
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
            item.imageUrlFront = details.sprites.front_default;
            item.imageUrlBack = details.sprites.back_default;
            item.height = details.height;
            item.types = details.types;
            item.weight = details.weight;
        }).catch(function (e) {
            console.error(e);
        })
    }

    function showModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalHeader = $('.modal-header');
        let modalTitle = $('.modal-title');

        modalTitle.empty();
        modalBody.empty();

        let nameElement = $(`<h1>${pokemon.name}</h1>`);
        let imageElementFront = $(`<img class='modal-img'>`);
        imageElementFront.attr('src', pokemon.imageUrlFront);
        let imageElementBack = $(`<img class='modal-img'>`);
        imageElementBack.attr('src', pokemon.imageUrlBack);
        let pokemonHeight = $(`<p>Height: ${pokemon.height}</p>`)
        let pokemonWeight = $(`<p>Weight: ${pokemon.weight}</p>`)

        modalTitle.append(nameElement);
        modalBody.append(imageElementFront);
        modalBody.append(imageElementBack);
        modalBody.append(pokemonHeight);
        modalBody.append(pokemonWeight);
    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            showModal(pokemon);
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
