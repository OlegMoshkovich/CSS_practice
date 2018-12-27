// document.querySelector('#focus').style.background = getRandomColor()

// var array = ['Frontend engineering.', 'Product Design.',  'Balance.'];
console.log( "the current page is " + window.location.href);


window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  console.log(last_known_scroll_position)
  if (window.pageYOffset > 745 && document.documentElement.scrollTop < 5480) {
    document.getElementById("gs-nav").classList.remove('none');
  }else{
    document.getElementById("gs-nav").classList.add('none');
  }

  if (window.pageYOffset > 5480 && document.documentElement.scrollTop < 7840) {
    document.getElementById("hcs-nav").classList.remove('none');
  }else{
    document.getElementById("hcs-nav").classList.add('none');
  }

  if (window.pageYOffset > 7842 && document.documentElement.scrollTop < 10000) {
    document.getElementById("10-nav").classList.remove('none');
  }else{
    document.getElementById("10-nav").classList.add('none');
  }

  // console.log(last_known_scroll_position)

  // while (last_known_scroll_position < 10431){
  //   document.querySelector(".main-nav").style.display = "block";
  // // alert(last_known_scroll_position)
  // }
})

// document.querySelector('.navigation__button-link3').addEventListener("click", function(){
//   document.querySelector('.navigation__button-link3').style.display = 'none'
// })
// document.querySelector('.navigation__button-link2').addEventListener("click", function(){
//   document.querySelector('.navigation__button-link2').style.display = 'none'
// })
// document.querySelector('.navigation__button-link1').addEventListener("click", function(){
//   document.querySelector('.navigation__button-link1').style.display = 'none'
// })
// document.querySelector('.navigation__button-link').addEventListener("click", function(){
//   document.querySelector('.navigation__button-link').style.display = 'none'
// })
// document.querySelector('.navigation__button-link4').addEventListener("click", function(){
//   document.querySelector('.navigation__button-link4').style.display = 'none'
// })
//
// document.querySelector('.navigation__button-link5').addEventListener("click", function(){
//   document.querySelector('.navigation__button-link5').style.display = 'none'
// })

  // document.querySelector('.bg-video__content').defaultPlaybackRate = .5;

// array.forEach(function (el,index) {
//   setTimeout(function () {
//     document.querySelector('#focus').innerHTML = el;
//     console.log(el);
//   }, index * 2000);
// })

  // document.querySelector('.bg-video__content').defaultPlaybackRate = .5;
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


/////simulation of the asynchronous patter with the setTimeout
// function getRecipe(){
//
//   setTimeout(()=>{
//     const recipeID = [32,34,45];
//     console.log(recipeID);
//
//     setTimeout(id=>{
//       const recipe = {title:'Fresh tomato pasta', publisher:'jonas'}
//       console.log(`${id}--${recipe.title}`)
//
//       setTimeout(publisher => {
//         const recipe2 = {title:'italian pizza', publisher:'jonas'}
//         console.log(recipe)
//       },1500,recipe.publisher)
//
//     },1000, recipeID[2])
//
//   },2000)
// }
// getRecipe()



/////simulation of the asynchronous patter with the Promises --- Promises
// const getIDs = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve([32,34,45])
//   },2000)
// })
//
// const getRecipe = (recipeID) =>{
//   return new Promise((resolve, reject) =>{
//     setTimeout(ID=>{
//         const recipe = {title:'Fresh tomato pasta', publisher:'jonas'}
//         resolve(`${ID}:${recipe.title}`)
//     },2000,recipeID)
//   })
// }

// const relatedRecipe = publisher =>{
//   return new Promise((resolve, reject) =>{
//     setTimeout(pub =>{
//       const recipe = {title:'italian pizza', publisher:'jonas'}
//       resolve(`${pub}:${recipe.title}`)
//     },2000,publisher)
//   })
// }

// getIDs.then( IDs => {
//         console.log('logginf successfully obtained results',IDs)
//         return getRecipe(IDs[2])
//       })
//       .then(recipe =>{
//         console.log('from the second function --' +recipe)
//         return relatedRecipe('jonas')
//       })
//       .then(recipe =>{
//         console.log(recipe)
//       })
//       .catch( error =>{
//         console.log('the error of the promise',error)
//       })

// async function getRecipeAW(){
//   const IDs = await getIDs;
//   console.log(IDs);
//   const recipe = await getRecipe(IDs[2]);
//   console.log(recipe);
//   const related = await relatedRecipe('jonas')
//   console.log(related);
//   return recipe
// }
//
// getRecipeAW().then(result => console.log('loggin the result'+result));
