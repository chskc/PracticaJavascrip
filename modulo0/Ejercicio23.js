
//Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios
//que sean menor de edad
//precedidos del texto "Usuarios menores de edad:"
// otro que imprima a los usuarios mayores de edad,
// precedido del texto "Usuarios mayores de edad:".

const users = [
{name: "Abel", years: 43}, //0
{name: "Maria", years: 18}, //1
{name: "Pedro", years: 14}, //2
{name: "Samantha", years: 32}, //3
{name: "Raquel", years: 16} //4
];

let UsersMayores = '';
let UsersMenores = '';


for (let y = 0; y < users.length; y++) {

if(users[y].years<18){

UsersMenores += users[y].name + " ";

} else {

UsersMayores += users[y].name + " ";

}
}

console.log("Los usuarios menores son: "+UsersMenores);
console.log("Los usuarios mayores son: "+UsersMayores);