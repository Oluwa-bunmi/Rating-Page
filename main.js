function firstFunction() {
  // one.classList.add('change');
  // two.classList.remove('change');
  // three.classList.remove('change');
  // four.classList.remove('change');
  // five.classList.remove('change');
  document.getElementById("one").style.backgroundColor = "orange";
  localStorage.setItem("rank", "1");
}
function secondFunction() {
  // one.classList.remove('change');
  // two.classList.add('change');
  // three.classList.remove('change');
  // four.classList.remove('change');
  // five.classList.remove('change');
  document.getElementById("two").style.backgroundColor = "orange";
  localStorage.setItem("rank", "2");
}
function thirdFunction() {
  document.getElementById("three").style.backgroundColor = "orange";
  localStorage.setItem("rank", "3");
}
function fourthFunction() {
  document.getElementById("four").style.backgroundColor = "orange";
  localStorage.setItem("rank", "4");
}
function fifthFunction() {
  document.getElementById("five").style.backgroundColor = "orange";
  localStorage.setItem("rank", "5");
}

let data = localStorage.getItem("rank");
response.innerHTML = data;


