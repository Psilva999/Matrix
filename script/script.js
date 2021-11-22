let background = {
   redPill: document.querySelector('#background-red-pill'),
   bluePill: document.querySelector('#background-blue-pill')
}

let pill = {
   red: document.querySelector('#red-pill'),
   blue: document.querySelector('#blue-pill')
}

let list = {
   read: document.querySelector('li:nth-child(1)'),
   study: document.querySelector('li:nth-child(2)'),

   self_knowledge: document.querySelector('li:nth-child(3)'),
   work: document.querySelector('li:nth-child(4)'),
   independence: document.querySelector('li:nth-child(5)')
}

let containerDe = {
   leitura: document.querySelector('.leitura'),
   estudos: document.querySelector('.estudos'),

   autoconhecimento: document.querySelector(".autoconhecimento"),
   trabalho: document.querySelector(".trabalho"),
   independencia: document.querySelector(".independencia")
}

let imagem = {
   livros: document.querySelector('.livros'),
   estudando: document.querySelector(".estudando"),

   aristoteles: document.querySelector(".aristoteles"),
   pessoasTrabalhando: document.querySelector('.pessoas-trabalhando'),
   mulherLivre: document.querySelector(".mulher-livre")
}

pill.red.onmouseover = () => {
   background.redPill.style.animation = 'width-100 .5s linear forwards'
   background.bluePill.style.animation = 'width-0 .5s linear forwards'
}

pill.red.onmouseout = () => {
   if (document.querySelector('.pills').classList.contains('active')) {
      background.redPill.style.animation = 'width-100-50 .5s linear forwards'
      background.bluePill.style.animation = 'width-0-50 .5s linear forwards'
   }

   else {
      background.redPill.style.width = '100vw'

      background.redPill.style.animation = 'none'
   }
}

let refletir = {
   red: document.querySelector("#quotes-red")
}

pill.red.onclick = () => {
   document.querySelector('.pills').classList.remove('active')
   document.querySelector('#escolhe-red-pill').style.display = 'grid'
   
   var tempoDoIndicadorDeQuotes = 1 * 90
   var teste = setInterval(quotes, 1000)

   function quotes() {
      tempoDoIndicadorDeQuotes--

      if (tempoDoIndicadorDeQuotes <= 90 && tempoDoIndicadorDeQuotes >= 85) {
         refletir.red.innerHTML = 'Enquanto estamos adiando, a vida passa rapidamente'
      }

      else if (tempoDoIndicadorDeQuotes <= 85 && tempoDoIndicadorDeQuotes >= 79) {
         refletir.red.innerHTML = 'Conseguirás teu propósito se executas cada ação como a última da tua vida'
      }

      else if (tempoDoIndicadorDeQuotes <= 79 && tempoDoIndicadorDeQuotes >= 72) {
         refletir.red.innerHTML = 'Desprovida de toda irreflexão, de toda aversão apaixonada que tenha te afastado do domínio da razão'
      }

      else if (tempoDoIndicadorDeQuotes <= 72 && tempoDoIndicadorDeQuotes >= 65) {
         refletir.red.innerHTML = 'De toda hipocrisia, egoísmo e despeito no que se refere ao destino'
      }

      else if (tempoDoIndicadorDeQuotes <= 65 && tempoDoIndicadorDeQuotes >= 60) {
         refletir.red.innerHTML = 'The best revenge, is not to be like your enemy'
      }

      else if (tempoDoIndicadorDeQuotes <= 60 && tempoDoIndicadorDeQuotes >= 55) {
         refletir.red.innerHTML = 'Faça seu melhor e nunca pare de refletir e lapidar a si mesmo'
      }

      else if (tempoDoIndicadorDeQuotes <= 55 && tempoDoIndicadorDeQuotes >= 50) {
         refletir.red.innerHTML = 'Wild men who caught and sang the sun in flight'
      }

      else if (tempoDoIndicadorDeQuotes <= 50 && tempoDoIndicadorDeQuotes >= 45) {
         refletir.red.innerHTML = 'And learn too late they grieved it on its way'
      }

      else if (tempoDoIndicadorDeQuotes <= 45 && tempoDoIndicadorDeQuotes >= 40) {
         refletir.red.innerHTML = 'Do not go gentle into that good night'
      }

      else if (tempoDoIndicadorDeQuotes <= 40 && tempoDoIndicadorDeQuotes >= 34) {
         refletir.red.innerHTML = 'Rage, rage against the dying of the light'
      }

      else if (tempoDoIndicadorDeQuotes <= 34 && tempoDoIndicadorDeQuotes >= 30) {
         refletir.red.innerHTML = 'Desculpe estou um pouco atrasado'
      }

      else if (tempoDoIndicadorDeQuotes <= 30 && tempoDoIndicadorDeQuotes >= 26) {
         refletir.red.innerHTML = 'Mas espero que ainda dê tempo'
      }

      else if (tempoDoIndicadorDeQuotes <= 26 && tempoDoIndicadorDeQuotes >= 23) {
         refletir.red.innerHTML = 'De dizer que andei errado'
      }

      else if (tempoDoIndicadorDeQuotes <= 23 && tempoDoIndicadorDeQuotes >= 20) {
         refletir.red.innerHTML = 'E eu entendo'
      }

      else if (tempoDoIndicadorDeQuotes <= 20) {
         refletir.red.innerHTML = "<div id='about'><span style='display:flex;'>PSILVA<p class='pisca-code' style='animation:pisca-code 2.1s linear infinite;'>_</p></span></div>"

         clearInterval(teste)
      }
   }
}

