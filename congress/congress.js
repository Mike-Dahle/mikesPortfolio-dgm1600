import { senators } from "../data/senators.js";

const senatorsDiv = document.querySelector(".senators");

function simpifiedSenators(senatorArray) {
  return senatorArray.map((senator) => {
    const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `;
    return {
      id: senator.id,
      name: `${senator.first_name}${middleName}${senator.last_name}`,
      party: senator.party,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
      gender: senator.gender,
      seniority: senator.seniority,
      missedVotesPct: senator.missed_votes_pct,
      loyaltyPct: senator.votes_with_party_pct,
    };
  });
}

function populateSenatorDiv(simpleSenators) {
  simpleSenators.forEach((senator) => {
    let senFigure = document.createElement("figure");
    let senFigImg = document.createElement("img");
    let senFigCap = document.createElement("figcaption");

    senFigImg.src = senator.imgURL;

    if (senator.party === 'R') {
      senFigure.style.border = 'red 3px solid';
    } else if (senator.party === 'D') {
      senFigure.style.border = 'blue 3px solid';
    } else {
      senFigure.style.border = 'purple 3px solid';
    }

    senFigure.appendChild(senFigImg);

    senFigCap.textContent = senator.name;

    senFigure.appendChild(senFigCap);
    senatorsDiv.appendChild(senFigure);
  });
}

populateSenatorDiv(simpifiedSenators(senators));


const filterSenators = (prop, value) => {
  return simpifiedSenators(senators).filter(senator => senator[prop] === value)
}
  
const republicans = filterSenators('party', 'R')
const femaleSenators = filterSenators('gender', 'F')

console.log(republicans, femaleSenators)
