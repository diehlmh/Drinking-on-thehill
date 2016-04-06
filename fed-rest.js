var parent = document.querySelector("ul");
var nav = document.querySelectorAll('li a');

parent.addEventListener("click", handler, false);

function handler(e) {

  if (e.target !== e.currentTarget) {

    for(i = 0; i < nav.length; i++) {
      nav[i].classList.remove('active');
    }

    e.target.classList.add('active');
   }

  e.stopPropagation();
}
