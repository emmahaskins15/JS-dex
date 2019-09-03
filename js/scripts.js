// start iife
var pokemonRepository = (function(){

  //repository of all of the pokemon
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  //fetch API JSON
  function loadList(){
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        addListItem(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    })
  }

    //Load details from API items
    function loadDetails(item){
      var url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
      }).catch(function (e) {
        console.error(e);
      });
    }

  //returns pokemon repository
  function getAll(){
    return repository;
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
        });
      }

  //add list item to
  function addListItem(item){
    var listItemText = document.createTextNode(item.name); //pokemon name
    //var buttonText = document.createTextNode($pokemon.name);     //button text

    //creating DOM elements
    var $pokemon = document.createElement('pokemon');
    var $detailsButton = document.createElement('button');
    var $li = document.createElement('li');
    var $pokemonList = document.querySelector('.pokemon-list');

    // add class to li
    $detailsButton.classList.add('pokedexButton');
    $li.classList.add('list-item');

    //append elements to DOM
    $detailsButton.appendChild(listItemText);
    $li.appendChild($pokemon);
    $li.appendChild($detailsButton);
    $pokemonList.appendChild($li);

    $detailsButton.addEventListener('click', function() {
      showDetails(item);
    })
}

  function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    showModal(item);
      });
    }

  function showModal(title, text) {
    var $modalContainer = document.querySelector('#modal-container');

    //Clear existing modal content
    $modalContainer.innerHTML = '';

    var modal = document.createElement('div');
    modal.classList.add('modal');

    // Add new modal button
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    var titleElement = document.createElement('h1');
    titleElement.innerText = title;

    var contentElement = document.createElement('p');
    contentElement.innerText = text;

    var $detailsButton = document.querySelector('.pokedexButton');

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    $modalContainer.appendChild(modal);
    $detailsButton.appendChild($modalContainer);

    $modalContainer.classList.add('is-visible');
  }

  // document.querySelector('#show-modal').addEventListener('click', function() {
  //   showModal('Modal title', 'Modal body');
  // });

function hideModal() {
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.classList.remove('is-visible');


window.addEventListener('keydown', (e) => {
  var $modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' &&  $modalContainer.classList.contains('is-visible'))
    {
      hideModal();
    }
  });

  $modalContainer.addEventListener('click', (e) => {
    var target = e.target;
    if (target === $modalContainer)
    {
      hideModal();
    }
  });
}


    return {
      addListItem: addListItem,
      getAll: getAll,
      // search: search,
      loadList: loadList,
      loadDetails: loadDetails,
      showModal: showModal,
      hideModal: hideModal,
      showDetails:showDetails
    };

})();


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    addListItem(pokemon);
  });
});

var allPokemon = pokemonRepository.getAll();

//displays pokemon repository
allPokemon.forEach(function(item){
  pokemonRepository.addListItem(item);
});
