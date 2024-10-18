const p = document.querySelector("p");
const button = document.querySelector('button');
const img = document.querySelector("img");
const submit = document.querySelector('#submit');
const ul = document.querySelector('ul');

function show() {
    p.innerHTML = "<span> Hello Javascript </span>";
    p.style.color = "green";
    p.style.backgroundColor = "yellow";

    const span = document.querySelector('span');
    span.style.backgroundColor = 'blue'
}


function change() {
    p.innerHTML = "Bye Dimitris";
    p.style.color = "red";
}

function imgChange() {
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-u9s8G1pA5g8Gjao7ncmHadDdlVUxhhURg&s";
}

// function sizeChange(){
//     const input = document.querySelector('input');
//     imgChange();
//     img.style.width = input.value;
// }

// convert function to fat arrow function
// function sizeChange().{
//     img.style.width = "200px";
//}

//() => img.style.width = '200px';

// function submit(a, b){
//     return a + b;
// }

// (a, b) => a + b;

button.addEventListener('click', show);
p.addEventListener("mouseenter", change);
p.addEventListener("mouseleave", show);
img.addEventListener('click', imgChange);
submit.addEventListener('click', sizeChange);// 

ul.addEventListener('mouseenter', () => img.style.width = '200px');