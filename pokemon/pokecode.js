function getAPIData(url) {
  try {
    return fetch(url).then((data) => data.json());
  } catch (error) {
    console.error(error);
  }
}

function loadPokemon(limit = 151, offset = 0) {
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    async (data) => {
      for (const pokemon of data.results) {
        await getAPIData(pokemon.url).then((pokeData) =>
          populatePokeCards(pokeData)
        );
      }
    }
  );
}

// Function Populates the pokeGrid Class

const pokeGrid = document.querySelector(".pokeGrid");

const loadButton = document.querySelector(".loadPokemon");
loadButton.addEventListener("click", () => loadPokemon());

const newButton = document.querySelector(".newPokemon");
newButton.addEventListener("click", () => {
  let pokeName = prompt('What is the name of your Pokeomn?')
  let pokeHeight = prompt('What is the Height?')
  let pokeWeight = prompt('What is the Weight?')

  let newPokemon = new pokemon(pokeName, pokeHeight, pokeWeight)
});

class pokemon {
  constructor(name, height, weight) {
    this.name = name,
    this.height = height,
    this.weight = weight
  }
}

function populatePokeCards(singlePokemon) {
  const pokeScene = document.createElement("div");
  pokeScene.className = "scene";
  const pokeCard = document.createElement("div");
  pokeCard.className = "card";
  pokeCard.addEventListener("click", () => {
    pokeCard.classList.toggle("is-flipped");
  });

  const front = populateCardFront(singlePokemon);
  const back = populateCardBack(singlePokemon);

  pokeCard.appendChild(front);
  pokeCard.appendChild(back);
  pokeScene.appendChild(pokeCard);
  pokeGrid.appendChild(pokeScene);
}

function populateCardFront(pokemon) {
  const pokeFront = document.createElement("figure");
  const frontDiv = document.createElement("div");
  pokeFront.className = "cardFace front";

  if (
    pokemon.types[0].type.name === "grass" ||
    pokemon.types[0].type.name === "bug" ||
    pokemon.types[0].type.name === "poison"
  ) {
    pokeFront.style.backgroundImage =
      "url(../images/cards/grass-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "fire") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/fire-card.png), url(../images/forest-bg.jpeg)";
  } else if (
    pokemon.types[0].type.name === "water" ||
    pokemon.types[0].type.name === "ice"
  ) {
    pokeFront.style.backgroundImage =
      "url(../images/cards/water-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "electric") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/electric-card.png), url(../images/forest-bg.jpeg)";
  } else if (
    pokemon.types[0].type.name === "ground" ||
    pokemon.types[0].type.name === "rock" ||
    pokemon.types[0].type.name === "fighting"
  ) {
    pokeFront.style.backgroundImage =
      "url(../images/cards/fighting-card.png), url(../images/forest-bg.jpeg)";
  } else if (
    pokemon.types[0].type.name === "psychic" ||
    pokemon.types[0].type.name === "ghost"
  ) {
    pokeFront.style.backgroundImage =
      "url(../images/cards/psychic-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "dragon") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/dragon-card.png), url(../images/forest-bg.jpeg)";
  } else {
    pokeFront.style.backgroundImage =
      "url(../images/cards/poke-card.png), url(../images/forest-bg.jpeg)";
  }

  const pokeImg = document.createElement("img");
  const health = document.createElement("h3");

  health.textContent = `${pokemon.stats[0].base_stat} HP`;

  const spriteDiv = document.createElement("div");
  spriteDiv.classList.add("sprites");

  const sprite1 = document.createElement("img");
  sprite1.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  spriteDiv.appendChild(sprite1);
  const sprite2 = document.createElement("img");
  sprite2.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`;
  spriteDiv.appendChild(sprite2);
  const sprite3 = document.createElement("img");
  sprite3.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/${pokemon.id}.png`;
  spriteDiv.appendChild(sprite3);

  pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const pokeName = document.createElement("h2");

  if (pokemon.name === "nidoran-f" || pokemon.name === "nidoran-m") {
    pokeName.textContent = "Nidoran";
  } else {
    pokeName.textContent = pokemon.name;
  }

  frontDiv.appendChild(pokeName);

  frontDiv.appendChild(health);
  pokeFront.appendChild(frontDiv);
  pokeFront.appendChild(pokeImg);

  if (pokemon.moves.length > 2) {
    const move1 = document.createElement("p");
    const move2 = document.createElement("p");
    move1.textContent = pokemon.moves[0].move.name;
    move2.textContent = pokemon.moves[1].move.name;
    pokeFront.appendChild(move1);
    pokeFront.appendChild(move2);
  } else {
    const move1 = document.createElement("p");
    move1.textContent = pokemon.moves[0].move.name;
    pokeFront.appendChild(move1);
  }

  pokeFront.appendChild(spriteDiv);

  return pokeFront;
}

function populateCardBack(pokemon) {
  const pokeBack = document.createElement("div");
  pokeBack.className = "cardFace back";
  const label = document.createElement("h4");
  label.textContent = "Abilities";
  pokeBack.appendChild(label);
  const abilityList = document.createElement("ul");
  pokemon.abilities.forEach((abilityItem) => {
    let listItem = document.createElement("li");
    listItem.textContent = abilityItem.ability.name;
    abilityList.appendChild(listItem);
  });

  const stats = document.createElement("h4");
  const statDiv = document.createElement("ul");
  const attack = document.createElement("li");
  const defense = document.createElement("li");
  const specAttack = document.createElement("li");
  const specDef = document.createElement("li");
  const height = document.createElement("li");
  const speed = document.createElement("li");
  const weight = document.createElement("li");

  stats.textContent = "Stats";
  attack.textContent = `${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}`;
  statDiv.appendChild(attack);

  defense.textContent = `${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}`;
  statDiv.appendChild(defense);

  specAttack.textContent = `Special-Atk: ${pokemon.stats[3].base_stat}`;
  statDiv.appendChild(specAttack);

  specDef.textContent = `Special-Def: ${pokemon.stats[4].base_stat}`;
  statDiv.appendChild(specDef);

  speed.textContent = `${pokemon.stats[5].stat.name}: ${pokemon.stats[5].base_stat}`;
  statDiv.appendChild(speed);

  height.textContent = `Height: ${Math.round(pokemon.height * 3.937008)}"`;
  statDiv.appendChild(height);

  weight.textContent = `Weight: ${Math.round(pokemon.weight * 0.2204623)} lbs`;
  statDiv.appendChild(weight);

  pokeBack.appendChild(abilityList);
  pokeBack.appendChild(stats);
  pokeBack.appendChild(statDiv);

  return pokeBack;
}
