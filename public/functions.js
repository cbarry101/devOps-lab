const button = document.getElementById('luckyNumber')

function randomNumber(){
    let max = 100;
    let result = Math.floor(Math.random() * max)
    alert(result)
}
button.addEventListener('click', randomNumber)