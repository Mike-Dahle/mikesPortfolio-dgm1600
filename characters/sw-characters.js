import { people } from "../data/people.js";
import { getNum } from "../utils/index.js";

const main = document.querySelector("main");

const mainHeader = document.createElement('header')
document.body.insertBefore(mainHeader, main)

const allButton = document.createElement('button')
allButton.textContent = 'All Characters'
mainHeader.appendChild(allButton)

allButton.addEventListener('click', () => populateDOM(people))

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)

maleButton.addEventListener('click', () => populateDOM(maleCharacters))

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)

otherButton.addEventListener('click', () => populateDOM(otherCharacters))

const maleCharacters = people.filter(person => person.gender === 'male')

const femaleCharacters = people.filter(person => person.gender === 'female')

const otherCharacters = people.filter(person => {
  if(person.gender === 'n/a' || person.gender === 'none' || person.gender === 'hermaphrodite') {
    return person
  }
})


function populateDOM(characters) {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  characters.forEach((element) => {
    const personFig = document.createElement("figure");
    const personImg = document.createElement("img");
    let lastNum = getNum(element.url);
    personImg.src = `https://starwars-visualguide.com/assets/img/characters/${lastNum}.jpg`;
    const personCaption = document.createElement("figcaption");
    personCaption.textContent = element.name;
    console.log(personImg)

    personFig.appendChild(personImg);
    personFig.appendChild(personCaption);

    main.appendChild(personFig);
  });
}