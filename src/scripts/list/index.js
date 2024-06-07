import fetchPokemonApi from "../pokemon/fetchPokemon";
import getListTemplate from "./list-template";

export function initLoadList() {
  const loadListButton = document.getElementById("load-list");
  const loadNextButton = document.getElementById("load-next");
  const loadPrevButton = document.getElementById("load-prev");

  loadListButton?.addEventListener("click", () => {
    listHandler(fetchPokemonApi.getAllItems);
  });

  loadNextButton?.addEventListener("click", () => {
    listHandler(fetchPokemonApi.getNext);
  });

  loadPrevButton?.addEventListener("click", () => {
    listHandler(fetchPokemonApi.getPrev);
  });

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
}
