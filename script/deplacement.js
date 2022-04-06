let myPerso = document.getElementById('perso')
let myMap = document.getElementById('mapzone')


window.addEventListener('load', () =>{
    myPerso.style.backgroundImage = "url(data/perso.png)"
    myPerso.style.backgroundSize = "50px"
    myPerso.style.width = "50px"
    myPerso.style.height = "50px"
    myPerso.style.backgroundRepeat = "no-repeat"
 	myPerso.style.position = 'absolute';
 	myPerso.style.left = 0;
 	myPerso.style.top = 0;
});

function findPos(obj){
    var curleft = curtop = 0;
    if (obj.offsetParent) {
        curleft = obj.offsetLeft
        curtop = obj.offsetTop
        while (obj = obj.offsetParent) {
            curleft += obj.offsetLeft
            curtop += obj.offsetTop
        }
    }
    return [curleft,curtop];
}


window.addEventListener('keypress', (event) => {
 switch (event.key) {
 	case 'q':
         if(findPos(myPerso)[0]>=findPos(myMap)[0]){
 		    myPerso.style.left = parseInt(myPerso.style.left) - 5 + 'px';
 		    }
             break;
 	case 'd':
     if((findPos(myPerso)[0]+myPerso.offsetWidth)<=(findPos(myMap)[0]+myMap.offsetWidth)){
 		myPerso.style.left = parseInt(myPerso.style.left) + 5 + 'px';
 		}
         break;
 	case 'z':
        if(findPos(myPerso)[1]>=findPos(myMap)[1]){
            myPerso.style.top = parseInt(myPerso.style.top) - 5 + 'px';
            }
            break;
 	case 's':
     if((findPos(myPerso)[1]+myPerso.offsetHeight)<=(findPos(myMap)[1]+myMap.offsetHeight)){
 		myPerso.style.top = parseInt(myPerso.style.top) + 5 + 'px';
 		}
         break;
    }
});
