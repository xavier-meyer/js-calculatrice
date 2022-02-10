// decla variable
let nb1;
let nb2;
let nbtransform1;
let nbtransform2;
// fonction calculs()
function addition(nb1, nb2){
    let calcul = nb1+nb2;
    alert(calcul);
}
function soustraction(nb1, nb2){
    let calcul = nb1-nb2;
    alert(calcul);
}
function division(nb1, nb2){
    let calcul = nb1/nb2;
    alert(calcul);
}
function multiplication(nb1, nb2){
    let calcul = nb1*nb2;
    alert(calcul);
}
//function checkNombre()
function checkNombre(nb1, nb2){
    if(isNaN(nb1) || isNaN(nb2)){
        alert("Veuillez saisir des nombres");
        calculatrice();
    }
}
//function demandeNombre()
function demandeNombre(){
    nb1 = prompt("Veuillez saisir le premier nombre de l'opération");
    nb2 = prompt("Veuillez saisir le deuxième nombre de l'opération");
}
//function conversionNombre()
function conversionNombre(nb1,nb2){
    nbConvert1 = parseInt(nb1);
    nbConvert2 = parseInt(nb2);
}
