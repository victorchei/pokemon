import getCardTemplate from "./card-template";

const testData = [
  {
    name: "bulbasaur",
    weight: 69,
    height: 7,
    abilities: [
      { ability: { name: "overgrow" } },
      { ability: { name: "chlorophyll" } },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
  },
  {
    name: "bulbasaur2",
    weight: 69,
    height: 7,
    abilities: [
      { ability: { name: "overgrow" } },
      { ability: { name: "chlorophyll" } },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
  },
];

const listContainer = document.getElementById("js-card-container");

let cardTemplate = "";

testData.forEach((card) => {
  cardTemplate += getCardTemplate(card);
});

listContainer.innerHTML = cardTemplate;
