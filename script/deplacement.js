//permet d'ecrire dans les zones de text
function ti(text){
    document.getElementById("instruzone").innerHTML = text
}
function tz(text){
    document.getElementById("textzone").innerHTML = text
}

//initialisation de la map de base
document.getElementById('mapzone').style.backgroundImage = "url('data/main-map.png')"
document.getElementById('mapzone').style.animation = "fadein 2s"

//permet d'initialiser les zones de text zones de textes
function init(){
    tz('<img src="data/logo.png" width="150px" >')
    ti('INSTRUCTIONS<br>déplace-toi avec les flèche du clavier<br><br><img style="position:absolute;bottom:5px" src="data/keys.png" width="80px" >')

}
init()

//on affiche le nombre de clef et cv déposer
function compteur(){

    ti("INSTRUCTIONS<br>déplace-toi avec les flèche du clavier")
    tz("cv déposé(s) = "+livres+", clef récupéré(s) = "+key)
}

//on affiche les instructions dans la zone de text
function instru(n){
    if(n==0){
    ti("INSTRUCTIONS<br>Pour valider clique sur Y,<br>Pour refuser clique sur N ")
    }
    else if(n==1){
        ti("Pour passer au suivant clique sur Entrée")
    }else if(n==2){
        ti("Pour continuer clique sur Espace")
    }else if(n==3){
        ti("INSTRUCTIONS<br>Pour valider cliquez sur Y,Pour refuser cliquez sur N ")
    }
}

//permet d'afficher des dialogues entre deux personnes
function dial(text1,text2){
    instru(1)
    tz(text1);
        document.addEventListener('keypress', (event) => {
        let code = event.code;
        if(code=="Enter"){
            tz(text2)
            instru(2)
        }
        else if(code=="Space"){
init()        }   
    }, false);  
}

//permet d'afficher du text informatif
function alerte(text){
    instru(2)
    tz(text);
        document.addEventListener('keypress', (event) => {
        let code = event.code;
        if(code=="Space"){
            init()
        }
    }, false); 
    
}

//
let mobile = document.querySelector("#mobile");
// Position vertical
let ligne = 0;
// position horizontal
let colonne = 0;
// nombre de cv déposer
let livres = 0;
//nombre de clef recupere
let key = 0;
//grille de déplacement
let valeurs

//grille map principal
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
		['-', '+', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', ' ', ' ']
	]

    //grille map deux
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

    //grille map trois
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

    //grille map quatre
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

// on defini la grile a utiliser pour commencer
valeurs = valeurs1

//permet de deposer un cv au endroit definis
function recup_livre(){
    if (valeurs[ligne][colonne] == "+"){
        instru(0)
        tz("voulez-vous déposer votre CV ici ?")
        document.addEventListener('keypress', (event) => {
            let code = event.code;
        if(code=="KeyY"){
            livres=livres+1;
            valeurs[ligne][colonne] = '-';
            compteur()
        }   else{            
            compteur()
        }
    }, false);  
    }
}

//permet de recupere des clef au endroit cacher
function recup_key(){
    if (valeurs[ligne][colonne] == "#"){
        instru(0)
        tz("voulez-vous récupérer cette clefs ?")
        document.addEventListener('keypress', (event) => {
            let code = event.code;
        if(code=="KeyY"){
            key=key+1;
            valeurs[ligne][colonne] = ' ';
            compteur()
        }   else{            
            compteur()
        }
    }, false);  
    }
}

