let btn = document.querySelector('button');
let dices = document.querySelectorAll('.player img');
let title = document.querySelector('h1');

btn.addEventListener('click', () => {
    let randNum1 = Math.floor(Math.random() * 6) + 1;
    let randNum2 = Math.floor(Math.random() * 6) + 1;

    dices[0].setAttribute('src', './assets/img/dice' + randNum1 + ".png");
    dices[0].setAttribute('alt', randNum1);
    dices[1].setAttribute('src', './assets/img/dice' + randNum2 + ".png");
    dices[1].setAttribute('alt', randNum2);

    if(randNum1 > randNum2){
        title.innerHTML = "Player 1 Wins!!";
    }
    else if(randNum1 < randNum2){
        title.innerHTML = "Player 2 Wins!!";
    }
    else{
        title.innerHTML = "Draw";
    }
});