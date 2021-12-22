// Check on each of the users that they have at least two approved quarters and add the isApproved property to true or false accordingly.
// Once you have it check it with a console.log.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];


for(let i=0;i<alumns.length;i++){
    if( (alumns[i].T1 && alumns[i].T2) ||
        (alumns[i].T2 && alumns[i].T3) ||
        (alumns[i].T3 && alumns[i].T1)    ){
            alumns[i].isApproved=true;
        }else{
            alumns[i].isApproved=false;
        }
}

console.log(alumns);