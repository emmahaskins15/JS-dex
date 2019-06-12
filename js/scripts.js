var dex = [
  {name: 'Bulbasaur', height: 70, types: ['grass', 'poison']},
  {name: 'Ivysaur', height: 100, types: ['grass', 'poison']},
  {name: 'Venusaur', height: 200, types: ['grass', 'poison']}
];

for (var i = 0; i < dex.length; i++) {
  if (dex[i].height < 200){
  document.write('Name: '+dex[i].name+'<br>');
  document.write('Height: '+dex[i].height+'cm<br>');
  document.write('Types: '+dex[i].types.join(', ')+'<br>');
  document.write('<br>');
}
  else {
    document.write('Name: '+dex[i].name+'<br>');
    document.write('Height: '+dex[i].height+'cm - Wow! That\'s big!<br>');
    document.write('Types: '+dex[i].types.join(', ')+'<br>');
    document.write('<br>');
      }
}
