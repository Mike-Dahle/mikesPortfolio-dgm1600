import { starships } from "../data/starships.js";
import { getNum } from "../utils/index.js"

let starshipList = document.querySelector("#starshipList");

starships.forEach((element) => {
    const personFig = document.createElement("figure");
    const personImg = document.createElement("img");
    let lastNum = getNum(element.url);
    personImg.src = `https://starwars-visualguide.com/assets/img/starships/${lastNum}.jpg`;
    const personCaption = document.createElement("figcaption");
    personCaption.textContent = element.name;
    console.log(personImg)

    personFig.appendChild(personImg);
    personFig.appendChild(personCaption);

    starshipList.appendChild(personFig);
  });



/*for (let i = 0; i < starships.length; i++) {
  let figure = document.createElement("figure");
  let figImg = document.createElement("img");
  figImg.src = `https://starwars-visualguide.com/assets/img/starships/${i + 1}.jpg`;
  let figCaption = document.createElement("figcaption");

  //const foundStarship = starships.find(starship => getNum(starship.url) === (i + 1).toString())

  figCaption.textContent = starships.name;

  figure.appendChild(figImg);
  figure.appendChild(figCaption);

  starshipList.appendChild(figure);
}*/