pill.blue.onmouseover = () => {
   background_blue_pill()
}

pill.blue.onmouseout = () => {
   if (document.querySelector('.pills').classList.contains('active')) {
      background.bluePill.style.animation = 'width-100-50 .5s linear forwards'
      background.redPill.style.animation = 'width-0-50 .5s linear forwards'
   }

   else {
      background.bluePill.style.width = '100vw'
      background.bluePill.style.left = '0'

      background.bluePill.style.animation = 'none'
   }
}

pill.blue.onclick = () => {
   document.querySelector('.pills').classList.remove('active')
   document.querySelector('#escolhe-blue-pill').style.display = 'grid'
}

function background_blue_pill() {
   background.bluePill.style.animation = 'width-100 .5s linear forwards'
   background.redPill.style.animation = 'width-0 .5s linear forwards'
}

list.read.onmouseover = () => {
   containerDe.leitura.innerHTML = ''
   containerDe.leitura.style.animation = 'fecha-tag .8s linear forwards'

   imagem.livros.style.animation = 'abre-tag .8s linear forwards'
}

list.read.onmouseout = () => {
   imagem.livros.style.animation = 'fecha-tag .5s linear forwards'

   containerDe.leitura.innerHTML = 'Leitura'
   containerDe.leitura.style.animation = 'abre-tag .5s linear forwards'
}

list.study.onmouseover = () => {
   containerDe.estudos.innerHTML = ''
   containerDe.estudos.style.animation = 'fecha-tag .8s linear forwards'

   imagem.estudando.style.animation = 'abre-tag .8s linear forwards'
}

list.study.onmouseout = () => {
   imagem.estudando.style.animation = 'fecha-tag .5s linear forwards'

   containerDe.estudos.innerHTML = 'Estudos'
   containerDe.estudos.style.animation = 'abre-tag .5s linear forwards'
}

list.self_knowledge.onmouseover = () => {
   containerDe.autoconhecimento.innerHTML = ''
   containerDe.autoconhecimento.style.animation = 'fecha-tag .8s linear forwards'

   imagem.aristoteles.style.animation = 'abre-tag .8s linear forwards'
}

list.self_knowledge.onmouseout = () => {
   imagem.aristoteles.style.animation = 'fecha-tag .5s linear forwards'

   containerDe.autoconhecimento.innerHTML = 'Autoconhecimento'
   containerDe.autoconhecimento.style.animation = 'abre-tag .5s linear forwards'
}

list.work.onmouseover = () => {
   containerDe.trabalho.innerHTML = ''
   containerDe.trabalho.style.animation = 'fecha-tag .8s linear forwards'

   imagem.pessoasTrabalhando.style.animation = 'abre-tag .8s linear forwards'
}

list.work.onmouseout = () => {
   imagem.pessoasTrabalhando.style.animation = 'fecha-tag .5s linear forwards'

   containerDe.trabalho.innerHTML = 'Trabalho'
   containerDe.trabalho.style.animation = 'abre-tag .5s linear forwards'
}

list.independence.onmouseover = () => {
   containerDe.independencia.innerHTML = ''
   containerDe.independencia.style.animation = 'fecha-tag .8s linear forwards'

   imagem.mulherLivre.style.animation = 'abre-tag .8s linear forwards'
}

list.independence.onmouseout = () => {
   imagem.mulherLivre.style.animation = 'fecha-tag .5s linear forwards'

   containerDe.independencia.innerHTML = 'Independência'
   containerDe.independencia.style.animation = 'abre-tag .5s linear forwards'
}