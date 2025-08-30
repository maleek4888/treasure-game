let level = document.getElementById('level');
let l = document.getElementById('lives');
let boxes = document.getElementById('boxes');
let result = document.getElementById('result');
let btn = document.getElementById('btn');
let winsound = document.getElementById('win')
let losesound = document.getElementById('lose')

let currentLevel = 1;
let treasureIndex = 0;
let gameOver = false;  
let lives = 3;

function generateBoxes(x) {
  btn.style.display = 'none';
  result.innerHTML = '';
  l.textContent = '❤️'.repeat(lives)
    boxes.innerHTML = '';
    gameOver = false;
    treasureIndex = Math.floor(Math.random()*x);
    for(let i =0; i<x; i++){
  let image = document.createElement('img');
  image.src ='files/box_closed.png';
  image.classList.add('image');
  image.dataset.index = i ;
  image.addEventListener('click', boxclick);
  boxes.appendChild(image);
  
    };
    level.textContent =`level = ${currentLevel}`;
}
function boxclick(event){
  if (gameOver) return;

  let b = event.currentTarget;
  let ind = b.dataset.index;

  if (treasureIndex == ind){
    b.src = 'files/win_box.png';
    gameOver = true;
    winsound.play()

    setTimeout(function () {
      currentLevel++;
      generateBoxes(currentLevel + 1);
      },2000);
  }else{
     b.src = 'files/lose_box.png';
     lives--;
     l.textContent = '❤️'.repeat(lives)
     losesound.play()
  }

  if (lives == 0) {
    result.textContent = 'you lost';
    result.style.color = 'red';
    gameOver = true;
    btn.style.display = '';
  }

}
btn.addEventListener('click', function (){
  currentLevel = 1;
  generateBoxes(2)
})


generateBoxes(2);