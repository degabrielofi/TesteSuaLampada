function NewImageOne() {
    document.querySelector('.container').innerHTML = '<div class="container">   <div class="content"> <h1>A Sua Lâmpada Está Acesa!</h1>  <img src="./assets/images/On.png"> <button class="on" onclick="NewImageOne()">Acender</button> <button class="off" onclick="NewImageTwo()">Apagar</button>  </div> </div>  '
}

function NewImageTwo() {
    document.querySelector('.container').innerHTML = '<div class="container">   <div class="content"> <h1>A Sua Lâmpada Está Apagada!</h1>  <img src="./assets/images/Off.png"> <button class="on" onclick="NewImageOne()">Acender</button> <button class="off" onclick="NewImageTwo()">Apagar</button>  </div> </div>  '
}