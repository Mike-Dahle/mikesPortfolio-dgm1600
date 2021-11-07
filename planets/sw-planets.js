import { planets } from "../data/planets.js";
import { getNum } from "../utils/index.js"

let planetsList = document.querySelector("#planetsList");

for (let i = 0; i < planets.length; i++) {
  let figure = document.createElement("figure");
  let figImg = document.createElement("img");
  figImg.src = `https://starwars-visualguide.com/assets/img/planets/${i + 1}.jpg`;
  figImg.addEventListener("error", () => figImg.src = "../images/extraPlanet.jpeg");
  let figCaption = document.createElement("figcaption");

  const foundPlanet = planets.find(planet => getNum(planet.url) === (i + 1).toString())

  figCaption.textContent = foundPlanet.name;

  figure.appendChild(figImg);
  figure.appendChild(figCaption);

  planetsList.appendChild(figure);
}