const btn1 = document.querySelector('button');
const btn2 = document.querySelector('#btn2');
const Img = document.querySelector('img');

btn1.onclick = function () {
  if (btn1.textContent === 'Black') {
    btn1.textContent = 'RED'
    btn1.setAttribute('style', 'color: red;')
  } else {
    btn1.textContent = 'Black'
    btn1.setAttribute('style', 'color: black;')
  }
}

function change () {
  if (btn2.value === 'BLACK') {
    btn2.value = 'RED'
    btn2.setAttribute('style', 'color: red;')
  } else {
    btn2.value = 'BLACK'
    btn2.setAttribute('style', 'color: black;')
  }
}

Img.addEventListener('mouseover', mouseOver);
Img.addEventListener('mouseout', mouseOut);


function mouseOver (){
  Img.setAttribute('src', 'https://p4.wallpaperbetter.com/wallpaper/524/229/137/abstract-moving-1920x1200-cool-wallpaper-preview.jpg');
}
function mouseOut (){
  Img.setAttribute('src', 'https://p4.wallpaperbetter.com/wallpaper/141/719/727/rainbow-pattern-colorful-lines-abstract-pictures-wallpaper-preview.jpg');
}