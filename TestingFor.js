// Use a **for** loop to go through all the array destinations and remove the elements that have the id 11 and 40. Print in a ***console log*** the array.
//  You can use this array:

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];


for(let i=0;i<placesToTravel.length;i++){
    if(placesToTravel[i].id==11 || placesToTravel[i].id==40){
        placesToTravel.splice(i,1);
    }
}

console.log(placesToTravel);