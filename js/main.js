console.log('Find The Pair started!');

 /* Объявляем картинки для карточек. */
const images = ['img/cat1.png', 'img/cat2.png',
'img/cat3.png', 'img/cat4.png', 'img/cat5.png',
'img/cat6.png', 'img/cat7.png', 'img/cat8.png'];
let numberOfCards = 16;
const cardGrid = document.getElementById("card-grid");

// Генерирует карточки для игровой сетки.
function generateCard(number){
    let card = document.createElement('div');
    card.classList.add("card-wrapper");
    card.innerHTML = '<div class="card flip"><div class="back">' +
    '</div><img class="front" src="'+images[number]+'" ' +
    'alt="'+(number+1)+'"></div></div>';
    return card;
}

// Создаёт пары карточек и добавляет их на игровую сетку.
function initCards(){
// Создаём массив последовательно идущих попарных картинок.
    let initialCards = [];
    for(let i = 0;i<numberOfCards/2;i++){
        initialCards.push(generateCard(i));
        initialCards.push(generateCard(i));
    }

    // Перемешиваем картинки.
    let cards = [];
    while(initialCards.length>0){
        let ranNum = Math.floor(Math.random()*initialCards.length);
        cards.push(initialCards[ranNum]);
        if(ranNum>-1){
            initialCards.splice(ranNum,1);
        }
    }

    // Добавляем карточки на игровую сетку.
    for(let i = 0;i<cards.length;i++){
        cardGrid.appendChild(cards[i]);
    }
}

/* Изменяет состояние всех карточек одновременно: 
если они были открыты картинкой наружу, закрывает их,
и наоборот, если были показаны рубашкой вверх, показывает картинки.*/
function changeAllCardsState(){
    let cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("flip");        
    }
}

function showAll(){
    changeAllCardsState();
    setTimeout(changeAllCardsState, 2000);
}

initCards();

// По клику изменяем состояние карточки:
// открытую - скрывам, закрытую - открываем.
cardGrid.addEventListener("click", function(e){
    if(e.target.parentElement.classList.contains("card")){
        const card = e.target.parentElement;
        card.classList.toggle("flip");
    }
});