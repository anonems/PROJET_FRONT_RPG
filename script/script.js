//permet d'ecrire dans les zones de text
function ti(text){
    document.getElementById("instruzone").innerHTML = text
}
function tz(text){
    document.getElementById("textzone").innerHTML = text
}

//initialisation de la map de base
document.getElementById('mapzone').style.backgroundImage = "url('data/main-map.png')"
//document.getElementById('mapzone').style.animation = "fadein 2s"

//permet d'initialiser les zones de text zones de textes
function init(){
    tz('<img src="data/logo.png" width="150px" >')
    ti('INSTRUCTIONS<br>déplace-toi avec les flèches du clavier<br><br><img style="position:absolute;bottom:5px" src="data/keys.png" width="80px" >')
}
init()

//on affiche le nombre de clef et cv déposer
function compteur(){
    init()
    // ti("INSTRUCTIONS<br>déplace-toi avec les flèche du clavier")
    // tz("cv déposé(s) = "+livres+", clef récupéré(s) = "+key)
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
    ti("Pour passer au suivant clique sur G")
    tz(text1);
        document.addEventListener('keypress', (event) => {
        let code = event.code;
        if(code==="KeyG"){
            tz(text2)
            ti("Pour continuer clique sur B")
        }
        else if(code==="KeyB"){
            init()        }   
       }, false);  
    }

