import { senators } from "../data/senators.js";

const senatorsDiv = document.querySelector(".senators");

function populateSenatorDiv(senators) {
  senators.forEach((senators) => {
    let senFigure = document.createElement("figure");
    let senFigImg = document.createElement("img");
    let senFigCap = document.createElement("figcaption");

    if (senators.party === "D") {
      senFigImg.src =
        "https://en.wikipedia.org/wiki/Donkey#/media/File:Donkey_in_Clovelly,_North_Devon,_England.jpg";
    } else if (senators.party === "R") {
      senFigImg.src =
        "https://en.wikipedia.org/wiki/Elephant#/media/File:African_elephant_warning_raised_trunk.jpg";
    }
    senFigure.appendChild(senFigImg);

    senFigCap.textContent = (senators.first_name.concat(senators.last_name));

    senFigure.appendChild(senFigCap);
    senatorsDiv.appendChild(senFigure);
  });
}

populateSenatorDiv(senators);
