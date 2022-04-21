document.getElementById('mapzone').style.backgroundImage = "url('data/main-map.png')"
document.getElementById('mapzone').style.animation = "fadein 2s"
document.getElementById("textzone").innerHTML = '<img src="data/logo.png" width="150px" >'
document.getElementById("instruzone").innerHTML = "INSTRUCTIONS<br>déplace-toi avec les flèche du clavier"
function init(){
    document.getElementById("textzone").innerHTML = '<img src="data/logo.png" width="150px" >'
    document.getElementById("instruzone").innerHTML = "INSTRUCTIONS<br>déplace-toi avec les flèche du clavier"
}
function compteur(){
    document.getElementById("textzone").innerHTML = ""
    document.getElementById("instruzone").innerHTML = ""
    document.getElementById("instruzone").innerHTML = "INSTRUCTIONS<br>déplace-toi avec les flèche du clavier"
    document.getElementById("textzone").innerHTML = "cv déposé(s) = "+livres+", clef récupéré(s) = "+key
}
function instru(n){
    if(n==0){
    document.getElementById("instruzone").innerHTML = "Pour valider cliquez sur Y,Pour refuser cliquez sur N  "
    }
    else if(n==1){
        document.getElementById("instruzone").innerHTML = "Pour valider cliquez sur Y,Pour refuser cliquez sur N  "
    }else if(n==2){
        document.getElementById("instruzone").innerHTML = "Pour valider cliquez sur Y,Pour refuser cliquez sur N  "
    }else if(n==3){
        document.getElementById("instruzone").innerHTML = "Pour valider cliquez sur Y,Pour refuser cliquez sur N  "
    }
}
let mobile = document.querySelector("#mobile");
// Position initiale de mon élément
let ligne = 0;
let colonne = 0;
let livres = 0;
let key = 0;
let valeurs
let valeurs1 = []
    valeurs1 = [
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		['*', '*', '#', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', '+'],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', '!', '!', '-', '-', '-', '-', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', ' ', ' ', ' ', '-', ' ', ' ', '-', '+', ' ', ' ', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', '-', ' ', ' '],
		[' ', ' ', ' ', '-', '-', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', '-', ' ', '*'],
		[' ', ' ', ' ', '-', '_', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '~', '-', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' '],
		['+', '+', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ']
	]
    let valeurs2 = []
    valeurs2 = [
		['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', '-', '*', '-', ' ', ' ', ' ', '-', '+', '-', '-', '-', '-', '-', '-', '-', '-', '-', '+', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', '-', '-', '-', ' ', '-', '-', '-', ' ', '-', '-', '-', '-', '-', ' ', ' ', '-', '-', '-', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', '-', '-', '-', ' ', '-', '-', '-', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', '-', ' ', ' ', '-', '-', '-', '-', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', '-', '-', '-', ' ', '-', '-', '-', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', '-', ' ', ' ', '-', '-', '-', '-', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', '-', '-', '-', '-', '-'],
		['-', '-', '-', '-', '-', ' ', '-', '-', '-', ' ', '-', '-', ' ', ' ', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', '-', '-', ' ', ' ', '-', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '+', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'O', 'O', '-', '-', '-', '-', '-', '-', '-', '-', '-']
	]
    let valeurs3 = []
    valeurs3 = [
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', '+', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', ' ', ' ', ' ', ' ', '-', '*', ' ', ' ', '-', '-', '-', ' ', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', ' ', ' ', ' ', '-', '-', '-', ' ', ' ', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-', '-', '-', '-', '-', '+', '-'],
		['-', '-', '-', '-', '-', ' ', ' ', '-', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', '-', '-', '-', ' ', ' ', '-', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', ' ', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', '-', '-', '-', ' ', ' ', '-', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', '-', '-', '-', '-', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '+', '-', '-', '-', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', '-', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
		['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'O', 'O', '-', '-', '-', '-', '-', '-', '-', '-', '-']	
    ]
    let valeurs4 = []
    valeurs4=
[
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', ' ', ' ', ' ', 'P', ' ', ' ', '-', '-', '-', '-', ' ', ' ', ' ', ' ', '-', '-', '-', '-'],
    ['-', '-', ' ', ' ', ' ', '-', '-', '-', ' ', ' ', ' ', '-', ' ', 'P', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', ' ', ' ', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', ' ', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', ' ', ' ', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', ' ', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', ' ', ' ', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', ' ', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', '-', '-', '-', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', ' ', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' ', '-', '-', ' ', 'P', '-', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', 'P', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'O', 'O', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]
valeurs = valeurs1
function recup_livre(){
    if (valeurs[ligne][colonne] == "+"){
        instru(0)
        document.getElementById('textzone').innerHTML = "voulez-vous déposer votre CV ici ?";
        document.addEventListener('keypress', (event) => {
            var name = event.key;
            var code = event.code;
        if(code=="KeyY"){
            livres++;
            valeurs[ligne][colonne] = '-';
            compteur()
        }   else{            
            compteur()
        }
    }, false);  
    }
}
function recup_key(){
    if (valeurs[ligne][colonne] == "#"){
        instru(0)
        document.getElementById('textzone').innerHTML = "voulez-vous récupérer cette clefs ?";
        document.addEventListener('keypress', (event) => {
            var name = event.key;
            var code = event.code;
        if(code=="KeyY"){
            key++;
            valeurs[ligne][colonne] = ' ';
            compteur()
        }   else{            
            compteur()
        }
    }, false);  
    }
}

function open_door1(){
    if (valeurs[ligne][colonne] == "_"){
        if (key<1){
            document.getElementById('textzone').innerHTML ="avant de franchir la porte il faut récupérer une cléfs cacher dans la map !"
        }
        else if (key == 1){
            instru(0)
            document.getElementById('textzone').innerHTML = "voulez-vous entrer dans cette salle ?";
            document.addEventListener('keypress', (event) => {
            var name = event.key;
            var code = event.code;
        if(code=="KeyY"){
            document.getElementById('mapzone').style.backgroundImage = "url('data/map2.png')"
            document.getElementById('mapzone').style.animation = "fadein 2s"
            valeurs=valeurs2
            ligne = 18
            colonne = 10
            stepdor = 1 
            init()
        }   else{            
            init()
        }
    }, false);  
       
        }
    }
}
function open_door2(){
    if (valeurs[ligne][colonne] == "~"){
        if(key<2 ){
            document.getElementById('textzone').innerHTML = "avant de franchir la porte il faut récupérer 2 cléfs cacher dans les maps !"

        }else{
            instru(0)
            document.getElementById('textzone').innerHTML = "voulez-vous entrer dans cette salle ?";
            document.addEventListener('keypress', (event) => {
            var name = event.key;
            var code = event.code;
        if(code=="KeyY"){
            document.getElementById('mapzone').style.backgroundImage = "url('data/map3.png')"
            document.getElementById('mapzone').style.animation = "fadein 2s"
            valeurs=valeurs3
            ligne = 18
            colonne = 10
            stepdor = 2
            init()
        }   else{            
            init()
        }
    }, false);  
       
        }
    }
}
function open_door3(){
    if (valeurs[ligne][colonne] == "!"){
        if(key<3 ){
            document.getElementById('textzone').innerHTML = "avant de franchir la porte il faut récupérer 3 cléfs cacher dans les maps !"

        }
        else{
            instru(0)
            document.getElementById('textzone').innerHTML = "voulez-vous entrer dans cette salle ?";
            document.addEventListener('keypress', (event) => {
            var name = event.key;
            var code = event.code;
        if(code=="KeyY"){
            document.getElementById('mapzone').style.backgroundImage = "url('data/map4.png')"
            document.getElementById('mapzone').style.animation = "fadein 2s"
            valeurs=valeurs4
            ligne = 18
            colonne = 10
            stepdor = 3 
            init()
        }   else{            
            init()
        }
    }, false);  
       
        }
    }
}
let parole = 0
function dialogue(){
    if (valeurs[ligne][colonne] == "*"){
        parole++
        if (parole == 1){
            // zt("Bonjour et bienvenu à hetic !")
            // zt("Pour décrocher ton stage  et etres eventuellement recruter, tu doit déposer ton CV dans 9 boites disponnibles dans les différentes maps...")
            // zt("Pour accéder aux salles secondaires il te faut récupérer 3 clés que tu trouvera à différents endroit...")
        }else if (parole == 2){
            if(prompt('Bonjour, avez vous besoin d\'aide?') == 'oui'){
                prompt(" je cherche la société ", "HeTiC")
                alert('elle se trouve en haut du classement.')
            }
        }else if (parole == 3){
            prompt('parlez a ce personnage')
            alert('je n\'ai pas de temps à perdre')
        }
        else if (parole == 4){
            if(livres < 3){
                alert('Attention je vois que tu n\'a pas déposer assez de CV dans la map précédente, tu peut toujours y retourner.')
            }
            else {alert('Salut, bravo tu à franchi la première étape, à toi d\'augmenter tes chances en postulant d\'avantage ici, good luck')}
        }
        else if (parole == 5){
            if(livres < 6){
                alert('Attention je vois que tu n\'a pas déposer assez de CV dans la map précédente, tu peut toujours y retourner.')
            }
            else {alert('Salut, bravo tu à franchi la deuxième étape, à toi d\'augmenter tes chances en postulant d\'avantage ici, good luck')}
        }
        valeurs[ligne][colonne] = '-'         
        
    }
}
let perso = 0
function stepoff(){
    if (valeurs[ligne][colonne] == "P"){
        perso++
        if (perso == 1){
            alert('Bonjour, je pense que vous rechercher la conseillère. Elle se situe dans la salle du haut')
        }
        else if (perso == 2){
            if(livres < 9){
                alert(' Bonjour, revenez me voir lorsque vous aurez déposé tous vos CV.')
            }
        }
        else if (perso == 3){
            if(livres == 9){
                alert('Félicitation, vous avez déposé tous vos CV et vous avez décroché un entretien. Le directeur de la boîte vous attends dans la salle près de l\'accueil, allez-y sans tarder !  .')
            }
        }
        else if (perso == 4){
            alert("Bonjour, j'ai une liste de 10 questions en culture générale si vous répondez correctement à 7 questions vous obtenez votre stage chez nous.")
        }
        else if (paroles == 5){
            if(prompt("La dernière version de HTML est... ") == 'HTMTL5'){
                prompt("Le ... est un langage informatique incontournable pour la mise en forme des pages sur internet.","CSS")
                prompt("Le CMS le plus utilisé est ...", "wordPress")
                prompt("La signification de HTML est...", " HyperTextLanguage Markup ?")
                prompt("VRAI ou FAUX - Les balises <HTML> et </HTML> sont placés dans le corps <BODY> d'un document HTML","faux")
                prompt("La balise <...> te permettra de mettre en gras un mot ?","em")
                prompt(" Dans la norme HTML, il existe ... niveaux de titres.","6")
                prompt("La balise <...> est utilisé pour faire un changement de ligne?","br")
                prompt("Dans les niveaux de titre, <...> donnent la plus petite taille.","H6")
                prompt("HTML est considéré comme un language de ...","balisage")

            }
        }
        valeurs[ligne][colonne] = '-'         
    }
}
let stepdor = 0
function exit(stepdor){
    if (valeurs[ligne][colonne] == "O"){
        document.getElementById('textzone').innerHTML = "voulez-vous sortir de cette salle ?";
        instru(0)
            document.getElementById('textzone').innerHTML = "voulez-vous entrer dans cette salle ?";
            document.addEventListener('keypress', (event) => {
            var name = event.key;
            var code = event.code;
            document.getElementById('mapzone').style.backgroundImage = "url('data/main-map.png')"
        document.getElementById('mapzone').style.animation = "fadein 2s"
        setTimeout(() => {document.getElementById('mapzone').style.animation = ""}, 2000)
        valeurs=valeurs1
        if(code=="KeyY"){
            if (stepdor == 1){
                ligne = 14
                colonne = 5
            }else if (stepdor == 2){
                ligne = 14
                colonne = 18
            }else if (stepdor == 3){
                ligne = 10
                colonne = 11
            }   
            init()
        }   else{            
            init()
        }
    }, false);  
    }
}

mobile.style.gridColumn = colonne;
mobile.style.gridRow = ligne;



// La fonction de déplacement
function deplacement(event) {
    let touche = event.key;
    var C = document.getElementById("mobile")
    //C.style.backgroundColor = "white"
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
        if (valeurs[ligne-1][colonne] != '-' && valeurs[ligne-1][colonne] != '*'){
            if (ligne > 1) {
                C.style.backgroundImage = "url(data/perso_dos.png)"
                C.style.backgroundColor = 'transparent'
                ligne--; // On enlève 1 à la ligne
            
                recup_livre()
                recup_key()
                open_door1()
                open_door2()
                open_door3()
                dialogue()
                stepoff()  
                exit(stepdor)
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
            
                recup_livre()
                recup_key()
                open_door1()
                open_door2()
                open_door3()                
                dialogue()
                stepoff()  
                exit(stepdor)
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
        
                recup_livre()
                recup_key()
                open_door1()
                open_door2()
                open_door3()                
                dialogue()
                stepoff()  
                exit(stepdor)
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
            
                recup_livre()
                recup_key()
                open_door1()
                open_door2()
                open_door3()
                dialogue()
                stepoff()  
                exit(stepdor)
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


