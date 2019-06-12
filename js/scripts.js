var repository = [
  {name: 'Bulbasaur', height: 70, types: ['grass', 'poison']},
  {name: 'Ivysaur', height: 100, types: ['grass', 'poison']},
  {name: 'Venusaur', height: 200, types: ['grass', 'poison']}
];
for (var i = 0; i < repository.length; i++) {
  if (repository[i].height < 200){
  document.write('Name: '+repository[i].name+'<br>');
  document.write('Height: '+repository[i].height+'cm<br>');
  document.write('Types: '+repository[i].types+'<br>');
  document.write('<br>');
}
  else {
    document.write('Name: '+repository[i].name+'<br>');
    document.write('Height: '+repository[i].height+'cm - Wow! That\'s big!<br>');
    document.write('Types: '+repository[i].types+'<br>');
    document.write('<br>');
      }
}
