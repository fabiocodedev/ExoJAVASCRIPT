
Etudiant=[
    ["Moussa",14],
    ["Vanessa",17], 
    ["Jean",8], 
    ["Afpa",5]]

    count = 0

for (let index = 0; index < Etudiant.length; index++) {
    const element = Etudiant[index];
    //console.log("" +  Etudiant[index]);

   
   // for (let index1 = 0; index1 < Etudiant[index].length; index1++) {
        if (Etudiant[index][1] >= 10){
           console.log(Etudiant[index][0] + " est admis(e) avec une moyenne de: " + Etudiant[index][1]);
        }
        else{
            console.log(Etudiant[index][0] + " n’est pas admis, moyenne de: " + Etudiant[index][1]); 
        }
        //const element = array[1];
        //count++ 
    //}

}

//console.log(count);