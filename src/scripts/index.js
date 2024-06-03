import getCardTemplate from "./card-template";
import fetchPokemonApi from "./fetchPokemon";
import getListTemplate from "./list-template";

const form = document.getElementById("form-pokemon");
const loadListButton = document.getElementById("load-list");
const loadNextButton = document.getElementById("load-next");
const loadPrevButton = document.getElementById("load-prev");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = form.querySelector("input[name='query']");
  const inputValue = input?.value;

  fetchPokemonApi
    .getById(inputValue)
    .then((data) => {
      updateCard(data);
    })
    .catch((error) => {
      console.log(error);
      updateCard();
    });
});

loadListButton?.addEventListener("click", () => {
  listHandler(fetchPokemonApi.getAllItems);
});

loadNextButton?.addEventListener("click", () => {
  listHandler(fetchPokemonApi.getNext);
});

loadPrevButton?.addEventListener("click", () => {
  listHandler(fetchPokemonApi.getPrev);
});

function updateCard(data) {
  const listContainer = document.getElementById("pokemon-card-container");
  listContainer.innerHTML = data ? getCardTemplate(data) : "Empty card";
}

function updateList(data) {
  const listContainer = document.getElementById("pokemon-list-container");
  const list = data ? getListTemplate(data) : "<li>Empty list</li>";
  listContainer.innerHTML = list;
}

function listHandler(func) {
  func()
    .then((data) => {
      updateList(data);
    })
    .catch((error) => {
      console.log(error);
      updateList();
    });
}
