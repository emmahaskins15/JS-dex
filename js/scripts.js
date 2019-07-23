// start iife
var pokemonRepository = (function(){

  //repository of all of the pokemon
  var repository = [
    {name: 'Bulbasaur', height: 70, types: ['grass', 'poison']},
    {name: 'Ivysaur', height: 100, types: ['grass', 'poison']},
    {name: 'Venusaur', height: 200, types: ['grass', 'poison']}
  ];

  //Adds pokemon to repository
  function addPokemon(pokemon){
    repository.push(pokemon);
  }

  //returns pokemon repository
  function getAllPokemon(){
    return repository;
  }


  //add list item to
  function addListItem(pokemonItem){
    var listItemText = document.createTextNode(pokemonItem.name); //pokemon name
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

    // Logs pokemon to console on click
    $detailsButton.addEventListener('click', function(event) {
      console.log(pokemonItem.name);
  });
}



  /* To be implemented in future

  // show details on button click
  function showDetails(pokemonItem){
    console.log(pokemonItem);

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
          child.appendChild(pokemonItem.name, pokemonItem.height, pokemon.types);

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


  //public functions
  return {
    addPokemon: addPokemon,
    getAllPokemon: getAllPokemon,
    addListItem: addListItem
  };

})();

var allPokemon = pokemonRepository.getAllPokemon();

//displays pokemon repository
allPokemon.forEach(function(pokemonItem){
  pokemonRepository.addListItem(pokemonItem);
});
