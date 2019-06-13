//Declaring Pokedex database
var dex = [
  {name: 'Bulbasaur', height: 70, types: ['grass', 'poison']},
  {name: 'Ivysaur', height: 100, types: ['grass', 'poison']},
  {name: 'Venusaur', height: 200, types: ['grass', 'poison']}
];

//Listing contents of Pokemon database
dex.forEach(function(property) {
    if (property.height < 200){
    document.write('Name: '+property.name+'<br>');
    document.write('Height: '+property.height+'cm<br>');
    document.write('Types: '+property.types.join(', ')+'<br>');
    document.write('<br>');
  }
    else {
      document.write('Name: '+property.name+'<br>');
      document.write('Height: '+property.height+'cm - Wow! That\'s big!<br>');
      document.write('Types: '+property.types.join(', ')+'<br>');
      document.write('<br>');
        }
  }
)
