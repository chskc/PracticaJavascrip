//Elimina el último elemento del array y muestra el primero y el último por consola.


const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

RickAndMortyCharacters.pop();
//para eliminar el ultimo elemento

console.log(RickAndMortyCharacters[0]+" "+RickAndMortyCharacters[RickAndMortyCharacters.length-1]);