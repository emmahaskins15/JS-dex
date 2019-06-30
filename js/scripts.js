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

  //public functions
  return {
    addPokemon: addPokemon,
    getAllPokemon: getAllPokemon
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

//displays pokemon repository
allPokemon.forEach(function(singlePokemon){
  document.write(getVerbosePokemonDescription(singlePokemon)+'<br>');
});
