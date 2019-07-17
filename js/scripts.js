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

  //create LI
  function addListItem(pokemon){
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.classList.add('pokedexButton')
    listItem.appendChild(button);
    $pokemonList.appendChild(listItem);
    button.innerText=pokemon.name;

  }

  //public functions
  return {
    addPokemon: addPokemon,
    getAllPokemon: getAllPokemon,
    addListItem: addListItem
  };

})();

//returns pokemon height in cm
function getPokemonHeight(singlePokemon){
  return singlePokemon.height + 'cm ';
}

//for pokemon larger than 200cm, returns string
function getPokemonHeightComment(singlePokemon){
  if (singlePokemon.height >= 200){
    return 'Wow - that\'s big!';
  }
  else {
      return null;
  }
}

//returns pokemon types
function getPokemonTypes(singlePokemon){
  return singlePokemon.types;
}

//returns pokemon name, height, and type as string
function getPokemonDescription(singlePokemon){
  return singlePokemon.name + ' (' + getPokemonHeight(singlePokemon) + getPokemonTypes(singlePokemon) + ')';
}

//if getPokemonHeight is truthy, returns getPokemonDescription and getPokemonHeightComment
function getVerbosePokemonDescription(singlePokemon){
  if (getPokemonHeightComment(singlePokemon)) {
    return getPokemonDescription(singlePokemon) + ' - ' + getPokemonHeightComment(singlePokemon);
  }
  else {
    return getPokemonDescription(singlePokemon);
  }
}

var allPokemon = pokemonRepository.getAllPokemon();
var $pokemonList = document.querySelector('.pokemon-list');
var addPokemonList = pokemonRepository.addListItem();

//displays pokemon repository
allPokemon.forEach(addPokemonList);