//permet de franchir la première porte
function open_door1(){
    if (valeurs[ligne][colonne] == "_"){
        if (key<1){
            tz("avant de franchir la porte il faut récupérer une cléfs cacher dans la map !")
        }
        else if (key == 1){
            instru(0)
            tz("voulez-vous entrer dans cette salle ?")
            document.addEventListener('keypress', (event) => {
            let code = event.code;
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

//permet de franchir la seconde map
function open_door2(){
    if (valeurs[ligne][colonne] == "~"){
        if(key<2 ){
            tz("avant de franchir la porte il faut récupérer 2 cléfs cacher dans les maps !")

        }else{
            instru(0)
            tz("voulez-vous entrer dans cette salle ?")
            document.addEventListener('keypress', (event) => {
            let code = event.code;
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

//permet de franchir la troisieme map
function open_door3(){
    if (valeurs[ligne][colonne] == "!"){
        if(key<3 ){
            tz("avant de franchir la porte il faut récupérer 3 cléfs cacher dans les maps !")

        }
        else{
            instru(0)
            tz("voulez-vous entrer dans cette salle ?")
            document.addEventListener('keypress', (event) => {
            let code = event.code;
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
//permet de faire parler les PNJ sur les maps un deux et trois
let parole = 0
function dialogue(){
    if (valeurs[ligne][colonne] == "*"){
        parole=parole+1
        if (parole == 1){
            dial("Bonjour et bienvenu à hetic ! <br><br> Pour accéder aux salles secondaires il te faut récupérer 3 clés que tu trouvera à différents endroit...", "Pour décrocher ton stage et etres eventuellement recruter, tu doit déposer ton CV dans 9 boites disponnibles dans les différentes maps...")
        }else if (parole == 2){
            instru(0)
            tz("PNJ : A tu besoin d'aide ?")
            document.addEventListener('keypress', (event) => {
                let code = event.code;
            if(code=="KeyY"){
                dial(" vous : je cherche l'école HeTiC",'PNJ : elle se trouve en haut du classement.')
            }   else{            
                init() }    }, false);  
            }
        else if (parole == 3){
            instru(0)
            tz("Parler à ce PNJ ?")
            document.addEventListener('keypress', (event) => {
                let code = event.code;
            if(code=="KeyY"){
                dial(" vous : Bonjour", "PNJ : Je n'ai pas de temps à perdre")
            }   else{            
                init() }    }, false);  
            }
    
        else if (parole == 4){
            if(livres < 3){
                alerte('Attention je vois que tu n\'a pas déposer assez de CV dans la map précédente,<br> tu peut toujours y retourner.')
            }
            else {alerte('Salut, bravo tu à franchi la première étape,<br> à toi d\'augmenter tes chances en postulant d\'avantage ici, good luck')}
        }
        else if (parole == 5){
            if(livres < 6){
                alerte('Attention je vois que tu n\'a pas déposer assez de CV dans la map précédente,<br> tu peut toujours y retourner.')
            }
            else {alerte('Salut, bravo tu à franchi la deuxième étape,<br> à toi d\'augmenter tes chances en postulant d\'avantage ici, good luck')}
        }
        valeurs[ligne][colonne] = '-'         
        
    }
}

//var de decompatage des point derniere map
let stp = 0

//permet de poser de question et repondre par oui ou non
function youn(text,r){
    instru(0)
    tz(text);
        document.addEventListener('keypress', (event) => {
        let code = event.code;
        if(code==r){
            tz("BRAVO ! bonne réponse")
            stp=stp+1
        }
        else {
        tz("DOMMAGE ! mauvaise réponse")       }   
    }, false);

}
//permet de faire un QCM
function prompte(q,a1,a2,a3,r){
    document.addEventListener('keypress', (event) => {
        let code = event.code;
        tz(q)
        ti("A)"+a1+"<br> B)"+a2+"<br> C)"+a3)
    if(code==r){
        tz("BRAVO ! Ta réponse est correct.")
        stp=stp+1
        }       
    else{
        tz("Dommage ! Mauvaise réponse.")
    }    
                 
    }, false);  
}

//permet de parler au personnages de la dernière map
let perso = 0
function stepoff(){
    if (valeurs[ligne][colonne] == "P"){
        perso++
        if (perso == 1){
            alerte('Bonjour, je pense que vous rechercher la conseillère. Elle se situe dans la salle du haut')
        }
        else if (perso == 2){
            if(livres < 9){
                alerte(' Bonjour, revenez me voir lorsque vous aurez déposé tous vos CV.')
            }
        }
        else if (perso == 3){
            if(livres == 9){
                alerte('Félicitation, vous avez déposé tous vos CV et vous avez décroché un entretien. Le directeur de la boîte vous attends dans la salle près de l\'accueil, allez-y sans tarder !  .')
            }
        }
        else if (perso == 4){
            alerte("Bonjour, j'ai une liste de 10 questions en culture générale si vous répondez correctement à 7 questions vous obtenez votre stage chez nous.")
        }
        else if (paroles == 5){
                prompte("La dernière version de HTML est... ", 'HTMTL5',"HTML6","HTML7","KeyA")
                prompte("Le ... est un langage informatique incontournable pour la mise en forme des pages sur internet.","CSS","HTML","PHP","KeyA")
                prompte("Le CMS le plus utilisé est ...", "GIT","WORDPRESS","WIX","KeyB")
                prompte("La signification de HTML est...", "HyperTextLourdMass", " HyperTextLanguage Markup","aucun","KeyB")
                youn("Les balises <HTML> et </HTML> sont placés dans le corps <BODY> d'un document HTML","KeyN")
                prompte("La balise <...> te permettra de mettre en gras un mot ?","u","b","j","KeyB")
                prompte(" Dans la norme HTML, il existe ... niveaux de titres.","6","9","4","KeyA")
                prompte("La balise <...> est utilisé pour faire un changement de ligne?","lr","hr","br","KeyC")
                prompte("HTML est considéré comme un language de ...","Develeppeur Back","balisage","soulignage","KeyB")
            
        }
        valeurs[ligne][colonne] = '-'         
    }
}

//permet de sortir des salles
let stepdor = 0
function exit(stepdor){
    if (valeurs[ligne][colonne] == "O"){
        tz("voulez-vous sortir de cette salle ?")
        instru(0)
            document.addEventListener('keypress', (event) => {
            var name = event.key;
            let code = event.code;
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

//
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


