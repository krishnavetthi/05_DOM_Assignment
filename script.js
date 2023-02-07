let button = document.querySelector('.btn');
let clonebutton = button.cloneNode(true);
clonebutton.classList.add('buttoncloned');
clonebutton.textContent='Pro Subscription';
button.after(clonebutton);

let recipelistelement = document.querySelector(".tags-container div a");
console.log(recipelistelement);
let clonerecipelistelement = recipelistelement.cloneNode(true);
console.log(clonerecipelistelement)
clonerecipelistelement.textContent="Chinese (7)";
document.querySelector(".tags-container div").appendChild(clonerecipelistelement);

let card = document.querySelector(".card");
console.log(card);
let clonecard = card.cloneNode(true);
console.log(clonecard);
let imgsrc = clonecard.querySelector("a img").src = "./img/recipie-6.jpg";
clonecard.querySelector("a h5").textContent="Ice Cream";
clonecard.querySelector("a p").textContent="Prep : 5min | Cook : 70min"
document.querySelector(".recipe-gallery").appendChild(clonecard);

let list = document.querySelectorAll(".recipe-text");
for(let i=0; i<list.length;i++){
    list[i].style.color = "#8a2be2";
}

let footer = document.querySelector(".page-footer");
footer.querySelector("p a").textContent="Krishna vetthi B";