Site visible en ligne à l'adresse suivante : https://juleschavent.github.io/exam-js/

Bootstrap a été utilisé pour répondre aux consignes dans un temps minimum.

Avec un peu plus de temps il n'aurait PAS DU TOUT été utilisé et tout aurait été fait en JS.
    +   code html beaucoup plus propre et mieux organisé
        compréhension plus facile pour quelqu'un qui découvre le code
        organisation plus simple
        pas de bidouille pour arriver à placer des éléments
    
    -   la nav bar aurait du être faite en JS ce qui aurait augmenté le temps nécessaire à réaliser la maquette

__________________________________________________________________________________________________________________

HTML =>
    Des classes custom ont été rajouté pour correspondre à la maquette, celle-ci sont toutes précédée de la mention "custom__" dans le html pour plus de lisibilité.
    
__________________________________________________________________________________________________________________


CSS =>
    Peu de commentaire car très peu de ligne il est donc facile de s'y retrouver.

__________________________________________________________________________________________________________________



SCRIPT JS =>
    Chaque ligne est commentée pour expliquer son action.
    Le slider de W3school a été utilisé comme base de départ. Les lignes inutiles tel que la déclaration de la variable "i" ont été supprimé pour un code optimisé.
    De plus la boucle "for" a été changée en "for of" pour correspondre aux critères ES6

    Logique timer pour changer d'image : 
    On récupère tous les éléments HTML ayant la même classe, ils seront stocké dans une variable sous forme de tableau.
    On définit une variable qui servira a obtenir un index pour accéder à l'élément du tableau correspondant.

    Dans une fonction =>
        pour chaque élément de notre tableau
            modifie le CSS pour cacher chaque élément avec là propriété "display: none"

        si l'attribut est supérieur au nombre d'élément dans notre tableau
            alors l'index utilisé pour choisir l'image à afficher sera égale à 1
            ça sert à boucler sur les images et donc à revenir à la première image quand elles ont toutes été affiché.

        on ajouter 1 à la valeur qui sert d'index pour qu'il soit différent à chaque fois que la fonction est éxécutée.
        
        pour finir, on va utiliser la variable qui sert à définir un index dans notre tableau pour appliquer la propriété "display: block" à un seul élément.

        enfin, on défini un délais avant de devoir éxecuter à nouveau la fonction


