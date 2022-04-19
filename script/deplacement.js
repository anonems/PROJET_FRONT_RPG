
let mobile = document.querySelector("#mobile");

// Position initiale de mon élément
let ligne = 4;
let colonne = 5;

mobile.style.gridColumn = colonne;
mobile.style.gridRow = ligne;

// La fonction de déplacement
function deplacement(event) {
    let touche = event.key;
    var C = document.getElementById("mobile")
    C.style.backgroundImage = "url(data/perso.png)"
    C.style.backgroundSize = "25px"
    C.style.width = "50px"
    C.style.height = "50px"
    C.style.backgroundRepeat = "no-repeat"
 	C.style.position = 'absolute';
 	C.style.left = 0;
 	C.style.top = 0;

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {
            C.style.backgroundImage = "url(data/perso_dos.png)"
            C.style.backgroundColor = 'transparent'
            ligne--; // On enlève 1 à la ligne
        }
        console.log("haut, ligne : " + ligne);
    }
    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 20) {
            C.style.backgroundImage = "url(data/perso.png)"
            C.style.backgroundColor = 'transparent'
            ligne++; // On ajoute 1 à la ligne
        }
        console.log("bas, ligne : " + ligne);
    }
    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {
            C.style.backgroundImage = "url(data/perso_gauche.png)"
            C.style.backgroundColor = 'transparent'
            colonne--; // On enlève 1 à la colonne
        }
        console.log("gauche, colonne : " + colonne);
    }
    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 20) {
            C.style.backgroundImage = "url(data/perso_droite.png)"
            C.style.backgroundColor = 'transparent'
            colonne++; // On ajoute 1 à la colonne
        }
        console.log("droite, colonne : " + colonne);
    }

    // Récupération de l'élément
    let mobile = document.querySelector("#mobile");

    // Positionner l'élément
    mobile.style.gridColumn = colonne;
    mobile.style.gridRow = ligne;
}

// L'évènement sur le document
document.onkeyup = deplacement;


function vals(){
    let valeurs = []
    for (let i = 0; i < 9; i++) {
        valeurs[i] = [
            ["table", 1], 
            ["mur", 2], 
            ["terre", 3],
            ["porte", 4],
            ["toit",5], 
            ["brick", 6],
            ["sel",7], 
            ["buisson",8], 
            ["buisson",9], 
            ["buisson",10],
        ]     
    }
    return valeurs
}
    let valeursbis = vals()
    //document.getElementById("ok").innerHTML = valeursbis

    for(let l=0; l<3;l++){
        for(let m=0; m<3; m++){
        document.getElementById("namm").innerHTML = "<li style='grid-column:"+valeursbis[l][m][1]+"' >"+valeursbis[l][m][0]+"</li>"
    }
}

