// Use a for...of loop to go through all the toys and remove the ones that include the word cat.
// Remember that you can use the .includes() function to check it.You can use this array:

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
  { id: 40, name: "El perro felix" },       //Afegit per demostrar que la solució aportada pel forOf no és del tot correcte
];


// for(toy of toys){
//     if(toy.name.includes(`gato`)){
//         toys.splice(toys.indexOf(toy));     //Aquí s'esborra tot el que es troba darrere del primer -name- que contingui "gato"
//     }
// }

for(let i=0; i<toys.length;i++){
    if(toys[i].name.includes(`gato`)){
        toys.splice(i,1);
        i--;
    }
}

console.log(toys);