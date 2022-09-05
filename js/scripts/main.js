var slideBlog = new Swiper(".slide-blog", {
  slidesPerView: 4,  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



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

/* SCRIPT PARA ANIMAÇÃO DE NUMEROS */
let counts=setInterval(updated);
        let upto=0;
        function updated(){
            var count= document.getElementById("js-projetos");
            count.innerHTML=++upto;
            if(upto===120)
            {
                clearInterval(counts);
            }            
        }
let counts2=setInterval(updated2);
        let upto2=0;
        function updated2(){
            var count= document.getElementById("js-escritorios");
            count.innerHTML=++upto2;
            if(upto===12)
            {
                clearInterval(counts2);
            }            
        }
        
let counts3=setInterval(updated3);
        let upto3=0;
        function updated3(){
            var count= document.getElementById("js-faturamento");
            count.innerHTML=++upto3;
            if(upto3===525)
            {
                clearInterval(counts3);
            }            
        }



perguntas ();
/* SCRIPT DA API DO ACCORDION */

const areaPerguntas = document.getElementById('js-accordion-wrapper');

function criarPerguntas (id, pergunta, resposta) {
  let accordionButton = document.createElement('button');
  accordionButton.classList = 'accordion';
  areaPerguntas.appendChild(accordionButton);

  let numeroPergunta = document.createElement('span');
  numeroPergunta.innerText = `${id}`;
  accordionButton.appendChild(numeroPergunta);

  let perguntaApi = document.createElement('p');
  perguntaApi.innerText = `${pergunta}`;
  accordionButton.appendChild(perguntaApi);

  let areaRespostas = document.createElement('div');
  areaRespostas.classList = 'panel';
  areaPerguntas.appendChild(areaRespostas);

  let respostaApi = document.createElement('p');  
  respostaApi.innerText = `${resposta}`;
  areaRespostas.appendChild(respostaApi);
  
  /* SCRIPT PARA O ACCORDION */
var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";      
    }
  });
}

var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
}



function perguntas () {
  axios ({
    method: 'GET',
    url: 'https://my-json-server.typicode.com/lucaswalder/fake_api_dev/accordion'
  })
  .then ((response) => {
    const arrayPerguntas = response.data;   

    arrayPerguntas.forEach(info => {
      let idPergunta = info.id;
      let question = info.question;
      let answer = info.answer;

      const perguntas = {
        id: idPergunta,
        pergunta: question,
        resposta: answer
      };

      criarPerguntas (perguntas.id, perguntas.pergunta, perguntas.resposta);

            
    })
  })
}








        