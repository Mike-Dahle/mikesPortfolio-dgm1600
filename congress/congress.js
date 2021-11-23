import { senators } from "../data/senators.js";
import { representatives } from "../data/representatives.js";
import { removeChildren } from "../utils/index.js";

const members = [...senators, ...representatives]; // very nice method for combining arrays

const senatorDiv = document.querySelector(".senators");
const seniorityHeading = document.querySelector(".seniority");
const weaselOrderedList = document.querySelector(".weaselList");

// All the page buttons here

const allButton = document.querySelector('#all')
const rButton = document.querySelector("#r");
const dButton = document.querySelector("#d");
const senButton = document.querySelector("#sen");
const repButton = document.querySelector("#rep");
const femButton = document.querySelector('#fem')
const maleButton = document.querySelector('#male')


allButton.addEventListener("click", () => chooseElement(simplifiedMembers()));
rButton.addEventListener("click", () => chooseElement(republicans));
dButton.addEventListener("click", () => chooseElement(democrats));
senButton.addEventListener("click", () => chooseElement(sen));
repButton.addEventListener("click", () => chooseElement(reps));
femButton.addEventListener("click", () => chooseElement(femaleCongress));
maleButton.addEventListener("click", () => chooseElement(maleCongress));

// this function handles the button inputs

function chooseElement(what, button) {
  removeChildren(senatorDiv);
  populateSenatorDiv(what);
}

function simplifiedMembers(chamberFilter) {
  const filteredArray = members.filter((member) =>
    chamberFilter ? member.short_title === chamberFilter : member
  );

  return filteredArray.map((senator) => {
    const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `;
    return {
      id: senator.id,
      name: `${senator.first_name}${middleName}${senator.last_name}`,
      party: senator.party,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
      gender: senator.gender,
      seniority: +senator.seniority,
      missedVotesPct: senator.missed_votes_pct,
      loyaltyPct: senator.votes_with_party_pct,
      chamber: senator.short_title,
    };
  });
}

populateSenatorDiv(simplifiedMembers());

function populateSenatorDiv(simpleSenators) {
  simpleSenators.forEach((senator) => {
    let senFigure = document.createElement("figure");
    let figImg = document.createElement("img");
    let figCaption = document.createElement("figcaption");

    figImg.src = senator.imgURL;

    if (senator.party === "R") {
      senFigure.style.border = "red 3px solid";
    } else if (senator.party === "D") {
      senFigure.style.border = "blue 3px solid";
    } else {
      senFigure.style.border = "purple 3px solid";
    }

    figCaption.textContent = senator.name;
    senFigure.appendChild(figImg);
    senFigure.appendChild(figCaption);
    senatorDiv.appendChild(senFigure);
  });
}

const filterSenators = (prop, value) =>
  simplifiedMembers().filter((senator) => senator[prop] === value);

// setting const to filters for use with buttons

const republicans = filterSenators("party", "R");
const femaleCongress = filterSenators("gender", "F");
const maleCongress = filterSenators("gender", "M");
const democrats = filterSenators("party", "D");
const reps = filterSenators("chamber", "Rep.");
const sen = filterSenators("chamber", "Sen.");

const mostSeniorMember = simplifiedMembers().reduce((acc, senator) => {
  return acc.seniority > senator.seniority ? acc : senator;
});

seniorityHeading.textContent = `${mostSeniorMember.name} is the most senior member of Congress with ${mostSeniorMember.seniority} years!`;

const mostLoyal = simplifiedMembers().reduce((acc, senator) => {
  if (senator.loyaltyPct === 100) {
    acc.push(senator);
  }
  return acc;
}, []);

const biggestWeasel = simplifiedMembers().reduce(
  (acc, senator) =>
    (acc.missedVotesPct || 0) > senator.missedVotesPct ? acc : senator,
  {}
);

const biggestWeasels = simplifiedMembers().filter(
  (senator) => senator.missedVotesPct >= 50
);

console.log(biggestWeasels);

biggestWeasels.forEach((weasel) => {
  let listItem = document.createElement("li");
  listItem.textContent = `${weasel.name} "${weasel.party}" With ${weasel.seniority} years in Congress.`;
  weaselOrderedList.appendChild(listItem);
});
