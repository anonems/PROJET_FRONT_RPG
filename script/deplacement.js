let mobile = document.querySelector("#mobile");

// Position initiale de mon élément
let ligne = 0;
let colonne = 0;
let livres = 0
let key = 0

mobile.style.gridColumn = colonne;
mobile.style.gridRow = ligne;

let valeurs = []
    valeurs = [
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', '#', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '+', ' '],
		[' ', ' ', ' ', '-', '-', '-', ' ', ' ', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', ' ', '_', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '_', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ']
	]

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
        if (valeurs[ligne-1][colonne] != '-'){
            if (ligne > 1) {
                C.style.backgroundImage = "url(data/perso_dos.png)"
                C.style.backgroundColor = 'transparent'
                ligne--; // On enlève 1 à la ligne
            
                if (valeurs[ligne-1][colonne] == "+"){
                    if( window.confirm("voulez-vous récupérer ce livre ?") ){
                        livres++
                        valeurs[ligne-1][colonne] = ' '
                    }
                }
                if (valeurs[ligne-1][colonne] == "#"){
                    if( window.confirm("voulez-vous récupérer cette clefs ?") ){
                        key++
                        valeurs[ligne-1][colonne] = ' '
                    }
                }
            }
        }
    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (valeurs[ligne+1][colonne] != '-'){
            if (ligne < 20) {
                C.style.backgroundImage = "url(data/perso.png)"
                C.style.backgroundColor = 'transparent'
                ligne++; // On ajoute 1 à la ligne
            
                if (valeurs[ligne+1][colonne] == "+"){
                    if( window.confirm("voulez-vous récupérer ce livre ?") ){
                        livres++
                        valeurs[ligne+1][colonne] = ' '
                    }
                }
                if (valeurs[ligne+1][colonne] == "#"){
                    if( window.confirm("voulez-vous récupérer cette clefs ?") ){
                        key++
                        valeurs[ligne+1][colonne] = ' '
                    }
                }
            }
        }
    }
        // fleche gauche
    else if (touche == "ArrowLeft") {
        if (valeurs[ligne][colonne-1] != '-'){
            if (colonne > 1) {
                C.style.backgroundImage = "url(data/perso_gauche.png)"
                C.style.backgroundColor = 'transparent'
                colonne--; // On enlève 1 à la colonne
        
                if (valeurs[ligne][colonne-1] == "+"){
                    if( window.confirm("voulez-vous récupérer ce livre ?") ){
                        livres++
                        valeurs[ligne][colonne-1] = ' '
                    }
                }
                if (valeurs[ligne][colonne-1] == "#"){
                    if( window.confirm("voulez-vous récupérer cette clefs ?") ){
                        key++
                        valeurs[ligne][colonne-1] = ' '
                    }
                }
            }
        }
    }
        // fleche droite
    else if (touche == "ArrowRight") {
        if (valeurs[ligne][colonne+1] != '-'){
            if (colonne < 20) {
                C.style.backgroundImage = "url(data/perso_droite.png)"
                C.style.backgroundColor = 'transparent'
                colonne++; // On ajoute 1 à la colonne
            
                if (valeurs[ligne][colonne+1] == "+"){
                    if( window.confirm("voulez-vous récupérer ce livre ?") ){
                        livres++
                        valeurs[ligne][colonne+1] = ' '
                    }
                }
                if (valeurs[ligne][colonne+1] == "#"){
                    if( window.confirm("voulez-vous récupérer cette clefs ?") ){
                        key++
                        valeurs[ligne][colonne+1] = ' '
                    }
                }
            }
        }
    }

        // Récupération de l'élément
        let mobile = document.querySelector("#mobile");

        // Positionner l'élément
        mobile.style.gridColumn = colonne;
        mobile.style.gridRow = ligne;
}

// L'évènement sur le document
document.onkeyup = deplacement;

