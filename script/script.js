let background = {
   redPill: document.querySelector('#background-red-pill'),
   bluePill: document.querySelector('#background-blue-pill')
}

let pill = {
   red: document.querySelector('#red-pill'),
   blue: document.querySelector('#blue-pill')
}

pill.red.onmouseover = () => {
   background.redPill.style.animation = 'width-100 .5s linear forwards'
   background.bluePill.style.animation = 'width-0 .5s linear forwards'
}

pill.red.onmouseout = () => {
   background.redPill.style.animation = 'width-100-50 .5s linear forwards'
   background.bluePill.style.animation = 'width-0-50 .5s linear forwards'
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