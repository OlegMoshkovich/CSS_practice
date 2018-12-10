// document.querySelector('#focus').style.background = getRandomColor()

var array = ['Frontend engineering.', 'Product Design.',  'Balance.'];

function disappear(){
  console.log('run')
  document.querySelector('.navigation__button-link2').style.display = 'none'

}
document.querySelector('.navigation__button-link3').addEventListener("click", function(){
  document.querySelector('.navigation__button-link3').style.display = 'none'
})
document.querySelector('.navigation__button-link1').addEventListener("click", function(){
  document.querySelector('.navigation__button-link1').style.display = 'none'
})
document.querySelector('.navigation__button-link').addEventListener("click", function(){
  document.querySelector('.navigation__button-link').style.display = 'none'
})
document.querySelector('.navigation__button-link4').addEventListener("click", function(){
  document.querySelector('.navigation__button-link4').style.display = 'none'
})
document.querySelector('.navigation__button-link4').addEventListener("click", function(){
  document.querySelector('.navigation__button-link4').style.display = 'none'
})
document.querySelector('.navigation__button-link5').addEventListener("click", function(){
  document.querySelector('.navigation__button-link5').style.display = 'none'
})

document.querySelector('.bg-video__content').defaultPlaybackRate = .5;

// array.forEach(function (el,index) {
//   setTimeout(function () {
//     document.querySelector('#focus').innerHTML = el;
//     console.log(el);
//   }, index * 2000);
// })

document.querySelector('.bg-video__content').defaultPlaybackRate = .5;
// document.querySelector('video').play()

//Closures

// function setColor(color){
//   var elColor = color;
//   console.log(elColor)
//   // console.log(elColor)
//   return function(){
//     if (elColor === 'green'){
//        document.querySelector('.box').style.color = 'green';
//     }else{
//        console.log('inner function'+elColor)
//        return document.querySelector('.box').style.color = 'red';
//     }
//   }
// }
//
// function execute(){
//   var color = document.querySelector('.textbox_id').value;
//   setColor(color)();
// }
//
// document.querySelector('.button').addEventListener("click", execute);
