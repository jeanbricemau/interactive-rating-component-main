



 
   let   btn =  [...document.querySelectorAll('.btn')]; // on cree un tableau contenant tout les .btn 

   submit = document.querySelector('.submit'),
   Primary = document.querySelector('#Primary'),
   Selected = document.querySelector('#selected');

let valueSpan = document.querySelector('.valueSpan');
let valeurNote;



for (let i = 0; i < btn.length; i++) {
   btn[i].addEventListener('click', afficherTexte);  // pour toutes les ligne du tableau btn on ajoute un evenement click qui va appeler la fonction afficherTexte 
}


//stock la valeur de la note et l'affiche dans la console.

function afficherTexte() {
   valeurNote = this.textContent;
   valueSpan.textContent = valeurNote;
   console.log(valeurNote);
  
   this.classList.add('btncolor')
   
  
   for (let i = 0; i < btn.length; i++) { 
      if (btn[i] != this) {
         btn[i].classList.remove('btncolor');
      }
   }
 }


//valide    le formulaire 
submit.addEventListener('click', function () {
   console.log(valeurNote)
   if (valeurNote == undefined) { //empeche de de switcher de ID si la valeur n'est pas définie
      return
   }
   else{
      Primary.classList.toggle("unvisible");
      Selected.classList.toggle("visible");
   }


});

console.log(btn);
