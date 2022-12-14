var slideBlog = new Swiper(".slide-blog", {
  slidesPerView: 4,
  spaceBetween: 32,  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,    
  },
  
  breakpoints: {
    300: {
      slidesPerView: 1.3,
      spaceBetween: 24,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    },
  }
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
const overlay = document.getElementById("overlay");

btnAbrirModalSenhas.addEventListener('click', () => {
  modalSenhas.classList.add('senha-opened');
  overlayOn();
})
btnFecharModalSenhas.addEventListener('click', () => {
  modalSenhas.classList.remove('senha-opened');
  overlayOff();
})

function overlayOff() {
  overlay.style.display = "none"
}
function overlayOn() {
  overlay.style.display = "block"
}

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
            if(upto3===325)
            {
                clearInterval(counts3);
            }            
        }

/* SCRIPT DA API DO ACCORDION */

const areaPerguntas = document.getElementById('js-area-perguntas');

function criarPerguntas (id, pergunta, resposta) {
  let perguntas = document.createElement('div');
  perguntas.classList = 'pergunta';  
  areaPerguntas.appendChild(perguntas);

  let buttonPergunta = document.createElement('button');
  buttonPergunta.classList = 'title';
  perguntas.appendChild(buttonPergunta);

  let idPergunta = document.createElement('span');
  idPergunta.innerHTML = `0${id}`;
  buttonPergunta.appendChild(idPergunta);

  let perguntaApi = document.createElement('h4');
  perguntaApi.innerHTML = `${pergunta}`;
  buttonPergunta.appendChild(perguntaApi);

  let simbolo = document.createElement('div');
  simbolo.classList = 'simbolo-expandir';
  buttonPergunta.appendChild(simbolo);

  let respostaApi = document.createElement('p');
  respostaApi.innerHTML = `${resposta}`;
  perguntas.appendChild(respostaApi);

  
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
        resposta: answer,
      };

      criarPerguntas (perguntas.id, perguntas.pergunta, perguntas.resposta);      
           
    })
    // SCRIPT PARA O ACCORDION 
    const botaoPergunta = document.getElementsByClassName('pergunta');
      var i;
      for (i=0; i<botaoPergunta.length; i++) {
        botaoPergunta[i].addEventListener('click', function () {
          this.classList.toggle('active')
        })
      } 
  })
}

/* Scripts de alteração no HTML */
const logo = document.getElementById('js-imagem-logo');
const imagemVideo = document.getElementById('js-imagem-video')

if (window.matchMedia("(max-width:400px)").matches) {
  logo.setAttribute("src", "../img/logo-celular.svg");  
} else {
  logo.setAttribute("src", "../img/logo.svg")  
}

if (window.matchMedia("(max-width:400px)").matches) {
  imagemVideo.setAttribute("src", "../img/video-mobile.png");  
} else {
  imagemVideo.setAttribute("src", "../img/video.png");  
}

var imagem = document.getElementById('js-forma-inferior');
if (window.matchMedia("(max-width:400px)").matches) {
  if (imagem.parentNode) {
    imagem.parentNode.removeChild(imagem);
  } 
}

/* SCRIPT PALAVRAS ALEATORIAS */
var palavras = ['sucesso!', 'destaque!', 'impacto!']
var palavra = palavras[Math.floor(Math.random()*palavras.length)];
const palavraHtml = document.getElementById('js-palavra-aleatoria');

palavraHtml.innerHTML = "<h1>O segredo para um negócio de <strong>" + palavra 


perguntas()




        