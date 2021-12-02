function getAPIData(url) {
  try {
    return fetch(url).then((data) => data.json());
  } catch (error) {
    console.error(error);
  }
}

getAPIData("https://pokeapi.co/api/v2/pokemon?limit=151").then(async (data) => {
  for (const pokemon of data.results) {
    await getAPIData(pokemon.url).then((pokeData) =>
      populatePokeCards(pokeData)
    );
  }
});

const pokeGrid = document.querySelector(".pokeGrid");

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
  const cardFront = document.querySelector(".front");
  pokeFront.className = "cardFace front";

  //console.log(pokemon.types[0].type.name);
  //console.log(pokemon.moves[0].move.name)

  if (pokemon.types[0].type.name === "grass") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/grass-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "fire") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/fire-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "water") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/water-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "bug") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/grass-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "poison") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/grass-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "electric") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/electric-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "ground") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/fighting-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "fighting") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/fighting-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "psychic") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/psychic-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "rock") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/fighting-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "ghost") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/psychic-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "dragon") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/dragon-card.png), url(../images/forest-bg.jpeg)";
  } else if (pokemon.types[0].type.name === "ice") {
    pokeFront.style.backgroundImage =
      "url(../images/cards/water-card.png), url(../images/forest-bg.jpeg)";
  }  else {
    pokeFront.style.backgroundImage =
      "url(../images/cards/poke-card.png), url(../images/forest-bg.jpeg)";
  }

  const pokeImg = document.createElement("img");
  const pokeName = document.createElement("h2");
  const move1 = document.createElement('p')
  const move2 = document.createElement('p')

  
  pokeName.textContent = pokemon.name;
  move1.textContent = pokemon.moves[0].move.name
  move2.textContent = pokemon.moves[1].move.name
  
  pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  pokeFront.appendChild(pokeName);
  pokeFront.appendChild(pokeImg);
  pokeFront.appendChild(move1)
  pokeFront.appendChild(move2)

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
  pokeBack.appendChild(abilityList);
  return pokeBack;
}
