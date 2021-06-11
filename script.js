// Déclaration variable
let slideIndex = 1;
const mySlides= document.querySelectorAll('.mySlide');

// Exécution des fonctions
carousel();

// fonction qui permet de changer d'image toutes les X secondes
function carousel() {
    for (const element of mySlides) { //pour chaque élément de $mySlides 
        element.style.display  = "none";//appliquer le style css "display: none" à chaque élement
    };

    slideIndex++; // ajoute un à la valeure actuelle de slideIndex

    if (slideIndex > mySlides.length) { //si slideIndex est supérieur au nombre d'objet dans $mySlides
        slideIndex = 1 //alors slideIndex est égale à 1
    };

    mySlides[slideIndex - 1].style.display = "block"; //applique le style css "display: block" à l'élement correspondant à l'index $mySlides. Le nombre insérré dans l'index correspond à la variable slideIndex -1
    
    setTimeout(carousel, 5000); //execute la fonction carousel tout les X secondes
};