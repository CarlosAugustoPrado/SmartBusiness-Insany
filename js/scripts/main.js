var slideBlog = new Swiper(".slide-blog", {
  slidesPerView: 4,  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* SCRIPT ACCORDION */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {   
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.classList.toggle("active");
    if (panel.style.display === "block") {
      panel.style.display = "none";
      panel.style.maxHeight = null;
    } else {
      panel.style.display = "block";
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* SCRIPT FECHAR ANUNCIO */
const anuncio = document.getElementById('js-anuncio');
const btnCloseAnuncio = document.getElementById('js-btn-close-anuncio');

btnCloseAnuncio.addEventListener ('click', () => {
  anuncio.classList.add('anuncio-closed');
})

/* SCRIPT ABRIR MODAL DE ACESSO */
const modalLogin = document.getElementById('js-modal-login');
const acessarModalLogin = document.getElementById('js-abrir-modal-login');
const fecharModalLogin = document.getElementById('js-fechar-modal-login');

acessarModalLogin.addEventListener('click', () => {
  modalLogin.classList.add('acesso-opened');
})
fecharModalLogin.addEventListener('click', () => {
  modalLogin.classList.remove('acesso-opened');
})

/* SCRIPT ABRIR MODAL DE LOST PASSWORD */
const modalSenhas = document.getElementById('js-modal-lost-password');
const btnAbrirModalSenhas = document.getElementById('js-btn-lost-password');
const btnFecharModalSenhas = document.getElementById('js-btn-fechar-modal-senhas');

btnAbrirModalSenhas.addEventListener('click', () => {
  modalSenhas.classList.add('senha-opened');
})
btnFecharModalSenhas.addEventListener('click', () => {
  modalSenhas.classList.remove('senha-opened');
})
