import getCardTemplate from "./card-template";
import fetchPokemonApi from "./fetchPokemon";

export function initPokemon() {
  const form = document.getElementById("form-pokemon");

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

  function updateCard(data) {
    const listContainer = document.getElementById("pokemon-card-container");
    listContainer.innerHTML = data ? getCardTemplate(data) : "Empty card";
  }
}
