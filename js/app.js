"use strict";
const Poseidon = [
  {
    name: "Okechukwu Clinton",
    image: "img/no-1.jpg",
    age: 24,
    track: "Frontend",
    complexion: "fair",
    learnt: "html, css, bootstrap, javascript",
    bestfood: "coconut rice and turkey",
    bestmovie: "vampire diaries",
  },
  {
    name: "Mubaraq Abuhasan",
    image: "img/no-2.jpg",
    age: 28,
    track: "Frontend",
    complexion: "fair",
    learnt: "html, css, bootstrap, javascript",
    bestfood: "French fries and chicken",
    bestmovie: "Iron Man",
  },
  {
    name: "Onumajuru Divinegift",
    image: "img/no-3.jpg",
    age: 25,
    track: "Frontend",
    complexion: "dark",
    learnt: "html, css, bootstrap, javascript, ",
    bestfood: "Rice and vegetable sauce",
    bestmovie: "Money heist",
  },
  {
    name: "Sheriff Muhammed",
    image: "img/no-4.jpg",
    age: 29,
    track: "Frontend",
    complexion: "dark",
    learnt: "html, css, bootstrap, javascript, ",
    bestfood: "yam and egg",
    bestmovie: "Power",
  },
  {
    name: "Jimoh Segun",
    image: "img/no-5.jpg",
    age: 25,
    track: "Frontend",
    complexion: "brown skin",
    learnt: "html, css, bootstrap, javascript, ",
    bestfood: "rice",
    bestmovie: "Baahubali",
  },
  {
    name: "Arinola Goodness",
    image: "img/no-6.jpg",
    age: 24,
    track: "Frontend",
    complexion: "chocolate",
    learnt: "html, css, bootstrap, javascript, ",
    bestfood: "Indomie and Egg",
    bestmovie: "Divergent",
  },
  {
    name: "Khadijah Muhammad",
    image: "img/no-7.jpg",
    age: 28,
    track: "Frontend",
    complexion: "brown skin",
    learnt: "html, css, bootstrap, javascript, ",
    bestfood: "Fufu and egusi",
    bestmovie: "Infinity wars:End game",
  },
];

let row = document.querySelector(".row");

for (let i = 0; i < Poseidon.length; i++) {
  let card = `  <div class="col-lg-4 col-md-6 col-sm-12 pb-5">
  <div class="card poseidon__card">
    <div class="img-container ratio-1x1 ratio">
      <img class="img-fluid border-3" src="${Poseidon[i].image}" />
    </div>
    <ul class="poseidon__list">
      <li class="ps-2 text-white name pt-2 fs-5">
        <i class="bi-tsunami"></i> ${Poseidon[i].name}
      </li>
      <li class="ps-2 text-white track">
        <i class="bi-tsunami"></i>${Poseidon[i].track}
      </li>
      <li class="ps-2 text-white track">
        <i class="bi-tsunami"></i>${Poseidon[i].age}
      </li>
      <li class="ps-2 text-white complexion">
        <i class="bi-tsunami"></i>${Poseidon[i].complexion}
      </li>
      <li class="ps-2 text-white learnt">
        <i class="bi-tsunami"></i>${Poseidon[i].learnt}
      </li>
      <li class="ps-2 text-white bestfood">
        <i class="bi-tsunami"></i>${Poseidon[i].bestfood}
      </li>
      <li class="ps-2 text-white bestmovie">
        <i class="bi-tsunami"></i>${Poseidon[i].bestmovie}
      </li>
    </ul>
    <button class="btn btn-primary alert">Click me</button>
  </div>
</div>`;

  row.innerHTML += card;
}

document.querySelectorAll(".alert").forEach((btn, i) => {
  btn.addEventListener("click", function () {
    alert(`${Poseidon[i].name}`);
  });
});
