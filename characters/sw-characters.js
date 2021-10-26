import { people } from "../data/people.js";

const main = document.querySelector("main");

people.forEach((element, index) => {
  const personFig = document.createElement("figure");
  const personImg = document.createElement("img");
  let lastNum = charNum(element.url);
  personImg.src = `https://starwars-visualguide.com/assets/img/characters/${lastNum}.jpg`;
  const personCaption = document.createElement("figcaption");
  personCaption.textContent = element.name;
  console.log(personImg)

  personFig.appendChild(personImg);
  personFig.appendChild(personCaption);

  main.appendChild(personFig);
});

function charNum(url) {
  let urlArray = url.split('/');
  let last = urlArray[urlArray.length - 2]
  return last
}