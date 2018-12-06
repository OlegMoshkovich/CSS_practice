// document.querySelector('#focus').style.background = getRandomColor()

var array = ['Frontend engineering.', 'Product Design.',  'Balance.'];



array.forEach(function (el,index) {
  setTimeout(function () {
    document.querySelector('#focus').innerHTML = el;
    console.log(el);
  }, index * 2000);
})


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
