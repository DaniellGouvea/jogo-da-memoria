/**Array de Cartas**/
const cards = [
    card[1],
    card[2],
    card[3],
    card[4],
    card[5],
    card[6],
    card[7],
    card[8],
    card[9],
    card[10],
    card[11],
    card[12],
    card[13],
    card[14],
    card[15],
    card[16],
]
//Ordena o Array
let shuffleCards =cards.sort(()=>(Math.random() > 0.5 ? 2 : -1))

let openCards = []
//Cria a div item
for(let i = 0; i < cards.length; i++){
    let box = document.createElement("div")
    box.className = "item"
    let img = document.createElement("img");
    img.src = shuffleCards[i];
    box.appendChild(img);
    box.onclick = handleClick
    document.querySelector(".game").appendChild(box)
}
//Atribui a classe boxOpen
function handleClick(){
    if(openCards.length < 2 && !this.classList.contains("boxOpen")){
        this.classList.add("boxOpen")
        openCards.push(this)
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500)
    }
}
//Atribui a classe boxMatch
function checkMatch(){

    if(openCards[0].innerHTML === openCards[1].innerHTML ){
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    }else {
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }

    openCards = []

    if(document.querySelectorAll(".boxMatch").length === cards.length){
        alert("Você Venceu!")
    }
}

