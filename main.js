 function firstFunction(){
one.classList.add('change');
two.classList.remove('change');
three.classList.remove('change');
four.classList.remove('change');
five.classList.remove('change');
localStorage.setItem('rank' , '1')


}
 function secondFunction(){
one.classList.remove('change');
two.classList.add('change');
three.classList.remove('change');
four.classList.remove('change');
five.classList.remove('change');
localStorage.setItem('rank' , '2')


}
 function thirdFunction(){
one.classList.remove('change');
two.classList.remove('change');
three.classList.add('change');
four.classList.remove('change');
five.classList.remove('change');
localStorage.setItem('rank' , '3')


}
 function fourthFunction(){
one.classList.remove('change');
two.classList.remove('change');
three.classList.remove('change');
four.classList.add('change');
five.classList.remove('change');
localStorage.setItem('rank' , '4')


}
 function fifthFunction(){
one.classList.remove('change');
two.classList.remove('change');
three.classList.remove('change');
four.classList.remove('change');
five.classList.add('change');
localStorage.setItem('rank' , '5')


}

let data = localStorage.getItem("rank");
response.innerHTML = data
  
//   bo = document.querySelector(".body2")
//   col =  localStorage.getItem('colors')
//   bo.classList.add(col)
//   localStorage.clear()