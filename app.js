// decla variable
let nb1;
let nb2;
let nbtransform1;
let nbtransform2;
calculatrice();
// fonction calculatrice
function calculatrice(){
    let choix = prompt("Bienvenue dans la super calculatrice!\nVeuillez choisir une option:\n1 réaliser une addition\n2 réaliser une soustraction\n3 réaliser une division\n4 réaliser une multiplication");  
    if(choix == 1){
        demander(); 
        checkNombre(nb1,nb2); 
        convertirNombre(nb1,nb2);
        addition(nbtransform1, nbtransform2);        
    }else if (choix == 2){
        demander();   
        checkNombre(nb1,nb2);     
        convertirNombre(nb1,nb2);
        soustraction(nbtransform1, nbtransform2);                 
    }else if (choix == 3){ 
        demander(); 
        checkNombre(nb1,nb2);       
        convertirNombre(nb1,nb2);
        division(nbtransform1, nbtransform2); 
    }else if (choix == 4){
        demander();
        checkNombre(nb1,nb2);    
        convertirNombre(nb1,nb2);
        multiplication(nbtransform1, nbtransform2);
    }else{
        if(confirm('Veuillez saisir une opération valide. Appuyez sur "OK" pour recommencer ou "Annuler" pour quitter')){
            calculatrice();
        } 
    }    
}
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
