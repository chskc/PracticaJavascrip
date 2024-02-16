
/* Usa un for para remplazar todas las comidas que no sean veganas con las
comidas del array de frutas.
recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante.
*/

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];


for (let index = 0; index < foodSchedule.length; index++) {

if(foodSchedule[index].isVegan == false){

foodSchedule[index].name = fruits[0];
foodSchedule[index].isVegan = true;

fruits.splice(0,1);

}

}

console.log(foodSchedule);
To

