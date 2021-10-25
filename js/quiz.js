// On va chercher les differents elements de notre page
const pages = document.querySelectorAll(".page");
const header = document.querySelector("header");
const nbPages = pages.length // Nombre de pages du formulaire
console.log(nbPages);//voir le nombre de pages
let pageActive = 1
window.onload =() =>{
    //on affiche la 1ere page du formulaire
    document.querySelector(".page").style.display ="initial";
    // on affiche les numeeros des pages dans l'entete
    //on parcourt la liste des pages
    
    pages.forEach((page, i) => {
            // on cree l'element numero de page
            let element = document.createElement("div");
            element.classList.add("page-num");
            element.id = "num" +(i+1)
            if (pageActive === i + 1) {
                element.classList.add("active");
            }
            element.innerHTML = i + 1;
            console.log(element);
            header.appendChild(element);
        })
    //on gere les boutons "suivant"
    let boutons = document.querySelectorAll("button[type=button]")
    for(let bouton of boutons){
        bouton.addEventListener("click",pageSuivante)
    }
}

// cette fonction fait avancer le formulaire
function pageSuivante(){
   

    //on masque toutes les pages
    for(let page of pages){
        page.style.display ="none"
    }
    //on affiche la page suivante
    this.parentElement.nextElementSibling.style.display="initial"
    // on desactive la  page active
    document.querySelector(".active").classList.remove("active")

 //on increemente pageActive
 pageActive++
//On "active" le nouveau numero
document.querySelector("#num"+pageActive).classList.add("active")

}