//permet d'afficher du text informatif
function alerte(text){
    ti("Pour continuer clique sur T")
    tz(text);
        document.addEventListener('keypress', (event) => {
        let code = event.code;
        if(code==="KeyT"){
            init()
            return true
        }else{return false}
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
		['-', '-', '-', '*', '*', ' ', ' ', ' ', '-', '+', '-', '-', '-', '-', '-', '-', '-', '-', '-', '+', '-'],
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
    ['-', '-', '-', ' ', ' ', ' ', 'P4', ' ', ' ', '-', '-', '-', '-', ' ', ' ', ' ', ' ', '-', '-', '-', '-'],
    ['-', '-', ' ', ' ', ' ', '-', '-', '-', ' ', ' ', ' ', '-', ' ', 'P3', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', ' ', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', ' ', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', ' ', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', ' ', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', ' ', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', ' ', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', '-', '-', '-', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', ' ', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', ' ', ' ', '-', '-', ' ', 'P2', '-', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', 'P1', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', ' ', '-'],
    ['-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'O', 'O', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]

// on defini la grile a utiliser pour commencer
valeurs = valeurs1

//permet de deposer un cv au endroit definis
function recup_livre(){
    if (valeurs[ligne][colonne] === "+"){
        ti("INSTRUCTIONS<br>Pour valider clique sur C,<br>Pour refuser clique sur N ")
        tz("voulez-vous déposer votre CV ici ?")
        document.addEventListener('keypress', (event) => {
            let code = event.code;
        if(code==="KeyC"){
            livres=livres+1;
            valeurs[ligne][colonne] = '-';
            compteur()
        }   else if(code==="KeyN"){            
            compteur()
        }
    }, false);  
    }
}

//permet de recupere des clef au endroit cacher
function recup_key(){
    if (valeurs[ligne][colonne] === "#"){
        ti("INSTRUCTIONS<br>Pour valider clique sur K,<br>Pour refuser clique sur N ")
        tz("voulez-vous récupérer cette clefs ?")
        document.addEventListener('keypress', (event) => {
            let code = event.code;
        if(code==="KeyK"){
            key=key+1;
            valeurs[ligne][colonne] = ' ';
            compteur()
        }   else if(code==="KeyN"){            
            compteur()
        }
    }, false);  
    }
}

//permet de franchir la première porte
function open_door1(){
    if (valeurs[ligne][colonne] === "_"){
        if (key<1){
            tz("avant de franchir la porte il faut récupérer une cléfs cacher dans la map !")
        }
        else if (key === 1){
            ti("INSTRUCTIONS<br>Pour valider clique sur E,<br>Pour refuser clique sur N ")
            tz("voulez-vous entrer dans cette salle ?")
            document.addEventListener('keypress', (event) => {
            let code = event.code;
        if(code==="KeyE"){
            setTimeout(() => {document.getElementById('mapzone').style.animation = ""}, 2000)
            document.getElementById('mapzone').style.backgroundImage = "url('data/map2.png')"
            document.getElementById('mapzone').style.animation = "fadein 2s"
            alerte('Bonjour, je pense que vous rechercher la conseillère. Elle se situe dans la salle du haut')
            valeurs=valeurs2
            ligne = 18
            colonne = 10
            stepdor = 1 
            init()
        }   else if(code==="KeyN"){            
            init()
        }
    }, false);  
       
        }
    }
}

//permet de franchir la seconde map
function open_door2(){
    if (valeurs[ligne][colonne] === "~"){
        if(key<2 ){
            tz("avant de franchir la porte il faut récupérer 2 cléfs cacher dans les maps !")

        }else{
            ti("INSTRUCTIONS<br>Pour valider clique sur F,<br>Pour refuser clique sur N ")
            tz("voulez-vous entrer dans cette salle ?")
            document.addEventListener('keypress', (event) => {
            let code = event.code;
        if(code==="KeyF"){
            setTimeout(() => {document.getElementById('mapzone').style.animation = ""}, 2000)
            document.getElementById('mapzone').style.backgroundImage = "url('data/map3.png')"
            document.getElementById('mapzone').style.animation = "fadein 2s"
            valeurs=valeurs3
            ligne = 18
            colonne = 10
            stepdor = 2
            init()
        }   else if(code==="KeyN"){            
            init()
        }
    }, false);  
       
        }
    }
}

//permet de franchir la troisieme map
function open_door3(){
    if (valeurs[ligne][colonne] === "!"){
        if(key<3 ){
            tz("avant de franchir la porte il faut récupérer 3 cléfs cacher dans les maps !")

        }
        else{
            ti("INSTRUCTIONS<br>Pour valider clique sur J,<br>Pour refuser clique sur N ")
            tz("voulez-vous entrer dans cette salle ?")
            document.addEventListener('keypress', (event) => {
            let code = event.code;
        if(code==="KeyJ"){
            setTimeout(() => {document.getElementById('mapzone').style.animation = ""}, 2000)
            document.getElementById('mapzone').style.backgroundImage = "url('data/map4.png')"
            document.getElementById('mapzone').style.animation = "fadein 2s"
            valeurs=valeurs4
            ligne = 18
            colonne = 10
            stepdor = 3 
            init()
        }   else if(code==="KeyN"){            
            init()
        } 
    }, false);  
       
        }
    }
}
//permet de faire parler les PNJ sur les maps un deux et trois
let parole = 0
function dialogue(){
    if (valeurs[ligne][colonne] === "*"){
        parole=parole+1
        if (parole === 1){
            dial("Bonjour et bienvenu à hetic ! <br><br> Pour accéder aux salles secondaires il te faut récupérer 3 clés que tu trouvera à différents endroit...", "Pour décrocher ton stage et etres eventuellement recruter, tu doit déposer ton CV dans 9 boites disponnibles dans les différentes maps...")
        }else if (parole === 2){
            instru(0)
            tz("PNJ : A tu besoin d'aide ?")
            document.addEventListener('keypress', (event) => {
                let code = event.code;
            if(code==="KeyY"){
                dial(" vous : je cherche l'école HeTiC",'PNJ : elle se trouve en haut du classement.')
            }   else if(code==="KeyN"){            
                init() }    }, false);  
            }
        else if (parole === 3){
            ti("INSTRUCTIONS<br>Pour valider clique sur P,<br>Pour refuser clique sur N ")
            tz("Parler à ce PNJ ?")
            document.addEventListener('keypress', (event) => {
                let code = event.code;
            if(code==="KeyP"){
                dial(" vous : Bonjour", "PNJ : Je n'ai pas de temps à perdre")
            }   else if(code==="KeyN"){            
                init() }    }, false);  
            }
    
        else if (parole === 4){
            if(livres < 3){
                alerte('Attention je vois que tu n\'a pas déposer assez de CV dans la map précédente,<br> tu peut toujours y retourner.')
            }
            else {alerte('Salut, bravo tu à franchi la première étape,<br> à toi d\'augmenter tes chances en postulant d\'avantage ici, good luck')}
        }
        else if (parole === 5){
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
let cd = 1
//permet de poser de question et repondre par oui ou non
function youn(text,r){
    ti("INSTRUCTIONS<br>Pour valider clique sur V,<br>Pour refuser clique sur X <br> et D pour suivant")
    tz(text);
        document.addEventListener('keypress', (event) => {
        let code = event.code;
        if(code==r){
            tz("BRAVO ! bonne réponse")
            stp=stp+1
        }
        
     } , false);

}
//permet de faire un QCM
function prompte(q,a1,a2,a3,r){
    let rv 
    tz(q)
    ti("R) "+a1+"<br> U) "+a2+"<br> I) "+a3+"<br>D) Suivant")
    document.addEventListener('keypress', (event) => {
        let code = event.code;
    if(code==r){
        tz("BRAVO ! Ta réponse est correct.")
        stp=stp+1
        }       
               

    }, false);  

    }

    //fin du jeu
    function fin_jeu(){
        if (!(stp>=9 && livres>=9)){
            setTimeout(() => {document.getElementById('mapzone').style.animation = ""}, 2000)
            document.getElementById('mapzone').style.backgroundImage = "url('https://tenor.com/view/game-over-gif-18144118.gif')"
            document.getElementById('mapzone').style.animation = "fadein 2s"
            document.getElementById('mobile').style.backgroundImage = "none"
            document.getElementById('mobile').style.backgroundColor = "transparent"
            tz('dommage t\'a candidature n\'a pas été rettenu')
            ti('Appui sur F5')
        }else{
            setTimeout(() => {document.getElementById('mapzone').style.animation = ""}, 2000)
            document.getElementById('mapzone').style.backgroundImage = "url('data/win.gif')"
            document.getElementById('mapzone').style.animation = "fadein 2s"
            tz('Bravo ! tu à réussi.')
            ti('<img src="data/logo.png" width="150px" >')
            document.getElementById('mobile').style.backgroundImage = "none"
            document.getElementById('mobile').style.backgroundColor = "transparent"



        }
    }

//permet de parler au personnages de la dernière map
function stepoff(){
        if (valeurs[ligne][colonne] === "P1"){
            alerte('Bonjour, je pense que vous rechercher la conseillère. Elle se situe dans la salle du haut')
        }
        else if (valeurs[ligne][colonne] === "P2" && livres < 9){
                alerte(' Bonjour, revenez me voir lorsque vous aurez déposé tous vos CV.')
        }
        else if (valeurs[ligne][colonne] === "P3" && livres === 9){
                alerte('Félicitation, vous avez déposé tous vos CV et vous avez décroché un entretien. Le directeur de la boîte vous attends dans la salle près de l\'accueil, allez-y sans tarder !  .')
        }
        else if (valeurs[ligne][colonne] === "P4"){
            tz("Bonjour, j'ai une liste de 10 questions en culture générale si vous répondez correctement à 7 questions vous obtenez votre stage chez nous.")
            ti("appui sur D pour débuter.") 
            document.addEventListener('keypress', (event) => {
                let code = event.code;
                 
                stp=stp+1
                                   
                    if(code==="KeyD" && cd===1){
                        cd=cd+1
                        prompte("La dernière version de HTML est... ", 'HTMTL5',"HTML6","HTML7","KeyU")
                    }else if(code==="KeyD" && cd===2){
                        cd=cd+1    
                        prompte("Le ... est un langage informatique incontournable pour la mise en forme des pages sur internet.","CSS","HTML","PHP","KeyU")
                    }else if(code==="KeyD" && cd===3){
                        cd=cd+1       
                        prompte("Le CMS le plus utilisé est ...", "GIT","WORDPRESS","WIX","KeyB")
                    }else if(code==="KeyD" && cd===4){
                        cd=cd+1           
                        prompte("La signification de HTML est...", "HyperTextLourdMass", " HyperTextLanguage Markup","aucun","KeyU")
                    }else if(code==="KeyD" && cd===5){
                        cd=cd+1              
                        youn("Les balises <HTML> et </HTML> sont placés dans le corps <BODY> d'un document HTML","KeyX")
                    }else if(code==="KeyD" && cd===6){
                        cd=cd+1                   
                        prompte("La balise <...> te permettra de mettre en gras un mot ?","u","b","j","KeyU")
                    }else if(code==="KeyD" && cd===7){
                        cd=cd+1                      
                        prompte(" Dans la norme HTML, il existe ... niveaux de titres.","6","9","4","KeyU")
                    }else if(code==="KeyD" && cd===8){
                        cd=cd+1       
                        prompte("La balise <...> est utilisé pour faire un changement de ligne?","lr","hr","br","KeyI")
                    }else if(code==="KeyD" && cd===9){
                        cd=cd+1       
                        prompte("HTML est considéré comme un language de ...","Develeppeur Back","balisage","soulignage","KeyU")
                    }else if(code==="KeyD" && cd===10){
                        alerte("Bravo, tu répondu à toute les questions.")
                        fin_jeu()
        }
                }, false);
            }
                                        
                                    
                                
                            
                        
                    
                
            
        
    
}

//permet de sortir des salles
let stepdor = 0
function exit(stepdor){
     if (valeurs[ligne][colonne] === "O"){
         tz("voulez-vous sortir de cette salle ?")
         ti("INSTRUCTIONS<br>Pour valider clique sur S,<br>Pour refuser clique sur N ")
         document.addEventListener('keypress', (event) => {
         let code = event.code;
         if(code==="KeyS"){
            document.getElementById('mapzone').style.backgroundImage = "url('data/main-map.png')"
            valeurs=valeurs1
             if (stepdor === 1){
                 ligne = 14
                 colonne = 5
             }else if (stepdor === 2){
                 ligne = 14
                 colonne = 18
             }else if (stepdor === 3){
                 ligne = 10
                colonne = 11
             }   
             init()
         }   else if(code =="KeyN"){            
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
    if (touche === "ArrowUp") {
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
    else if (touche === "ArrowDown") {
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
    else if (touche === "ArrowLeft") {
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
    else if (touche === "ArrowRight") {
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


