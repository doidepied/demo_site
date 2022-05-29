// recherche les élements dans la page HTML

const slide = document.getElementById("img1")
const slide1 = document.getElementById("img2")
const slide2 = document.getElementById("img3")
const source = document.querySelector('#s1 >src')
console.log(img1)
const header = document.getElementsByTagName("h1")
console.log(header)
const h2 = document.getElementsByClassName("tete")
console.log(tete);
console.log(body);


// rien n'est reconnue dans la console. je comprend pas d'ou viens le soucis 


// notification des evenements et dis d'appliquer la fonction " slideimage"

slide.addEventListener('click'), slideimage() ;
slide1.addEventListener('click'), slideimage() ;
slide2.addEventListener('click'), slideimage() ;

// La fonction " slideimage"

function slideimage (click) {

	if (id === " img1 ") 
	{source.innerHTML = " gro.jpg "};

	if (id ===" img2 ")
	else {source.innerHTML = " mariage.jpg "};

	if (id === " img3 ")
	else {source.innerHTML = " enfant.jpg "};
}

