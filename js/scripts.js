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
      })
    }

  return {
    addListItem: addListItem,
    getAll: getAll,
    // search: search,
    loadList: loadList,
    loadDetails: loadDetails
  };

  //returns pokemon repository
  function getAll(){
    return repository;
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
    pokemonRepository.loadDetails(item).then(function ()
  {
    console.log(item); });
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

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    $modalContainer.appendChild(modal);
    $detailsButton.appendChild($modalContainer);

    $modalContainer.classList.add('is-visible');

    document.querySelector('button#show-modal').addEventListener('click', function() {
      showModal('Modal title', 'Modal body');
    });
  }



function hideModal() {
  var $modalContainer = document.querySelector('#modal-container');
  $modal.classList.remove('is-visible');
}

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


})();



  /* To be implemented in future

  // show details on button click
  function showDetails(item){
    console.log(item);

    //click event listener
      document.querySelector($detailsButton).addEventListener('click', function(event){

        // find the modal and remove if it exists
        function removeModal(){
          const modal = document.querySelector('.modal')
          if (modal) {
            modal.remove()
            }
          }

        //render modal
        function renderModal(element){
          var modal = document.createElement('div');
          modal.classList.add('modal');

        //create modal div
          var child = document.createElement('div');
          child.classList.add('child');
          child.innerHTML = element;
          child.appendChild(item.name, item.height, pokemon.types);

        //render modal with child on DOM
          modal.appendChild(child)
          document.body.appendChild(modal);
        }

        // remove modal if background clicked
         modal.addEventListener('click', function(event) {
           if (event.target.className === 'modal') {
             removeModal()
           }
         });
      });
    }*/


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
