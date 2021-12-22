// Use a for...of loop to loop through all the toys and add the ones with more than 15 sales (sellCount) to the popularToys array.
// Print it by console... You can use this array:

const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for(toy of toys){
    if(toy.sellCount>15){
        popularToys.push(toy);
    }
}

console.log(popularToys);