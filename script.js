const play = document.querySelector('.button');
const bday = document.querySelector('.bday');
const title = document.querySelector('.title');
const cover = document.querySelector('.cover');
const text = document.querySelector('.text');
const h1 = document.querySelector('h1');
const nav = document.querySelector('.nav');

const cook = document.querySelector('.cook');
const showCook = document.querySelector('#showCook');

const inspetora = document.querySelector('.inspetora');
const showInspetora = document.querySelector('#showInspetora');

const cuidadora = document.querySelector('.cuidadora');
const showCuidadora = document.querySelector('#showCuidadora');

const media = document.querySelector('.media');

const music = document.querySelector('#music');
const clipe = document.querySelector('.clipe');

const comment = document.querySelector('#comment');
const comentarios = document.querySelector('.comentarios');

var vid = document.getElementById("work");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
    vid.currentTime = 0
}

play.addEventListener('click', ()=>{
    bday.play();
    title.style.top = "-10vh";
    play.style.display = "none";
    cover.style.bottom = "20vh";
    text.style.display = "block";
    text.style.height = "40vh"

    sumirTudo();
})

const sumirTudo = ()=>{
    setTimeout(()=>{
        cover.style.display = "none";
        text.style.display = "none";
        h1.style.opacity = "1";
        nav.style.opacity = "1";
        media.style.opacity = "1";
    },21000)
}

showCook.addEventListener('click', ()=>{
    cook.style.display = "flex";
    cuidadora.style.display = "none";
    inspetora.style.display = "none";

    clipe.style.display = "none";
    comentarios.style.display = "none";
    pauseVid();
});

showCuidadora.addEventListener('click', ()=>{
    cook.style.display = "none";
    cuidadora.style.display = "flex";
    inspetora.style.display = "none";

    clipe.style.display = "none";
    comentarios.style.display = "none";

    pauseVid();
});

showInspetora.addEventListener('click', ()=>{
    cook.style.display = "none";
    cuidadora.style.display = "none";
    inspetora.style.display = "flex";

    clipe.style.display = "none";
    comentarios.style.display = "none";

    pauseVid();
});

music.addEventListener('click', ()=>{
    clipe.style.display = "block";
    comentarios.style.display = "none";

    cook.style.display = "none";
    cuidadora.style.display = "none";
    inspetora.style.display = "none";

    playVid();
})

comment.addEventListener('click', ()=>{
    comentarios.style.display = "block";
    clipe.style.display = "none";

    cook.style.display = "none";
    cuidadora.style.display = "none";
    inspetora.style.display = "none";

    pauseVid();
})


// formulario e comentarios

const form = document.querySelector(".criarComentario");

form.addEventListener("submit", function(e){
  e.preventDefault();
});

// data base
let banco = [
  ];

const getBanco = ()=> JSON.parse(localStorage.getItem('mensagens')) ?? [];
const setBanco = (banco)=> localStorage.setItem('mensagens', JSON.stringify(banco)) ;

const criarItem = (nome , mensagem )=> {
    const item = document.createElement('div');
    item.classList.add('comentario');
    item.innerHTML =`
    <h2>${nome}</h2>
    <p>${mensagem}</p>
    `
    document.getElementById('commentArea').appendChild(item)
}

const enviar = document.getElementById('enviar');

enviar.addEventListener('click', function(){
    var input = document.querySelector("#nome").value;
    var input2 = document.querySelector("#msg").value;

    const banco = getBanco();
    banco.push({'nome': input , 'mensagem': input2})
    setBanco(banco);
    atualizarTela();

    document.querySelector("#nome").value = "";
    document.querySelector("#msg").value = "";
});

const limparTela = ()=> {
    const commentArea = document.getElementById('commentArea')
    while(commentArea.firstChild){
        commentArea.removeChild(commentArea.lastChild);
    }
  }

const atualizarTela = ()=> {
    limparTela();
    const banco = getBanco();
    banco.forEach( (item) => criarItem(item.nome, item.mensagem ))
}

atualizarTela();